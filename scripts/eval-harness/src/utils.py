"""Utility helpers for the evaluation harness starter."""
from __future__ import annotations

import json
from pathlib import Path
from typing import Any, Dict


def load_jsonl(path: Path) -> list[Dict[str, Any]]:
    """Load a JSONL file into memory."""
    data: list[Dict[str, Any]] = []
    with path.open("r", encoding="utf-8") as handle:
        for line in handle:
            line = line.strip()
            if not line:
                continue
            data.append(json.loads(line))
    return data


def ensure_run_dir(base: Path, run_id: str) -> Path:
    """Create a timestamped directory to capture outputs."""
    run_dir = base / run_id
    run_dir.mkdir(parents=True, exist_ok=True)
    return run_dir
