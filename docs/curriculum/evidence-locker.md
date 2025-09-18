# Evidence Locker Specification

Defines the structured portfolio system that captures every learner artifact, telemetry feed, and governance approval. The locker provides audit-ready evidence for credentials, stakeholder reviews, and regulatory inquiries.

## Objectives
- Maintain traceable lineage from micro-lesson to production deployment.
- Provide real-time visibility for mentors, sponsors, and governance councils.
- Enable verifiable credential issuance through immutable evidence manifests.
- Preserve privacy, confidentiality, and jurisdictional requirements.

## Locker Architecture
| Layer | Description | Tooling |
| --- | --- | --- |
| Intake | Collects artifacts from repos, notebooks, dashboards, meetings, and assistant threads. | GitHub Actions, Supabase storage, Langfuse webhooks |
| Normalization | Applies schema, tags, and hashes; redacts sensitive data before persistence. | DLT pipeline, policy-as-code filters |
| Storage | Versioned object store + metadata warehouse; supports retention + GDPR/CCPA compliance. | Supabase/PostgreSQL, S3-compatible bucket |
| Access | Role-based API endpoints, dashboards, and credential manifests. | Next.js evidence UI, `/api/evidence`, GraphQL federation |
| Audit | Immutable log stream for reviews, attestations, and revocations. | AWS QLDB/Azure Confidential Ledger (planned) |

## Metadata Schema
```
EvidenceRecord {
  id: string,
  learnerId: string,
  moduleCode: string,
  galaxy: string,
  arc: 'Core' | 'SystemsStudio' | 'Leadership',
  masteryLevel: 'Explorer' | 'Builder' | 'Architect' | 'Strategist' | 'Luminary',
  artifactType: 'Repo' | 'Notebook' | 'Dashboard' | 'Document' | 'Transcript' | 'Video' | 'Simulation' | 'Credential',
  artifactUrl: string,
  contentHash: string,
  submittedAt: string,
  reviewState: 'Pending' | 'Approved' | 'NeedsRevision' | 'Revoked',
  reviewers: Reviewer[],
  governanceTags: string[],
  controlsSatisfied: string[],
  linkedSignals: string[],
  sponsorAttestation?: SponsorNote,
  retentionPolicy: string
}

Reviewer {
  id: string,
  role: 'Mentor' | 'Sponsor' | 'Governance' | 'Peer' | 'Assistant',
  decision: 'Approved' | 'Rejected' | 'Comment',
  decidedAt: string,
  notes?: string
}
```

## Evidence Streams
- **Code & Infrastructure**: PR links, IaC diffs, deployment manifests, evaluation scripts.
- **Governance Artifacts**: risk registers, control libraries, fairness audits, policy mappings.
- **Observability Dashboards**: SLO dashboards, cost telemetry, evaluation metrics exports.
- **Communication**: executive memos, stakeholder recordings, board simulation tapes.
- **Assistant Interactions**: Critic annotations, Coach feedback, Companion wellness prompts (sanitized).
- **Research & Innovation**: signal cards, experiment reports, venture sprint outcomes.

## Submission Workflow
1. Learner submits deliverable via GitHub PR, LMS upload, or assistant command.
2. Archivist agent pulls artifacts, computes content hash, applies metadata, and attaches governance tags.
3. Evidence validation checks run (schema compliance, completeness, PII redaction, policy mapping).
4. Reviewers receive notification; decisions recorded with digital signatures.
5. Upon approval, credential manifest updates and sponsor dashboards refresh.

## Access Controls
| Role | Permissions |
| --- | --- |
| Learner | View own records, request redaction, download manifests. |
| Mentor | View assigned learners, leave annotations, approve within scope. |
| Sponsor | View sponsored portfolio, attest to business outcomes. |
| Governance | Full audit access, export logs, trigger revocations. |
| Assistant Agents | Limited scoped tokens per function; e.g., Coach can read context, Critic can append annotations. |

## Jurisdiction & Privacy
- Data residency rules stored at module level; evidence replicated only to approved regions.
- Pseudonymized learner IDs default; PIIs stored separately with consent ledger.
- Right-to-be-forgotten automation: queue redaction tasks, maintain tombstone records for compliance.

## Integrations & APIs
- `/api/evidence/{learnerId}`: filtered by role, supports pagination, mastery filters, control searches.
- Webhooks for credential issuance, sponsor attestations, control failures.
- Planned GraphQL federation with enterprise data warehouses for executive reporting.

## Operational Cadence
- Daily integrity check verifying hashes and signatures.
- Weekly metadata audit for schema drift and missing governance tags.
- Quarterly accessibility review ensuring evidence outputs meet WCAG for sponsors and auditors.

## Roadmap (Q4 2025 → Q2 2026)
1. Launch Evidence Locker UI with persona dashboards and drill-down filters.
2. Enable selective evidence sharing with partner auditors via expiring links.
3. Introduce AI-assisted summarization for large evidence bundles, with citation tracing.
4. Support blockchain-backed notarization for high-stakes regulatory submissions.
5. Embed sustainability telemetry (energy, carbon estimates) into evidence metadata.

