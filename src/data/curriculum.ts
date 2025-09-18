export type TrackStage = {
  name: string;
  summary: string;
  deliverables: string[];
};

export type LearningTrack = {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  signatureEvidence: string;
  stages: TrackStage[];
};

export const learningTracks: LearningTrack[] = [
  {
    id: "T1",
    title: "Agent Engineering Foundations",
    subtitle: "Design dependable coding agents with clear guardrails and success metrics.",
    duration: "2-week sprint",
    signatureEvidence: "Agent blueprint, guardrail log, evaluation summary",
    stages: [
      {
        name: "Discover",
        summary: "Clarify the opportunity, user journey, and safety boundaries for the agent.",
        deliverables: [
          "Agent opportunity canvas",
          "Success metric stack",
          "Guardrail baseline checklist",
        ],
      },
      {
        name: "Build",
        summary: "Compose, instrument, and iterate on the coding agent workflow.",
        deliverables: [
          "Agent system prompt",
          "Task orchestration map",
          "Evaluation harness starter",
        ],
      },
      {
        name: "Launch",
        summary: "Run structured field tests and brief stakeholders on outcomes.",
        deliverables: [
          "Field test journal",
          "Stakeholder readiness brief",
          "Safeguard escalation plan",
        ],
      },
    ],
  },
  {
    id: "T2",
    title: "Rapid Prototyping Studio",
    subtitle: "Ship high-signal prototypes that validate value, UX, and feasibility in days.",
    duration: "3-week cadence",
    signatureEvidence: "Prototype release notes, usability signals, iteration roadmap",
    stages: [
      {
        name: "Discover",
        summary: "Frame prototype hypotheses and storyboard the user proof.",
        deliverables: [
          "Prototype hypothesis brief",
          "User storyboard",
          "Value experiment grid",
        ],
      },
      {
        name: "Build",
        summary: "Compose working demos with reusable components, prompts, and automations.",
        deliverables: [
          "Prototype repo",
          "Prompt and component library",
          "Demo instrumentation checklist",
        ],
      },
      {
        name: "Launch",
        summary: "Run live sessions, capture evidence, and map next sprint investments.",
        deliverables: [
          "Pilot session script",
          "Evidence packet",
          "Iteration decision memo",
        ],
      },
    ],
  },
  {
    id: "T3",
    title: "Architecture Systems Lab",
    subtitle: "Translate prototypes into resilient solution architectures and runbooks.",
    duration: "4-week program",
    signatureEvidence: "Solution architecture deck, integration runbook, evaluation matrix",
    stages: [
      {
        name: "Discover",
        summary: "Map capabilities, constraints, and the architectural patterns in play.",
        deliverables: [
          "Capability map",
          "Pattern selection record",
          "Risk radar",
        ],
      },
      {
        name: "Build",
        summary: "Design interfaces, data flows, and deployment topologies.",
        deliverables: [
          "Solution interface contract",
          "Data and retrieval plan",
          "Deployment topology diagram",
        ],
      },
      {
        name: "Launch",
        summary: "Socialize the architecture and define proof milestones with delivery teams.",
        deliverables: [
          "Architecture briefing",
          "Proof milestone backlog",
          "Integration readiness checklist",
        ],
      },
    ],
  },
  {
    id: "T4",
    title: "Collaboration & Communication",
    subtitle: "Align cross-functional teams and narrate results with clarity and confidence.",
    duration: "2-week cadence",
    signatureEvidence: "Collaboration charter, communication kit, enablement loop",
    stages: [
      {
        name: "Discover",
        summary: "Understand stakeholders, information needs, and collaboration friction.",
        deliverables: [
          "Stakeholder clarity map",
          "Communication requirements grid",
          "Collaboration baseline survey",
        ],
      },
      {
        name: "Build",
        summary: "Create operating rituals, enablement assets, and feedback systems.",
        deliverables: [
          "Team operating ritual",
          "Enablement playbook",
          "Feedback instrumentation plan",
        ],
      },
      {
        name: "Launch",
        summary: "Ship story packages and enablement sessions that keep teams aligned.",
        deliverables: [
          "Story package",
          "Enablement session outline",
          "Progress digest",
        ],
      },
    ],
  },
  {
    id: "T5",
    title: "Operations & Reliability",
    subtitle: "Instrument, monitor, and govern AI workflows in production.",
    duration: "4-week program",
    signatureEvidence: "Operations dashboard, incident drill log, readiness certification",
    stages: [
      {
        name: "Discover",
        summary: "Assess operational readiness and define reliability targets.",
        deliverables: [
          "Reliability baseline report",
          "SLO and KPI map",
          "Incident taxonomy",
        ],
      },
      {
        name: "Build",
        summary: "Deploy observability, guardrails, and runbook automations.",
        deliverables: [
          "Observability dashboard",
          "Guardrail enforcement flow",
          "Automated runbook",
        ],
      },
      {
        name: "Launch",
        summary: "Rehearse incidents and publish operational insights to sponsors.",
        deliverables: [
          "Incident simulation log",
          "Operations insight brief",
          "On-call handbook",
        ],
      },
    ],
  },
  {
    id: "T6",
    title: "Leadership & Scale",
    subtitle: "Activate portfolio governance, investment strategy, and adoption at scale.",
    duration: "Ongoing leadership lane",
    signatureEvidence: "Portfolio roadmap, investment cases, influence operating system",
    stages: [
      {
        name: "Discover",
        summary: "Surface portfolio signals, risks, and investment opportunities.",
        deliverables: [
          "Portfolio signal dashboard",
          "Risk and policy journal",
          "Investment framing memo",
        ],
      },
      {
        name: "Build",
        summary: "Craft executive narratives, governance cadences, and funding models.",
        deliverables: [
          "Executive narrative kit",
          "Governance cadence map",
          "Funding runway model",
        ],
      },
      {
        name: "Launch",
        summary: "Mobilize sponsors, partners, and communities with clear proof and calls to action.",
        deliverables: [
          "Sponsor activation plan",
          "Partner enablement pack",
          "Community proof digest",
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
    persona: "Agent Engineer",
    phase: "Launch",
    intent: "Stand up a dependable coding agent that ships quality pull requests.",
    highlights: [
      "Agent opportunity framing",
      "Prompt and policy baseline",
      "Field test telemetry",
    ],
    days: [
      { label: "Day 1", focus: "Frame and scope", modules: ["AE-101", "AE-102"] },
      { label: "Day 2", focus: "Prototype loop", modules: ["AE-103", "RP-201"] },
      { label: "Day 3", focus: "Guardrails", modules: ["AE-104", "OR-501"] },
      { label: "Day 4", focus: "Demo narrative", modules: ["CC-401"] },
      { label: "Day 5", focus: "Handoff", modules: ["CC-404", "OR-503"] },
    ],
    ctaLabel: "Start the agent sprint",
    ctaHref: "#micro-paths",
  },
  {
    persona: "Solution Architect",
    phase: "Design",
    intent: "Translate validated prototypes into production-ready solution architecture.",
    highlights: [
      "Capability mapping",
      "Interface contracts",
      "Proof milestone backlog",
    ],
    days: [
      { label: "Day 1", focus: "Discovery", modules: ["RP-202", "SA-301"] },
      { label: "Day 2", focus: "Interface", modules: ["SA-302"] },
      { label: "Day 3", focus: "Retrieval & data", modules: ["SA-303", "OR-502"] },
      { label: "Day 4", focus: "Launch plan", modules: ["SA-304", "CC-403"] },
      { label: "Day 5", focus: "Sponsor brief", modules: ["LS-601"] },
    ],
    ctaLabel: "Design the architecture",
    ctaHref: "#micro-paths",
  },
  {
    persona: "Product Partner",
    phase: "Accelerate",
    intent: "Guide rapid experiments and align value proof with stakeholders.",
    highlights: [
      "Prototype hypothesis",
      "Pilot facilitation",
      "Iteration roadmap",
    ],
    days: [
      { label: "Day 1", focus: "Hypothesis", modules: ["RP-201", "RP-202"] },
      { label: "Day 2", focus: "Story and demo", modules: ["CC-402"] },
      { label: "Day 3", focus: "Pilot", modules: ["RP-203", "CC-403"] },
      { label: "Day 4", focus: "Evidence", modules: ["RP-204"] },
      { label: "Day 5", focus: "Roadmap", modules: ["LS-602"] },
    ],
    ctaLabel: "Launch the experiment plan",
    ctaHref: "#micro-paths",
  },
  {
    persona: "Delivery Lead",
    phase: "Operate",
    intent: "Instrument operations, run drills, and keep sponsors informed.",
    highlights: [
      "Reliability baselines",
      "Observability rollout",
      "Incident rehearsal",
    ],
    days: [
      { label: "Day 1", focus: "Baseline", modules: ["OR-501"] },
      { label: "Day 2", focus: "Observability", modules: ["OR-502", "OR-503"] },
      { label: "Day 3", focus: "Runbooks", modules: ["OR-504"] },
      { label: "Day 4", focus: "Communications", modules: ["CC-404"] },
      { label: "Day 5", focus: "Sponsor digest", modules: ["LS-603"] },
    ],
    ctaLabel: "Activate delivery lane",
    ctaHref: "#micro-paths",
  },
  {
    persona: "Executive Sponsor",
    phase: "Scale",
    intent: "Turn signals into investment cases and clear stakeholder momentum.",
    highlights: [
      "Portfolio signals",
      "Governance cadence",
      "Activation plan",
    ],
    days: [
      { label: "Day 1", focus: "Signals", modules: ["LS-601"] },
      { label: "Day 2", focus: "Narrative", modules: ["LS-602"] },
      { label: "Day 3", focus: "Governance", modules: ["LS-603"] },
      { label: "Day 4", focus: "Community", modules: ["LS-604"] },
      { label: "Day 5", focus: "Investment", modules: ["SA-304", "OR-504"] },
    ],
    ctaLabel: "Brief the sponsor lane",
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
    title: "Maker",
    description: "Proves ability to frame and ship agent prototypes with safety basics.",
    requirements: [
      "Complete at least 5 Maker modules",
      "Deliver an agent opportunity canvas and guardrail baseline",
      "Capture first field-test telemetry",
    ],
    evidence: "Opportunity canvas, guardrail checklist, field test log",
  },
  {
    title: "Builder",
    description: "Demonstrates architecture and prototyping skill across multiple squads.",
    requirements: [
      "Ship 3 prototypes through pilot readiness",
      "Publish solution interface contracts and retrieval plans",
      "Facilitate a cross-team enablement session",
    ],
    evidence: "Prototype repo, architecture briefing, enablement recording",
  },
  {
    title: "Navigator",
    description: "Runs delivery cadences, manages risk, and keeps sponsors informed.",
    requirements: [
      "Maintain production monitoring for 30 days",
      "Execute two incident simulations with retrospectives",
      "Produce bi-weekly sponsor digest with action items",
    ],
    evidence: "Operations dashboard, incident simulation log, sponsor digest",
  },
  {
    title: "Strategist",
    description: "Aligns portfolio bets, funding decisions, and executive narratives.",
    requirements: [
      "Guide three investment decisions with supporting telemetry",
      "Host governance cadence with cross-functional stakeholders",
      "Publish a portfolio scale roadmap",
    ],
    evidence: "Investment briefing, governance cadence notes, scale roadmap",
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
    name: "Software & Platforms",
    outcomes: [
      "Agent pair-programming at scale",
      "Prototype marketplaces for new features",
      "Architecture review accelerators",
    ],
    signals: ["SOC2", "ISO 27001", "Secure SDLC"],
    href: "https://github.com/frankxai/saas-ai-architect-academy/tree/main/docs/curriculum",
  },
  {
    name: "Financial Services",
    outcomes: [
      "Compliance-friendly coding copilots",
      "Portfolio intelligence dashboards",
      "Client advisory storytellers",
    ],
    signals: ["Basel III", "SOX", "Model Risk MRMG"],
    href: "https://github.com/frankxai/saas-ai-architect-academy/tree/main/docs/curriculum",
  },
  {
    name: "Health & Life Sciences",
    outcomes: [
      "Clinical documentation copilots",
      "Trial operations orchestration",
      "Knowledge retrieval assistants",
    ],
    signals: ["HIPAA", "FDA SaMD", "ISO 13485"],
    href: "https://github.com/frankxai/saas-ai-architect-academy/tree/main/docs/curriculum",
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
    focus: "Research horizons, regulation updates, and pattern watchlists.",
    slos: [
      "Refresh critical intel within 24 hours of change",
      "Maintain 95% citation accuracy",
      "Flag module freshness risks automatically",
    ],
  },
  {
    name: "Coach",
    focus: "Pair with learners during modules, labs, and retrospectives.",
    slos: [
      "Median response under 2 seconds",
      "Satisfaction above 4.6/5",
      "Escalate risky experiments within 10 minutes",
    ],
  },
  {
    name: "Critic",
    focus: "Guardrails, evaluations, and red-team simulations.",
    slos: [
      "Detect 98% evaluation anomalies",
      "Zero unlogged high-severity incidents",
      "Attach control evidence to every flagged issue",
    ],
  },
  {
    name: "Archivist",
    focus: "Evidence locker, credential manifests, and knowledge graph links.",
    slos: [
      "Tag 100% deliverables with owners and signals",
      "Keep schema drift under 1%",
      "Generate credential payloads automatically",
    ],
  },
  {
    name: "Companion",
    focus: "Health, pacing, and personalised nudges across squads.",
    slos: [
      "On-time nudges for 90% milestones",
      "Keep burnout false positives below 5%",
      "Publish weekly sponsor-ready progress snapshots",
    ],
  },
  {
    name: "Navigator",
    focus: "CTA instrumentation, sponsor digest composition, and mastery guardrails.",
    slos: [
      "Cover 95% persona CTAs every sprint",
      "Generate sponsor digest drafts within 5 minutes of module completion",
      "Hold mastery drift within one tier",
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
    description: "Track value signals, adoption, and investment readiness per initiative.",
    metrics: ["Value lift", "Prototype traction", "Sponsor confidence"],
  },
  {
    title: "Build Momentum",
    description: "Understand module throughput, agent readiness, and enablement coverage.",
    metrics: ["Module completion", "Agent readiness", "Enablement reach"],
  },
  {
    title: "Reliability Radar",
    description: "Observe production guardrails, incident rehearsal results, and risk posture.",
    metrics: ["Guardrail coverage", "Incident rehearsal score", "Risk heat"],
  },
  {
    title: "Portfolio Insights",
    description: "Summarize portfolio bets, ROI signals, and executive engagements.",
    metrics: ["Investment cases", "ROI runway", "Executive signals"],
  },
];

export const documentationLinks = [
  {
    label: "Agent Sprint Playbook",
    href: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/assistant-ops.md",
  },
  {
    label: "Prototype Studio Guide",
    href: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/modules.md",
  },
  {
    label: "Architecture Checklist",
    href: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/architecture.md",
  },
  {
    label: "Operations Handbook",
    href: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/evaluation-ops.md",
  },
  {
    label: "Leadership Toolkit",
    href: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/sponsor-cockpit.md",
  },
];

export type ModuleResource = {
  label: string;
  type: "doc" | "template" | "repo" | "toolkit";
  url: string;
};

export type AssistantPrompt = {
  agent: "Scout" | "Coach" | "Critic" | "Archivist" | "Companion" | "Navigator";
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
  arc: "Discover" | "Build" | "Launch";
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
    code: "AE-101",
    title: "Agent Opportunity Mapping",
    galaxy: "T1",
    arc: "Discover",
    mastery: "Explorer",
    journeyStage: "Agent Foundations",
    phase: "Sprint 1  Discover",
    personaFit: ["agent-engineer", "solution-architect"],
    durationHours: 4,
    modality: "WK",
    outcomes: [
      "Define the agent user journey and outcome",
      "Clarify guardrails, risks, and human touchpoints",
      "Prioritize metrics for success and safety",
    ],
    deliverables: ["Agent opportunity canvas", "Guardrail hypothesis", "Success metric stack"],
    prerequisites: [],
    evaluationSignals: ["AGENT-IDEA-001", "SAFE-GUARD-BASE"],
    freshness: "2025-09-21",
    resources: [
      { label: "Agent framing canvas", type: "template", url: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/modules.md" },
      { label: "Guardrail briefing", type: "doc", url: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/assistant-ops.md" },
    ],
    assistantPrompts: [
      { agent: "Scout", prompt: "List emerging patterns for coding agents in enterprise delivery." },
      { agent: "Coach", prompt: "Review my agent opportunity canvas and highlight missing risks." },
    ],
    steps: [
      { title: "Interview stakeholders", description: "Capture goals, pain points, and success signals." },
      { title: "Map guardrails", description: "Document constraints, policies, and human touchpoints." },
      { title: "Publish the canvas", description: "Share the opportunity canvas with sponsors for feedback." },
    ],
  },
  {
    code: "AE-102",
    title: "Prompt & Policy Baseline",
    galaxy: "T1",
    arc: "Discover",
    mastery: "Explorer",
    journeyStage: "Agent Foundations",
    phase: "Sprint 1  Discover",
    personaFit: ["agent-engineer", "risk-partner"],
    durationHours: 3,
    modality: "ML",
    outcomes: [
      "Create grounding instructions for agent behavior",
      "Align prompt patterns with policy obligations",
      "Set evaluation hooks for prompt regressions",
    ],
    deliverables: ["System prompt draft", "Policy alignment matrix", "Evaluation hook list"],
    prerequisites: ["AE-101"],
    evaluationSignals: ["PROMPT-BASE-001", "CTRL-POLICY-001"],
    freshness: "2025-09-21",
    resources: [
      { label: "Prompt design guidelines", type: "doc", url: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/micro-paths.md" },
      { label: "Policy alignment matrix", type: "template", url: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/credentials.md" },
    ],
    assistantPrompts: [
      { agent: "Coach", prompt: "Suggest refinements to keep this system prompt aligned with policy." },
      { agent: "Critic", prompt: "Run safety heuristics against this prompt baseline." },
    ],
    steps: [
      { title: "Draft behaviour rules", description: "Capture objectives, tone, exclusions, and fallback." },
      { title: "Overlay policy", description: "Align prompt instructions to policy requirements and guardrails." },
      { title: "Set evaluations", description: "Define regression tests and criteria for prompt updates." },
    ],
  },
  {
    code: "AE-103",
    title: "Coding Agent Skeleton",
    galaxy: "T1",
    arc: "Build",
    mastery: "Builder",
    journeyStage: "Agent Foundations",
    phase: "Sprint 2  Build",
    personaFit: ["agent-engineer", "developer"],
    durationHours: 6,
    modality: "LB",
    outcomes: [
      "Implement agent routing and tool interfaces",
      "Instrument evaluation events and telemetry",
      "Package a reusable agent starter kit",
    ],
    deliverables: ["Agent starter repo", "Tool contract definitions", "Telemetry checklist"],
    prerequisites: ["AE-101", "AE-102"],
    evaluationSignals: ["AGENT-ROUTER-001", "EVAL-HOOK-001"],
    freshness: "2025-09-21",
    resources: [
      { label: "Agent starter repo", type: "repo", url: "https://github.com/AI-Architect-Academy/ai-architect-academy" },
      { label: "Telemetry checklist", type: "template", url: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/evidence-locker.md" },
    ],
    assistantPrompts: [
      { agent: "Coach", prompt: "Pair with me while wiring the agent skeleton to GitHub." },
      { agent: "Archivist", prompt: "Log the starter kit and telemetry checklist in the evidence locker." },
    ],
    steps: [
      { title: "Configure tools", description: "Define tool interfaces, auth, and fallback flows." },
      { title: "Wire telemetry", description: "Stream agent events, errors, and evaluations to analytics." },
      { title: "Document starter kit", description: "Outline setup instructions and contribution guidance." },
    ],
  },
  {
    code: "AE-104",
    title: "Agent Field Test",
    galaxy: "T1",
    arc: "Launch",
    mastery: "Builder",
    journeyStage: "Agent Foundations",
    phase: "Sprint 3  Launch",
    personaFit: ["agent-engineer", "delivery-lead", "risk-partner"],
    durationHours: 5,
    modality: "CL",
    outcomes: [
      "Execute controlled agent tests with humans in the loop",
      "Capture success and failure stories",
      "Outline next iteration plan",
    ],
    deliverables: ["Field test journal", "Incident log", "Iteration memo"],
    prerequisites: ["AE-103"],
    evaluationSignals: ["AGENT-FIELD-001", "SAFE-INCIDENT-001"],
    freshness: "2025-09-21",
    resources: [
      { label: "Field test journal", type: "template", url: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/mentor-ops.md" },
      { label: "Incident response guide", type: "doc", url: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/evaluation-ops.md" },
    ],
    assistantPrompts: [
      { agent: "Companion", prompt: "Monitor the field test and surface any learner friction." },
      { agent: "Navigator", prompt: "Draft a sponsor-ready summary after the field test." },
    ],
    steps: [
      { title: "Plan scenarios", description: "Define success, edge, and failure cases for the test." },
      { title: "Run sessions", description: "Facilitate live testing with observers capturing evidence." },
      { title: "Synthesize", description: "Summarize learnings, incidents, and next iteration focus." },
    ],
  },
  {
    code: "RP-201",
    title: "Prototype Hypothesis Sprint",
    galaxy: "T2",
    arc: "Discover",
    mastery: "Explorer",
    journeyStage: "Prototype Studio",
    phase: "Sprint 1  Frame",
    personaFit: ["product-partner", "agent-engineer", "designer"],
    durationHours: 4,
    modality: "WK",
    outcomes: [
      "Define problem, audience, and desired proof",
      "Script prototype stories and feedback goals",
      "Plan evidence collection",
    ],
    deliverables: ["Prototype hypothesis brief", "Story outline", "Evidence plan"],
    prerequisites: [],
    evaluationSignals: ["PROTO-HYP-001", "EVID-PLAN-001"],
    freshness: "2025-09-21",
    resources: [
      { label: "Hypothesis brief", type: "template", url: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/micro-paths.md" },
      { label: "Evidence planner", type: "toolkit", url: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/evidence-locker.md" },
    ],
    assistantPrompts: [
      { agent: "Coach", prompt: "Evaluate my prototype hypothesis for clarity and risk." },
      { agent: "Scout", prompt: "Provide examples of similar prototypes in market." },
    ],
    steps: [
      { title: "Clarify problem", description: "Spell out pain, desired outcome, and audience." },
      { title: "Storyboard proof", description: "Map the user story and key interactions." },
      { title: "Plan evidence", description: "Define metrics, qualitative clips, and success signals." },
    ],
  },
  {
    code: "RP-202",
    title: "Experience Story Sprint",
    galaxy: "T2",
    arc: "Discover",
    mastery: "Explorer",
    journeyStage: "Prototype Studio",
    phase: "Sprint 1  Frame",
    personaFit: ["product-partner", "solution-architect", "designer"],
    durationHours: 3,
    modality: "MC",
    outcomes: [
      "Craft high-fidelity storyboards for prototype flows",
      "Align UX artifacts with agent capabilities",
      "Prepare demo scripts for stakeholders",
    ],
    deliverables: ["Storyboard deck", "Interaction notes", "Demo script"],
    prerequisites: ["RP-201"],
    evaluationSignals: ["UX-STORY-001", "DEMO-READY-001"],
    freshness: "2025-09-21",
    resources: [
      { label: "Storyboard template", type: "template", url: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/ui-ux-principles.md" },
      { label: "Demo script kit", type: "toolkit", url: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/mentor-ops.md" },
    ],
    assistantPrompts: [
      { agent: "Coach", prompt: "Review my storyboard and highlight moments to dramatize." },
      { agent: "Navigator", prompt: "Draft a teaser email for the upcoming prototype demo." },
    ],
    steps: [
      { title: "Draft key moments", description: "Sketch the essential user interactions." },
      { title: "Align capabilities", description: "Tie moments to agent abilities and constraints." },
      { title: "Script demo", description: "Write narration, cues, and supporting assets." },
    ],
  },
  {
    code: "RP-203",
    title: "Prototype Build Loop",
    galaxy: "T2",
    arc: "Build",
    mastery: "Builder",
    journeyStage: "Prototype Studio",
    phase: "Sprint 2  Build",
    personaFit: ["agent-engineer", "developer", "designer"],
    durationHours: 8,
    modality: "LB",
    outcomes: [
      "Assemble working prototype with instrumentation",
      "Implement reusable components and prompts",
      "Capture feedback during build iterations",
    ],
    deliverables: ["Prototype repo", "Component library", "Build feedback log"],
    prerequisites: ["RP-201", "AE-103"],
    evaluationSignals: ["PROTO-BUILD-001", "COMP-REUSE-001"],
    freshness: "2025-09-21",
    resources: [
      { label: "Prototype starter", type: "repo", url: "https://github.com/AI-Architect-Academy/ai-architect-academy" },
      { label: "Instrumentation checklist", type: "template", url: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/evaluation-registry.md" },
    ],
    assistantPrompts: [
      { agent: "Coach", prompt: "Troubleshoot this prototype integration failure." },
      { agent: "Archivist", prompt: "Store the build feedback log with timestamps." },
    ],
    steps: [
      { title: "Set up repo", description: "Clone starter kit and configure environments." },
      { title: "Compose features", description: "Code the core flows with instrumentation." },
      { title: "Review & capture", description: "Record findings, blockers, and reuse patterns." },
    ],
  },
  {
    code: "RP-204",
    title: "Prototype Pilot",
    galaxy: "T2",
    arc: "Launch",
    mastery: "Builder",
    journeyStage: "Prototype Studio",
    phase: "Sprint 3  Pilot",
    personaFit: ["product-partner", "agent-engineer", "delivery-lead"],
    durationHours: 5,
    modality: "CL",
    outcomes: [
      "Plan and facilitate prototype pilot sessions",
      "Collect qualitative and quantitative signals",
      "Decide iterate vs. invest",
    ],
    deliverables: ["Pilot facilitation plan", "Evidence packet", "Decision memo"],
    prerequisites: ["RP-203"],
    evaluationSignals: ["PILOT-FAC-001", "EVID-PACKET-001"],
    freshness: "2025-09-21",
    resources: [
      { label: "Pilot facilitation guide", type: "doc", url: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/teaching-model.md" },
      { label: "Evidence packet template", type: "template", url: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/evidence-locker.md" },
    ],
    assistantPrompts: [
      { agent: "Companion", prompt: "Monitor user sentiment during the pilot." },
      { agent: "Navigator", prompt: "Draft a sponsor memo summarizing pilot results." },
    ],
    steps: [
      { title: "Plan session", description: "Define participants, goals, and schedule." },
      { title: "Facilitate", description: "Run the pilot, capture quotes, metrics, and reactions." },
      { title: "Decide", description: "Summarize results and recommend iterate vs. invest." },
    ],
  },
  {
    code: "SA-301",
    title: "Capability Mapping Lab",
    galaxy: "T3",
    arc: "Discover",
    mastery: "Builder",
    journeyStage: "Architecture Systems",
    phase: "Sprint 1  Discover",
    personaFit: ["solution-architect", "agent-engineer"],
    durationHours: 5,
    modality: "LB",
    outcomes: [
      "Map required capabilities and dependencies",
      "Identify reusable patterns and gaps",
      "Align architecture scope with business outcomes",
    ],
    deliverables: ["Capability map", "Pattern decision log", "Outcome alignment memo"],
    prerequisites: ["AE-101", "RP-201"],
    evaluationSignals: ["ARCH-CAP-001", "PATTERN-DEC-001"],
    freshness: "2025-09-21",
    resources: [
      { label: "Capability map template", type: "template", url: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/architecture.md" },
      { label: "Pattern catalog", type: "doc", url: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/industry-playbooks.md" },
    ],
    assistantPrompts: [
      { agent: "Scout", prompt: "Highlight architecture patterns relevant to this solution." },
      { agent: "Coach", prompt: "Check if my capability map covers all integrations." },
    ],
    steps: [
      { title: "Identify capabilities", description: "List required product and platform capabilities." },
      { title: "Map dependencies", description: "Document integrations, data, and guardrails." },
      { title: "Align outcomes", description: "Show how capabilities drive business goals." },
    ],
  },
  {
    code: "SA-302",
    title: "Interface Contract Design",
    galaxy: "T3",
    arc: "Build",
    mastery: "Builder",
    journeyStage: "Architecture Systems",
    phase: "Sprint 2  Design",
    personaFit: ["solution-architect", "developer"],
    durationHours: 6,
    modality: "LB",
    outcomes: [
      "Define service interfaces, auth, and observability",
      "Document data flows and retrieval strategy",
      "Ensure controls and privacy are embedded",
    ],
    deliverables: ["Interface contract", "Data flow diagram", "Control checklist"],
    prerequisites: ["SA-301"],
    evaluationSignals: ["ARCH-IFACE-001", "DATA-FLOW-001"],
    freshness: "2025-09-21",
    resources: [
      { label: "Interface contract template", type: "template", url: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/track-explorer.md" },
      { label: "Control checklist", type: "doc", url: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/assistant-ops.md" },
    ],
    assistantPrompts: [
      { agent: "Critic", prompt: "Review this interface contract for missing guardrails." },
      { agent: "Archivist", prompt: "Store the contract and diagrams with metadata." },
    ],
    steps: [
      { title: "Outline endpoints", description: "Define inputs, outputs, and auth." },
      { title: "Design data flows", description: "Map retrieval, storage, and privacy safeguards." },
      { title: "Document controls", description: "Attach logging, monitoring, and escalation paths." },
    ],
  },
  {
    code: "SA-303",
    title: "Retrieval & Data Blueprint",
    galaxy: "T3",
    arc: "Build",
    mastery: "Architect",
    journeyStage: "Architecture Systems",
    phase: "Sprint 2  Design",
    personaFit: ["solution-architect", "agent-engineer", "data-engineer"],
    durationHours: 7,
    modality: "LB",
    outcomes: [
      "Design hybrid retrieval strategy",
      "Define data governance and freshness",
      "Plan evaluation for retrieval quality",
    ],
    deliverables: ["Retrieval blueprint", "Data governance log", "Evaluation matrix"],
    prerequisites: ["SA-302", "AE-103"],
    evaluationSignals: ["RETRIEVE-PLAN-001", "DATA-GOV-001"],
    freshness: "2025-09-21",
    resources: [
      { label: "Retrieval patterns", type: "doc", url: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/evidence-locker.md" },
      { label: "Evaluation matrix", type: "template", url: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/evaluation-registry.md" },
    ],
    assistantPrompts: [
      { agent: "Scout", prompt: "Compare retrieval patterns for this use case." },
      { agent: "Critic", prompt: "Assess the evaluation matrix for coverage." },
    ],
    steps: [
      { title: "Assess data", description: "Catalogue sources, freshness, and risk." },
      { title: "Select patterns", description: "Choose retrieval and augmentation approaches." },
      { title: "Define evaluation", description: "Plan tests for precision, recall, and bias." },
    ],
  },
  {
    code: "SA-304",
    title: "Architecture Launch Brief",
    galaxy: "T3",
    arc: "Launch",
    mastery: "Architect",
    journeyStage: "Architecture Systems",
    phase: "Sprint 3  Launch",
    personaFit: ["solution-architect", "delivery-lead", "executive"],
    durationHours: 4,
    modality: "CL",
    outcomes: [
      "Summarize architecture decisions and trade-offs",
      "Define launch milestones and proof points",
      "Equip sponsors with evidence to decide",
    ],
    deliverables: ["Architecture briefing", "Milestone roadmap", "Investment decision memo"],
    prerequisites: ["SA-301", "SA-302", "SA-303"],
    evaluationSignals: ["ARCH-BRIEF-001", "MILESTONE-001"],
    freshness: "2025-09-21",
    resources: [
      { label: "Architecture brief template", type: "template", url: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/architecture.md" },
      { label: "Decision memo", type: "doc", url: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/sponsor-cockpit.md" },
    ],
    assistantPrompts: [
      { agent: "Navigator", prompt: "Draft executive talking points for this architecture brief." },
      { agent: "Companion", prompt: "Schedule a review session and notify stakeholders." },
    ],
    steps: [
      { title: "Summarize design", description: "Capture key decisions, trade-offs, and patterns." },
      { title: "Plan milestones", description: "Outline proof activities and readiness gates." },
      { title: "Brief sponsors", description: "Package the story and recommended decision." },
    ],
  },
  {
    code: "CC-401",
    title: "Collaboration Operating System",
    galaxy: "T4",
    arc: "Discover",
    mastery: "Builder",
    journeyStage: "Collaboration",
    phase: "Sprint 1  Align",
    personaFit: ["delivery-lead", "product-partner", "agent-engineer"],
    durationHours: 4,
    modality: "WK",
    outcomes: [
      "Diagnose collaboration friction and needs",
      "Define rituals for decision-making",
      "Align on shared language and artefacts",
    ],
    deliverables: ["Collaboration charter", "Decision ritual map", "Shared glossary"],
    prerequisites: ["AE-101"],
    evaluationSignals: ["COLLAB-OPS-001", "RITUAL-MAP-001"],
    freshness: "2025-09-21",
    resources: [
      { label: "Collaboration charter template", type: "template", url: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/mentor-ops.md" },
      { label: "Glossary guide", type: "doc", url: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/hub-content-model.md" },
    ],
    assistantPrompts: [
      { agent: "Companion", prompt: "Summarize collaboration pain points from retrospectives." },
      { agent: "Navigator", prompt: "Draft an announcement for the new collaboration rhythm." },
    ],
    steps: [
      { title: "Assess current state", description: "Gather insights on current team workflows." },
      { title: "Design rituals", description: "Define cadences for decisions, demos, and retros." },
      { title: "Socialize charter", description: "Share the collaboration OS and collect feedback." },
    ],
  },
  {
    code: "CC-402",
    title: "Storytelling Lab",
    galaxy: "T4",
    arc: "Build",
    mastery: "Builder",
    journeyStage: "Collaboration",
    phase: "Sprint 2  Engage",
    personaFit: ["product-partner", "delivery-lead", "executive"],
    durationHours: 4,
    modality: "MC",
    outcomes: [
      "Craft narratives tailored to audience needs",
      "Translate technical progress into value",
      "Prepare artefacts for multiple channels",
    ],
    deliverables: ["Audience map", "Story arc deck", "Channel asset pack"],
    prerequisites: ["CC-401"],
    evaluationSignals: ["STORY-ARC-001", "CHANNEL-ASSET-001"],
    freshness: "2025-09-21",
    resources: [
      { label: "Audience map", type: "template", url: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/sponsor-cockpit.md" },
      { label: "Narrative framework", type: "doc", url: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/modules.md" },
    ],
    assistantPrompts: [
      { agent: "Navigator", prompt: "Draft executive-ready storyline for the latest demo." },
      { agent: "Coach", prompt: "Review my audience map and identify missing personas." },
    ],
    steps: [
      { title: "Map audience", description: "Capture goals, influence, and preferred channels." },
      { title: "Build narrative", description: "Craft story arc grounded in value and proof." },
      { title: "Package assets", description: "Create tailored artefacts for each channel." },
    ],
  },
  {
    code: "CC-403",
    title: "Enablement Sprint",
    galaxy: "T4",
    arc: "Launch",
    mastery: "Builder",
    journeyStage: "Collaboration",
    phase: "Sprint 3  Enable",
    personaFit: ["delivery-lead", "product-partner", "agent-engineer"],
    durationHours: 5,
    modality: "CL",
    outcomes: [
      "Plan enablement sessions with clear outcomes",
      "Equip champions with toolkits",
      "Instrument feedback loops",
    ],
    deliverables: ["Enablement plan", "Champion toolkit", "Feedback loop map"],
    prerequisites: ["CC-401", "CC-402"],
    evaluationSignals: ["ENABLE-PLAN-001", "FEEDBACK-LOOP-001"],
    freshness: "2025-09-21",
    resources: [
      { label: "Enablement plan", type: "template", url: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/mentor-ops.md" },
      { label: "Feedback loop kit", type: "toolkit", url: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/ui-ux-principles.md" },
    ],
    assistantPrompts: [
      { agent: "Companion", prompt: "Monitor enablement session feedback in real time." },
      { agent: "Navigator", prompt: "Summarize enablement outcomes for sponsors." },
    ],
    steps: [
      { title: "Plan sessions", description: "Define objectives, audience, and logistics." },
      { title: "Equip champions", description: "Deliver toolkits and rehearsal guides." },
      { title: "Capture feedback", description: "Instrument loops and route improvements." },
    ],
  },
  {
    code: "CC-404",
    title: "Progress Digest Studio",
    galaxy: "T4",
    arc: "Launch",
    mastery: "Strategist",
    journeyStage: "Collaboration",
    phase: "Sprint 3  Enable",
    personaFit: ["delivery-lead", "executive", "product-partner"],
    durationHours: 3,
    modality: "ML",
    outcomes: [
      "Produce concise progress digests",
      "Align updates with sponsor expectations",
      "Cue next-step actions",
    ],
    deliverables: ["Progress digest", "Call-to-action list", "Channel schedule"],
    prerequisites: ["CC-402"],
    evaluationSignals: ["DIGEST-QUALITY-001", "CTA-COVERAGE-001"],
    freshness: "2025-09-21",
    resources: [
      { label: "Digest template", type: "template", url: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/sponsor-cockpit.md" },
      { label: "CTA bank", type: "toolkit", url: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/experience-blueprint.md" },
    ],
    assistantPrompts: [
      { agent: "Navigator", prompt: "Assemble this week's progress digest." },
      { agent: "Archivist", prompt: "Log digests and CTAs against sponsor records." },
    ],
    steps: [
      { title: "Collect signals", description: "Gather wins, blockers, and telemetry." },
      { title: "Curate narrative", description: "Draft digest with value, proof, and next steps." },
      { title: "Distribute", description: "Publish across channels and capture follow-ups." },
    ],
  },
  {
    code: "OR-501",
    title: "Reliability Baseline",
    galaxy: "T5",
    arc: "Discover",
    mastery: "Builder",
    journeyStage: "Operations",
    phase: "Sprint 1  Assess",
    personaFit: ["delivery-lead", "agent-engineer", "risk-partner"],
    durationHours: 4,
    modality: "WK",
    outcomes: [
      "Assess current readiness and risks",
      "Define SLOs and guardrail metrics",
      "Prioritize operations backlog",
    ],
    deliverables: ["Reliability report", "SLO map", "Operations backlog"],
    prerequisites: ["AE-104"],
    evaluationSignals: ["OPS-BASE-001", "SLO-MAP-001"],
    freshness: "2025-09-21",
    resources: [
      { label: "Reliability checklist", type: "template", url: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/evaluation-ops.md" },
      { label: "SLO playbook", type: "doc", url: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/evaluation-registry.md" },
    ],
    assistantPrompts: [
      { agent: "Scout", prompt: "Highlight operations best practices from the latest releases." },
      { agent: "Critic", prompt: "Review SLO map for gaps or conflicts." },
    ],
    steps: [
      { title: "Collect data", description: "Gather current incident, latency, and satisfaction metrics." },
      { title: "Define targets", description: "Agree SLO/SLA for critical journeys." },
      { title: "Plan backlog", description: "Prioritize operations backlog items." },
    ],
  },
  {
    code: "OR-502",
    title: "Observability Rollout",
    galaxy: "T5",
    arc: "Build",
    mastery: "Architect",
    journeyStage: "Operations",
    phase: "Sprint 2  Instrument",
    personaFit: ["delivery-lead", "agent-engineer", "data-engineer"],
    durationHours: 6,
    modality: "LB",
    outcomes: [
      "Deploy logging, tracing, and evaluation dashboards",
      "Integrate alerting with on-call processes",
      "Ensure guardrails are observable",
    ],
    deliverables: ["Observability dashboard", "Alert routing playbook", "Guardrail coverage report"],
    prerequisites: ["OR-501", "SA-303"],
    evaluationSignals: ["OBS-DASH-001", "ALERT-ROUTE-001"],
    freshness: "2025-09-21",
    resources: [
      { label: "Observability starter", type: "toolkit", url: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/evaluation-ops.md" },
      { label: "Alert routing", type: "template", url: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/assistant-ops.md" },
    ],
    assistantPrompts: [
      { agent: "Critic", prompt: "Test alert routing for high-severity events." },
      { agent: "Archivist", prompt: "Catalog observability dashboards with owners." },
    ],
    steps: [
      { title: "Configure dashboards", description: "Surface key metrics and guardrails." },
      { title: "Wire alerts", description: "Integrate alerts with PagerDuty/Teams." },
      { title: "Validate", description: "Simulate events and confirm coverage." },
    ],
  },
  {
    code: "OR-503",
    title: "Runbook Automation",
    galaxy: "T5",
    arc: "Build",
    mastery: "Builder",
    journeyStage: "Operations",
    phase: "Sprint 2  Instrument",
    personaFit: ["delivery-lead", "agent-engineer"],
    durationHours: 5,
    modality: "LB",
    outcomes: [
      "Automate repetitive operational playbooks",
      "Embed validation and approval steps",
      "Measure impact of automations",
    ],
    deliverables: ["Automated runbook", "Approval workflow", "Impact report"],
    prerequisites: ["OR-501"],
    evaluationSignals: ["RUNBOOK-AUTO-001", "AUTO-IMPACT-001"],
    freshness: "2025-09-21",
    resources: [
      { label: "Runbook template", type: "template", url: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/mentor-ops.md" },
      { label: "Automation playbook", type: "doc", url: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/assistant-ops.md" },
    ],
    assistantPrompts: [
      { agent: "Coach", prompt: "Evaluate which steps to automate in this runbook." },
      { agent: "Navigator", prompt: "Create a summary of automation impact for sponsors." },
    ],
    steps: [
      { title: "Identify candidate", description: "Select a high-value repetitive runbook." },
      { title: "Automate steps", description: "Script tasks with checks and approvals." },
      { title: "Measure impact", description: "Track time saved and risk reduction." },
    ],
  },
  {
    code: "OR-504",
    title: "Incident Simulation",
    galaxy: "T5",
    arc: "Launch",
    mastery: "Architect",
    journeyStage: "Operations",
    phase: "Sprint 3  Rehearse",
    personaFit: ["delivery-lead", "agent-engineer", "risk-partner"],
    durationHours: 6,
    modality: "CL",
    outcomes: [
      "Rehearse incidents end-to-end",
      "Identify improvement actions",
      "Publish operations insight brief",
    ],
    deliverables: ["Simulation plan", "Retrospective report", "Operations insight brief"],
    prerequisites: ["OR-502"],
    evaluationSignals: ["INCIDENT-SIM-001", "OPS-BRIEF-001"],
    freshness: "2025-09-21",
    resources: [
      { label: "Simulation scenario pack", type: "toolkit", url: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/evaluation-ops.md" },
      { label: "Retrospective guide", type: "template", url: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/mentor-ops.md" },
    ],
    assistantPrompts: [
      { agent: "Critic", prompt: "Run adversarial checks during the simulation." },
      { agent: "Navigator", prompt: "Draft an operations insight brief for sponsors." },
    ],
    steps: [
      { title: "Plan scenario", description: "Select scenario, roles, and success criteria." },
      { title: "Execute", description: "Facilitate simulation with observers capturing data." },
      { title: "Reflect", description: "Document insights and assign actions." },
    ],
  },
  {
    code: "LS-601",
    title: "Portfolio Signals Review",
    galaxy: "T6",
    arc: "Discover",
    mastery: "Strategist",
    journeyStage: "Leadership",
    phase: "Sprint 1  Assess",
    personaFit: ["executive", "product-partner", "solution-architect"],
    durationHours: 3,
    modality: "WK",
    outcomes: [
      "Aggregate performance and risk signals",
      "Prioritize initiatives for investment",
      "Outline executive-ready messaging",
    ],
    deliverables: ["Signal dashboard", "Investment prioritization", "Executive narrative outline"],
    prerequisites: ["SA-304", "OR-504"],
    evaluationSignals: ["PORTFOLIO-SIGNAL-001", "INVEST-PRIORITY-001"],
    freshness: "2025-09-21",
    resources: [
      { label: "Signal dashboard", type: "toolkit", url: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/experience-blueprint.md" },
      { label: "Narrative outline", type: "template", url: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/sponsor-cockpit.md" },
    ],
    assistantPrompts: [
      { agent: "Navigator", prompt: "Summarize portfolio signals and suggested actions." },
      { agent: "Scout", prompt: "Compare our signals to industry benchmarks." },
    ],
    steps: [
      { title: "Collect signals", description: "Gather metrics, qualitative feedback, and risk notes." },
      { title: "Prioritize", description: "Score initiatives against value and risk." },
      { title: "Outline narrative", description: "Frame the story for executive discussion." },
    ],
  },
  {
    code: "LS-602",
    title: "Investment Story Studio",
    galaxy: "T6",
    arc: "Build",
    mastery: "Strategist",
    journeyStage: "Leadership",
    phase: "Sprint 2  Shape",
    personaFit: ["executive", "product-partner", "finance"],
    durationHours: 4,
    modality: "MC",
    outcomes: [
      "Craft investment narratives rooted in evidence",
      "Model funding scenarios",
      "Prepare stakeholder Q&A",
    ],
    deliverables: ["Investment narrative", "Scenario model", "Stakeholder Q&A"],
    prerequisites: ["LS-601"],
    evaluationSignals: ["INVEST-NARRATIVE-001", "SCENARIO-MODEL-001"],
    freshness: "2025-09-21",
    resources: [
      { label: "Investment narrative template", type: "template", url: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/sponsor-cockpit.md" },
      { label: "Scenario model", type: "toolkit", url: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/experience-blueprint.md" },
    ],
    assistantPrompts: [
      { agent: "Navigator", prompt: "Draft investor talking points based on the latest signals." },
      { agent: "Coach", prompt: "Probe this investment narrative for gaps." },
    ],
    steps: [
      { title: "Build storyline", description: "Articulate value, proof, and urgency." },
      { title: "Model scenarios", description: "Quantify outcomes under different investments." },
      { title: "Prepare Q&A", description: "Anticipate questions and provide evidence." },
    ],
  },
  {
    code: "LS-603",
    title: "Governance Cadence Design",
    galaxy: "T6",
    arc: "Build",
    mastery: "Strategist",
    journeyStage: "Leadership",
    phase: "Sprint 2  Shape",
    personaFit: ["executive", "risk-partner", "delivery-lead"],
    durationHours: 3,
    modality: "WK",
    outcomes: [
      "Define governance forums and cadence",
      "Establish decision rights",
      "Embed telemetry into governance",
    ],
    deliverables: ["Governance cadence map", "Decision rights charter", "Telemetry pack"],
    prerequisites: ["LS-601"],
    evaluationSignals: ["GOV-CADENCE-001", "DECISION-RIGHTS-001"],
    freshness: "2025-09-21",
    resources: [
      { label: "Governance cadence template", type: "template", url: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/sponsor-cockpit.md" },
      { label: "Telemetry pack", type: "toolkit", url: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/evaluation-registry.md" },
    ],
    assistantPrompts: [
      { agent: "Navigator", prompt: "Assemble the telemetry pack for next governance session." },
      { agent: "Archivist", prompt: "Link governance decisions to evidence records." },
    ],
    steps: [
      { title: "Design cadence", description: "Plan forums, frequency, and participants." },
      { title: "Define decisions", description: "Clarify decision rights and escalation paths." },
      { title: "Embed telemetry", description: "Attach metrics and signals to each cadence." },
    ],
  },
  {
    code: "LS-604",
    title: "Community Activation",
    galaxy: "T6",
    arc: "Launch",
    mastery: "Luminary",
    journeyStage: "Leadership",
    phase: "Sprint 3  Mobilize",
    personaFit: ["executive", "product-partner", "communications"],
    durationHours: 4,
    modality: "RT",
    outcomes: [
      "Engage partners and community champions",
      "Publish proof and invitations",
      "Set up ongoing community touchpoints",
    ],
    deliverables: ["Community activation plan", "Proof digest", "Engagement calendar"],
    prerequisites: ["LS-602", "CC-404"],
    evaluationSignals: ["COMMUNITY-ACT-001", "PROOF-DIGEST-001"],
    freshness: "2025-09-21",
    resources: [
      { label: "Activation plan", type: "template", url: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/experience-blueprint.md" },
      { label: "Proof digest kit", type: "toolkit", url: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/modules.md" },
    ],
    assistantPrompts: [
      { agent: "Navigator", prompt: "Draft the community activation announcement." },
      { agent: "Companion", prompt: "Track engagement and highlight champions." },
    ],
    steps: [
      { title: "Plan activation", description: "Identify audiences, goals, and touchpoints." },
      { title: "Publish proof", description: "Share outcomes and invitations across channels." },
      { title: "Sustain", description: "Set up cadence, highlights, and feedback loops." },
    ],
  },
];
