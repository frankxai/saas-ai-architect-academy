# AI Architect Academy

Progressive learning and execution platform for AI Architects, program leaders, and Centers of Excellence. The goal is to deliver a micro-learning operating system backed by the open-source [AI Architect Academy](https://github.com/AI-Architect-Academy/ai-architect-academy) knowledge base and an AI assistant that helps teams ship governed, production-grade AI systems.

## Product Pillars
- **Adaptive Micro-learning**: 200+ MDX modules organized into twelve learning galaxies with dynamic micro-paths, prerequisites, and telemetry-driven recommendations.
- **AI Architect Assistant**: retrieval-augmented copilot grounded in the Academy corpus plus project context, capable of drafting plans, ADRs, evaluation dashboards, and governance documents.
- **Execution Workspaces**: project dashboards, lab notebooks, governance checklists, and integration hooks (Slack/Teams, Linear/Jira, GitHub) wired to telemetry.
- **Operational Intelligence**: evaluation reporting, guardrail monitoring, portfolio analytics, stakeholder communications, and verifiable credentials.

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

## Curriculum Assets
- [Curriculum Blueprint (2025 Edition)](docs/curriculum-blueprint.md)
- [Learning System Architecture](docs/curriculum/architecture.md)
- [Curriculum Experience UI](/curriculum) - interactive navigator for galaxies, micro-paths, credentials, and sponsor dashboards.
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
- [Track Explorer Specification](docs/curriculum/track-explorer.md)
- [Curriculum Changelog](docs/curriculum/changelog.md)

## Strategic References
- [Product Blueprint](docs/product-blueprint.md)
- [Platform Strategy](docs/strategy.md)
- [Capabilities & Agentic Specs](docs/capabilities.md)
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



