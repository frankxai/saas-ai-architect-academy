"""Gemini 1.5 inspired perception consistency check."""
from __future__ import annotations

from dataclasses import dataclass
from typing import Any, Dict, List, Sequence


@dataclass
class PerceptionResult:
    """Structured perception score for multimodal outputs."""

    consistent: bool
    confidence: float
    notes: str
    coverage: float
    missing: List[str]
    hallucinated: List[str]


def _normalise(values: Sequence[str] | None) -> List[str]:
    if not values:
        return []
    return [value.strip().lower() for value in values if isinstance(value, str)]


def evaluate(observation: Dict[str, Any]) -> PerceptionResult:
    """Evaluate multimodal description consistency.

    Expected keys in *observation*:
        text: model description or summary (str)
        expected_tags / tags: ground-truth semantic tags (Iterable[str])
        predicted_tags: tags extracted from the model output (Iterable[str])
        required_modalities: optional list like ["image", "audio"]

    The function calculates tag coverage, hallucination rate, and returns
    a confidence score that can feed downstream dashboards.
    """

    description = (observation.get("text") or "").lower()
    expected: List[str] = _normalise(
        observation.get("expected_tags") or observation.get("tags")
    )
    predicted: List[str] = _normalise(observation.get("predicted_tags"))

    # When the caller does not provide predicted tags, fall back to
    # scanning the description for expected keywords.
    if not predicted and expected:
        predicted = [tag for tag in expected if tag in description]

    missing = [tag for tag in expected if tag not in predicted]
    hallucinated = [tag for tag in predicted if tag not in expected]

    expected_count = max(len(expected), 1)
    coverage = (len(expected) - len(missing)) / expected_count

    # Confidence favours high coverage and penalises hallucinations.
    confidence = max(0.0, min(1.0, coverage - 0.25 * len(hallucinated)))
    consistent = coverage >= 0.9 and not hallucinated

    required_modalities = _normalise(observation.get("required_modalities"))
    satisfied_modalities = [mod for mod in required_modalities if mod in description]
    if required_modalities and len(satisfied_modalities) != len(required_modalities):
        consistent = False
        confidence *= 0.8

    notes_parts: List[str] = []
    if expected:
        notes_parts.append(
            f"expected={expected}, predicted={predicted}, coverage={coverage:.2f}"
        )
    if missing:
        notes_parts.append(f"missing={missing}")
    if hallucinated:
        notes_parts.append(f"hallucinated={hallucinated}")
    if required_modalities:
        missing_modalities = sorted(set(required_modalities) - set(satisfied_modalities))
        if missing_modalities:
            notes_parts.append(f"modalities_missing={missing_modalities}")

    notes = "; ".join(notes_parts) if notes_parts else "No perception tags provided"

    return PerceptionResult(
        consistent=consistent,
        confidence=round(confidence, 2),
        notes=notes,
        coverage=round(coverage, 2),
        missing=missing,
        hallucinated=hallucinated,
    )
