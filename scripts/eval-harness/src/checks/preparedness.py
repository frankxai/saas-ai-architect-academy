"""Preparedness check aligned with OpenAI and Microsoft scorecards."""
from __future__ import annotations

from dataclasses import dataclass
from typing import Any, Dict, Iterable, List

PREPAREDNESS_LEVELS = {"low": 0.2, "medium": 0.5, "high": 0.8}


@dataclass
class PreparednessResult:
    """Preparedness tier with supporting evidence."""

    tier: str
    score: float
    notes: str
    gaps: List[str]


def _normalise_list(values: Iterable[str] | None) -> List[str]:
    if not values:
        return []
    return [value.strip() for value in values if isinstance(value, str) and value.strip()]


def evaluate(capability_report: Dict[str, Any]) -> PreparednessResult:
    """Score the agent capability report.

    Expected keys:
        capability: str
        risk: str (low/medium/high)
        mitigation: str or list of str
        controls: list of control IDs or descriptions
        evidence: list of artefacts (eval run IDs, system cards)
        residual_risk: str
        impact: str (low/medium/high)
    """

    capability = capability_report.get("capability", "unknown")
    risk = str(capability_report.get("risk", "medium")).lower()
    impact = str(capability_report.get("impact", "medium")).lower()
    residual_risk = str(capability_report.get("residual_risk", risk)).lower()

    mitigations = capability_report.get("mitigation")
    if isinstance(mitigations, str):
        mitigations = [mitigations]
    mitigations = _normalise_list(mitigations)

    controls = _normalise_list(capability_report.get("controls"))
    evidence = _normalise_list(capability_report.get("evidence"))

    score = PREPAREDNESS_LEVELS.get(risk, 0.5)

    # Mitigations and controls improve the score.
    if mitigations:
        score += 0.1 * min(len(mitigations), 3)
    if controls:
        score += 0.1 * min(len(controls), 3)
    if evidence:
        score += 0.1

    # Residual risk and high impact reduce the score.
    if residual_risk == "high" or impact == "high":
        score -= 0.2
    elif residual_risk == "medium":
        score -= 0.05

    score = max(0.0, min(1.0, score))

    if score >= 0.75:
        tier = "high"
    elif score >= 0.45:
        tier = "medium"
    else:
        tier = "low"

    gaps: List[str] = []
    if not mitigations:
        gaps.append("mitigation")
    if not controls:
        gaps.append("controls")
    if not evidence:
        gaps.append("evidence")
    if residual_risk == "high":
        gaps.append("residual_risk_high")

    notes_parts = [f"capability={capability}", f"risk={risk}", f"impact={impact}"]
    if mitigations:
        notes_parts.append(f"mitigations={mitigations}")
    if controls:
        notes_parts.append(f"controls={controls}")
    if evidence:
        notes_parts.append(f"evidence={evidence}")
    notes_parts.append(f"residual_risk={residual_risk}")

    notes = "; ".join(notes_parts)

    return PreparednessResult(
        tier=tier,
        score=round(score, 2),
        notes=notes,
        gaps=gaps,
    )
