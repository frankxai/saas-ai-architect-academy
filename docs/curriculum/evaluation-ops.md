# Evaluation & QA Operations

Guidance for building, running, and governing the evaluation fabric that underpins the Academy's labs, capstones, and production pilots.

## Evaluation Stack
| Layer | Purpose | Representative Tools |
| --- | --- | --- |
| Data | Curate datasets, benchmarks, and synthetic scenarios. | Supabase, Weights & Biases Datasets, OpenAI Evals, Triton labeling |
| Execution | Run automated tests, scoring, and analysis pipelines. | LangSmith, Langfuse, Weights & Biases, AWS Step Functions |
| Governance | Track control coverage, risk thresholds, audit logs. | Policy-as-code repo, Evidently AI, NIST AI RMF mapping |
| Insights | Visualize metrics, drift, and decision logs. | Metabase/Looker, Grafana, PowerBI |
| Feedback | Capture human review, stakeholder comments, and assistant critique. | GitHub issues, Notion, Loom transcripts |

## Evaluation Types
- **Functional**: accuracy, relevance, latency, cost-per-call.
- **Safety & Guardrails**: jailbreak resistance, harmful content filters, policy adherence.
- **Fairness & Bias**: demographic parity, equal opportunity, intersectional audits.
- **Robustness**: adversarial prompts, context perturbations, tool failure simulations.
- **Economic**: ROI, productivity delta, cost-efficiency metrics.
- **User Experience**: SUS scores, qualitative feedback, friction detection.

## Pipeline Blueprint
1. **Spec Definition**: module or capstone authors define success metrics, thresholds, and evaluation cadence.
2. **Dataset Assembly**: mix curated, synthetic, and live feedback data; tag with governance metadata.
3. **Run Orchestration**: scheduled tests (daily/weekly) plus event-driven runs triggered by deployments or high-severity incidents.
4. **Scoring & Analysis**: combine statistical metrics with LLM judges and human review; store results with version tags.
5. **Governance Checkpoint**: Critic agent compares results to policy thresholds, triggers escalations if breached.
6. **Reporting & Actions**: dashboards update, alerts fire, and backlog tickets generated for remediation.

## Escalation Matrix
| Severity | Trigger Examples | Response Target | Playbook |
| --- | --- | --- | --- |
| Critical | Safety violation, regulatory breach, catastrophic hallucination | 4 hours | Incident bridge, rollback, regulatory notification prep |
| High | Consistent metric degradation, fairness gap > threshold | 12 hours | Mitigation plan, stakeholder comms, increased sampling |
| Medium | Emerging drift, performance regressions | 24 hours | Backlog ticket, follow-up evaluation, micro-path adjustments |
| Low | Documentation gaps, minor telemetry anomalies | Weekly | Groom backlog, update assistant guidance |

## Evaluation Artifacts
- **Evaluation Specs (`eval.yaml`)**: metrics, datasets, thresholds, reviewers, frequency.
- **Run Manifests**: JSON payload capturing dataset versions, model configs, prompt templates.
- **Scorecards**: narrative summary with metrics, anomalies, recommendations, next actions.
- **Governance Logs**: control IDs, reviewer signatures, compliance status.
- **Knowledge Graph Links**: pointer to modules, deliverables, and signals impacted by evaluation outcome.

## Integration with Curriculum
- Each Module Atlas entry references evaluation expectations (`evaluationSignals`).
- Studio labs include evaluation harness instructions with repo templates and CI integration.
- Micro-path adjustments triggered when evaluation gaps align with learner objectives.
- Credential requirements bake in evaluation success criteria (e.g., Builder badge requires green status on evaluation harness).

## Instructor & Mentor Playbook
- Review evaluation dashboards pre-clinic to tailor feedback.
- Assign remediation micro-paths when evaluation gaps persist for >14 days.
- Record governance decisions with control IDs and sponsor notes.
- Encourage learners to annotate evaluation results with hypotheses and next experiments.

## Automation & Testing
- CI pipelines run regression tests on prompts, retrieval, and evaluation heuristics before release.
- Canary deployments with shadow evaluation ensure regressions caught before impacting production learners.
- Synthetic judge rotation prevents drift; calibrate monthly against human labels.

## Roadmap
1. Introduce evaluation blueprints per industry vertical with domain-specific metrics.
2. Launch evaluation marketplace for community-contributed datasets and tests (curated/approved).
3. Integrate semantic diff tooling to auto-generate evaluation changelog notes.
4. Enable real-time evaluation telemetry overlays in assistant conversations.
5. Publish public evaluation transparency report summarizing cohort performance and governance health.

