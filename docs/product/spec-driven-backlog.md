# Spec-Driven Development Backlog (Q4 2025)

## Focus Areas
1. **Experience Blueprint** - ensure the marketing and product surface mirrors the Assistant + Workspace flow.
2. **Product Application** - upgrade the Next.js UI, navigation, and data storytelling for clarity and conversion.
3. **Telemetry & Evidence** - wire evaluation, guardrail, and progress reporting into visible surfaces.
4. **Assistant Activation** - tighten the end-to-end path from PRD intake to agent-ready playbooks.

## Task Board
| ID | Title | Description | Specs & Inputs | Owner | Status |
| --- | --- | --- | --- | --- | --- |
| SD-01 | Hero Narrative Refresh | Rework landing hero with spec-driven story, multi-CTA, and trust signals. | `src/app/page.tsx`, `AGENT.md`, product messaging notes | Web UX | Todo |
| SD-02 | Spec-Driven Flow Section | Add dedicated section outlining PRD -> Pattern -> Playbook -> Eval loop with links. | `src/app/page.tsx`, `docs/curriculum/labs/sprint1-agent-field-test.md` | Web UX | Todo |
| SD-03 | Module Deep-Dive Layout | Build richer module detail surfaces (timeline, evidence, CTA to lessons). | `src/app/curriculum/modules/[code]/page.tsx`, `src/data/curriculum.ts` | Web UX | In Discovery |
| SD-04 | Evaluation Harness UI | Add UI entry for `scripts/eval-harness` runs and documentation CTA. | New route `/evals` (TBD), `scripts/eval-harness` | Product | Backlog |
| SD-05 | Compliance Scorecard Component | Surface Microsoft Responsible AI scorecard in Operations track UI. | `docs/curriculum/lab-teaching-alignment.md`, Operations modules | Curriculum | Backlog |
| SD-06 | Weekly Lab Signals Digest | Automate updates using `docs/curriculum/research-development-plan.md` and frontier grid. | `docs/curriculum/frontier-intelligence.md` | Ops | In Discovery |
| SD-07 | Evidence Locker Quickstart | Scaffold `docs/evidence/` templates (PRD, playbooks, journal). | `AGENT.md`, `dashboard/AGENT.md` | Curriculum | Todo |
| SD-08 | Navigation Audit & IA | Rationalize nav groups, add spec-driven anchors, ensure responsive behavior. | `src/app/page.tsx` | Web UX | Todo |
| SD-09 | Persona Storytelling Upgrade | Refresh persona cards with jobs-to-be-done, pain points, metrics. | `src/app/page.tsx`, persona data | Product | Backlog |
| SD-10 | Community Proof Layer | Add testimonial and case evidence slider using existing assets. | `public/`, `docs/curriculum/modules.md` | Marketing | Backlog |
| SD-11 | Frontier Model Infusion | Update modules and assistants with GPT-4o/o1, Claude 3.5, Gemini 1.5, Grok-2, Llama 3.1, and Mistral Nano/Large best practices using the Module Excellence Playbook. | `docs/curriculum/module-excellence.md`, `docs/curriculum/lab-teaching-alignment.md` | Curriculum | In Review |

## Execution Notes
- Treat each task as a mini-spec: clearly link to source documents, acceptance criteria, evaluation plan, and owner.
- Update this backlog after every weekly research review and Sprint 1 lab retro.
- Use Evidence Locker templates to store PRDs, playbooks, and evaluation outputs generated while closing tasks.
- Report progress via the Friday governance checkpoint (see `docs/curriculum/research-development-plan.md`).


