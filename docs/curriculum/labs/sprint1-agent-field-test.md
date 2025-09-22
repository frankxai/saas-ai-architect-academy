# Sprint 1 Agent Field Test Lab

## Goal
Validate an agentic workflow end-to-end using production-style evaluation harnesses and critique prompts drawn from OpenAI Evals and Anthropic Claude safety guidance. Learners ship a telemetry-backed field test journal, pass minimum guardrails, and capture red-team learnings for curriculum evidence lockers.

## Outcomes
- Operational agent runbook documenting task loop, tool routing, and human-in-the-loop checkpoints.
- Eval harness configuration referencing OpenAI Evals templates (o1 reasoning + GPT-4o multimodal suites) and Anthropic Claude 3.5 critique prompts.
- Field test journal with telemetry snapshots (Langfuse traces or equivalent) and mitigation plan for top three failure modes.

## Starting Checklist
- Clone this repository with your coding agent.
- Capture the product requirement or problem definition using the AI CoE PRD template (see C:/Users/Frank/AI Architect Academy/AI CoE Templates). Store the filled template in docs/evidence/prd/ as markdown or YAML.
- Define business goal, success metrics, and guardrail expectations in the same template and share with your agent stack.
- Review the SDLC playbook and prototyping guide from AI CoE Templates to align sprint steps before execution.

## References
- OpenAI Evals GitHub: `evals/registry/evals/` (o1 reasoned evaluation, GPT-4o multimodal reliability, JSON/tool-calling suites).
- Anthropic Claude 3.5 system card + Safety & Red-Teaming Guide (2024): artifact workflows, critique prompt library for harmful content, hallucination, and over-reliance risks.
- Google Gemini 1.5 Pro / Project Astra system notes: streaming perception, audio/video comprehension guardrails.
- LangGraph, AutoGen, and OpenAI Realtime quickstarts for multi-agent routing patterns.
- NIST AI RMF Measurement guidance and Microsoft Responsible AI Standard scorecard references.

## Lab Timeline (180 minutes)
1. **Pattern Brief (15 min)**: Review the filled PRD/business goal bundle, confirm guardrail baseline, and align on evaluation acceptance criteria.
2. **Agent Setup (45 min)**: Using the AI CoE prototyping pattern, instrument the agent stack with chosen framework, fill XML/YAML playbooks per agent, and implement tool grounding, caching, and abort paths.
3. **Evaluation Wiring (45 min)**: Configure harness based on the SDLC evaluation step:
   - Clone or reference `scripts/eval-harness/` starter.
   - Register at least one OpenAI Evals JSONL spec (o1 reasoning, GPT-4o multimodal reliability, or JSON mode conformance) and one custom Anthropic Claude 3.5 critique prompt.
   - Add realtime retrieval probes inspired by Grok-1.5/2 Search API latency and perception checks from Gemini 1.5 (audio/video) where relevant.
   - Define success thresholds (pass rate >= 0.9, jailbreak detection <= 0.05) and log them in the PRD annex.
4. **Field Run (30 min)**: Execute minimum 20 task trials, capturing telemetry traces and agent decisions. Trigger adversarial probes from Anthropic prompts.
5. **Red Team & Mitigation (30 min)**: Document at least three failure scenarios, mitigation experiments, and resulting impact on evaluation metrics.
6. **Debrief & Evidence (15 min)**: Publish journal entry with links to telemetry dashboard, evaluation results, and mitigation summary.

## Deliverables
| Artifact | Description | Storage |
| --- | --- | --- |
| Agent Runbook | YAML/Markdown describing roles, tools, prompts, guardrails. | `docs/evidence/agents/<team>-runbook.md` |
| Evaluation Config | Copy of JSON/py spec referencing OpenAI Evals and Anthropic prompts. | `scripts/eval-harness/runs/<date>/` |
| Field Test Journal | Narrative + metrics snapshot with linked telemetry. | `docs/evidence/field-tests/<team>-sprint1.md` |

## Evaluation Metrics
- **Reliability**: percentage of runs meeting acceptance criteria across benchmark suites.
- **Guardrail Coverage**: number of adversarial prompts detected/mitigated vs attempted.
- **Telemetry Quality**: completeness of traces (inputs, intermediate states, outputs, evaluations).
- **Reasoning Trace Quality**: structure and redaction of chain-of-thought / tool traces vs PRD acceptance criteria.
- **Reflection Depth**: clarity of mitigations tied to specific failure evidence and policy references.

## Assistant Integration
- **Scout**: Pull latest GPT-4o/o1 eval drops, Claude 3.5 system notes, Gemini 1.5 perception advisories, Grok-2 realtime updates, and policy changes before the lab; annotate new risks in the runbook.
- **Coach**: Provide inline critiques on prompt design, tool invocation boundaries, and safe fallbacks.
- **Critic**: Automate scoring via toxicity, hallucination, and regression suites; flag anomalies.
- **Archivist**: Store all evaluation outputs, trace IDs, and mitigation decisions in Evidence Locker.
- **Companion**: Monitor workload pacing and prompt learners if burnout signals emerge.

## Submission Checklist
- [ ] Runbook committed with updated guardrail table referencing Anthropic prompts.
- [ ] Evaluation harness results exported (`results.jsonl`) with pass/fail summary.
- [ ] Telemetry dashboard link with highlighted anomaly traces.
- [ ] Mitigation experiments logged with before/after metrics.
- [ ] Reflection note citing lab references and future improvement plan.



