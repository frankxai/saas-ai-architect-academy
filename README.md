# AI Architect Academy

Progressive learning and execution platform for AI Architects, program leaders, and Centers of Excellence. The goal is to deliver a micro-learning operating system backed by the open-source [AI Architect Academy](https://github.com/AI-Architect-Academy/ai-architect-academy) knowledge base and an AI assistant that helps teams ship governed, production-grade AI systems.

## Product Pillars
- **Sprint-based Micro-learning**: Six tracks (Agent Foundations, Rapid Prototyping, Architecture Systems, Collaboration, Operations, Leadership) produce tangible artefacts and proofs every five days.
- **AI Architect Assistant**: Retrieval-augmented copilots (Scout, Coach, Critic, Archivist, Companion, Navigator) grounded in Academy knowledge and live telemetry.
- **Execution Workspaces**: Dashboards, labs, runbooks, and collaboration rituals built to join delivery tools (Slack/Teams, Linear, Jira, GitHub) without context switching.
- **Operational Intelligence**: Evaluation reporting, guardrail monitoring, portfolio analytics, stakeholder communications, and verifiable credentials.

## Learning Tracks (2025)
| Track | Focus | Signature Deliverables |
| --- | --- | --- |
| T1 Agent Engineering Foundations | Frame, prompt, and field-test dependable coding agents. | Opportunity canvas, guardrail baseline, field test journal |
| T2 Rapid Prototyping Studio | Ship high-signal prototypes with instrumentation and evidence. | Prototype repo, storyboard deck, pilot decision memo |
| T3 Architecture Systems Lab | Translate prototypes into solution architectures and runbooks. | Capability map, interface contract, architecture briefing |
| T4 Collaboration & Communication | Align teams with operating rituals, storytelling, and enablement. | Collaboration charter, story arc deck, progress digest |
| T5 Operations & Reliability | Instrument, automate, and rehearse operations for production AI. | Reliability baseline report, observability dashboard, incident insight brief |
| T6 Leadership & Scale | Drive portfolio governance, investment narratives, and activation. | Signal dashboard, investment narrative, community activation plan |

## Massive Action Education Backlog (Q4 2025)
- **Sprint 1 Agent Field Tests**: Activate the new `docs/curriculum-blueprint.md` plan with a red-team rehearsal and agent telemetry upload.
- **Evaluation Harness Starter**: Stand up `scripts/eval-harness/` with OpenAI Evals templates, LangSmith suites, and Anthropic safety probes.
- **Telemetry Stack Launch**: Wire Langfuse + OpenTelemetry collector + Supabase warehouse schema to capture cohort signals.
- **Governance Control Checklist**: Publish the NIST + OpenAI Preparedness derived control stack inside `docs/curriculum/evaluation-ops.md`.
- **Frontier Intelligence Digest**: Issue the weekly brief that triangulates releases from OpenAI, Anthropic, Google DeepMind, Meta, and Microsoft.
- **Sponsor Progress Digest Beta**: Ship the leadership-ready narrative kit pairing sprint outcomes with telemetry.
- **Frontier Model Alignment**: Apply GPT-5, Claude 4, Grok 4, Gemini 2.5, and Mistral Nano best practices across modules and assistant playbooks.
## Repository Structure
`
.
|-- docs/                # Strategy, curriculum, SEO, agent journeys, UX guidance
|-- public/              # Brand assets (SVG, sitemap, robots)
|-- src/
|   \-- app/             # Next.js App Router routes, layout, styling
|-- package.json         # Scripts + dependencies
\-- scripts/             # (planned) content ingestion + automation
`

## Getting Started
1. **Install dependencies**
   `
   npm install
   `
2. **Run the dev server**
   `
   npm run dev
   `
   App will be available at http://localhost:3000.
3. **Lint**
   `
   npm run lint
   `

## Experience Roadmap
| Phase | Outcomes |
| --- | --- |
| Foundations | Marketing site, curriculum explorer, initial assistant prototype, waitlist. |
| Guided Delivery | Authenticated dashboard, adaptive learning paths, MDX content pipeline, progress tracking. |
| AI Pair-Partner | Full assistant with workflow automation, project intake, evaluation exports, credentialing. |
| Marketplace + Ops | Community modules, integration marketplace, governance dashboards, enterprise licensing. |

## Autonomous Execution Sprint (Sept 2025)
- **T1 Micro-learning Blueprint**: Redesign curriculum surfaces with guided steps, reflection prompts, and assistant quick actions.
- **T2 Module Depth Expansion**: Refresh the catalog with agent-first modules, explicit deliverables, signals, and assistant prompt packs.
- **T3 Adaptive Sprint Weaving**: Expand persona micro paths into linked five-day sprints with mastery guardrails and sponsor outcomes.
- **T4 Assistant Ops & Telemetry**: Extend service-level objectives, CTA instrumentation, and digest automation for the assistant constellation.
- **T5 Interactive Learning Hub UI**: Ship cleaner navigation, track filters, and micro-sprint launchers across the curriculum experience.

## Curriculum Assets
- [Curriculum Blueprint (2025 Edition)](docs/curriculum-blueprint.md)
- [Learning System Architecture](docs/curriculum/architecture.md)
- [Curriculum Experience UI](/curriculum) - interactive navigator for sprint tracks, micro-paths, credentials, and sponsor dashboards.
- [Module Atlas 2025](docs/curriculum/modules.md)
- [Module Authoring Standards](docs/curriculum/module-authoring.md)
- [Research-to-Curriculum Pipeline](docs/curriculum/research-pipeline.md)
- [Evaluation Registry](docs/curriculum/evaluation-registry.md)
- [Adaptive Micro-Paths](docs/curriculum/micro-paths.md)
- [Industry Playbooks](docs/curriculum/industry-playbooks.md)
- [Teaching & Facilitation Model](docs/curriculum/teaching-model.md)
- [Mentor & Cohort Operations](docs/curriculum/mentor-ops.md)
- [Evaluation & QA Operations](docs/curriculum/evaluation-ops.md)
- [Evidence Locker Specification](docs/curriculum/evidence-locker.md)
- [Credential Framework](docs/curriculum/credentials.md)
- [Sponsor Cockpit Specification](docs/curriculum/sponsor-cockpit.md)
- [Assistant Operations Playbook](docs/curriculum/assistant-ops.md)
- [Frontier Intelligence Grid](docs/curriculum/frontier-intelligence.md)
- [Frontier Lab Teaching Alignment](docs/curriculum/lab-teaching-alignment.md)
- [Research, Development & Curriculum Plan](docs/curriculum/research-development-plan.md)
- [Module Excellence Playbook](docs/curriculum/module-excellence.md)
- [Track Explorer Specification](docs/curriculum/track-explorer.md)
- [Curriculum Changelog](docs/curriculum/changelog.md)

## Micro-Learning Experience (2025 Preview)
- **Stepwise micro-pages** pair a top-level outcome, three to five guided steps, and a closing reflection prompt so architects always know the next click.
- **Contextual buttons** for `Start with Coach`, `Review Evidence`, and `Download Blueprint` keep assistant actions, deliverables, and templates one tap away.
- **Adaptive scaffolds** surface prerequisite warnings, estimated effort, and governance checks dynamically from the curriculum dataset.
- **Signal overlays** display telemetry badges (On Track, Needs Review, Blocked) and tie into assistant alerts for mentors and sponsors.
- **Personalized quick-starts** show persona-specific CTAs (e.g., Lead Architect, Program Leader, Risk Partner) driven by micro-path intent signals.

## Strategic References
- [Product Blueprint](docs/product-blueprint.md)
- [Platform Strategy](docs/strategy.md)
- [Capabilities & Agentic Specs](docs/capabilities.md)
- [Spec-Driven Development Backlog](docs/product/spec-driven-backlog.md)
- [Agent Journey Mapping](docs/agent-journeys.md)
- [Experience Blueprint](docs/experience-blueprint.md)
- [Hub Content Model](docs/hub-content-model.md)
- [UI / UX Principles](docs/ui-ux-principles.md)
- [SEO & Findability Plan](docs/seo-strategy.md)

## Leveraging the Open Repository
- Scripts (build-search-index, capture-screenshots) will be adapted to power search, changelog automation, and telemetry exports.
- Markdown/MDX from AI Architect Academy becomes module content (with front matter for prerequisites, deliverables, references).
- Pattern diagrams, prompts, and templates feed the assistant and module assets.

## Tech Stack
- Next.js (App Router), React Server Components, Tailwind CSS.
- Planned services: Supabase (auth + database), pgvector/Qdrant for embeddings, LangChain/OpenRouter for assistant orchestration, Langfuse for telemetry.
- Deployment target: Vercel + Supabase.

## Contributing
1. Fork and clone the repo.
2. Create a feature branch (`git checkout -b feat/my-feature`).
3. Run `npm run lint` before committing.
4. Open a PR with context, screenshots (if UI), and links to related modules.

## Community + Support
- Discussions/issues: [GitHub repo](https://github.com/frankxai/saas-ai-architect-academy).
- Partnerships & cohorts: [frank@aiarchitect.academy](mailto:frank@aiarchitect.academy).

Built in public to accelerate real-world AI value delivery.








