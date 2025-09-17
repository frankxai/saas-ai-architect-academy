# SEO & Findability Strategy

## Audience + Intent Profiles
| Segment | Human Intent | Companion Agent Intent | Example Queries |
| --- | --- | --- | --- |
| Lead AI Architect | Find patterns, blueprints, implementation guidance | Retrieve architecture assets, evaluation checklists | "enterprise rag architecture blueprint", "ai governance runbook", "evaluation matrix template" |
| Program/Product Lead | Map roadmap, stakeholder narratives, KPIs | Summarize portfolio updates, generate exec briefs | "ai program rollout plan", "stakeholder update template", "ai adoption metrics" |
| Risk & Compliance Partner | Ensure controls, evidence, policy alignment | Extract policies, map controls, monitor risk signals | "ai model risk controls", "governance checklist", "audit evidence template" |
| High-Value Client / Executive Sponsor | Assess premium offers, quantify ROI, plan engagements | Pull packaged services, ROI calculators, milestone telemetry | "ai governance advisory", "enterprise ai transformation partner", "responsible ai sprint" |
| Creator & Influencer Partner | Amplify thought leadership, plan content drops | Generate editorial calendars, atomize long-form into social posts | "ai newsletter template", "thought leadership prompt pack", "ai influencer content strategy" |
| Family & Inner Circle | Stay updated, share highlights, access curated resources | Fetch digestible summaries, recommended starting points, event reminders | "ai architect academy update", "ai learning path for beginners", "monthly progress digest" |
| AI Delivery Engineer | Launch labs, troubleshoot patterns | Fetch code labs, compare toolchains | "agentic swarm starter", "rag observability toolkit", "supabase vector quickstart" |
| AI Assistant / Autonomous Agent | Request structured modules, citations, deliverables | Parse API responses, fetch context graph, cite sources | `modules?tag=risk&deliverable=adr`, `assistant/generate-plan` |

## Keyword Pillars
1. **Architecture & Patterns** – ai architecture patterns, enterprise ai blueprint, rag platform design, agentic automation framework, llm evaluation strategy.
2. **Governance & Risk** – responsible ai controls, ai governance checklist, model risk management, audit evidence templates, ai policy operations.
3. **Delivery & Operations** – ai deployment playbook, ai observability dashboard, ai program roadmap, ai roi tracking, ai center of excellence toolkit.
4. **Assistant & Agent Tooling** – ai architect assistant, agentic copilot, llm plan synthesizer, assistant deployment toolkit, agent-ready dataset.
5. **Creator & Influence Ops** – ai thought leadership engine, ai content calendar, ai influencer toolkit, prompt library for social posts, ai brand storytelling.
6. **Community & Learning** – ai architect microlearning, enterprise ai curriculum, ai mastermind cohort, ai capability maturity assessment, ai progress digest.

### Supporting Long-tail Themes
- "how to govern ai rag deployments", "ai evaluation readiness checklist", "enterprise ai adoption playbook", "ai creator monetization", "ai executive briefing template".
- Pair every long-form article with related queries for snippet optimization (e.g., "what is an ai governance sprint", "ai transformation north star metrics").
- Capture voice search phrases from influencer audiences: "what's new in enterprise ai architecture", "how do I brief my ai assistant on compliance".

## On-site Optimization Plan
- Hero, stats, and keyword cloud reinforce pillar terminology within natural copy tailored to architects, creators, and clients.
- Anchor sections with descriptive IDs and cross-links (`#vision`, `#experience`, `#curriculum`, `#assistant`, `#workspaces`, `#personas`, `#services`, `#library`, `#projects`, `#search`, `#insights`, `#operations`, `#roadmap`, `#community`, `#resources`, `#sitemap`, `#faq`).
- Structured data: EducationalOrganization + Course schema in `layout.tsx`, FAQ schema in `page.tsx`, forthcoming BreadcrumbList and Product schema for premium services.
- Publish `src/app/sitemap.ts` with top-level experiences and future route commitments; update `robots.txt` to reference it once deployed.
- Interlink landing page with repository artifacts, Resource Vault downloads, and Experience Blueprint to boost topical authority.
- Highlight the API/agent toolkit and agent-ready data formats to capture structured search queries.
- Launch dedicated pillar routes (`/tracks`, `/assistant`, `/workspaces`, `/governance`, `/insights`, `/services`) with MDX content.
- Ship SEO articles and landing pages for each insight playlist with internal linking to services and resources.
- Reference authoritative standards (NIST AI RMF, ISO/IEC 42001) and relevant case studies to increase credibility.
- Feature testimonials, ROI proof points, and community stories as they become available.
- Offer JSON/CSV endpoints (or `app/api` routes) for modules, personas, roadmap milestones, project pulses, and resource metadata so agents can query structured data.
- Maintain stable anchor IDs, section ordering, and semantic markup for scraping and context gathering.
- Provide OpenAPI and JSON-LD descriptors for the agent toolkit as endpoints stabilize; document rate limits and authentication flows.

## Measurement
- Track impressions and click-through rates for target keywords via Search Console; monitor FAQ and future breadcrumb rich results coverage.
- Instrument hero CTA, curriculum preview, resource downloads, and assistant interaction events to measure time-to-first-action.
- Analyze sitemap hits, anchor hash navigation, Resource Vault clicks, and upcoming API usage to understand human vs. agent behavior.
- Capture newsletter growth, social engagement, and referral traffic from creator partners.
- Review metadata, keyword coverage, and linking quarterly with insights from customer research and assistant prompt logs.
