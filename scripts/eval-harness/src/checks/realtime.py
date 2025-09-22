"""Realtime retrieval probe enriched for Grok-style freshness."""
from __future__ import annotations

from dataclasses import dataclass
from datetime import datetime, timezone
from typing import Any, Dict, Optional


@dataclass
class RealtimeProbeResult:
    """Capture freshness and latency characteristics for realtime probes."""

    fresh: bool
    latency_ms: float
    notes: str
    staleness_ms: float
    within_latency_sla: bool


ISO_FORMATS = ("%Y-%m-%dT%H:%M:%S.%fZ", "%Y-%m-%dT%H:%M:%SZ", "%Y-%m-%dT%H:%M:%S.%f%z", "%Y-%m-%dT%H:%M:%S%z")


def _parse_iso(value: Optional[str]) -> datetime:
    if not value:
        return datetime.now(timezone.utc)
    for fmt in ISO_FORMATS:
        try:
            return datetime.strptime(value, fmt)
        except ValueError:
            continue
    # Fallback: let datetime parse best effort
    return datetime.fromisoformat(value.replace('Z', '+00:00'))


def evaluate(probe: Dict[str, Any]) -> RealtimeProbeResult:
    """Check whether the response cites content newer than the cutoff and meets SLAs."""

    fetched_at = _parse_iso(probe.get("fetched_at"))
    cutoff = _parse_iso(probe.get("cutoff"))
    mentioned_timestamp = _parse_iso(probe.get("mentioned_timestamp"))

    latency = float(probe.get("latency_ms", 0.0))
    latency_sla = float(probe.get("latency_sla_ms", 2000.0))
    freshness_sla = float(probe.get("freshness_sla_ms", 60000.0))

    staleness_ms = max(0.0, (fetched_at - mentioned_timestamp).total_seconds() * 1000.0)
    within_latency = latency <= latency_sla
    fresh = mentioned_timestamp >= cutoff and staleness_ms <= freshness_sla

    notes = (
        f"mentioned={mentioned_timestamp.isoformat()} cutoff={cutoff.isoformat()} "
        f"staleness_ms={staleness_ms:.0f} latency_ms={latency:.0f} "
        f"latency_sla={latency_sla:.0f} freshness_sla={freshness_sla:.0f}"
    )

    if not within_latency:
        notes += "; latency SLA breached"
    if staleness_ms > freshness_sla:
        notes += "; freshness SLA breached"

    return RealtimeProbeResult(
        fresh=fresh,
        latency_ms=latency,
        notes=notes,
        staleness_ms=staleness_ms,
        within_latency_sla=within_latency,
    )
