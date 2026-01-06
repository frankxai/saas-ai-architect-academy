# Dashboard Agent Flow

Use this checklist when the dashboard orchestration agent spins up a new initiative. Every step maps to the SDLC and prototyping guides stored in C:/Users/Frank/AI Architect Academy/AI CoE Templates.

## Quick Launch
1. Clone the SaaS AI Architect Academy Vercel repository.
2. Import the latest PRD/problem brief from AI CoE Templates and place it in docs/evidence/prd/.
3. Register business goal, constraints, and success metrics in the PRD annex.
4. Generate per-agent XML/YAML playbooks (Builder, Critic, Coach, Archivist, Companion) and store them under docs/evidence/agents/.

## Execution Lane
- **Pattern Alignment**: Use the prototyping guide to select applicable pattern(s); log selections in the dashboard metadata.
- **SDLC March**:
  - Ideate: produce opportunity canvas and guardrail baseline.
  - Design: outline interface contracts and tool routing in the agent runbook.
  - Build: implement workflows guided by playbooks; satisfy Sprint 1 lab expectations.
  - Evaluate: run scripts/eval-harness according to docs/curriculum/labs/sprint1-agent-field-test.md.
  - Ship: package evidence for sponsor digest and update telemetry dashboards.
- **Telemetry Hooks**: capture Langfuse/OpenTelemetry traces when evaluations run; link IDs back to dashboard widgets.

## Artefact Tracker
| Artefact | Location | Owner |
| --- | --- | --- |
| PRD / Business Goal | docs/evidence/prd/<initiative>.md | Scout agent |
| Agent Playbooks | docs/evidence/agents/<agent>.yaml | Coach agent |
| Evaluation Outputs | scripts/eval-harness/runs/<run-id>/ | Critic agent |
| Field Test Journal | docs/evidence/field-tests/<initiative>-sprint1.md | Archivist agent |
| Sponsor Digest Notes | docs/evidence/digests/<date>.md | Companion agent |

## Reference Links
- AGENT.md (repo root) for master operating guide
- docs/curriculum/labs/sprint1-agent-field-test.md
- docs/curriculum/frontier-intelligence.md for weekly signal cadence
- C:/Users/Frank/AI Architect Academy/AI CoE Templates for SDLC walkthroughs and PRD forms
