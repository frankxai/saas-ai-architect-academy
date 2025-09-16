# SaaS AI Architect Academy

Progressive learning and execution platform for AI Architects, program leaders, and Centers of Excellence. The goal is to deliver a micro-learning operating system backed by the open-source [AI Architect Academy](https://github.com/AI-Architect-Academy/ai-architect-academy) knowledge base and an AI assistant that helps teams ship governed, production-grade AI systems.

## Product Pillars
- **Micro-learning**: hundreds of MDX modules organized into tracks (Foundations, Delivery, Operations, Leadership) with deliverables and rubrics.
- **AI Architect Assistant**: retrieval-augmented copilot grounded in the Academy corpus plus project context, capable of drafting plans, ADRs, and evaluation dashboards.
- **Execution Workspaces**: project dashboards, lab notebooks, governance checklists, and integration hooks (Slack/Teams, Linear/Jira, GitHub).
- **Operational Intelligence**: evaluation reporting, guardrail monitoring, portfolio analytics, and stakeholder communications.

## Repository Structure
`
.
+-- docs/                # Product blueprint, architecture notes
+-- public/              # Brand assets (SVG, favicons)
+-- src/
¦   +-- app/             # Next.js App Router routes, layout, styling
+-- package.json         # Scripts + dependencies
+-- scripts/             # (planned) content ingestion + automation
`

## Getting Started
1. **Install dependencies**
   `ash
   npm install
   `
2. **Run the dev server**
   `ash
   npm run dev
   `
   App will be available at http://localhost:3000.
3. **Lint**
   `ash
   npm run lint
   `

## Experience Roadmap
| Phase | Outcomes |
| --- | --- |
| Foundations | Marketing site, curriculum preview, initial assistant prototype, waitlist. |
| Guided Delivery | Authenticated dashboard, learning paths, MDX content pipeline, progress tracking. |
| AI Pair-Partner | Full assistant with workflow automation, project intake, evaluation exports. |
| Marketplace + Ops | Community modules, integration marketplace, governance dashboards, enterprise licensing. |

Read the detailed [product blueprint](docs/product-blueprint.md) for architecture, content strategy, and sprint plan.

## Leveraging the Open Repository
- Markdown/MDX from AI Architect Academy becomes module content (with front matter for prerequisites, deliverables, references).
- Pattern diagrams, prompts, and templates feed the assistant and module assets.
- Existing scripts (uild-search-index, capture-screenshots) will be adapted to power search and marketing collateral updates.

## Tech Stack
- Next.js (App Router), React Server Components, Tailwind CSS.
- Planned services: Supabase (auth + database), pgvector/Qdrant for embeddings, LangChain/OpenRouter for assistant orchestration, Langfuse for telemetry.
- Deployment target: Vercel + Supabase.

## Contributing
1. Fork and clone the repo.
2. Create a feature branch (git checkout -b feat/my-feature).
3. Run 
pm run lint before committing.
4. Open a PR with context, screenshots (if UI), and links to related modules.

## Community + Support
- Discussions/issues: [GitHub repo](https://github.com/frankxai/saas-ai-architect-academy).
- Partnerships & cohorts: [frank@aiarchitect.academy](mailto:frank@aiarchitect.academy).

Built in public to accelerate real-world AI value delivery.

