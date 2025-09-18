export type GalaxyArc = {
  name: string;
  summary: string;
  deliverables: string[];
};

export type LearningGalaxy = {
  code: string;
  title: string;
  focus: string;
  duration: string;
  signatureEvidence: string;
  arcs: GalaxyArc[];
};

export const learningGalaxies: LearningGalaxy[] = [
  {
    code: "G0",
    title: "Launch & Telemetry Ops",
    focus: "Onboarding, diagnostics, instrumentation",
    duration: "Orientation week",
    signatureEvidence: "Orientation diagnostic, telemetry cockpit",
    arcs: [
      {
        name: "Core",
        summary: "Activate assistant, configure evidence locker, align sponsor goals.",
        deliverables: [
          "Launch brief",
          "Evidence locker template",
          "Assistant prompting playbook",
        ],
      },
      {
        name: "Systems Studio",
        summary: "Connect knowledge workspaces and telemetry pipelines for cohorts.",
        deliverables: [
          "Knowledge fabric workspace",
          "Telemetry pipeline",
          "API integration spec",
        ],
      },
      {
        name: "Leadership",
        summary: "Translate telemetry into sponsor insight and community updates.",
        deliverables: [
          "Sponsor insight deck",
          "Telemetry ethics position",
          "Credential governance blueprint",
        ],
      },
    ],
  },
  {
    code: "G1",
    title: "Vision & Strategy Orchestration",
    focus: "Portfolio strategy, value framing",
    duration: "2 weeks",
    signatureEvidence: "AI mission charter, portfolio roadmap",
    arcs: [
      {
        name: "Core",
        summary: "Craft mission, value metrics, and stakeholder insights.",
        deliverables: [
          "AI mission charter",
          "Capability gap canvas",
          "Stakeholder intent dossier",
        ],
      },
      {
        name: "Systems Studio",
        summary: "Model scenarios, OKR cascades, and change management plans.",
        deliverables: [
          "Scenario financial model",
          "Strategy to OKR cascade",
          "Change leadership blueprint",
        ],
      },
      {
        name: "Leadership",
        summary: "Drive executive alignment, ecosystem partnerships, and storytelling.",
        deliverables: [
          "Board narrative deck",
          "Governance council proceedings",
          "Ecosystem alignment memo",
        ],
      },
    ],
  },
  {
    code: "G2",
    title: "Systems & Pattern Thinking",
    focus: "Systems mapping, reusable patterns",
    duration: "3 weeks",
    signatureEvidence: "Systems map, pattern decision logs",
    arcs: [
      {
        name: "Core",
        summary: "Introduce systems dynamics and socio technical analysis.",
        deliverables: [
          "Architecture systems primer",
          "Feedback loop inventory",
          "Pattern critique log",
        ],
      },
      {
        name: "Systems Studio",
        summary: "Construct simulations and interaction contracts for platforms.",
        deliverables: [
          "Scenario simulation model",
          "Architecture decision records",
          "Interaction contract pack",
        ],
      },
      {
        name: "Leadership",
        summary: "Evolve pattern governance, teach adaptive architecture, advise consortia.",
        deliverables: [
          "Systems storytelling kit",
          "Guild governance charter",
          "Adaptive architecture masterclass",
        ],
      },
    ],
  },
  {
    code: "G3",
    title: "Data, Knowledge & Semantics",
    focus: "Governed data, retrieval, semantic ops",
    duration: "4 weeks",
    signatureEvidence: "Vector schema playbook, knowledge governance charter",
    arcs: [
      {
        name: "Core",
        summary: "Stand up data governance, semantic layers, and privacy reviews.",
        deliverables: [
          "Data governance primer",
          "Semantic layer briefing",
          "Privacy impact summary",
        ],
      },
      {
        name: "Systems Studio",
        summary: "Engineer hybrid retrieval, synthetic data, feature stores.",
        deliverables: [
          "Hybrid retrieval pipeline",
          "Synthetic data playbook",
          "Feature store blueprint",
        ],
      },
      {
        name: "Leadership",
        summary: "Build data product portfolios and external data trust accords.",
        deliverables: [
          "Data product portfolio plan",
          "Knowledge governance charter",
          "Semantic ops insight kit",
        ],
      },
    ],
  },
  {
    code: "G4",
    title: "Model Engineering & Evaluation",
    focus: "Lifecycle, evaluation, safety",
    duration: "4 weeks",
    signatureEvidence: "Evaluation harness repo, audit packet",
    arcs: [
      {
        name: "Core",
        summary: "Map lifecycle stages, strategies, and evaluation baselines.",
        deliverables: [
          "Model lifecycle primer",
          "Failure mode catalog",
          "Evaluation review record",
        ],
      },
      {
        name: "Systems Studio",
        summary: "Deploy evaluation pipelines, red team drills, and data ops.",
        deliverables: [
          "Evaluation pipeline",
          "Performance optimization report",
          "Evaluation data ops blueprint",
        ],
      },
      {
        name: "Leadership",
        summary: "Run governance boards and publish evaluation science.",
        deliverables: [
          "Evaluation ROI brief",
          "Governance board charter",
          "Evaluation research release",
        ],
      },
    ],
  },
  {
    code: "G5",
    title: "Platform & Delivery Infrastructure",
    focus: "Infrastructure, CI/CD, observability",
    duration: "4 weeks",
    signatureEvidence: "Deployment blueprint, readiness dossier",
    arcs: [
      {
        name: "Core",
        summary: "Provision IaC baselines, CI/CD, rollout strategies.",
        deliverables: [
          "Platform architecture primer",
          "CI/CD pipeline spec",
          "Rollout playbook",
        ],
      },
      {
        name: "Systems Studio",
        summary: "Deploy inference platforms, observability stacks, secrets governance.",
        deliverables: [
          "Inference platform",
          "Observability blueprint",
          "Secrets governance spec",
        ],
      },
      {
        name: "Leadership",
        summary: "Present platform investments and drive interoperability alliances.",
        deliverables: [
          "Platform investment deck",
          "Vendor governance framework",
          "Reference implementation release",
        ],
      },
    ],
  },
  {
    code: "G6",
    title: "Responsible AI & Policy Integration",
    focus: "Risk, controls, fairness",
    duration: "3 weeks",
    signatureEvidence: "Control library matrix, fairness audit",
    arcs: [
      {
        name: "Core",
        summary: "Decode regulations, design control libraries, automate documentation.",
        deliverables: [
          "Policy landscape brief",
          "Control library",
          "Documentation automation pipeline",
        ],
      },
      {
        name: "Systems Studio",
        summary: "Map evidence, policy as code, fairness audits, oversight orchestration.",
        deliverables: [
          "Control evidence mapping",
          "Policy as code repo",
          "Oversight orchestration spec",
        ],
      },
      {
        name: "Leadership",
        summary: "Run readiness war rooms and publish policy guidance.",
        deliverables: [
          "Responsible AI dashboard",
          "Regulatory readiness dossier",
          "Policy whitepaper",
        ],
      },
    ],
  },
  {
    code: "G7",
    title: "Agentic Workflows & Automation",
    focus: "Agents, orchestration, safety",
    duration: "3 weeks",
    signatureEvidence: "Agent workflow catalog, observability stack",
    arcs: [
      {
        name: "Core",
        summary: "Design agent taxonomies, routing, human in the loop safety.",
        deliverables: [
          "Agent taxonomy brief",
          "Agent router implementation",
          "Incident ledger",
        ],
      },
      {
        name: "Systems Studio",
        summary: "Deploy multi agent environments, enterprise integrations, reliability drills.",
        deliverables: [
          "Multi agent environment",
          "Enterprise integration pack",
          "Reliability drill dossier",
        ],
      },
      {
        name: "Leadership",
        summary: "Drive automation councils, publish templates, advise on governance.",
        deliverables: [
          "Agent strategy deck",
          "Automation council charter",
          "Agent workflow release",
        ],
      },
    ],
  },
  {
    code: "G8",
    title: "Product, UX & Adoption",
    focus: "Experience design, adoption",
    duration: "3 weeks",
    signatureEvidence: "Journey map, trust experience spec",
    arcs: [
      {
        name: "Core",
        summary: "Map user research, prototype experiences, run usability tests.",
        deliverables: [
          "AI product primer",
          "Experience prototype",
          "Usability test report",
        ],
      },
      {
        name: "Systems Studio",
        summary: "Build personalization, content ops, trust patterns, adoption accelerators.",
        deliverables: [
          "Personalization architecture",
          "Content ops pipeline",
          "Trust experience spec",
        ],
      },
      {
        name: "Leadership",
        summary: "Amplify storytelling, lead advisory boards, publish casebooks.",
        deliverables: [
          "Product storytelling deck",
          "Advisory board insights",
          "Experience pattern casebook",
        ],
      },
    ],
  },
  {
    code: "G9",
    title: "Operations, Reliability & Cost",
    focus: "SRE, cost, sustainability",
    duration: "3 weeks",
    signatureEvidence: "SLO instrumentation pack, sustainability operations plan",
    arcs: [
      {
        name: "Core",
        summary: "Instrument reliability, cost drivers, incident response.",
        deliverables: [
          "SLO instrumentation pack",
          "Incident response playbook",
          "Postmortem portfolio",
        ],
      },
      {
        name: "Systems Studio",
        summary: "Automate detection, plan capacity, run disaster recovery.",
        deliverables: [
          "Incident automation kit",
          "Capacity and cost forecast",
          "DR simulation dossier",
        ],
      },
      {
        name: "Leadership",
        summary: "Report operational health, budget alignment, sustainability.",
        deliverables: [
          "Reliability cost report",
          "Budget planning pack",
          "Resilient ops whitepaper",
        ],
      },
    ],
  },
  {
    code: "G10",
    title: "Executive Communication & Influence",
    focus: "Stakeholder narratives, governance",
    duration: "2 weeks",
    signatureEvidence: "Executive memo, communication operating system",
    arcs: [
      {
        name: "Core",
        summary: "Build stakeholder maps, executive briefs, media playbooks.",
        deliverables: [
          "Stakeholder influence map",
          "Executive memo",
          "Media response playbook",
        ],
      },
      {
        name: "Systems Studio",
        summary: "Run board simulations, architect communication cadences, negotiation workshops.",
        deliverables: [
          "Board simulation pack",
          "Communication operating system",
          "Negotiation dossier",
        ],
      },
      {
        name: "Leadership",
        summary: "Deliver investor narratives, crisis drills, policy forums.",
        deliverables: [
          "Investor narrative deck",
          "Crisis comms playbook",
          "Leadership communication handbook",
        ],
      },
    ],
  },
  {
    code: "G11",
    title: "Frontier Intelligence & Innovation",
    focus: "Research synthesis, venture experimentation",
    duration: "Ongoing",
    signatureEvidence: "Research ingestion pipeline, frontier insight compendium",
    arcs: [
      {
        name: "Core",
        summary: "Track frontier signals, run rapid research synthesis, prototype experiments.",
        deliverables: [
          "Frontier intelligence brief",
          "Frontier experiment canvas",
          "Partner scouting dossier",
        ],
      },
      {
        name: "Systems Studio",
        summary: "Build ingestion pipelines, venture sprints, risk frameworks.",
        deliverables: [
          "Research ingestion pipeline",
          "Venture sprint plan",
          "Frontier risk framework",
        ],
      },
      {
        name: "Leadership",
        summary: "Present frontier roadmaps, host pitch forums, publish insight compendiums.",
        deliverables: [
          "Frontier roadmap deck",
          "Pitch forum outcomes",
          "Frontier insight compendium",
        ],
      },
    ],
  },
];

