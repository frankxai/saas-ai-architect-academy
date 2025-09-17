# Hub Content & Data Model

## Purpose
Define the unified content system powering the AI Architect Academy hub so humans, creators, clients, and companion agents receive high-value experiences with consistent metadata, linking, and SEO coverage.

## Core Surfaces
| Surface | Description | Primary Audience | Agent Contract |
| --- | --- | --- | --- |
| Hero + Stats | Social-proofed positioning for the global AI architecture voice | All visitors | Anchor IDs, CTA targets |
| Experience Pillars | Four-pillar overview blending delivery, governance, operations, and creator impact | Architects, executives, creators | JSON-LD anchors, highlight metadata |
| Services Deck | Premium offers with engagement models and ROI proof points | High-value clients, enterprise sponsors | Structured list (title, price-on-request flag, lead CTA) |
| Resource Vault | Free, premium, and agent-ready downloads with format tags | Architects, creators, family circle | Card schema: `{title, tier, format, url, persona}` |
| Projects Pulseboard | Progress telemetry for books, ventures, and experiments | Community, family, influencers | Timeline schema: `{title, stage, lastUpdated, nextMilestone}` |
| Insight Playlists | SEO-focused content clusters mapped to evergreen articles | Creators, SEO audience, agents | Tag map: `{playlist, focusKeywords, plannedAssets}` |
| Community Layer | Waitlists, masterminds, discussion links | Supporters, partners | CTA schema: `{channel, description, url}` |

## Content Types
1. **Module Track** – inherits from the Academy corpus with tags `discipline`, `persona`, `maturity`, `deliverable`, `access-tier`.
2. **Service Offer** – metadata includes `tier` (intensive, advisory, cohort), `ideal-customer-profile`, `outcomes`, `engagement-cta`.
3. **Resource Artifact** – front matter exposes `format`, `length`, `persona`, `keywords`, `status` (available, waitlist, in-progress).
4. **Project Pulse** – stored as `slug`, `title`, `description`, `stage`, `last-updated`, `next-milestone`, `share-link` (optional).
5. **Insight Playlist** – holds `theme`, `audiences`, `primary-keywords`, `supporting-queries`, `planned-assets` (article, video, carousel, agent prompt pack).

## Metadata & Taxonomy
- Primary taxonomy facets: `persona`, `experience-pillar`, `keyword-cluster`, `access-tier`, `format`, `maturity-level`.
- Secondary facets: `integration`, `policy-standard`, `engagement-type`, `content-status`.
- All cards surface badges for `access-tier` (Free, Premium, Inner Circle, Agent API) to guide expectation setting.
- Structured data roadmap: EducationalOrganization (live), FAQ (live), BreadcrumbList (planned), Product (services), CreativeWorkSeries (insight playlists).

## Cross-linking Rules
- Every section links to at least two other anchors to reduce bounce and help agent crawlers map relationships.
- Resource cards link back to relevant service offers and insight playlists to encourage depth.
- Project pulses reference modules or services powering the milestone to reinforce value loops.
- Community CTAs reference GitHub discussions, newsletter signup, and email contact.

## Search & Agent Interfaces
- Provide `/api/resources`, `/api/services`, `/api/projects` (planned) delivering JSON arrays matching the schemas above.
- Hash anchors remain stable to support direct linking from newsletters, social posts, and agents.
- Publish canonical query examples for agents (`/api/resources?tier=premium&persona=executive`).
- Document rate limits (planned 60 requests/minute) and authentication (API key via supporter portal) before GA launch.

## Publishing Cadence
| Asset | Cadence | Owner |
| --- | --- | --- |
| Insight playlist article | Bi-weekly | Thought leadership team |
| Resource Vault updates | Weekly | Curriculum & Creator squads |
| Project pulse refresh | Weekly (books/cohorts), monthly (ventures) | Founder + ops |
| Services proof points | Quarterly | Client delivery team |
| FAQ expansion | Monthly | Research & support |

## Success Indicators
- 40% quarter-over-quarter growth in organic clicks to Resource Vault assets.
- 20% of premium service leads originated via insight playlist articles.
- Companion agent usage >15% of total API traffic within three months of release.
- Supporter satisfaction (survey) >4.6/5 for clarity of updates and availability of resources.
