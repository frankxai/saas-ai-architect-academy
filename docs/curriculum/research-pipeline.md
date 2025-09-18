# Research-to-Curriculum Pipeline

Operationalizes how frontier research, regulatory updates, and partner insights flow into modules, micro-paths, and assistant guidance.

## Intake Channels
| Channel | Examples | Cadence | Owner |
| --- | --- | --- | --- |
| Academic & Lab Feeds | arXiv cs.AI/cs.LG, Stanford CRFM, MIT, Oxford, Toyota, DeepMind | Daily | Scout agent + research guild |
| Regulatory & Policy | EU AI Act register, US EO advisory, Singapore AI Verify, NIST, ISO | Daily | Governance council |
| Vendor & OSS Updates | OpenAI, Anthropic, Cohere, HuggingFace, LangChain, Qdrant | Daily | Tooling squad |
| Industry Insights | Partner case studies, venture studios, enterprise telemetry | Weekly | Industry councils |
| Community Contributions | Alumni submissions, open-source modules, mentor playbooks | Weekly | Curriculum steering committee |

## Processing Steps
1. **Signal Capture**: Scout tags signals with domain, impact, freshness score.
2. **Triage & Prioritization**: council reviews against risk and opportunity matrices.
3. **Curriculum Impact Analysis**: map to modules, micro-paths, evaluation metrics, credentials.
4. **Action Tickets**: create backlog items (module update, new lab, intelligence brief, assistant prompt update).
5. **Implementation & QA**: module authoring, evaluation run, governance review.
6. **Communication**: changelog entry, pulse briefing, sponsor update, assistant prompt diff.

## Tooling
- Notion/Jira backlog integration with tags (`industry`, `risk-level`, `urgency`).
- Knowledge graph linking signals to modules, evidence, credentials.
- Automated diff reports summarizing research impact for mentors and learners.

## SLA & Cadence
- High-risk regulatory updates: implement within 14 days.
- Frontier research with high impact: publish summary within 7 days, module update within 30 days.
- Tooling releases: evaluation tests within 5 days, assistant guidance update within 10 days.

## Quality Gates
- Governance review for regulatory impacts.
- Evaluation reruns when model/tool changes exceed thresholds.
- Accessibility check to ensure new material meets inclusivity standards.

## Transparency
- Public changelog entries with citations.
- Quarterly research bulletin to alumni and sponsors.
- Assistant `what changed` command summarizing notable updates per learner.

