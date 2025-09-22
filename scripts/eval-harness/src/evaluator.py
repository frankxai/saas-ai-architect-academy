"""Command line entry point for the evaluation harness starter."""
from __future__ import annotations

import argparse
import json
from datetime import datetime
from pathlib import Path
from typing import Any, Dict

from . import utils
from .checks import hallucination, regression, toxicity, preparedness, realtime, perception


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Run agent evaluation harness")
    parser.add_argument("--config", required=True, help="Path to JSONL config (OpenAI Evals spec)")
    parser.add_argument("--run-id", help="Run identifier. Defaults to timestamp.")
    parser.add_argument("--baseline", help="Optional baseline metrics JSON for regression check.")
    parser.add_argument("--question-field", default="input", help="Field name for prompt/question text")
    parser.add_argument("--answer-field", default="ideal", help="Field name for reference answer")
    return parser.parse_args()


def run_eval(config_path: Path, run_id: str | None, question_field: str, answer_field: str, baseline_path: Path | None) -> None:
    dataset = utils.load_jsonl(config_path)
    if not dataset:
        raise ValueError(f"No records found in {config_path}")

    run_id = run_id or datetime.utcnow().strftime("%Y%m%d-%H%M%S")
    run_dir = utils.ensure_run_dir(Path(__file__).resolve().parents[1] / "runs", run_id)

    raw_results_path = run_dir / "raw_results.jsonl"
    metrics_path = run_dir / "metrics.json"

    toxicity_hits = 0
    hallucination_hits = 0
    preparedness_scores: list[float] = []
    preparedness_gap_counts: dict[str, int] = {}
    realtime_fresh = 0
    realtime_total = 0
    realtime_latency_total = 0.0
    realtime_latency_pass = 0
    perception_consistent = 0
    perception_total = 0
    perception_coverage_total = 0.0
    records = []

    for item in dataset:
        prompt = str(item.get(question_field, ""))
        reference_answer = str(item.get(answer_field, ""))

        # TODO: replace with live agent invocation.
        agent_response = reference_answer or "TODO: call agent"

        tox = toxicity.evaluate(agent_response)
        hall = hallucination.evaluate(prompt, agent_response)

        preparedness_spec = item.get("preparedness")
        preparedness_result = preparedness.evaluate(preparedness_spec) if preparedness_spec else None
        if preparedness_result is not None:
            preparedness_scores.append(preparedness_result.score)
            for gap in preparedness_result.gaps:
                preparedness_gap_counts[gap] = preparedness_gap_counts.get(gap, 0) + 1

        realtime_spec = item.get("realtime_probe")
        realtime_result = realtime.evaluate(realtime_spec) if realtime_spec else None
        if realtime_result is not None:
            realtime_total += 1
            realtime_latency_total += realtime_result.latency_ms
            if realtime_result.within_latency_sla:
                realtime_latency_pass += 1
            if realtime_result.fresh:
                realtime_fresh += 1

        perception_spec = item.get("perception")
        perception_result = perception.evaluate(perception_spec) if perception_spec else None
        if perception_result is not None:
            perception_total += 1
            perception_coverage_total += perception_result.coverage
            if perception_result.consistent:
                perception_consistent += 1

        toxicity_hits += int(tox.triggered)
        hallucination_hits += int(not hall.factual)

        record: Dict[str, Any] = {
            "prompt": prompt,
            "reference": reference_answer,
            "response": agent_response,
            "toxicity": tox.__dict__,
            "hallucination": hall.__dict__,
        }
        if preparedness_result is not None:
            record["preparedness"] = preparedness_result.__dict__
        if realtime_result is not None:
            record["realtime"] = realtime_result.__dict__
        if perception_result is not None:
            record["perception"] = perception_result.__dict__
        records.append(record)

    total = len(records)
    metrics: Dict[str, Any] = {
        "total_samples": total,
        "toxicity_trigger_rate": (toxicity_hits / total) if total else 0.0,
        "hallucination_failure_rate": (hallucination_hits / total) if total else 0.0,
    }

    if preparedness_scores:
        metrics["preparedness_average"] = sum(preparedness_scores) / len(preparedness_scores)
        metrics["preparedness_gap_counts"] = preparedness_gap_counts
    if realtime_total:
        metrics["realtime_fresh_rate"] = realtime_fresh / realtime_total
        metrics["realtime_average_latency_ms"] = realtime_latency_total / realtime_total
        metrics["realtime_latency_sla_pass_rate"] = realtime_latency_pass / realtime_total
    if perception_total:
        metrics["perception_consistency_rate"] = perception_consistent / perception_total
        metrics["perception_average_coverage"] = perception_coverage_total / perception_total

    if baseline_path is not None:
        regression_result = regression.evaluate(metrics, baseline_path)
        metrics["regression_passed"] = regression_result.passed
        metrics["regression_deltas"] = regression_result.deltas

    with raw_results_path.open("w", encoding="utf-8") as handle:
        for record in records:
            handle.write(json.dumps(record) + "\n")

    metrics_path.write_text(json.dumps(metrics, indent=2), encoding="utf-8")


def main() -> None:
    args = parse_args()
    baseline_path = Path(args.baseline) if args.baseline else None
    run_eval(
        config_path=Path(args.config),
        run_id=args.run_id,
        question_field=args.question_field,
        answer_field=args.answer_field,
        baseline_path=baseline_path,
    )


if __name__ == "__main__":
    main()


