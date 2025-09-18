# Evaluation Registry

Central catalogue describing evaluation metrics, datasets, and governance metadata for the Academy.

## Schema
```
EvaluationMetric {
  id: string,
  name: string,
  description: string,
  category: 'Functional' | 'Safety' | 'Fairness' | 'Robustness' | 'Economic' | 'UX',
  units: string,
  target: string,
  threshold: string,
  datasetIds: string[],
  applicableModules: string[],
  governanceTags: string[],
  refreshCadenceDays: number,
  owner: string,
  lastReviewed: string
}

Dataset {
  id: string,
  name: string,
  description: string,
  source: string,
  piiClassification: 'None' | 'Low' | 'Moderate' | 'High',
  licensing: string,
  jurisdictions: string[],
  syntheticSupport: boolean,
  lastUpdated: string,
  qualityScore: number
}
```

## Example Metrics
| ID | Name | Category | Target | Threshold | Modules |
| --- | --- | --- | --- | --- | --- |
| FUNC-RAG-001 | Retrieval top-k precision | Functional | ≥0.78 | <0.7 triggers remediation | G3-C3, G4-C3 |
| SAFE-JB-002 | Jailbreak detection rate | Safety | ≥0.96 | <0.9 triggers incident | G4-S4, G7-S4 |
| FAIR-LOC-003 | Localization parity | Fairness | ≤3% variance | >5% triggers fairness audit | G6-S4, G8-S3 |
| ECON-COST-004 | Cost per resolved task | Economic | ≤$0.12 | >$0.18 triggers optimization | G7-S5, G9-C5 |
| UX-SUS-005 | System usability score | UX | ≥85 | <80 triggers design review | G8-C6, G10-C5 |

## Governance Process
- Metric owners maintain definitions; monthly review ensures alignment with industry benchmarks.
- New metrics require proposal, peer review, governance sign-off, and inclusion in evaluation specs.
- Retire metrics only when replaced; maintain historical logs for comparability.

## API Blueprint
- `/api/evaluations/metrics`: list with filters (category, module, governance tag).
- `/api/evaluations/datasets`: dataset metadata, licensing, jurisdiction filters.
- `/api/evaluations/registry`: combined view (metric + dataset + module mapping).

## Automation Hooks
- Critic agent references registry to enforce evaluation coverage.
- Module authoring lint checks ensure referenced metrics exist.
- Sponsor cockpit pulls target vs actual metrics for dashboards.

## Roadmap
1. Publish public documentation for metrics used in transparency reporting.
2. Integrate third-party benchmarks (MLCommons, HELM) for cross-validation.
3. Add fairness metric calculators with demographic intersection support.
4. Launch evaluation marketplace enabling partners to contribute datasets/tests (peer reviewed).

