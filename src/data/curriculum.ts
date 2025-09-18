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
