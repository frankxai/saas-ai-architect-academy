# Agentic Journey & Query Mapping

## User + Agent Personas
- **Architect + ArchitectAI**: human lead architect with partner agent retrieving blueprints, evaluation plans, and risk controls.
- **Program Lead + OpsBot**: program manager paired with agent that produces reports, tracks KPIs, and syncs with project tools.
- **Risk Partner + GuardrailAI**: compliance leader whose agent monitors evidence, flags control gaps, and drafts audit summaries.
- **Delivery Engineer + BuildBot**: engineer + agent duo running labs, generating scaffolds, and comparing toolchains.
- **Executive Sponsor + InsightAgent**: leadership persona with agent summarizing portfolio health, ROI, and strategic alignment.

## Journey Map
1. **Discover**
   - Human: scan hero, persona outcomes, roadmap.
   - Agent: parse metadata, structured data, sitemap anchors.
2. **Define Goals**
   - Human: select persona and objectives.
   - Agent: (future) POST payload to /api/intake for recommended path.
3. **Assemble Plan**
   - Human: review suggested modules, labs, governance tasks.
   - Agent: fetch module JSON, compose timeline, set reminders.
4. **Execute & Govern**
   - Human: track progress, upload deliverables, request assistant support.
   - Agent: trigger evaluation tools, push updates to Slack/Jira, monitor risk signals.
5. **Review & Iterate**
   - Human: measure outcomes, socialize wins, adjust roadmap.
   - Agent: generate reports, update maturity score, recommend next modules.

## Query Taxonomy
| Intent | Example Natural Query | Agent/API Query |
| --- | --- | --- |
| Blueprint | "enterprise rag architecture" | /api/modules?tag=pattern&topic=rag |
| Governance | "ai risk register template" | /api/modules?tag=governance&deliverable=checklist |
| Evaluation | "llm evaluation rubric" | /assistant/tools?name=evaluation-matrix |
| Operations | "ai sre playbook" | /api/modules?tag=operations |
| Learning | "ai architect microlearning" | /api/tracks?persona=architect&level=advanced |

## Signals to Expose
- Structured data (JSON-LD) for organization, courses, how-to content.
- Consistent anchor IDs and heading hierarchy for scraping.
- Canonical URLs, robots directives, sitemap entries for major sections.
- (Planned) JSON endpoints for modules, personas, roadmap, and assistant capabilities.

## Backlog for Agent Enablement
- /api/search endpoint returning ranked modules with metadata.
- /api/modules/:id endpoint with deliverables, assets, citations.
- API key + rate limiting for trusted agent access.
- Developer docs with sample prompts and payloads.
- Event webhooks for assistant actions and workspace updates.