export type MicroPathDay = {
  label: string;
  focus: string;
  modules: string[];
};

export type PersonaMicroPath = {
  persona: string;
  phase: string;
  intent: string;
  highlights: string[];
  days: MicroPathDay[];
  ctaLabel: string;
  ctaHref: string;
};

export const personaMicroPaths: PersonaMicroPath[] = [
  {
    persona: "Lead Architect",
    phase: "Builder",
    intent: "Ship a governed RAG baseline",
    highlights: [
      "Vector schema and retrieval evaluation",
      "Prompt regression harness",
      "Incident simulation and rollback",
    ],
    days: [
      { label: "Day 1", focus: "Data and retrieval foundation", modules: ["G3-C3", "G3-C4"] },
      { label: "Day 2", focus: "Evaluation harness", modules: ["G4-C3", "G4-C4"] },
      { label: "Day 3", focus: "Infrastructure and rollout", modules: ["G5-C3", "G5-C5"] },
      { label: "Day 4", focus: "Governance clinic", modules: ["G6-C3", "G6-C4"] },
      { label: "Day 5", focus: "Clinic and reflection", modules: ["G4-C6", "Reflection RP-204"] },
    ],
    ctaLabel: "Launch architect micro-path",
    ctaHref: "#micro-paths",
  },
  {
    persona: "Program & Product Leader",
    phase: "Builder",
    intent: "Align roadmap with sponsor value metrics",
    highlights: [
      "Portfolio roadmap and scenarios",
      "Executive workshop dry run",
      "Sponsor communication kit",
    ],
    days: [
      { label: "Day 1", focus: "Portfolio roadmap", modules: ["G1-S1"] },
      { label: "Day 2", focus: "Scenario modeling", modules: ["G1-S2"] },
      { label: "Day 3", focus: "Stakeholder alignment", modules: ["G1-S3", "G10-C3"] },
      { label: "Day 4", focus: "Negotiation and change", modules: ["G1-S6", "G10-S4"] },
      { label: "Day 5", focus: "Sponsor storytelling", modules: ["G10-L1", "Reflection RP-220"] },
    ],
    ctaLabel: "Activate program leader path",
    ctaHref: "#micro-paths",
  },
  {
    persona: "Risk & Compliance Partner",
    phase: "Architect",
    intent: "Automate control evidence and fairness oversight",
    highlights: [
      "Policy landscape to control mapping",
      "Fairness audit and governance board",
      "Regulatory readiness war room",
    ],
    days: [
      { label: "Day 1", focus: "Control library", modules: ["G6-C3", "G6-S1"] },
      { label: "Day 2", focus: "Policy as code", modules: ["G6-S3"] },
      { label: "Day 3", focus: "Fairness audit", modules: ["G6-S4", "G3-S2"] },
      { label: "Day 4", focus: "Governance review", modules: ["G6-S6", "G6-L2"] },
      { label: "Day 5", focus: "Policy influence", modules: ["G6-L4", "Reflection RP-310"] },
    ],
    ctaLabel: "Start governance sprint",
    ctaHref: "#micro-paths",
  },
  {
    persona: "Automation & Agent Lead",
    phase: "Architect",
    intent: "Scale agentic workflows safely",
    highlights: [
      "Agent router and guardrails",
      "Observability stack and reliability drill",
      "Automation ROI model",
    ],
    days: [
      { label: "Day 1", focus: "Agent design", modules: ["G7-C3", "G7-C4"] },
      { label: "Day 2", focus: "Multi agent environment", modules: ["G7-S1"] },
      { label: "Day 3", focus: "Enterprise integration", modules: ["G7-S2", "G5-S2"] },
      { label: "Day 4", focus: "Reliability drill", modules: ["G7-S4", "G9-S1"] },
      { label: "Day 5", focus: "ROI and showcase", modules: ["G7-S5", "G7-L3"] },
    ],
    ctaLabel: "Deploy automation micro-path",
    ctaHref: "#micro-paths",
  },
  {
    persona: "Executive Sponsor",
    phase: "Strategist",
    intent: "Communicate trust, value, and governance confidence to stakeholders",
    highlights: [
      "Trust telemetry storytelling",
      "Governance council readiness",
      "Sponsor communication system",
    ],
    days: [
      { label: "Day 1", focus: "Telemetry pulse review", modules: ["G0-L1", "G8-S3"] },
      { label: "Day 2", focus: "Roadmap narrative", modules: ["G10-S2", "G10-L1"] },
      { label: "Day 3", focus: "Governance alignment", modules: ["G6-L2", "G6-L4"] },
      { label: "Day 4", focus: "Sponsor communications", modules: ["G10-L3", "G10-L6"] },
      { label: "Day 5", focus: "Reflection and evidence", modules: ["G0-L6", "Reflection RP-410"] },
    ],
    ctaLabel: "Brief executive sponsor path",
    ctaHref: "#micro-paths",
  },
  {
    persona: "Creator & Influence Partner",
    phase: "Architect",
    intent: "Amplify adoption stories with frontier insights and trust cues",
    highlights: [
      "Signal harvesting and storytelling",
      "Trust drift remediation",
      "Cross-channel amplification",
    ],
    days: [
      { label: "Day 1", focus: "Signal harvest", modules: ["G11-S1", "G8-C3"] },
      { label: "Day 2", focus: "Narrative assembly", modules: ["G8-L3", "G1-L1"] },
      { label: "Day 3", focus: "Trust forensics", modules: ["G8-S7", "G8-S2"] },
      { label: "Day 4", focus: "Community amplification", modules: ["G8-L4", "G11-L1"] },
      { label: "Day 5", focus: "Sponsor digest", modules: ["G10-L1", "Reflection RP-512"] },
    ],
    ctaLabel: "Launch creator influence sprint",
    ctaHref: "#micro-paths",
  },
];

