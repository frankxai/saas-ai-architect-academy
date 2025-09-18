# Experience Blueprint

## Purpose
This blueprint describes how the AI Architect Academy Platform serves human architects and their companion AI agents. It aligns navigation, content depth, data structures, and SEO foundations so every surface helps users discover the right guidance, deliverables, and governance controls in seconds.

## Primary Personas
- **Lead Architect** – orchestrates solution design, safeguards technical integrity, and mentors delivery teams. Needs accelerated research, module curation, and assistant support that respects architectural constraints.
- **Program & Product Leader** – defines value narratives, manages stakeholders, and proves ROI. Needs roadmap visibility, KPI instrumentation, and executive-ready summaries.
- **Risk & Compliance Partner** – ensures responsible AI practices, policy alignment, and audit readiness. Needs control mapping, evidence timelines, and workflow hooks.
- **High-Value Client / Executive Sponsor** – invests in governed AI transformation. Needs curated packages, ROI modeling, and transparent delivery telemetry.
- **Creator & Influencer Partner** – amplifies the brand voice and thought leadership. Needs editorial calendars, social atomization kits, and performance insights.
- **Family & Inner Circle** – closest supporters seeking progress updates and simplified access to resources. Needs digestible summaries, guided onboarding, and frictionless sharing.
- **Autonomous / Companion Agents** – trigger workflows, summarize knowledge, and monitor signals on behalf of humans. Need stable APIs, structured data, and citations to ground reasoning.

## Core Journeys
1. **Discover & Plan**
   - Landing page presents experience pillars, persona outcomes, signature services, and roadmap above the fold.
   - Search intents map directly to anchored sections so humans and agents can deep-link.
   - Metadata, keyword cloud, and FAQ schema give search engines rich context.
2. **Curate Curriculum & Resources**
   - Micro-tracks show duration, deliverables, and module families for architects, executives, and creators.
   - Resource Vault surfaces free templates, premium kits, and agent-ready datasets in one scroll.
   - Tagging scheme: `discipline`, `maturity`, `persona`, `deliverable`, `governance-signal`, `access-tier`.
3. **Co-build with the Assistant**
   - Assistant highlights emphasise retrieval grounding, reasoning traces, and export options.
   - Workflow timeline outlines intake → plan → co-build → evidence with optional content atomization for creators.
   - Integration callouts show how outputs flow into Jira/Linear, Slack/Teams, analytics, and observability.
4. **Operate, Share & Scale**
   - Operations section maps responsible AI controls, evaluation observability, and value instrumentation.
   - Projects hub reports on books, ventures, and experiments with milestone telemetry for inner circle followers.
   - Roadmap and community calls-to-action communicate near-term releases, cohorts, and partnership options.

## Signature Surfaces
- **Hero + Stats** – positions the platform as the global hub for governed AI delivery, thought leadership, and community value.
- **Experience Pillars** – reframed to blend architect velocity, governed delivery, operational intelligence, and creator amplification.
- **Services Deck** – premium offers for executive clients, accelerator cohorts, and advisory retainers.
- **Resource Vault** – filters free, premium, and agent-ready downloads with clear descriptions and SEO-friendly keywords.
- **Projects Pulseboard** – highlights book progress, venture experiments, and live cohorts with next milestones.
- **Insight Playlists** – thematic content clusters (e.g., Responsible AI, Creator Ops, Agent Automation) linking to evergreen SEO articles and upcoming releases.
- **Community Layer** – invites to waitlists, masterminds, GitHub discussions, and supporter updates.

### Learning Track Taxonomy
- **T1 Agent Engineering Foundations** – opportunity framing, prompts, guardrails, and agent field tests.
- **T2 Rapid Prototyping Studio** – hypothesis sprints, storyboard labs, build loops, and pilot evidence packs.
- **T3 Architecture Systems Lab** – capability mapping, interface contracts, retrieval blueprints, and launch briefs.
- **T4 Collaboration & Communication** – collaboration operating systems, storytelling labs, enablement loops, and digests.
- **T5 Operations & Reliability** – reliability baselines, observability rollout, runbook automation, and incident simulations.
- **T6 Leadership & Scale** – portfolio signals, investment stories, governance cadences, and community activation.

