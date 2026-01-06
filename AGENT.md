# Agent Operating Guide

This repository is designed so any coding agent can execute the end-to-end delivery flow without extra setup. Follow the sequence below after cloning the repo.

## Order of Operations
1. **Intake the PRD or business goal**
   - Use the AI CoE PRD template located at C:/Users/Frank/AI Architect Academy/AI CoE Templates.
   - Commit the filled template to docs/evidence/prd/ as markdown or YAML.
2. **Select the delivery pattern**
   - Reference the prototyping and SDLC guides in the AI CoE Templates folder.
   - Capture chosen pattern rationale inside the PRD annex.
3. **Author agent playbooks**
   - Create XML or YAML instruction files per agent persona (Builder, Critic, Coach, etc.).
   - Keep them alongside the PRD or within docs/evidence/agents/.
4. **Run Sprint 1 Agent Field Test**
   - Follow docs/curriculum/labs/sprint1-agent-field-test.md for the evaluation workflow and required artefacts.
   - Use scripts/eval-harness to execute toxicity, hallucination, and regression checks.
5. **Progress through SDLC checkpoints**
   - Apply the SDLC steps from AI CoE Templates (ideation, design, build, evaluate, ship).
   - Update Evidence Locker assets (runbooks, field test journal, evaluation outputs) after each checkpoint.
6. **Report outcomes**
   - Maintain telemetry summaries and guardrail status in docs/evidence/field-tests/.
   - Link final artefacts back into the PRD and sponsor digest.

## Required Artefacts
- PRD/business goal template (AI CoE format).
- Agent XML/YAML playbooks with roles, tools, and guardrails.
- Evaluation outputs from scripts/eval-harness (stored in scripts/eval-harness/runs/).
- Field test journal summarizing metrics, mitigations, and next steps.

## Helpful References
- docs/curriculum/labs/sprint1-agent-field-test.md
- docs/curriculum/frontier-intelligence.md (weekly digest cadence)
- scripts/eval-harness/README.md
- C:/Users/Frank/AI Architect Academy/AI CoE Templates (core SDLC and prototyping guides)