export type CredentialTier = {
  title: string;
  description: string;
  requirements: string[];
  evidence: string;
};

export const credentialLadder: CredentialTier[] = [
  {
    title: "Explorer",
    description: "Orientation mastery, responsible AI foundations, shared vocabulary.",
    requirements: [
      "Complete 8 Explorer modules with >= 80 percent score",
      "Submit mission charter and risk radar",
      "Pass responsible AI quiz",
    ],
    evidence: "Mission charter, risk radar snapshot, diagnostic report",
  },
  {
    title: "Builder",
    description: "Applied delivery patterns with evaluation rigor and documentation hygiene.",
    requirements: [
      "Deliver 12 Builder modules including 4 labs",
      "Achieve green status on evaluation harness",
      "Document control library draft",
    ],
    evidence: "Lab repositories, evaluation metrics export, control library snapshot",
  },
  {
    title: "Architect",
    description: "Systems integration and cross functional leadership with observability.",
    requirements: [
      "Lead stakeholder critique",
      "Publish ADR pack and runbooks",
      "Meet SLO targets for pilot deployment",
    ],
    evidence: "Platform blueprint, observability dashboard, governance sign off",
  },
  {
    title: "Strategist",
    description: "Executive alignment, portfolio orchestration, regulatory readiness.",
    requirements: [
      "Facilitate board simulation",
      "Maintain adoption telemetry for 4 weeks",
      "Deliver policy to control trace",
    ],
    evidence: "Executive narrative kit, adoption telemetry report, traceability matrix",
  },
  {
    title: "Luminary",
    description: "Thought leadership, research synthesis, mentorship, community impact.",
    requirements: [
      "Author three knowledge assets",
      "Mentor two cohorts",
      "Maintain 95 percent evaluation confidence",
    ],
    evidence: "Insight kit, mentorship dossier, evaluation trend report",
  },
];

export type IndustrySpotlight = {
  name: string;
  outcomes: string[];
  signals: string[];
  href: string;
};

export const industrySpotlights: IndustrySpotlight[] = [
  {
    name: "Healthcare & Life Sciences",
    outcomes: [
      "Clinical decision support copilots",
      "Patient engagement companions",
      "Operational efficiency analytics",
    ],
    signals: ["HIPAA", "FDA CDS", "EU MDR"],
    href: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/industry-playbooks.md#healthcare--life-sciences",
  },
  {
    name: "Financial Services",
    outcomes: [
      "AML automation",
      "Wealth advisory copilots",
      "Treasury optimization",
    ],
    signals: ["AMLD6", "SEC marketing rule", "Basel III"],
    href: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/industry-playbooks.md#financial-services",
  },
  {
    name: "Public Sector",
    outcomes: [
      "Citizen service automation",
      "Policy intelligence",
      "Emergency response coordination",
    ],
    signals: ["ADA", "21st Century IDEA", "ISO 22301"],
    href: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/industry-playbooks.md#public-sector--government",
  },
  {
    name: "Advanced Manufacturing",
    outcomes: [
      "Predictive maintenance copilots",
      "Supply chain risk intelligence",
      "Digital twin simulations",
    ],
    signals: ["ISO 56002", "ISO 28000", "OSHA"],
    href: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/industry-playbooks.md#advanced-manufacturing--industry-40",
  },
  {
    name: "Creative & Media",
    outcomes: [
      "Content atomization engines",
      "Audience intelligence copilots",
      "Creator monetization systems",
    ],
    signals: ["Copyright telemetry", "GDPR", "FTC endorsements"],
    href: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/industry-playbooks.md#creative--media",
  },
  {
    name: "Energy & Sustainability",
    outcomes: [
      "Grid reliability assistants",
      "Emissions tracking automation",
      "Sustainable operations advisory",
    ],
    signals: ["NERC CIP", "EU CSRD", "GHG Protocol"],
    href: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/industry-playbooks.md#energy--sustainability",
  },
];

