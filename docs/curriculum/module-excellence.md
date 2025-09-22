# Module Excellence Playbook (2025)

This playbook ensures every learning module, sprint lab, and playbook reflects the latest practices shipping across GPT-4o and OpenAI o1/o1-mini, Anthropic Claude 3.5 Sonnet/Haiku, Google Gemini 1.5 Pro/Flash and Project Astra, xAI Grok-1.5/2, Meta Llama 3.1, Mistral Large/Nano, and Banana.dev serverless deployments.

## Excellence Goals
- **Spec-driven**: Every module starts from a PRD/mission brief mapped to the spec-driven backlog and live customer signals.
- **Omni-modal ready**: Instructions cover text, audio, vision, code, and telemetry inputs to mirror GPT-4o, Gemini 1.5, and Project Astra streaming surfaces.
- **Realtime & retrieval**: Incorporate Grok-1.5/2 style live search drills, Search API probes, and off-policy checks against fresh data.
- **Guardrail-first**: Claude 3.5 constitutional prompts, OpenAI Preparedness tiers, and Microsoft Responsible AI scorecards guide every deliverable.
- **Edge-capable**: Provide Llama 3.1 + Mistral Large/Nano deployment recipes (Banana.dev, Ollama, NVIDIA NIM) for constrained environments.

## Frontier Model Reference (Fall 2025)
| Release | What Matters for Modules | Curriculum Hooks |
| --- | --- | --- |
| GPT-4o / o1 | Multimodal reasoning, JSON mode, structured tool calling, reproducible traces | Update Sprint 1 lab eval configs, add o1 reasoning rubrics, surface JSON/response format guardrails |
| Claude 3.5 Sonnet / Haiku | Claude Artifacts, constitutional critique kits, tool-use throttling | Fold artifact co-creation templates into Coach prompts, extend guardrail tables in Operations track |
| Gemini 1.5 Pro / Flash & Project Astra | Streaming perception APIs, audio/video comprehension, Workspace integration | Add perception+telemetry drills, update architecture labs with Gemini API quota and latency planning |
| Grok-1.5 / Grok-2 | Real-time search, adversarial debate, X data freshness | Embed realtime retrieval scenarios, capture latency SLA metrics in evaluation harness |
| Llama 3.1 & Guard | Open weights, on-prem responsible tooling, Guard safety classifiers | Provide replication labs, align governance annex with Guard API and community evals |
| Mistral Large / Codestral / Nano | Specialized reasoning + on-device kits, serverless Banana.dev deployment | Add edge deployment appendix, extend Ops labs with cost/perf calculators for Mistral endpoints |

## Module Update Checklist
1. **Spec Alignment**
   - Link to relevant item in `docs/product/spec-driven-backlog.md`.
   - Attach PRD, success metrics, and guardrail assumptions.
2. **Lab References**
   - Cite latest system cards or engineering blogs (GPT-4o/o1, Claude 3.5, Gemini 1.5, Grok-2, Llama 3.1, Mistral Large).
   - Document updates in `docs/curriculum/changelog.md` with citations.
3. **Agent Playbook Sync**
   - Ensure AGENT.md and dashboard/AGENT.md instructions reference module-specific playbooks.
   - Include XML/YAML snippet for agent roles where applicable.
4. **Evaluation Instrumentation**
   - Add or update tests in `scripts/eval-harness/` with:
     - Model-graded rubrics (OpenAI preparedness, Claude constitutional)
     - Realtime retrieval probes (Grok-style)
     - Edge inference tests (Mistral Nano / Banana.dev)
5. **Evidence Locker Hooks**
   - Store outputs in `docs/evidence/` with metadata for human + agent consumption.
   - Capture telemetry IDs, guardrail coverage, and omni-modal artefacts.
6. **Storytelling & Amplification**
   - Prepare Claude Artifact templates, Gemini narrative prompts, and sponsor digest notes.

## Review Cadence
- **Weekly**: Cross-check against `docs/curriculum/research-development-plan.md` signals and freshly published model cards/system updates.
- **Bi-weekly**: Run module QA with Sprint 1 lab to validate harness outputs across GPT-4o, Claude 3.5, Gemini 1.5, Grok realtime probes, and Llama/Mistral edge runs.
- **Monthly**: Peer review with Mentor Ops using HELM multi-axis scoring plus OpenAI Preparedness + Claude constitutional metrics.
- **Quarterly**: Conduct frontier refresh comparing module deliverables with leading enterprise adoption notes and risk advisories.

## Reporting Template
```
Module: <name>
Spec Backlog ID: SD-XX
Last Updated: <date>
Signal Sources: <GPT-4o/o1 release note, Gemini 1.5 workspace, Claude 3.5 system card, Grok-2 safety note, etc>
Evaluation Suites: <toxicity, preparedness rubric, realtime retrieval>
Edge Notes: <Mistral Nano config, Banana.dev recipe>
Evidence Locker Links: <runbook, journal, telemetry>
Next Refresh Trigger: <based on research plan signals>
```

## Escalation Flow
- If a lab drops a safety-critical update, raise a priority ticket tagged `spec-critical` and update modules within 72 hours.
- For major capability releases (GPT-4o reasoning, OpenAI o1 structured workflows, Gemini 1.5 streaming perception, Grok-2 realtime updates), align cross-track module updates before the next cohort intake.
