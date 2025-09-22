# Evaluation Harness Starter

Bootstrap harness for Sprint 1 agent field testing. The goal is to reuse OpenAI Evals specs (GPT-4o multimodal, o1 reasoning, JSON/tool-calling), layer Anthropic Claude 3.5 critique prompts, and capture telemetry for toxicity, hallucination, realtime, preparedness, and regression checks.

## Directory Layout
```
.
|-- configs/             # JSON/JSONL specs pulled or adapted from OpenAI Evals
|-- prompts/             # Anthropic critique prompts grouped by risk focus
|-- runs/                # Evaluation outputs (timestamped)
|-- src/
|   |-- evaluator.py     # Orchestrates model calls + scoring hooks
|   |-- checks/
|       |-- toxicity.py
|       |-- hallucination.py
|       |-- regression.py
|   `-- utils.py
`-- README.md
```

## Quick Start
1. Create and activate a Python 3.11+ environment.
2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Configure API keys via environment variables (`OPENAI_API_KEY`, `ANTHROPIC_API_KEY`, optional `LANGFUSE_SECRET`).
4. Drop OpenAI Evals JSONL specs into `configs/` (for example `gpt-4o.multimodal.jsonl`, `o1.reasoning.jsonl`, `toxicity.binary.jsonl`).
5. Edit `prompts/claude_critique.md` with Anthropic-style critique instructions tailored to your agent (capture artifact review + constitutional guardrails).
6. Run the harness (add optional realtime/perception/preparedness checks):
   ```bash
   python -m src.evaluator --config configs/o1.reasoning.jsonl --run-id sprint1-agent-a --checks preparedness realtime perception
   ```

## Evaluation Workflow
- **OpenAI Evals specs** provide canonical eval structure and automatic scoring callbacks (toxicity, o1 reasoning, GPT-4o multimodal reliability, JSON/tool-calling conformance).
- **Anthropic Claude 3.5 critique prompts** inject adversarial and reflective questions with constitutional scoring and artifact review.
- **Grok-1.5/2 realtime probes** capture latency, freshness, and retrieval quality for live data scenarios.
- **Gemini 1.5 perception checks** validate multimodal consistency when images/audio tags are involved.
- **Telemetry hooks** emit Langfuse/OpenTelemetry traces if `LANGFUSE_*` env vars are set and label runs for Evidence Locker storage.
- **Results** are written to `runs/<timestamp>/` with both raw responses and aggregated metrics (JSON + markdown digest).

## Model Profiles
- **GPT-4o / o1**: use JSON mode, response format validators, and reasoning trace capture.
- **Claude 3.5 Sonnet / Haiku**: reference artifact outputs and critique loops; throttle tool calls per Anthropic guidance.
- **Gemini 1.5 perception checks** validate multimodal consistency when images/audio tags are involved.
- **Grok-1.5/2 realtime probes** capture latency, freshness, and retrieval quality for live data scenarios.
- **Llama 3.1 / Mistral Large**: plug in self-hosted endpoints; track latency + cost via ops telemetry.

## Extending Checks
- Add new files under `src/checks/` and register them in `src/evaluator.py`.
- Update `configs/` with blended suites (for example combining o1 reasoning + preparedness + jailbreak probes).
- Publish summary markdown to `docs/evidence/field-tests/` for reporting and push telemetry IDs to Evidence Locker.

## References
- OpenAI Evals documentation (https://github.com/openai/evals)
- Anthropic Responsible Scaling Policy & Safety Guides (https://www.anthropic.com)
- Google DeepMind Gemini 1.5 Pro system card (for multi-modal evaluation prompts)
- Langfuse evaluation recipes (https://docs.langfuse.com)

