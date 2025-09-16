# UI and UX Principles

## Experience Guidelines
1. **Clarity over novelty**: every screen should make the next decision obvious with purposeful typography, progressive disclosure, and contextual hints.
2. **Success sequencing**: highlight the next meaningful action, celebrate completion, and surface the upcoming milestone.
3. **Evidence everywhere**: cite sources, link to supporting modules, and show confidence levels for assistant outputs.
4. **Inclusive by design**: color contrast, keyboard navigation, captions, and language that aligns with global teams.
5. **Adaptive depth**: provide quick summaries with the ability to drill into blueprints, code, or risk playbooks without leaving the flow.

## Core UI Components
- **Navigation shell**: global nav with sections (Curriculum, Assistant, Workspaces, Governance, Insights) and persona-aware shortcuts.
- **Module cards**: summary, time investment, prerequisites, deliverable, and status (in-progress, completed, recommended).
- **Assistant console**: chat timeline, context sidebar, action cards (Generate plan, Draft ADR, Launch lab), export panel.
- **Workspace dashboard**: Kanban of modules, checklists, evaluation widgets, and integration activity.
- **Governance center**: compliance scorecards, risk register, evidence upload, approval timeline.

## Visual Identity
- **Palette**: deep slate base, cyan accents for interactive elements, warm neutrals for secondary information, alert colors for risk/compliance signals.
- **Typography**: Geist for UI copy, Geist Mono for code snippets and metrics.
- **Iconography**: simple stroke icons that mirror architectural diagrams; leverage Academy SVG assets.
- **Motion**: purposeful micro-interactions (module hover states, assistant response reveal, progress transitions) under 200ms.

## Content Patterns
- Narrative blocks start with outcome, then approach, then references.
- Assistant responses always include: summary, recommended module(s), references, and next action buttons.
- Governance surfaces show status badges (On track, Needs review, Blocked) with links to remediation steps.

## Progressive Disclosure Map
1. **Marketing**: hero → value pillars → persona outcomes → roadmap → social proof → waitlist.
2. **Onboarding**: persona selection → program goals → baseline assessment → curated plan preview.
3. **In-product module**: overview → steps → resources → deliverable upload → assistant suggestions → reflection.
4. **Assistant session**: intake prompt → context confirmation → response + actions → follow-up clarifications → export.

## Research and Validation Plan
- Conduct moderated sessions with 5-7 AI architects to validate navigation, module layout, and assistant UX.
- Run heuristic evaluation against standard enterprise UX checklists (Nielsen, GOV.UK, WCAG).
- Instrument analytics for module dwell time, assistant action usage, and drop-off points.
- Maintain ongoing UX backlog sourced from community discussions and support channels.