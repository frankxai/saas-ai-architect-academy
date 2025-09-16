# Experience Blueprint

## Purpose
This blueprint describes how the AI Architect Academy Platform serves human architects and their companion AI agents. It aligns navigation, content depth, data structures, and SEO foundations so every surface helps users discover the right guidance, deliverables, and governance controls in seconds.

## Primary Personas
- **Lead Architect** – orchestrates solution design, safeguards technical integrity, and mentors delivery teams. Needs accelerated research, module curation, and assistant support that respects architectural constraints.
- **Program & Product Leader** – defines value narratives, manages stakeholders, and proves ROI. Needs roadmap visibility, KPI instrumentation, and executive-ready summaries.
- **Risk & Compliance Partner** – ensures responsible AI practices, policy alignment, and audit readiness. Needs control mapping, evidence timelines, and workflow hooks.
- **Autonomous / Companion Agents** – trigger workflows, summarize knowledge, and monitor signals on behalf of teams. Need stable APIs, structured data, and citations to ground reasoning.

## Core Journeys
1. **Discover & Plan**
   - Landing page presents experience pillars, persona outcomes, and roadmap in the first scroll.
   - Search intents map directly to anchored sections so humans and agents can deep-link.
   - Metadata, keyword cloud, and FAQ schema give search engines rich context.
2. **Curate Curriculum**
   - Micro-tracks show duration, deliverables, and module families.
   - Tagging scheme: `discipline`, `maturity`, `persona`, `deliverable`, `governance-signal`.
   - Waitlist CTA and GitHub discussions link to cohort activation and community contributions.
3. **Co-build with the Assistant**
   - Assistant highlights emphasise retrieval grounding, reasoning traces, and export options.
   - Workflow timeline outlines intake → plan → co-build → evidence.
   - Integration callouts show how outputs flow into Jira/Linear, Slack/Teams, analytics, and observability.
4. **Operate & Scale**
   - Operations section maps responsible AI controls, evaluation observability, and value instrumentation.
   - Integration fabric clarifies how telemetry and governance data stay connected across tools.
   - Roadmap communicates near-term releases and long-term marketplace vision.

## Navigation & Information Architecture
- **Global nav**: Vision, Experience, Curriculum, Assistant, Workspaces, Operations, Roadmap, Resources.
- **Anchor map**: `#vision`, `#experience`, `#curriculum`, `#assistant`, `#workspaces`, `#personas`, `#search`, `#operations`, `#roadmap`, `#resources`, `#sitemap`, `#faq`.
- **Footer**: Repository links, contact, and quick references back to anchors to keep context tight.
- **Sitemap section**: Summarizes the structure for humans, crawler bots, and agents, mirrored by `src/app/sitemap.ts`.

## SEO & Keyword Strategy
- Keyword clusters: architecture patterns, responsible AI governance, evaluation strategy, program roadmap, AI assistant tooling.
- Hero badge, stat cards, and knowledge cloud reinforce top keywords without sacrificing clarity.
- FAQ schema (JSON-LD) and organization schema (in layout) provide structured data for search engines.
- Cross-links to repository docs give depth and authority for long-tail queries.

## Agent Enablement
- Stable anchor IDs ensure agents can deep link or scrape reliably.
- Copy highlights upcoming API & agent toolkit; dataset will expose modules, personas, roadmap milestones, and evaluation metrics.
- Content emphasises citations, telemetry, and readiness states so autonomous agents can trigger follow-up workflows safely.

## Content Governance
- Each section has a clear owner: Curriculum (Learning team), Assistant (AI/ML team), Workspaces (Product), Operations (Governance), Roadmap (Leadership).
- Quarterly review cadence: refresh keywords, update roadmap outcomes, add new modules and integration partners.
- Accessibility checklist baked into design—contrast, focus states, semantic markup, and responsive navigation.

## Success Measures
- Increase organic discovery (hero keywords + FAQ impressions) by 40% quarter over quarter.
- Reduce time-to-first action (module preview or assistant click) to under 45 seconds.
- Track agent-triggered interactions via API toolkit usage and sitemap anchor hits.
- Capture qualitative feedback through GitHub discussions and cohort retrospectives.

## Next Enhancements
- Launch `/tracks`, `/assistant`, and `/governance` subpages with MDX-powered module explorers.
- Publish OpenAPI spec for agent toolkit once data contract stabilizes.
- Layer in interactive prototypes or lightweight motion states to preview assistant responses.
- Expand testimonials and proof points as alpha cohorts complete delivery cycles.
