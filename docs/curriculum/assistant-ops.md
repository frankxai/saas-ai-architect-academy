# Assistant Operations Playbook

Operational standards for the AI Architect assistant constellation (Scout, Coach, Critic, Archivist, Companion) ensuring safe, current, and high-impact learner support.

## Service-Level Objectives
| Agent | SLO Focus | Target |
| --- | --- | --- |
| Scout | Research freshness, citation accuracy | Refresh critical corpora within 24h of flagged change; >=95% citation accuracy |
| Coach | Response latency, guidance quality | Median response <2s, satisfaction ≥4.6/5 |
| Critic | Guardrail enforcement, anomaly detection | Detect 98% evaluation anomalies, zero unlogged high-severity incidents |
| Archivist | Evidence completeness, schema compliance | 100% deliverables tagged, schema drift <1% |
| Companion | Personalization, wellness signals | On-time nudges ≥90%, burnout false positive rate <5% |

## Core Pipelines
1. **Research Ingestion** (Scout)
   - Sources: arXiv, NIST AI RMF updates, EU AI Act register, vendor changelogs, open-source repos.
   - Process: Diff detection → semantic clustering → priority scoring → micro-brief generation → pushes to knowledge graph.
   - Tooling: LangGraph orchestration, OpenRouter models, Pinecone/pgvector indexes.

2. **Learning Guidance** (Coach)
   - Inputs: Module metadata, learner telemetry, micro-path templates.
   - Process: Plan generation → step-level prompts → real-time code/data assistance → reflection prompts.
   - Safeguards: prompt policy filters, unambiguous disclaimers, escalation to mentor when risk threshold triggered.

3. **Evaluation & Governance** (Critic)
   - Inputs: Deliverable artifacts, evaluation metrics, control checklists.
   - Process: Automated scoring → heuristic red teaming → governance checklist validation → anomaly flagging.
   - Escalation: Severity tiers (Critical 4h response, High 12h, Medium 24h, Low backlog).

4. **Evidence Management** (Archivist)
   - Inputs: deliverable PRs, dashboards, meeting transcripts, sponsor feedback.
   - Process: Schema tagging → evidence locker commit → credential manifest update → knowledge graph link.

5. **Learner Support & Wellness** (Companion)
   - Signals: workload hours, sentiment surveys, nudges accepted/ignored, rest days taken.
   - Responses: micro-path adjustments, rest prompts, escalation to mentor for sustained risk.

## Guardrails & Safety Protocols
- Policy-as-code rules enforce data residency, PII redaction, and confidentiality tags before agent access.
- Model governance: open-source LLM evaluation monthly, fallback to enterprise-licensed models when confidentiality requires.
- Incident response: runbooks per agent, cross-team drill quarterly.
- Ethical oversight: ethics board reviews agent prompts, decisions, and telemetry for bias or over-automation.

## Observability & Telemetry
- Metrics: latency, accuracy, escalation rate, satisfaction, research freshness, credential issuance cycle time.
- Traces: conversation IDs, tool calls, guardrail evaluations stored in Langfuse with redaction.
- Dashboards: Cohort cockpit, assistant ops board, governance console.
- Alerts: Slack/Teams integration with severity routing and on-call rotations.

## Continuous Improvement Cadence
- Weekly ops review: analyze incidents, false positives, success stories.
- Monthly model eval: update prompt templates, evaluate new models, refresh guardrail scenarios.
- Quarterly innovation spike: experiment with new agent capabilities (e.g., synthetic scenario generator, multi-agent debate) under sandboxes.

## Deployment Practices
- Canary releases for prompt updates and reasoning policies with telemetry gating.
- Automated tests: prompt regression, policy compliance, persona regression, evaluation accuracy.
- Configuration management via GitOps; secrets rotated per platform policy.

## Human-in-the-Loop Protocols
- Mentor override capability for micro-path suggestions, evaluation outcomes, credential decisions.
- Transparent logs accessible to learners detailing agent decisions and citations.
- Feedback channel for learners to flag hallucinations, outdated guidance, or tone issues.

## Roadmap Enhancements (Fall 2025)
1. Launch `Assistant Ops Console` for real-time oversight, scenario playback, and prompt tuning.
2. Integrate voice modality for pulse briefings with transcription + citations.
3. Release open evaluation harness for external partners to audit agent performance.
4. Deploy wellness sentiment model with privacy-preserving aggregation.
5. Add policy auto-summarizer translating regulations into control triggers.

