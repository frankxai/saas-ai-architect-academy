# SEO & Findability Strategy

## Audience + Intent Profiles
| Segment | Human Intent | Companion Agent Intent | Example Queries |
| --- | --- | --- | --- |
| Lead AI Architect | Find patterns, blueprints, implementation guidance | Retrieve architecture assets, evaluation checklists | "enterprise rag architecture blueprint", "ai governance runbook", "evaluation matrix template" |
| Program/Product Lead | Map roadmap, stakeholder narratives, KPIs | Summarize portfolio updates, generate exec briefs | "ai program rollout plan", "stakeholder update template", "ai adoption metrics" |
| Risk & Compliance Partner | Ensure controls, evidence, policy alignment | Extract policies, map controls, monitor risk signals | "ai model risk controls", "governance checklist", "audit evidence template" |
| AI Delivery Engineer | Launch labs, troubleshoot patterns | Fetch code labs, compare toolchains | "agentic swarm starter", "rag observability toolkit", "supabase vector quickstart" |
| AI Assistant / Autonomous Agent | Request structured modules, citations, deliverables | Parse API responses, fetch context graph, cite sources | `modules?tag=risk&deliverable=adr`, `assistant/generate-plan` |

## Keyword Pillars
1. **Architecture & Patterns** – ai architecture patterns, enterprise ai architecture, rag platform blueprint, agentic swarm framework, llm evaluation strategy.
2. **Governance & Risk** – ai governance checklist, model risk management, responsible ai controls, ai compliance evidence, evaluation rubrics.
3. **Delivery & Operations** – ai deployment playbook, ai center of excellence toolkit, ai observability dashboard, ai program roadmap, ai roi tracking.
4. **Assistant & Tooling** – ai architect assistant, agentic copilot, llm plan synthesizer, ai module recommender, assistant deployment toolkit.
5. **Learning & Enablement** – ai architect microlearning, enterprise ai curriculum, ai capability maturity assessment, ai program coaching.

## On-site Optimization Plan
- Hero, stats, and keyword cloud reinforce pillar terminology within natural copy.
- Anchor sections with descriptive IDs and cross-links (`#vision`, `#experience`, `#curriculum`, `#assistant`, `#workspaces`, `#operations`, `#roadmap`, `#resources`, `#sitemap`, `#faq`).
- Structured data: EducationalOrganization + Course schema in `layout.tsx`, FAQ schema in `page.tsx`.
- Publish `src/app/sitemap.ts` so search engines discover primary surfaces quickly; ensure `robots.txt` references it when available.
- Interlink landing page with repository artifacts and the new Experience Blueprint to boost topical authority.
- Highlight forthcoming API/agent toolkit to capture queries around agent automation and structured data access.
- Launch dedicated pillar routes (`/tracks`, `/assistant`, `/workspaces`, `/governance`, `/insights`) with MDX content.
- Produce FAQ/How-to articles targeting long-tail keywords (e.g., "how to govern ai rag deployments", "ai evaluation readiness checklist").
- Add outbound references to authoritative standards (NIST AI RMF, ISO/IEC 42001) and partner case studies for credibility.
- Embed testimonials and quantified outcomes once alpha cohorts complete programs.
- Offer JSON/CSV endpoints (or `app/api` routes) for modules, personas, and roadmap milestones so agents can query structured data.
- Maintain stable anchor IDs, section ordering, and semantic markup for scraping and context gathering.
- Provide OpenAPI and JSON-LD descriptors for the agent toolkit as endpoints stabilize; document rate limits and authentication flows.

- Track impressions and click-through rates for target keywords via Search Console; monitor FAQ rich results coverage.
- Instrument hero CTA, curriculum preview, and assistant interaction events to measure time-to-first-action.
- Analyze sitemap hits, anchor hash navigation, and upcoming API usage to understand agent behavior.
- Review metadata, keyword coverage, and linking quarterly with insights from customer research and assistant prompts.
- Provide OpenAPI/JSON-LD descriptors for assistant integration.

## Measurement
- Monitor organic search queries, CTR, conversion via analytics.
- Track assistant prompt taxonomy to discover new keyword opportunities.
- Review metadata quarterly; iterate with fresh insights from customer research.
