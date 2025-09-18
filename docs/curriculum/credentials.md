# Credential Framework

Defines how learners earn, maintain, and verify credentials across the 2025 Academy. All credentials leverage W3C Verifiable Credentials JSON payloads, cryptographic signatures, and evidence manifests linking back to the Evidence Locker.

## Credential Tiers
| Credential | Primary Audience | Requirements | Evidence Payload |
| --- | --- | --- | --- |
| Explorer Badge | New cohort entrants | Complete 8 Explorer modules (>=80% score), submit mission charter, pass responsible AI quiz. | Module completion ledger, quiz transcript, mission charter link. |
| Builder Badge | Practitioners delivering labs | Finish 12 Builder modules (≥4 labs), achieve green status on evaluation harness, document risk controls. | Lab repos, evaluation metrics export, control library snapshot. |
| Architect Credential | Platform integration leaders | Lead stakeholder critique, publish ADR pack, meet SLO targets for pilot deployment. | ADR bundle, observability dashboard screenshots, governance sign-off. |
| Strategist Credential | Executive storytellers and program leaders | Facilitate board simulation, maintain adoption telemetry, deliver policy-to-control trace. | Simulation recording, telemetry report, traceability matrix. |
| Luminary Fellowship | Thought leaders & mentors | Author 3 knowledge assets, mentor 2 cohorts, maintain 95% evaluation confidence. | Knowledge assets, mentorship feedback, evaluation trend report. |

## Specialization Seals
| Seal | Alignment | Requirements |
| --- | --- | --- |
| Responsible AI Steward | Policy, legal, compliance partners | Complete G6 arc Builder+, pass fairness audit, co-author governance playbook. |
| Agent Ops Maestro | Automation & agent leads | Ship agent observability stack, automation ROI model, host client showcase. |
| Frontier Innovator | Research guild leaders | Run venture sprint, publish frontier compendium, advise sandbox/regulator. |
| Operational Excellence | Reliability & cost owners | Maintain SLO performance for 8 weeks, publish sustainability report, lead incident retros. |
| Portfolio Storyteller | Executive communication leads | Deliver investor narrative, crisis comms playbook, coaching assessment with >=4.5 rating. |

Seals can be stacked on base credentials. Companion agent prompts candidates when requirements near completion.

## Verification Flow
1. **Evidence Assembly**: Archivist agent compiles artifacts, telemetry exports, and governance attestations into Evidence Locker folders.
2. **Rubric Evaluation**: Critic agent pre-scores against rubric; mentor reviewers perform oversight and sign digital attestation.
3. **Credential Issuance**: Credential service generates VC JSON with DID signature. Badge metadata includes issuance date, expiry, links to evidence.
4. **Distribution**: Learner receives email + dashboard notification, can push to LinkedIn, Credly, HRIS via integration.
5. **Monitoring**: Companion agent tracks expiry windows and triggers renewal micro-path suggestions.

## Renewal & Revocation
- Explorer/Builder: optional refresh every 18 months; auto-renew with continued activity.
- Architect/Strategist: annual check-in requiring updated telemetry and governance recertification.
- Luminary: annual publication + mentorship requirement, board review approval.
- Revocation triggers: policy breach, control failure, or evidence no longer valid. Governance council initiates and logs revocation events.

## Data Schema
```
Credential {
  id: string,
  type: ['VerifiableCredential', 'AIArchitectCredential'],
  credentialSubject: {
    learnerId: string,
    credentialType: 'Explorer' | 'Builder' | 'Architect' | 'Strategist' | 'Luminary',
    seals: string[],
    issuedOn: string,
    validUntil?: string,
    evidence: EvidenceRef[],
    sponsorAttestation?: string
  },
  issuer: string,
  evidenceManifest: string,
  proof: {
    type: 'Ed25519Signature2020',
    created: string,
    verificationMethod: string,
    proofPurpose: 'assertionMethod',
    jws: string
  }
}

EvidenceRef {
  id: string,
  type: 'Repo' | 'Dashboard' | 'Video' | 'Transcript' | 'Document',
  url: string,
  description: string,
  hash: string
}
```

## Governance
- Credential Council meets monthly to review edge cases, appeals, and pipeline health.
- Anti-bias audit quarterly ensures evaluation criteria remain equitable across regions, industries, and demographics.
- Transparency report published annually with aggregate stats (issuance counts, renewal rates, revocations, satisfaction).

## Integration Roadmap
- Q4 2025: Launch credential API (`/api/credentials/:id`) with verification endpoint and signed metadata.
- Q1 2026: Introduce wallet integration (SpruceID, Bloom) and partner HRIS connectors.
- Q2 2026: Support skills graph export for enterprise talent intelligence systems.