export type AssistantOps = {
  name: string;
  focus: string;
  slos: string[];
};

export const assistantOps: AssistantOps[] = [
  {
    name: "Scout",
    focus: "Research, regulatory, and vendor intelligence refresh",
    slos: [
      "Refresh critical corpora within 24 hours",
      "Maintain citation accuracy above 95 percent",
      "Flag module refresh tickets automatically",
    ],
  },
  {
    name: "Coach",
    focus: "Guided practice, debugging, reflection prompts",
    slos: [
      "Median response under 2 seconds",
      "Satisfaction score above 4.6",
      "Escalate risky experiments to mentors",
    ],
  },
  {
    name: "Critic",
    focus: "Evaluation, red teaming, control enforcement",
    slos: [
      "Detect 98 percent of evaluation anomalies",
      "Zero unlogged high severity incidents",
      "Tag evidence locker records with control IDs",
    ],
  },
  {
    name: "Archivist",
    focus: "Evidence locker, credential manifests, knowledge graph",
    slos: [
      "100 percent deliverables tagged",
      "Schema drift below 1 percent",
      "Generate credential payloads on approval",
    ],
  },
  {
    name: "Companion",
    focus: "Personalized micro paths, wellness, sponsor nudges",
    slos: [
      "On time nudges for 90 percent of milestones",
      "Burnout false positives below 5 percent",
      "Surface sponsor ready summaries weekly",
    ],
  },
  {
    name: "Navigator",
    focus: "Micro-learning orchestration, CTA instrumentation, sponsor briefings",
    slos: [
      "Keep micro-page recommendations within one mastery tier of persona baseline",
      "Maintain persona CTA coverage above 92 percent per sprint",
      "Generate sponsor digest drafts within five minutes of path completion",
    ],
  },
];

export type SponsorView = {
  title: string;
  description: string;
  metrics: string[];
};

export const sponsorViews: SponsorView[] = [
  {
    title: "Outcome Pulse",
    description: "Track business KPIs, delivery velocity, and adoption signals in real time.",
    metrics: ["Value realization", "Velocity delta", "Adoption score"],
  },
  {
    title: "Evidence Ledger",
    description: "Monitor approvals, control coverage, and outstanding reviews.",
    metrics: ["Evidence approved", "Controls mapped", "Pending reviews"],
  },
  {
    title: "Risk & Governance",
    description: "Visualize risk heatmaps, incidents, renewals, and regulatory triggers.",
    metrics: ["Risk severity", "Open incidents", "Regulatory alerts"],
  },
  {
    title: "Engagement Insights",
    description: "Understand micro path progress, mentor touchpoints, and assistant interactions.",
    metrics: ["Micro path completion", "Mentor touchpoints", "Assistant escalations"],
  },
];

export const documentationLinks = [
  {
    label: "Module Atlas",
    href: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/modules.md",
  },
  {
    label: "Adaptive Micro Paths",
    href: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/micro-paths.md",
  },
  {
    label: "Credential Framework",
    href: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/credentials.md",
  },
  {
    label: "Evidence Locker",
    href: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/evidence-locker.md",
  },
  {
    label: "Evaluation Registry",
    href: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/evaluation-registry.md",
  },
];
export type ModuleResource = {
  label: string;
  type: "doc" | "template" | "repo" | "toolkit";
  url: string;
};

export type AssistantPrompt = {
  agent: "Scout" | "Coach" | "Critic" | "Archivist" | "Companion";
  prompt: string;
};

export type ModuleStep = {
  title: string;
  description: string;
};

export type ModuleDefinition = {
  code: string;
  title: string;
  galaxy: string;
  arc: "Core" | "Systems Studio" | "Leadership";
  mastery: "Explorer" | "Builder" | "Architect" | "Strategist" | "Luminary";
  journeyStage: string;
  phase: string;
  personaFit: string[];
  durationHours: number;
  modality: "ML" | "LB" | "WK" | "SP" | "CL" | "MC" | "RT" | "RS";
  outcomes: string[];
  deliverables: string[];
  prerequisites: string[];
  evaluationSignals: string[];
  freshness: string;
  resources: ModuleResource[];
  assistantPrompts: AssistantPrompt[];
  steps: ModuleStep[];
};