## Micro-Learning Surface Architecture
1. **Page frame**: hero outcome → time commitment & mastery tags → assistant starter button row → stepper with expandable tasks → evidence checklist & reflection panel.
2. **Button grid**: `Start with Coach`, `Preview Evidence`, `Launch Lab`, `Sync to Workspace`, and `Send Sponsor Update` appear consistently above the fold for human + agent flows.
3. **Dynamic cues**: prerequisite alerts, governance badges, telemetry status, and mentor recommendations stream in from `moduleCatalog` metadata and assistant SLO events.
4. **Assistant dock**: collapsible panel shows reasoning trace, recommended follow-ups, citations, and quick exports (ADR, runbook, stakeholder memo).
5. **Progress ledger**: inline tracker logs deliverable uploads, evaluation completion, and sponsor approvals with links to the evidence locker.
6. **Reflection rituals**: closing cards capture insights, decisions, and open risks; outputs route to persona dashboards and credential reviews.
7. **Instrumentation**: event taxonomy includes `micro_step.view`, `cta.click`, `evidence.submit`, `assistant.invoke`, and `reflection.publish` for analytics and recommendation loops.

## Navigation & Information Architecture
- **Global nav**: Vision, Experience, Curriculum, Assistant, Workspaces, Personas, Services, Library, Projects, Insights, Operations, Roadmap, Community, Resources.
- **Anchor map**: `#vision`, `#experience`, `#curriculum`, `#assistant`, `#workspaces`, `#personas`, `#services`, `#library`, `#projects`, `#search`, `#insights`, `#operations`, `#roadmap`, `#community`, `#resources`, `#sitemap`, `#faq`.
- **Footer**: Repository links, contact, services CTA, and quick references back to anchors to keep context tight.
- **Sitemap section**: Summarizes the structure for humans, crawler bots, and agents, mirrored by `src/app/sitemap.ts`.
- **Breadcrumb metadata**: Provide JSON-LD breadcrumbs for upcoming subpages (tracks, assistant, governance) to reinforce SEO depth.

## SEO & Keyword Strategy
- Keyword clusters: architecture patterns, responsible AI governance, evaluation strategy, program roadmap, AI assistant tooling.
- Hero badge, stat cards, and knowledge cloud reinforce top keywords without sacrificing clarity.
- FAQ schema (JSON-LD) and organization schema (in layout) provide structured data for search engines.
- Cross-links to repository docs give depth and authority for long-tail queries.

## Agent Enablement
- Stable anchor IDs ensure agents can deep link or scrape reliably.
- Copy highlights the API & agent toolkit; dataset will expose modules, personas, roadmap milestones, project pulses, and evaluation metrics.
- Resource metadata (format, access tier, schema) is exposed in cards so companion agents can select the right asset.
- Content emphasises citations, telemetry, and readiness states so autonomous agents can trigger follow-up workflows safely.

## Content Governance
- Each section has a clear owner: Curriculum (Learning team), Assistant (AI/ML team), Workspaces (Product), Operations (Governance), Roadmap (Leadership).
- Quarterly review cadence: refresh keywords, update roadmap outcomes, add new modules and integration partners.
- Accessibility checklist baked into design—contrast, focus states, semantic markup, and responsive navigation.

## Success Measures
- Increase organic discovery (hero keywords + FAQ impressions) by 40% quarter over quarter.
- Grow conversion on premium services (cohorts, advisory) to 12% of qualified visitors.
- Reduce time-to-first action (module preview, resource download, or assistant click) to under 40 seconds.
- Track agent-triggered interactions via API toolkit usage, sitemap anchor hits, and Resource Vault downloads.
- Capture qualitative feedback through GitHub discussions, cohort retrospectives, and supporter townhalls.

## Next Enhancements
- Launch `/tracks`, `/assistant`, and `/governance` subpages with MDX-powered module explorers.
- Publish OpenAPI spec for agent toolkit once data contract stabilizes.
- Layer in interactive prototypes or lightweight motion states to preview assistant responses.
- Expand testimonials and proof points as alpha cohorts complete delivery cycles.
