# Track Explorer Specification

Blueprint for the `/tracks` experience that surfaces curriculum pathways, micro-paths, and evidence expectations within the Next.js platform.

## Experience Goals
- Enable learners and sponsors to visualize progress across galaxies, arcs, and mastery levels.
- Provide adaptive recommendations powered by telemetry and Frontier Intelligence signals.
- Offer rich filtering for personas, modalities, durations, governance requirements, and industry verticals.
- Ensure accessibility, agent interoperability, and SEO discoverability.

## Information Architecture
| Layer | Description |
| --- | --- |
| Hero | Personalized greeting, current mastery badge, recommended micro-path. |
| Filter Panel | Facets: persona, mastery level, galaxy, modality, duration band, governance tags, industry. |
| Track Grid | Cards for each galaxy showing progress bars, upcoming modules, key deliverables. |
| Micro-Path Drawer | Interactive timeline with day-by-day plan, assistant hooks, evidence targets. |
| Evidence Snapshot | Quick view of recent submissions, pending reviews, credential progress. |
| Intelligence Feed | Latest signal cards affecting selected tracks. |

## Data Contracts
- **Module Manifest** (`/api/modules`): returns metadata from Module Atlas + authoring front matter.
- **Micro-Path Service** (`/api/micro-paths`): dynamic sequences per persona/phase with constraints.
- **Evidence Summary** (`/api/evidence/summary`): aggregated completion, control status, evaluation health.
- **Signal Feed** (`/api/signals`): curated intelligence items filtered by galaxy, governance tag, industry.

## Component Breakdown
| Component | Responsibility | Notes |
| --- | --- | --- |
| `TrackOverviewCard` | Display galaxy progress, mastery distribution, next deliverables. | Supports hover to show arc breakdown. |
| `MicroPathTimeline` | Render daily plan with modality icons and assistant prompts. | Integrates with Companion suggestions. |
| `EvidenceStatusBadge` | Summaries of evidence locker status (green/yellow/red). | Links to Evidence Locker UI. |
| `SignalImpactList` | Highlights signals impacting selected modules. | Provides CTA to schedule review. |
| `PersonaToggle` | Switch perspectives (architect, leader, risk, agent, creator). | Updates filters + copy. |

## Interaction Model
- Selecting a module surfaces prerequisites, evaluation expectations, and credential impact.
- Adaptive recommendations highlight modules with highest value/urgency based on telemetry gaps.
- Sponsors can switch to portfolio view to see organization-wide progress and risk flags.
- Agent-friendly JSON endpoints allow automation to fetch recommended tracks or schedule labs.

## Accessibility & Internationalization
- Full keyboard navigation; timeline accessible via semantic markup.
- Support for RTL languages and alt text for diagrams/icons.
- Localized content toggles (terminology glossary, regulatory references per region).

## Performance & SEO
- Static metadata for top-level tracks, dynamic server actions for personalized data.
- JSON-LD `BreadcrumbList` and `Course` schema for discoverability.
- Prefetch module content and resources for selected micro-paths.

## Implementation Roadmap
1. **MVP (Oct 2025)**: Static track listing, progress summary, manual micro-path selection.
2. **Adaptive Release (Nov 2025)**: Telemetry-driven recommendations, evidence integration, signal feed.
3. **Sponsor Cockpit (Dec 2025)**: Organization-level view, exportable reports, governance alerts.
4. **Agent API GA (Jan 2026)**: Public endpoints, authentication, rate limiting, developer docs.

## Success Metrics
- 60% reduction in time-to-first-module for new learners.
- ≥80% weekly active learners exploring adaptive recommendations.
- Sponsor satisfaction ≥4.7/5 on visibility and governance clarity.
- Companion agent micro-path adoption >70% for cohorts within two weeks.

