# Module Authoring Standards

Defines the metadata, authoring process, and quality gates for MDX modules powering the Academy.

## Front Matter Schema
```
---
title: string
moduleCode: string # e.g., G4-C3
galaxy: string
arc: Core | SystemsStudio | Leadership
masteryLevel: Explorer | Builder | Architect | Strategist | Luminary
personaFit:
  - lead-architect
  - program-leader
prerequisites:
  - moduleCode
modality: ML | LB | WK | SP | CL | MC | RT | RS
durationHours: number
deliverables:
  - { title: string, evidenceType: string, template: string }
evidenceSignals:
  - evaluationMetricId
resources:
  - { title: string, url: string, type: research | regulation | tooling }
assistantInstructions:
  coach: string
  critic: string
  companion: string
refreshCadenceDays: number
lastReviewed: YYYY-MM-DD
contributors:
  - { name: string, role: subject-matter-expert | mentor | reviewer }
version: semver
---
```

## Content Structure
1. **Pulse Overview**: succinct summary with takeaways tied to learning outcomes.
2. **Concept Primer**: annotated explanations, diagrams, citations.
3. **Applied Walkthrough**: step-by-step guidance, code snippets, sandbox instructions.
4. **Assistant Prompts**: sample interactions for Coach, Critic, Companion support.
5. **Reflection & Discussion**: questions to deepen reasoning and contextualize for sponsors.
6. **Deliverable Checklist**: explicit acceptance criteria, control IDs, evaluation hooks.
7. **Further Signals**: links to intelligence updates, optional deep dives.

## Quality Gates
- **Peer Review**: at least one subject matter expert and one governance reviewer sign-off.
- **Evaluation Alignment**: metrics defined in `evidenceSignals` must exist in evaluation registry.
- **Accessibility**: alt text, captions, color contrast, keyboard navigation instructions.
- **Localization Readiness**: avoid idioms, provide translation notes for key terms.
- **Compliance**: map to relevant policies (e.g., EU AI Act risk classes) where applicable.

## Authoring Workflow
1. Draft module in MDX + front matter; store in `/content/modules/{moduleCode}.mdx` (planned).
2. Run `npm run lint:mdx` and `npm run lint:links` for formatting and link validation.
3. Submit PR with evidence of research citations and evaluation plan.
4. Assistant auto-generates diff summary, reviewer checklists, and test harness suggestions.
5. Upon approval, module ingested into knowledge graph and assistant embeddings.

## Change Management
- Version increments follow semantic rules: MAJOR (outcome change), MINOR (content expansion), PATCH (typo/clarity).
- Changelog entry required in `docs/curriculum/changelog.md` with citation references.
- Auto-notify cohorts and alumni when MAJOR updates affect active micro-paths.
- Assistant highlights differences between versions during coaching sessions.

## Author Resources
- Template repository with MDX starters, diagram components, and interactive sandbox instructions.
- Research digest feed for quick access to recent citations.
- Prompt library for assistant coordination (Coach, Critic, Companion).

## Review Checklist (Excerpt)
- [ ] Front matter schema valid, linted.
- [ ] Learning outcomes measurable and aligned to Module Atlas entry.
- [ ] Deliverable instructions map to Evidence Locker templates.
- [ ] Evaluation hooks defined and linked to evaluation ops scripts.
- [ ] Accessibility and localization notes complete.
- [ ] Risk considerations and governance tags accurate.

