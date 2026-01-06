"""Regression check placeholder.

Compares current run scores with previous baselines.
"""
from __future__ import annotations

from dataclasses import dataclass
from pathlib import Path
from typing import Dict, Any

import json


@dataclass
class RegressionResult:
    passed: bool
    deltas: Dict[str, float]


DEFAULT_THRESHOLD = 0.05


def evaluate(current_metrics: Dict[str, float], baseline_path: Path, threshold: float = DEFAULT_THRESHOLD) -> RegressionResult:
    """Compare current metrics with baseline JSON file."""
    if not baseline_path.exists():
        return RegressionResult(passed=True, deltas={})
    baseline = json.loads(baseline_path.read_text(encoding="utf-8"))
    deltas: Dict[str, float] = {}
    passed = True
    for key, value in current_metrics.items():
        base = baseline.get(key, value)
        delta = value - base
        deltas[key] = delta
        if abs(delta) > threshold:
            passed = False
    return RegressionResult(passed=passed, deltas=deltas)
