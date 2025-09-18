# Frontier Intelligence Grid

System for aggregating, prioritizing, and disseminating the most relevant intelligence for AI Architects as of September 2025.

## Intelligence Domains
| Domain | Sources | Update Cadence | Output |
| --- | --- | --- | --- |
| Regulatory & Policy | EU AI Act register, US EO tracker, UK AI Safety Institute, Singapore AI Verify, Canada AIDA pilot | Daily diff | Policy brief with control triggers |
| Model & Toolchain | OpenAI, Anthropic, Google, Meta, Mistral, Cohere, Hugging Face, open-source repos (Llama, VLLM, Ray, LangChain) | Daily | Model/tool changelog, eval benchmark updates |
| Infrastructure & Ops | AWS Bedrock, Azure AI, GCP Vertex, Databricks, Snowflake, OctoAI, Supabase | Twice weekly | Platform capability map, cost/perf analysis |
| Evaluation Science | MLCommons, Dynabench, HELM, research labs (Stanford CRFM, MIT, Allen AI), LangSmith/Langfuse | Weekly | Evaluation digest, reproducibility alerts |
| Responsible AI | NIST, ISO/IEC, IEEE, Partnership on AI, Algorithmic Justice League | Weekly | Control pattern updates, risk scenarios |
| Agentic Workflows | Research on multi-agent orchestration (LangGraph, CrewAI, AutoGen, Swarm), industry case studies | Weekly | Agent pattern deck, reliability watchlist |
| Industry Case Signals | Healthcare (Mayo Clinic), Finance (JPMorgan AI), Public Sector (GovTech Singapore), Creative (Adobe Firefly), Manufacturing (Siemens) | Bi-weekly | Sector playbooks, ROI benchmarks |

## Processing Pipeline
1. **Ingestion**: RSS, APIs, newsletter parsing (w/ permission), manual expert submissions.
2. **Normalization**: deduplicate, classify by domain, assign recency score.
3. **Prioritization**: risk/impact matrix (high risk or high upside surface first), persona relevance mapping.
4. **Curation**: Scout agent drafts summary with citations, includes recommended module refresh triggers.
5. **Distribution**: Pulse briefings, micro-path recommendations, knowledge graph updates, sponsor reports.

## Intelligence Outputs
- **Weekly Pulse Brief**: 10-minute video + markdown digest with citations, risk alerts, and recommended module updates.
- **Signal Cards**: structured JSON `signal` objects with fields (`id`, `domain`, `title`, `summary`, `impact`, `persona`, `linkedModules`, `action`).
- **Risk Radar**: visual dashboard showing regulatory heat, evaluation anomalies, infrastructure incidents.
- **Innovation Burndown**: track experiments, partner pilots, and venture collaborations with status and ROI.

## Module Refresh Protocol
- Scout flags modules when new research invalidates assumptions or introduces superior practices.
- Curriculum council triages flagged modules within 72 hours; updates content or adds contextual footnotes.
- Change log updates (docs/curriculum/changelog.md) with summary, citations, and effective date.
- Companion agent pushes micro-path adjustments if learners rely on impacted modules.

## External Partnerships
- `RegIntel Network`: consortium of policy experts providing embargoed insights before public release.
- `Ops Pulse Alliance`: shared telemetry with select enterprise partners for anonymized benchmarking.
- `Frontier Research Guild`: cross-lab working group evaluating open-source and enterprise frontier models.

## Tooling Roadmap
- Q4 2025: Launch `/api/signals` endpoint for partners to query curated intelligence.
- Q1 2026: Integrate scenario-based simulations triggered by signal combinations.
- Q2 2026: Offer premium subscribers access to interactive knowledge graph and forecasting models.

