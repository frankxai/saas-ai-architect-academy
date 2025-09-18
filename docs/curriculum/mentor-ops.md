# Mentor & Cohort Operations

Defines how mentors, reviewers, and cohort operations teams run the Academy experience with consistency, inclusion, and measurable impact.

## Mentor Roles & Cadence
| Role | Focus | Cadence | Key Outputs |
| --- | --- | --- | --- |
| Principal Architect | Technical rigor, systems integration | Weekly studio, monthly architecture council | Architecture critiques, ADR annotations |
| Governance Lead | Responsible AI, policy alignment | Bi-weekly clinics, monthly risk board | Control gap assessments, policy briefs |
| Product & Strategy Coach | Value narratives, stakeholder comms | Weekly storytelling labs | Executive narrative feedback, adoption playbooks |
| Operations & SRE Mentor | Reliability, telemetry, cost | Bi-weekly ops standups | SLO progress reviews, incident retros |
| Wellness & Team Dynamics | Psychological safety, cohesion | Weekly pulse check | Burnout watchlist, facilitation notes |

## Operating Rhythm
- **Daily**: mentor dashboard review (micro-path progress, evaluation alerts), respond to assistant escalations.
- **Weekly**: cohort sync with agenda (wins, risks, evaluation metrics), reviewer assignments, sponsor updates.
- **Monthly**: governance summit, mentor retro, curriculum backlog triage.
- **Quarterly**: mentor calibration workshop, rubric alignment, industry update briefing.

## Tooling
- Mentor cockpit (planned `/app/mentor`) combining telemetry, pending reviews, assistant escalations.
- Automated task queues from Critic and Companion agents for deliverable feedback, wellness outreach, evaluation remediation.
- Templates for meeting agendas, sponsor emails, red/amber/green reporting.

## Feedback Protocols
1. **Structured Rubrics**: mentors score against rubric dimensions with evidence references.
2. **Narrative Feedback**: highlight strengths, critical improvements, recommended modules.
3. **Assistant Loop**: feed summary into assistant knowledge base, enabling tailored nudges.
4. **Escalation**: signal high-risk items (compliance, burnout, delivery blockers) to program directors within 12 hours.

## Mentor Readiness
- Required credentials: Architect or Strategist level, specialization seal matching track.
- Onboarding: mentor micro-path, assistant prompt training, governance orientation.
- Continuous improvement: monthly calibration sessions comparing scoring decisions, sharing playbooks.

## Cohort Orchestration
- Cohorts sized 25-30 learners across personas; squads of 5 cross-functional participants.
- Guilds meet bi-weekly; mentors rotate facilitation.
- Companion agent tracks engagement; mentors intervene after 3 missed prompts or evaluation declines.

## Sponsor Collaboration
- Each cohort assigned sponsor liaison; mentors supply bi-weekly sponsor packet (progress, risks, next asks).
- Sponsor dashboards integrate Evidence Locker snapshots, evaluation metrics, micro-path status.

## Metrics & Accountability
- Mentor effectiveness: learner NPS, outcome attainment, evaluation improvement, sponsor satisfaction.
- Triangulation: compare assistant feedback with mentor notes to detect drift or bias.
- Diversity & inclusion: monitor participation, ensure equitable airtime, flag patterns needing intervention.