export const moduleCatalog: ModuleDefinition[] = [
  {
    code: "G0-C1",
    title: "Orientation Diagnostic",
    galaxy: "G0",
    arc: "Core",
    mastery: "Explorer",
    journeyStage: "Orientation Runway",
    phase: "Phase 0 - Onboard",
    personaFit: ["lead-architect", "program-leader", "risk-partner", "agent-lead"],
    durationHours: 3,
    modality: "ML",
    outcomes: [
      "Establish baseline telemetry",
      "Align assistant configuration to mission charter",
      "Capture sponsor objectives"
    ],
    deliverables: ["Orientation diagnostic report", "Assistant configuration log"],
    prerequisites: [],
    evaluationSignals: ["FUNC-BASELINE-001", "SAFE-POLICY-INIT"],
    freshness: "2025-09-16",
    resources: [
      {
        label: "Orientation checklist",
        type: "template",
        url: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/architecture.md"
      },
      {
        label: "Assistant configuration guide",
        type: "doc",
        url: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/assistant-ops.md"
      }
    ],
    assistantPrompts: [
      {
        agent: "Coach",
        prompt: "Review my telemetry baseline and highlight blind spots for the cohort onboarding."
      },
      {
        agent: "Archivist",
        prompt: "File the mission charter and orientation diagnostic into the evidence locker."
      }
    ],
    steps: [
      {
        title: "Collect signals",
        description: "Import readiness survey responses and hard metrics for the cohort."
      },
      {
        title: "Calibrate assistant",
        description: "Configure knowledge packs and mission context for the companion agents."
      },
      {
        title: "Publish orientation brief",
        description: "Share the diagnostic summary with mentors and sponsors."
      }
    ]
  },
  {
    code: "G0-S2",
    title: "Telemetry Pipeline Launch",
    galaxy: "G0",
    arc: "Systems Studio",
    mastery: "Builder",
    journeyStage: "Orientation Runway",
    phase: "Phase 0 - Onboard",
    personaFit: ["lead-architect", "agent-lead"],
    durationHours: 7,
    modality: "LB",
    outcomes: [
      "Connect LMS, repo, and evaluation telemetry",
      "Instrument learner progress events",
      "Publish cohort cockpit dashboard"
    ],
    deliverables: ["Telemetry pipeline spec", "Cohort cockpit dashboard"],
    prerequisites: ["G0-C1"],
    evaluationSignals: ["FUNC-RAG-001", "OPS-OBS-002"],
    freshness: "2025-09-14",
    resources: [
      {
        label: "Telemetry schema",
        type: "doc",
        url: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/evidence-locker.md"
      },
      {
        label: "Cohort cockpit template",
        type: "template",
        url: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/mentor-ops.md"
      }
    ],
    assistantPrompts: [
      {
        agent: "Archivist",
        prompt: "Map telemetry events to evidence locker tables and flag missing fields."
      },
      {
        agent: "Companion",
        prompt: "Notify mentors when telemetry coverage drops below the cohort threshold."
      }
    ],
    steps: [
      {
        title: "Connect data sources",
        description: "Wire the LMS, GitHub, and evaluation tools into the telemetry broker."
      },
      {
        title: "Define metrics",
        description: "Choose completion, quality, and governance metrics for the cohort dashboard."
      },
      {
        title: "Launch dashboard",
        description: "Surface telemetry in the mentor cockpit and sponsor cockpit APIs."
      }
    ]
  },
  {
    code: "G1-C1",
    title: "Mission Charter Lab",
    galaxy: "G1",
    arc: "Core",
    mastery: "Explorer",
    journeyStage: "Systems Foundation",
    phase: "Phase 1 - Vision",
    personaFit: ["program-leader", "lead-architect"],
    durationHours: 4,
    modality: "WK",
    outcomes: [
      "Translate enterprise strategy into AI mission",
      "Define measurable value pillars",
      "Map stakeholder motivations"
    ],
    deliverables: ["AI mission charter", "Stakeholder intent dossier"],
    prerequisites: ["G0-C1"],
    evaluationSignals: ["STRAT-VAL-003", "GOV-ALIGN-001"],
    freshness: "2025-09-12",
    resources: [
      {
        label: "Mission charter canvas",
        type: "template",
        url: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/micro-paths.md"
      },
      {
        label: "Stakeholder interview guide",
        type: "doc",
        url: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/mentor-ops.md"
      }
    ],
    assistantPrompts: [
      {
        agent: "Coach",
        prompt: "Pressure test the mission charter for measurable impact statements."
      },
      {
        agent: "Scout",
        prompt: "Gather the latest industry benchmarks for AI portfolio maturity to cite in the charter."
      }
    ],
    steps: [
      {
        title: "Frame the ambition",
        description: "Capture the north star, value metrics, and risk appetite for the program."
      },
      {
        title: "Interview stakeholders",
        description: "Synthesize executive, operations, and compliance voices into the charter."
      },
      {
        title: "Publish charter",
        description: "Distribute the artifact with companion prompts for ongoing refinement."
      }
    ]
  },
  {
    code: "G1-S2",
    title: "Scenario Portfolio Modeling",
    galaxy: "G1",
    arc: "Systems Studio",
    mastery: "Builder",
    journeyStage: "Systems Foundation",
    phase: "Phase 1 - Vision",
    personaFit: ["program-leader", "risk-partner"],
    durationHours: 6,
    modality: "SP",
    outcomes: [
      "Model cost and value scenarios for top initiatives",
      "Align guardrails with investment tiers",
      "Create sponsor ready storyboards"
    ],
    deliverables: ["Scenario financial model", "Executive storyboard"],
    prerequisites: ["G1-C1"],
    evaluationSignals: ["STRAT-VAL-003", "FIN-ROI-002"],
    freshness: "2025-09-10",
    resources: [
      {
        label: "Scenario spreadsheet",
        type: "template",
        url: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/sponsor-cockpit.md"
      },
      {
        label: "Risk appetite primer",
        type: "doc",
        url: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/credentials.md"
      }
    ],
    assistantPrompts: [
      {
        agent: "Coach",
        prompt: "Summarize key trade-offs between scenarios for the executive storyboard."
      },
      {
        agent: "Companion",
        prompt: "Generate sponsor comms that highlight required approvals per scenario."
      }
    ],
    steps: [
      {
        title: "Define scenarios",
        description: "Select the top initiatives and articulate assumptions for each one."
      },
      {
        title: "Model value and risk",
        description: "Build cost, value, and guardrail projections with sensitivity analysis."
      },
      {
        title: "Craft story",
        description: "Compose sponsor narratives and link them into the cockpit for review."
      }
    ]
  },
  {
    code: "G2-S3",
    title: "Interaction Contract Studio",
    galaxy: "G2",
    arc: "Systems Studio",
    mastery: "Architect",
    journeyStage: "Systems Spine",
    phase: "Phase 2 - Architecture",
    personaFit: ["lead-architect", "agent-lead", "risk-partner"],
    durationHours: 8,
    modality: "LB",
    outcomes: [
      "Model cross-agent interaction patterns",
      "Document guardrails and fallback logic",
      "Connect contracts to governance controls"
    ],
    deliverables: ["Interaction contract pack", "Fallback runbook"],
    prerequisites: ["G2-C1", "G2-C4"],
    evaluationSignals: ["SAFE-JB-002", "FUNC-RAG-001"],
    freshness: "2025-09-05",
    resources: [
      {
        label: "Interaction template",
        type: "template",
        url: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/capabilities.md"
      },
      {
        label: "Guardrail library",
        type: "doc",
        url: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/credentials.md"
      }
    ],
    assistantPrompts: [
      {
        agent: "Critic",
        prompt: "Stress test the contract for adversarial tool misuse and log findings."
      },
      {
        agent: "Coach",
        prompt: "Generate fallback playbooks for each tool routing scenario."
      }
    ],
    steps: [
      {
        title: "Map touchpoints",
        description: "Document how agents, humans, and systems exchange information."
      },
      {
        title: "Design safeguards",
        description: "Define guardrails, fallback routes, and oversight checkpoints."
      },
      {
        title: "Publish contract",
        description: "Store the interaction contract in the evidence locker with versioning."
      }
    ]
  },
  {
    code: "G3-S2",
    title: "Synthetic Data Playbook",
    galaxy: "G3",
    arc: "Systems Studio",
    mastery: "Builder",
    journeyStage: "Data Spine",
    phase: "Phase 2 - Architecture",
    personaFit: ["lead-architect", "risk-partner"],
    durationHours: 6,
    modality: "SP",
    outcomes: [
      "Design bias-aware synthetic datasets",
      "Instrument evaluation coverage",
      "Publish governance notes"
    ],
    deliverables: ["Synthetic data pipeline", "Bias mitigation checklist"],
    prerequisites: ["G3-C3"],
    evaluationSignals: ["FAIR-BIAS-004", "EVAL-COVER-002"],
    freshness: "2025-09-09",
    resources: [
      {
        label: "Bias mitigation checklist",
        type: "doc",
        url: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/evaluation-ops.md"
      },
      {
        label: "Synthetic data notebook",
        type: "repo",
        url: "https://github.com/AI-Architect-Academy/ai-architect-academy"
      }
    ],
    assistantPrompts: [
      {
        agent: "Scout",
        prompt: "Gather the latest synthetic data research summaries since last week."
      },
      {
        agent: "Critic",
        prompt: "Evaluate generated datasets for demographic parity and report anomalies."
      }
    ],
    steps: [
      {
        title: "Define goals",
        description: "Clarify coverage gaps and bias risks that synthetic data must address."
      },
      {
        title: "Generate data",
        description: "Produce datasets with guardrails and document quality metrics."
      },
      {
        title: "Review governance",
        description: "Log approvals and link governance notes into the evidence locker."
      }
    ]
  },
  {
    code: "G3-S5",
    title: "Knowledge Evaluation Link",
    galaxy: "G3",
    arc: "Systems Studio",
    mastery: "Architect",
    journeyStage: "Data Spine",
    phase: "Phase 2 - Architecture",
    personaFit: ["lead-architect", "risk-partner", "agent-lead"],
    durationHours: 7,
    modality: "LB",
    outcomes: [
      "Link knowledge assets to evaluation datasets",
      "Automate freshness checks",
      "Create retrieval annotations"
    ],
    deliverables: ["Knowledge evaluation spec", "Annotation playbook"],
    prerequisites: ["G3-C3", "G4-C3"],
    evaluationSignals: ["FUNC-RAG-001", "CURR-REFRESH-001"],
    freshness: "2025-09-15",
    resources: [
      {
        label: "Knowledge fabric guide",
        type: "doc",
        url: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/architecture.md"
      },
      {
        label: "Evaluation registry",
        type: "doc",
        url: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/evaluation-registry.md"
      }
    ],
    assistantPrompts: [
      {
        agent: "Archivist",
        prompt: "Annotate new knowledge assets with evaluation dataset references."
      },
      {
        agent: "Scout",
        prompt: "Alert when knowledge sources require refresh based on scout thresholds."
      }
    ],
    steps: [
      {
        title: "Inventory assets",
        description: "Compile critical knowledge sources and map them to evaluation needs."
      },
      {
        title: "Configure links",
        description: "Tie knowledge embeddings to evaluation datasets with metadata."
      },
      {
        title: "Automate refresh",
        description: "Build watchdog jobs that trigger assistant alerts when content stales."
      }
    ]
  },
  {
    code: "G4-C3",
    title: "Evaluation Harness Build",
    galaxy: "G4",
    arc: "Core",
    mastery: "Builder",
    journeyStage: "Delivery Spine",
    phase: "Phase 3 - Delivery",
    personaFit: ["lead-architect", "agent-lead", "risk-partner"],
    durationHours: 7,
    modality: "LB",
    outcomes: [
      "Implement statistical and LLM judges",
      "Automate regression testing",
      "Expose metrics to sponsor dashboard"
    ],
    deliverables: ["Evaluation harness repo", "Metrics dashboard"],
    prerequisites: ["G3-C3", "G0-S2"],
    evaluationSignals: ["FUNC-RAG-001", "SAFE-JB-002", "OPS-OBS-002"],
    freshness: "2025-09-11",
    resources: [
      {
        label: "Evaluation ops guide",
        type: "doc",
        url: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/evaluation-ops.md"
      },
      {
        label: "LangSmith starter",
        type: "repo",
        url: "https://github.com/AI-Architect-Academy/ai-architect-academy"
      }
    ],
    assistantPrompts: [
      {
        agent: "Critic",
        prompt: "Run regression suite and summarize pass or fail rates with remediation hints."
      },
      {
        agent: "Companion",
        prompt: "Nudge module owners when evaluation KPIs drift outside agreed thresholds."
      }
    ],
    steps: [
      {
        title: "Define metrics",
        description: "Choose quality, safety, and latency signals tied to governance needs."
      },
      {
        title: "Build harness",
        description: "Create evaluation pipeline and integrate it into CI."
      },
      {
        title: "Publish results",
        description: "Push metrics to sponsor dashboards and archive evidence."
      }
    ]
  },
  {
    code: "G4-S4",
    title: "Red Team Simulation",
    galaxy: "G4",
    arc: "Systems Studio",
    mastery: "Architect",
    journeyStage: "Delivery Spine",
    phase: "Phase 3 - Delivery",
    personaFit: ["risk-partner", "agent-lead"],
    durationHours: 6,
    modality: "WK",
    outcomes: [
      "Conduct adversarial prompt drills",
      "Prioritize mitigation backlog",
      "Update runbooks with lessons"
    ],
    deliverables: ["Red team dossier", "Mitigation plan"],
    prerequisites: ["G4-C3"],
    evaluationSignals: ["SAFE-JB-002", "GOV-CONTROL-005"],
    freshness: "2025-09-03",
    resources: [
      {
        label: "Red team scenario pack",
        type: "toolkit",
        url: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/evaluation-ops.md"
      },
      {
        label: "Incident playbook",
        type: "doc",
        url: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/mentor-ops.md"
      }
    ],
    assistantPrompts: [
      {
        agent: "Critic",
        prompt: "Generate adversarial prompts targeting this module and log responses."
      },
      {
        agent: "Archivist",
        prompt: "Attach mitigation notes and red team evidence to the control library."
      }
    ],
    steps: [
      {
        title: "Select scenarios",
        description: "Choose high risk contexts and craft adversarial prompts."
      },
      {
        title: "Execute drill",
        description: "Run the simulation with assistant guidance and capture outputs."
      },
      {
        title: "Document lessons",
        description: "Update runbooks, backlog items, and evidence locker records."
      }
    ]
  },
  {
    code: "G5-S2",
    title: "Observability Blueprint",
    galaxy: "G5",
    arc: "Systems Studio",
    mastery: "Architect",
    journeyStage: "Delivery Spine",
    phase: "Phase 3 - Delivery",
    personaFit: ["lead-architect", "agent-lead", "ops-lead"],
    durationHours: 8,
    modality: "LB",
    outcomes: [
      "Deploy OpenTelemetry traces",
      "Configure Grafana dashboards",
      "Link alerts to incident playbooks"
    ],
    deliverables: ["Observability blueprint", "Alert routing matrix"],
    prerequisites: ["G5-C3", "G4-C3"],
    evaluationSignals: ["OPS-OBS-002", "OPS-INC-003"],
    freshness: "2025-09-08",
    resources: [
      {
        label: "Observability templates",
        type: "template",
        url: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/evaluation-ops.md"
      },
      {
        label: "Incident response guide",
        type: "doc",
        url: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/mentor-ops.md"
      }
    ],
    assistantPrompts: [
      {
        agent: "Companion",
        prompt: "Alert ops leads when SLO trends degrade beyond the agreed threshold."
      },
      {
        agent: "Coach",
        prompt: "Recommend dashboards to review before governance council meetings."
      }
    ],
    steps: [
      {
        title: "Define signals",
        description: "Select KPIs, SLOs, and trust metrics that must be monitored."
      },
      {
        title: "Implement instrumentation",
        description: "Deploy traces, metrics, and logs with correlation IDs."
      },
      {
        title: "Wire alerting",
        description: "Route alerts to playbooks and sponsor cockpit widgets."
      }
    ]
  },
  {
    code: "G6-S3",
    title: "Policy-as-Code Sprint",
    galaxy: "G6",
    arc: "Systems Studio",
    mastery: "Architect",
    journeyStage: "Governance Spine",
    phase: "Phase 4 - Governance",
    personaFit: ["risk-partner", "lead-architect"],
    durationHours: 9,
    modality: "SP",
    outcomes: [
      "Translate regulations into executable controls",
      "Automate compliance drift alerts",
      "Document escalation protocols"
    ],
    deliverables: ["Policy as code repo", "Compliance drift monitor"],
    prerequisites: ["G6-C3", "G4-C3"],
    evaluationSignals: ["GOV-CONTROL-005", "SAFE-JB-002"],
    freshness: "2025-09-10",
    resources: [
      {
        label: "Control library",
        type: "doc",
        url: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/credentials.md"
      },
      {
        label: "Policy-as-code examples",
        type: "repo",
        url: "https://github.com/AI-Architect-Academy/ai-architect-academy"
      }
    ],
    assistantPrompts: [
      {
        agent: "Critic",
        prompt: "Scan policy code for conflicting rules and propose simplifications."
      },
      {
        agent: "Archivist",
        prompt: "Attach control evidence to the compliance drift monitor after each run."
      }
    ],
    steps: [
      {
        title: "Interpret regulation",
        description: "Map clauses to existing control families and identify gaps."
      },
      {
        title: "Codify policies",
        description: "Implement guardrails in the policy engine with tests."
      },
      {
        title: "Deploy monitoring",
        description: "Set drift alerts and escalation protocols for risk council review."
      }
    ]
  },
  {
    code: "G7-S4",
    title: "Reliability Drill",
    galaxy: "G7",
    arc: "Systems Studio",
    mastery: "Architect",
    journeyStage: "Delivery Spine",
    phase: "Phase 3 - Delivery",
    personaFit: ["agent-lead", "ops-lead"],
    durationHours: 6,
    modality: "WK",
    outcomes: [
      "Simulate adversarial tool failures",
      "Measure reliability metrics",
      "Capture remediation backlog"
    ],
    deliverables: ["Reliability drill dossier", "Incident action plan"],
    prerequisites: ["G7-C3", "G5-S2"],
    evaluationSignals: ["SAFE-JB-002", "OPS-INC-003"],
    freshness: "2025-09-06",
    resources: [
      {
        label: "Reliability scenarios",
        type: "toolkit",
        url: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/mentor-ops.md"
      },
      {
        label: "Incident templates",
        type: "template",
        url: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/evaluation-ops.md"
      }
    ],
    assistantPrompts: [
      {
        agent: "Companion",
        prompt: "Record drill outcomes and schedule follow ups for unresolved actions."
      },
      {
        agent: "Coach",
        prompt: "Analyze incident telemetry and highlight improvement opportunities."
      }
    ],
    steps: [
      {
        title: "Plan drill",
        description: "Select attack vectors and readiness criteria for the simulation."
      },
      {
        title: "Execute scenario",
        description: "Run the drill with mentors observing and logging outcomes."
      },
      {
        title: "Review and remediate",
        description: "Prioritize backlog items and update reliability dashboards."
      }
    ]
  },
  {
    code: "G8-S3",
    title: "Trust Experience Blueprint",
    galaxy: "G8",
    arc: "Systems Studio",
    mastery: "Architect",
    journeyStage: "Adoption Spine",
    phase: "Phase 3 - Delivery",
    personaFit: ["product-lead", "risk-partner", "creator"],
    durationHours: 8,
    modality: "LB",
    outcomes: [
      "Design transparency states and fallback messaging",
      "Integrate consent and explainability",
      "Link UX telemetry to governance"
    ],
    deliverables: ["Trust experience spec", "Transparency checklist"],
    prerequisites: ["G8-C1", "G6-C3"],
    evaluationSignals: ["UX-TRUST-006", "GOV-CONTROL-005"],
    freshness: "2025-09-12",
    resources: [
      {
        label: "Trust pattern library",
        type: "doc",
        url: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/industry-playbooks.md"
      },
      {
        label: "Transparency copy kit",
        type: "template",
        url: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/teaching-model.md"
      }
    ],
    assistantPrompts: [
      {
        agent: "Coach",
        prompt: "Draft transparency messaging for the current release using platform data."
      },
      {
        agent: "Scout",
        prompt: "Collect regulatory updates affecting disclosure requirements for this module."
      }
    ],
    steps: [
      {
        title: "Audit experience",
        description: "Document user journeys and identify trust-critical moments."
      },
      {
        title: "Design transparency",
        description: "Define messaging, consent controls, and fallback interactions."
      },
      {
        title: "Validate",
        description: "Test messaging with stakeholders and log updates for governance review."
      }
    ]
  },
  {
    code: "G9-S1",
    title: "Unified Monitoring Stack",
    galaxy: "G9",
    arc: "Systems Studio",
    mastery: "Architect",
    journeyStage: "Operations Spine",
    phase: "Phase 4 - Governance",
    personaFit: ["ops-lead", "lead-architect"],
    durationHours: 7,
    modality: "LB",
    outcomes: [
      "Instrument metrics, traces, and logs across services",
      "Set SLO targets with policy hooks",
      "Align alerts with sponsor cockpit"
    ],
    deliverables: ["Monitoring stack config", "SLO targets pack"],
    prerequisites: ["G5-S2", "G4-C3"],
    evaluationSignals: ["OPS-OBS-002", "OPS-SLO-004"],
    freshness: "2025-09-07",
    resources: [
      {
        label: "SLO primer",
        type: "doc",
        url: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/evaluation-ops.md"
      },
      {
        label: "Monitoring dashboard pack",
        type: "template",
        url: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/mentor-ops.md"
      }
    ],
    assistantPrompts: [
      {
        agent: "Companion",
        prompt: "Send weekly SLO summaries to sponsors with trend commentary."
      },
      {
        agent: "Coach",
        prompt: "Highlight anomalies in the monitoring stack that need mentor review."
      }
    ],
    steps: [
      {
        title: "Define service levels",
        description: "Establish SLOs aligned to sponsor and governance expectations."
      },
      {
        title: "Implement stack",
        description: "Configure metrics, traces, logs, and dashboards."
      },
      {
        title: "Integrate alerts",
        description: "Link alert pipelines to incident playbooks and sponsor cockpit."
      }
    ]
  },
  {
    code: "G10-S2",
    title: "Board Simulation",
    galaxy: "G10",
    arc: "Systems Studio",
    mastery: "Strategist",
    journeyStage: "Influence Spine",
    phase: "Phase 5 - Influence",
    personaFit: ["program-leader", "risk-partner", "creator"],
    durationHours: 5,
    modality: "WK",
    outcomes: [
      "Run executive simulation with telemetry",
      "Defend investment and risk posture",
      "Collect sponsor feedback"
    ],
    deliverables: ["Board simulation packet", "Decision trace log"],
    prerequisites: ["G1-S3", "G6-S3"],
    evaluationSignals: ["STRAT-BOARD-007", "GOV-CONTROL-005"],
    freshness: "2025-09-13",
    resources: [
      {
        label: "Board simulation deck",
        type: "template",
        url: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/sponsor-cockpit.md"
      },
      {
        label: "Executive comms guide",
        type: "doc",
        url: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/mentor-ops.md"
      }
    ],
    assistantPrompts: [
      {
        agent: "Coach",
        prompt: "Generate board level talking points with telemetry call outs for this module."
      },
      {
        agent: "Companion",
        prompt: "Summarize sponsor feedback after the simulation and log actions."
      }
    ],
    steps: [
      {
        title: "Assemble narrative",
        description: "Collect telemetry, investment figures, and risk updates."
      },
      {
        title: "Facilitate simulation",
        description: "Run the board session with mentors observing and logging commentary."
      },
      {
        title: "Capture actions",
        description: "Document decisions, assign owners, and update sponsor cockpit."
      }
    ]
  },
  {
    code: "G11-S1",
    title: "Research Ingestion Pipeline",
    galaxy: "G11",
    arc: "Systems Studio",
    mastery: "Builder",
    journeyStage: "Frontier Spine",
    phase: "Phase 6 - Frontier",
    personaFit: ["lead-architect", "agent-lead", "research"],
    durationHours: 7,
    modality: "LB",
    outcomes: [
      "Aggregate frontier research feeds",
      "Score signals for impact",
      "Trigger module refresh tickets"
    ],
    deliverables: ["Research ingestion pipeline", "Signal prioritization dashboard"],
    prerequisites: ["G11-C1", "G0-S2"],
    evaluationSignals: ["FRONTIER-SIGNAL-002", "CURR-REFRESH-001"],
    freshness: "2025-09-15",
    resources: [
      {
        label: "Frontier intelligence grid",
        type: "doc",
        url: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/frontier-intelligence.md"
      },
      {
        label: "Research guild playbook",
        type: "doc",
        url: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/research-pipeline.md"
      }
    ],
    assistantPrompts: [
      {
        agent: "Scout",
        prompt: "Summarize the top research signals for this module and recommend refresh actions."
      },
      {
        agent: "Archivist",
        prompt: "Update module freshness metadata and log citations into the knowledge graph."
      }
    ],
    steps: [
      {
        title: "Collect feeds",
        description: "Connect research, vendor, and regulatory sources to the pipeline."
      },
      {
        title: "Score signals",
        description: "Prioritize updates using impact and urgency heuristics."
      },
      {
        title: "Trigger updates",
        description: "Create curriculum tickets and notify module owners via the assistant."
      }
    ]
  },
  {
    code: "G3-S7",
    title: "Semantic Knowledge Fabric Lab",
    galaxy: "G3",
    arc: "Systems Studio",
    mastery: "Architect",
    journeyStage: "Data Spine",
    phase: "Phase 2 - Architecture",
    personaFit: ["lead-architect", "risk-partner", "agent-lead"],
    durationHours: 8,
    modality: "LB",
    outcomes: [
      "Model governed semantic relationships across knowledge assets",
      "Instrument freshness, lineage, and evidence tags",
      "Publish knowledge fabric spec consumable by assistant agents"
    ],
    deliverables: ["Semantic knowledge fabric blueprint", "Lineage telemetry dashboard"],
    prerequisites: ["G3-S2", "G3-S5"],
    evaluationSignals: ["DATA-SEM-021", "EVID-LINEAGE-005"],
    freshness: "2025-09-19",
    resources: [
      {
        label: "Knowledge graph governance checklist",
        type: "doc",
        url: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/evidence-locker.md"
      },
      {
        label: "Semantic schema template",
        type: "template",
        url: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/architecture.md"
      }
    ],
    assistantPrompts: [
      {
        agent: "Archivist",
        prompt: "Generate lineage tags for newly mapped knowledge assets and sync them to the evidence locker."
      },
      {
        agent: "Scout",
        prompt: "Verify semantic drift across the fabric and flag relationships needing review."
      }
    ],
    steps: [
      {
        title: "Design semantic model",
        description: "Define node and edge types aligned to evidence, evaluation, and sponsor reporting needs."
      },
      {
        title: "Wire telemetry",
        description: "Instrument freshness checks, drift detection, and lineage provenance metrics."
      },
      {
        title: "Publish fabric spec",
        description: "Document integration guidance and assistant consumption contracts for the knowledge fabric."
      }
    ]
  },
  {
    code: "G7-C7",
    title: "Agent Guardrail Simulation",
    galaxy: "G7",
    arc: "Core",
    mastery: "Builder",
    journeyStage: "Automation Foundation",
    phase: "Phase 4 - Automate",
    personaFit: ["agent-lead", "lead-architect", "risk-partner"],
    durationHours: 5,
    modality: "WK",
    outcomes: [
      "Design guardrail scenarios across failure modes and tool misuse",
      "Exercise escalation playbooks with mentors and compliance",
      "Instrument telemetry for agent resilience and human oversight"
    ],
    deliverables: ["Guardrail simulation report", "Escalation telemetry dashboard"],
    prerequisites: ["G7-C3", "G7-C4"],
    evaluationSignals: ["AGENT-GUARD-009", "SAFE-ESC-003"],
    freshness: "2025-09-19",
    resources: [
      {
        label: "Agent safety drill kit",
        type: "doc",
        url: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/assistant-ops.md"
      },
      {
        label: "Escalation runbook template",
        type: "template",
        url: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/mentor-ops.md"
      }
    ],
    assistantPrompts: [
      {
        agent: "Critic",
        prompt: "Execute the guardrail scenarios, log violations, and recommend remediation."
      },
      {
        agent: "Coach",
        prompt: "Provide live guidance to facilitators during the simulation and capture key learnings."
      }
    ],
    steps: [
      {
        title: "Map scenarios",
        description: "Select representative failure modes and align them to control objectives."
      },
      {
        title: "Run drills",
        description: "Facilitate simulations with human reviewers capturing telemetry and qualitative notes."
      },
      {
        title: "Publish findings",
        description: "Summarize issues, corrective actions, and evidence for governance sign-off."
      }
    ]
  },
  {
    code: "G8-S7",
    title: "Trust Drift Forensics Sprint",
    galaxy: "G8",
    arc: "Systems Studio",
    mastery: "Architect",
    journeyStage: "Experience Scale",
    phase: "Phase 4 - Adoption",
    personaFit: ["program-leader", "agent-lead", "risk-partner"],
    durationHours: 7,
    modality: "SP",
    outcomes: [
      "Identify trust signal degradation across channels",
      "Run qualitative feedback loops with creators and customers",
      "Activate remediation experiments and sponsor communications"
    ],
    deliverables: ["Trust drift dossier", "Remediation experiment roadmap"],
    prerequisites: ["G8-S3", "G8-S4"],
    evaluationSignals: ["UX-TRUST-007", "OPS-SENTI-004"],
    freshness: "2025-09-20",
    resources: [
      {
        label: "Trust telemetry playbook",
        type: "doc",
        url: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/industry-playbooks.md"
      },
      {
        label: "Experiment design canvas",
        type: "template",
        url: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/micro-paths.md"
      }
    ],
    assistantPrompts: [
      {
        agent: "Companion",
        prompt: "Summarize trust sentiment signals and propose next best adoption nudges."
      },
      {
        agent: "Scout",
        prompt: "Collect external trust benchmarks and compare them against current telemetry."
      }
    ],
    steps: [
      {
        title: "Diagnose drift",
        description: "Analyze telemetry, qualitative feedback, and sponsor escalations to pinpoint trust gaps."
      },
      {
        title: "Design experiments",
        description: "Pair creators and product teams to prototype trust restorations with measurable hypotheses."
      },
      {
        title: "Communicate outcomes",
        description: "Publish findings and adoption updates to sponsors, community, and assistant knowledge graph."
      }
    ]
  }
];
