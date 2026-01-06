"""Hallucination check placeholder.

Uses simple factual anchors that should be replaced with benchmark questions.
"""
from __future__ import annotations

from dataclasses import dataclass
from typing import Dict, Any


@dataclass
class HallucinationResult:
    factual: bool
    confidence: float
    notes: str


REFERENCE_FACTS = {
    "ceo_openai": "sam altman",
    "anthropic_headquarters": "san francisco",
}


def evaluate(question: str, answer: str) -> HallucinationResult:
    """Evaluate answer against reference facts.

    Replace with OpenAI Evals factbook or custom fact tables.
    """
    key = question.lower().replace(" ", "_")
    expected = REFERENCE_FACTS.get(key)
    if expected is None:
        return HallucinationResult(factual=False, confidence=0.0, notes="reference missing")
    factual = expected in answer.lower()
    confidence = 0.9 if factual else 0.1
    notes = "match" if factual else f"expected '{expected}'"
    return HallucinationResult(factual=factual, confidence=confidence, notes=notes)
