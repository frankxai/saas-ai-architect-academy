# Module Excellence Command Center (2025)

> Equip every module, sprint lab, and playbook with the same frontier-grade standards your agents ship. Treat this page as the orchestration layer that keeps curriculum, evaluation, and evidence in lockstep.

## Quick Navigation
- [Excellence Pillars](#excellence-pillars)
- [Frontier Model Signals](#frontier-model-signals)
- [Activation Workflow](#activation-workflow)
- [Instrumentation & Evidence](#instrumentation--evidence)
- [Cadence & Accountability](#cadence--accountability)
- [Reporting & Escalation](#reporting--escalation)

### Cross-Track Shortcuts
- [Spec-Driven Backlog](../product/spec-driven-backlog.md)
- [Curriculum Changelog](changelog.md)
- [Sprint 1 Agent Field Test Lab](labs/sprint1-agent-field-test.md)
- [Evaluation Harness Starter](../../scripts/eval-harness/README.md)
- [Preparedness Check](../../scripts/eval-harness/src/checks/preparedness.py)
- [Realtime Probe Check](../../scripts/eval-harness/src/checks/realtime.py)
- [Perception Check](../../scripts/eval-harness/src/checks/perception.py)
- [Agent Operating Guide](../../AGENT.md)
- [Research & Development Plan](research-development-plan.md)
- [Frontier Intelligence Grid](frontier-intelligence.md)
- [UI & UX Principles](../ui-ux-principles.md)

## Excellence Pillars
- **Spec-driven & mission anchored** — Start every refresh from the [Spec-Driven Backlog](../product/spec-driven-backlog.md), attach the PRD stored at <code>C:/Users/Frank/AI Architect Academy/AI CoE Templates</code>, and surface customer signals in module intros.
- **Omni-modal & multi-surface** — Ensure lesson flows cover text, audio, vision, and telemetry touchpoints; mirror the multi-agent prompts in [Sprint 1 Agent Field Test Lab](labs/sprint1-agent-field-test.md).
- **Realtime, retrieval, & telemetry ready** — Wire in Grok-style live search drills and latency targets using the [Realtime Probe Check](../../scripts/eval-harness/src/checks/realtime.py); capture trace IDs for downstream analytics.
- **Guardrail-first & reviewable** — Apply OpenAI Preparedness and Claude constitutional standards via the [Preparedness Check](../../scripts/eval-harness/src/checks/preparedness.py); align learner instructions with [UI & UX Principles](../ui-ux-principles.md) for clear guardrail affordances.
- **Edge deployable & cost-aware** — Provide Llama 3.1 + Mistral deployment recipes, Banana.dev/Ollama notes, and governance annex updates so modules can ship to constrained environments without rework.

## Frontier Model Signals
| Release | What Matters Now | Module Hooks | Sync Touchpoints |
| --- | --- | --- | --- |
| GPT-4o / o1 | Multimodal reasoning, JSON mode, structured tool calling, reproducible traces | Update Sprint 1 lab configs, embed o1 reasoning rubrics, add JSON/response guardrails | [Evaluation Harness Starter](../../scripts/eval-harness/README.md), [Preparedness Check](../../scripts/eval-harness/src/checks/preparedness.py) |
| Claude 3.5 Sonnet / Haiku | Claude Artifacts, constitutional critique kits, tool-use throttling | Fold artifact templates into Coach prompts, extend guardrail tables in Ops track | [Sprint 1 Lab](labs/sprint1-agent-field-test.md), [Agent Operating Guide](../../AGENT.md) |
| Gemini 1.5 Pro / Flash & Project Astra | Streaming perception APIs, audio/video comprehension, Workspace integration | Add perception+telemetry drills, model quota planning, and Workspace UX notes | [Perception Check](../../scripts/eval-harness/src/checks/perception.py), [UI & UX Principles](../ui-ux-principles.md) |
| Grok-1.5 / Grok-2 | Real-time search, adversarial debate, X data freshness | Embed realtime retrieval scenarios and latency SLA trackers with debate prompts | [Realtime Probe Check](../../scripts/eval-harness/src/checks/realtime.py), [Frontier Intelligence Grid](frontier-intelligence.md) |
| Llama 3.1 & Guard | Open weights, on-prem responsible tooling, Guard safety classifiers | Deliver replication labs and governance annex aligned with Guard API | [Spec-Driven Backlog](../product/spec-driven-backlog.md), [Research & Development Plan](research-development-plan.md) |
| Mistral Large / Codestral / Nano | Specialized reasoning + on-device kits, Banana.dev serverless deployment | Extend Ops labs with cost/perf calculators and edge deployment appendix | [Curriculum Changelog](changelog.md), [Sprint 1 Lab](labs/sprint1-agent-field-test.md) |

## Activation Workflow
1. **Signal intake & framing** — Pull weekly triggers from the [Frontier Intelligence Grid](frontier-intelligence.md), log impact drivers in the [Curriculum Changelog](changelog.md), and tag backlog items in the [Spec-Driven Backlog](../product/spec-driven-backlog.md).
2. **Spec alignment** — Attach the PRD, success metrics, and guardrail assumptions to the module record; confirm customer/problem fit with the latest evidence locker entries.
3. **Lab & playbook sync** — Update cross-track guidance in [Sprint 1 Agent Field Test Lab](labs/sprint1-agent-field-test.md) and ensure [AGENT.md](../../AGENT.md) reflects revised agent roles, XML/YAML playbooks, and prompt packs.
4. **Evaluation instrumentation** — Register new suites inside <code>scripts/eval-harness/</code> and extend checks (preparedness, realtime, perception, edge) to mirror the updated module experience.
5. **Evidence capture & storytelling** — Store artefacts under <code>docs/evidence/</code> (runbooks, telemetry journals, sponsor digests) and reference them inside module summaries for instant traceability.
6. **Experience polish** — Audit learner flows against [UI & UX Principles](../ui-ux-principles.md), ensure CTA buttons, accordions, and navigation mirrors the updated module architecture, and add links back to labs, tools, and evidence.

## Instrumentation & Evidence
### Evaluation Harness Integration
- Add or refine suites in <code>scripts/eval-harness/</code> using model-graded rubrics (OpenAI Preparedness, Claude constitutional) and Grok-inspired realtime probes.
- Mirror telemetry IDs and latency/cost metrics inside module runbooks so mentors and agents can compare cohorts.
- Version evaluation configs and push summaries (<code>runs/&lt;date&gt;/</code>) so they can be cited in changelog entries.

### Evidence Locker & Narrative Assets
| Artefact | Purpose | Location |
| --- | --- | --- |
| Module runbook | Roles, prompts, guardrails, on-call plan | <code>docs/evidence/agents/&lt;module&gt;-runbook.md</code> |
| Evaluation digest | Pass/fail summary, anomalies, remediation notes | <code>scripts/eval-harness/runs/&lt;date&gt;/summary.md</code> |
| Field test journal | Telemetry snapshots, mitigation experiments | <code>docs/evidence/field-tests/&lt;module&gt;-journal.md</code> |
| Sponsor digest | Business framing, ROI snapshot, next refresh trigger | <code>docs/evidence/digests/&lt;module&gt;-sponsor.md</code> |

- Use Claude Artifact templates and Gemini narrative prompts to deliver narrative-rich updates; link outputs alongside the raw evidence.
- Embed telemetry permalinks (Langfuse, OpenTelemetry) wherever possible to maintain end-to-end traceability.

## Cadence & Accountability
- **Weekly** — Cross-check modules against the [Research & Development Plan](research-development-plan.md) and newly published model/system updates; capture actions in the changelog.
- **Bi-weekly** — Run module QA using the [Sprint 1 Agent Field Test Lab](labs/sprint1-agent-field-test.md) harness across GPT-4o, Claude 3.5, Gemini 1.5, Grok realtime probes, and Llama/Mistral edge runs.
- **Monthly** — Pair with Mentor Ops to score modules against HELM multi-axis metrics plus OpenAI Preparedness and Claude constitutional rubrics; document findings in Evidence Locker journals.
- **Quarterly** — Align module refreshes with enterprise adoption notes, risk advisories, and backlog priorities; update cross-track links and sponsor digests accordingly.

## Reporting & Escalation
### Module Reporting Template

    Module: <name>
    Spec Backlog ID: SD-XX
    Last Updated: <date>
    Signal Sources: <Frontier Intelligence entry, system card, policy note>
    Evaluation Suites: <toxicity, preparedness, realtime retrieval>
    Edge Notes: <Mistral Nano recipe, Banana.dev config>
    Evidence Locker Links: <runbook, journal, telemetry>
    Next Refresh Trigger: <research plan signal or policy release>

- Publish completed templates to <code>docs/evidence/digests/</code> and reference them from the module overview page for fast sponsor access.
- Reflect updates in the [Curriculum Changelog](changelog.md) with citations and link back to evaluation runs.

### Escalation Flow
- Raise a <code>spec-critical</code> ticket when safety-critical updates land; refresh affected modules within 72 hours and notify mentors/assistants.
- For major capability releases (GPT-4o reasoning, OpenAI o1 structured workflows, Gemini 1.5 streaming perception, Grok-2 realtime updates), coordinate cross-track updates before the next cohort intake and confirm completion in Evidence Locker logs.
- Escalate UX or navigation regressions via the UI/UX review queue so [UI & UX Principles](../ui-ux-principles.md) remain intact across module surfaces.
