import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

const navLinks = [
  { label: "Vision", href: "#vision" },
  { label: "Experience", href: "#experience" },
  { label: "Curriculum", href: "#curriculum" },
  { label: "Assistant", href: "#assistant" },
  { label: "Workspaces", href: "#workspaces" },
  { label: "Personas", href: "#personas" },
  { label: "Services", href: "#services" },
  { label: "Library", href: "#library" },
  { label: "Projects", href: "#projects" },
  { label: "Insights", href: "#insights" },
  { label: "Operations", href: "#operations" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Community", href: "#community" },
  { label: "Resources", href: "#resources" },
];

const stats = [
  {
    value: "220+",
    label: "Architecture & governance assets",
    description: "Blueprints, checklists, and playbooks curated from the Academy knowledge base.",
  },
  {
    value: "60+",
    label: "Premium advisory playbooks",
    description: "Executive-ready canvases, ROI calculators, and governance workshops.",
  },
  {
    value: "12",
    label: "Signature service tracks",
    description: "Cohorts, intensives, and retainers engineered for enterprise impact.",
  },
  {
    value: "4.8/5",
    label: "Creator & client satisfaction",
    description: "Feedback from pilots, advisory sessions, and creator partnerships.",
  },
];

const keywordCloud = [
  "ai architecture hub",
  "ai governance advisory",
  "enterprise ai blueprint",
  "ai assistant for architects",
  "agentic automation playbook",
  "ai influencer toolkit",
  "ai thought leadership engine",
  "responsible ai controls",
  "ai program roadmap",
  "ai evaluation strategy",
  "ai resource vault",
  "ai progress digest",
  "ai executive briefing template",
  "agent-ready dataset",
];

const experiencePillars = [
  {
    title: "Architect Velocity",
    description:
      "Launch programs with curated playbooks, reusable architecture assets, and adaptive learning paths tuned for enterprise delivery.",
    highlights: [
      "Progressive module paths that respond to maturity and persona signals",
      "Copy-ready diagrams, ADRs, and canvas kits aligned to real deployments",
      "Embedded prompts, rubrics, and evaluation harnesses for faster iteration",
    ],
  },
  {
    title: "Governed Delivery",
    description:
      "Operationalize responsible AI controls without slowing teams down - policy, privacy, and oversight are baked into every track.",
    highlights: [
      "Risk, compliance, and privacy tasks mapped to every module",
      "Evidence capture and approval rituals surfaced inline with workflows",
      "Automated alerts for evaluation drift, policy exceptions, and trust signals",
    ],
  },
  {
    title: "Operational Intelligence",
    description:
      "Connect architecture decisions to measurable outcomes, stakeholder narratives, and telemetry across the portfolio.",
    highlights: [
      "Value tracking dashboards tied to KPIs, SLOs, and ROI cases",
      "Assistant summaries for executives, risk partners, creators, and delivery teams",
      "Integrations streaming updates into Jira, Linear, Slack, Teams, Notion, and analytics",
    ],
  },
  {
    title: "Creator Amplification",
    description:
      "Translate deep technical work into influence - content engines, progress digests, and media assets ready to ship across every channel.",
    highlights: [
      "Editorial calendars mapped to launches, sprints, and book chapters",
      "Prompt packs and atomization recipes for newsletters, podcasts, and socials",
      "Performance telemetry and storytelling cues for partners and family supporters",
    ],
  },
];

const moduleTracks = [
  {
    title: "Operate with Confidence",
    description:
      "Governance, risk, compliance, and value tracking baked into every build.",
    modules: ["Model risk playbooks", "Data privacy lab", "Value and KPI instrumentation"],
    duration: "2-3 weeks",
    deliverable: "Audit-ready risk posture mapped to controls and evidence.",
  },
  {
    title: "Ship Production Systems",
    description:
      "Hands-on recipes for RAG, agents, observability, guardrails, and automation.",
    modules: ["RAG delivery lab", "Agentic swarms studio", "Eval harness factory"],
    duration: "3-4 sprints",
    deliverable: "Production deployment blueprint with evaluation harness and runbooks.",
  },
  {
    title: "Lead AI Programs",
    description:
      "Executive enablement, discovery questions, stakeholder choreography, and roadmaps.",
    modules: ["AI portfolio strategy", "Governance sprint", "Value discovery scenarios"],
    duration: "Ongoing",
    deliverable: "Persona-aware roadmap with communications, KPIs, and investment cases.",
  },
  {
    title: "Amplify Influence",
    description:
      "Thought leadership systems, cross-channel storytelling, and community rituals.",
    modules: ["Thought leadership runway", "AI content repurposing studio", "Community analytics lab"],
    duration: "2-week sprint",
    deliverable: "Cross-channel editorial system with prompt packs and measurement loops.",
  },
];

const assistantHighlights = [
  "Grounded answers over the Academy knowledge graph, service playbooks, and live project telemetry.",
  "Adaptive learning coach assembling micro-modules, resources, and prompts tuned to persona signals.",
  "Session memory exports implementation plans, executive briefings, social copy, and deliverable packages.",
  "Telemetry captures citations, evaluation status, reputation signals, and readiness for stakeholders.",
  "Agent-mode APIs deliver structured JSON for resources, services, personas, and project pulses.",
];

const assistantWorkflows = [
  {
    title: "Context intake",
    description:
      "Conversational brief captures systems, constraints, policies, KPIs, audience goals, and timelines in minutes.",
  },
  {
    title: "Plan composition",
    description:
      "Assistant assembles modules, labs, governance tasks, and content assets with full reasoning trails.",
  },
  {
    title: "Co-build execution",
    description:
      "Generate diagrams, ADRs, evaluation suites, automation snippets, and editorial outlines with citations ready to import.",
  },
  {
    title: "Evidence & handover",
    description:
      "Publish dashboards, stakeholder updates, compliance packets, and ROI narratives to Slack, Jira, Linear, or Confluence.",
  },
  {
    title: "Amplify & syndicate",
    description:
      "Produce newsletters, podcast briefs, social posts, and supporter digests so every win is celebrated across channels.",
  },
];

const workspaceStreams = [
  {
    title: "Strategy cockpit",
    description:
      "Define ambition, map maturity, and surface the next most valuable capability to activate.",
    elements: [
      "Capability heatmap keyed to personas",
      "Portfolio prioritization and impact sizing",
      "Value narrative generator for executive updates",
    ],
  },
  {
    title: "Delivery lab",
    description:
      "A shared execution lane for architects, engineers, and the assistant to co-build safely.",
    elements: [
      "Module Kanban with prerequisites and deliverables",
      "Live evaluation metrics and guardrail status",
      "Assistant prompts, suggestions, and reusable snippets",
    ],
  },
  {
    title: "Run operations",
    description:
      "Continuous monitoring for governance, adoption, and ROI once solutions ship to production.",
    elements: [
      "Control center for approvals, attestations, and evidence",
      "Integration timeline across analytics, observability, and ITSM",
      "Audit-ready exports with contextual commentary",
    ],
  },
  {
    title: "Creator studio",
    description:
      "Transform delivery learnings into influence with reusable content systems and analytics.",
    elements: [
      "Editorial planner synced to project milestones",
      "Atomization prompts for newsletter, podcast, and social drops",
      "Audience telemetry dashboard highlighting resonance and reach",
    ],
  },
];

const personaGroups = [
  {
    title: "Lead Architect",
    summary: "Owns solution integrity, velocity, and stakeholder trust.",
    outcomes: [
      "Production-ready blueprint with staged rollout plan",
      "Evaluation and observability strategy built into delivery",
      "Documented risk posture with automated controls",
    ],
  },
  {
    title: "Program & Product Leader",
    summary: "Guides investment cases, communicates impact, and unblocks teams.",
    outcomes: [
      "Persona-aware learning path and module backlog",
      "Stakeholder updates with progress, KPIs, and value narrative",
      "Integration plan spanning delivery teams, partners, and IT",
    ],
  },
  {
    title: "Risk & Compliance Partner",
    summary: "Safeguards policy alignment while enabling innovation.",
    outcomes: [
      "Continuous assurance with evidence collection hooks",
      "Approval workflow with audit-ready artifacts",
      "Policy mapping to modules, deliverables, and integrations",
    ],
  },
  {
    title: "High-Value Client Sponsor",
    summary: "Invests in governed AI acceleration and expects measurable ROI.",
    outcomes: [
      "Curated advisory package with ROI and trust benchmarks",
      "Executive dashboards and briefing cadence tailored to stakeholders",
      "Dedicated assistant channel plus white-glove onboarding",
    ],
  },
  {
    title: "Creator & Influencer Partner",
    summary: "Amplifies the AI Architect voice across media channels.",
    outcomes: [
      "Editorial runway and content atomization recipes",
      "Co-branded assets grounded in governed delivery wins",
      "Performance insights to grow community and sponsorships",
    ],
  },
  {
    title: "Family & Inner Circle",
    summary: "Supports the journey and shares progress with their networks.",
    outcomes: [
      "Curated starting paths and recommended resources",
      "Monthly digest with wins, milestones, and upcoming events",
      "Private Q&A access and community rituals",
    ],
  },
  {
    title: "Autonomous Agents & Copilots",
    summary: "Extend the platform, trigger workflows, and monitor signals.",
    outcomes: [
      "Stable JSON endpoints for modules, personas, and roadmap milestones",
      "Anchor IDs and citations to ground reasoning",
      "Webhook alerts for evaluation drift, approvals, and content drops",
    ],
  },
];

const serviceOffers = [
  {
    title: "Executive Governance Sprint",
    summary:
      "Rapid engagement aligning policies, controls, and delivery rhythms so innovation stays compliant without friction.",
    ideal: "Ideal for Chief AI, Chief Risk, and transformation leaders.",
    outcomes: [
      "Policy-to-delivery mapping with risk heatmap and mitigation plan",
      "Evaluation operating model with metrics, owners, and tooling",
      "Executive-ready narrative plus board briefing artifacts",
    ],
    ctaLabel: "Book the sprint",
    href: "mailto:frank@aiarchitect.academy?subject=Executive%20Governance%20Sprint",
  },
  {
    title: "Enterprise Transformation Lab",
    summary:
      "Embedded build-operate-transfer partnership delivering production architectures, evaluation harnesses, and change management.",
    ideal: "Ideal for AI CoE leads, program directors, and innovation sponsors.",
    outcomes: [
      "Customized learning path and workspace for cross-functional teams",
      "Production blueprint with governance, observability, and automation",
      "OKR and ROI instrumentation plus handover playbook",
    ],
    ctaLabel: "Schedule lab consult",
    href: "mailto:frank@aiarchitect.academy?subject=Enterprise%20Transformation%20Lab",
  },
  {
    title: "Creator Influence Accelerator",
    summary:
      "Hands-on accelerator turning deep expertise into multi-channel influence with AI-assisted storytelling systems.",
    ideal: "Ideal for creators, influencers, and partners amplifying the Academy voice.",
    outcomes: [
      "Editorial calendar synced to launches and cohorts",
      "Content atomization prompts and workflow automation",
      "Analytics dashboard with sponsorship and conversion insights",
    ],
    ctaLabel: "Request media kit",
    href: "mailto:frank@aiarchitect.academy?subject=Creator%20Influence%20Accelerator",
  },
  {
    title: "Inner Circle Advisory",
    summary:
      "Dedicated support channel for family, close supporters, and premium patrons to stay ahead of every milestone.",
    ideal: "Ideal for inner circle champions and philanthropic partners.",
    outcomes: [
      "Monthly studio briefing with private Q&A and behind-the-scenes access",
      "Curated resource bundles tailored to each supporter",
      "Early invites to launches, masterminds, and community rituals",
    ],
    ctaLabel: "Join the advisory",
    href: "mailto:frank@aiarchitect.academy?subject=Inner%20Circle%20Advisory",
  },
];

const resourceVault = [
  {
    tier: "Open Source Essentials",
    badge: "Free",
    description:
      "Foundational resources sourced from the AI Architect Academy knowledge base. Share freely with teams, collaborators, and family members getting started.",
    items: [
      {
        name: "AI Architect Academy Knowledge Base",
        summary: "Comprehensive library of patterns, labs, governance assets, and module templates.",
        format: "GitHub repository",
        href: "https://github.com/AI-Architect-Academy/ai-architect-academy",
      },
      {
        name: "Responsible AI Readiness Checklist",
        summary: "Step-by-step readiness checklist aligned to NIST AI RMF and ISO/IEC 42001 principles.",
        format: "Markdown guide",
        href: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/capabilities.md",
      },
      {
        name: "AI Progress Digest Template",
        summary: "Newsletter framework for sharing weekly wins, metrics, and upcoming experiments with supporters.",
        format: "Notion-style template",
        href: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/experience-blueprint.md",
      },
    ],
    note: "Updated weekly with new canvases and implementation notes.",
  },
  {
    tier: "Premium Studio Kits",
    badge: "Paid",
    description:
      "High-touch toolkits for executives and creators looking for concierge support, office hours, and white-glove onboarding.",
    items: [
      {
        name: "Governed AI Program Canvas",
        summary: "Miro-ready canvas mapping stakeholders, controls, and milestone telemetry for transformation initiatives.",
        format: "Miro board + PDF",
        href: "mailto:frank@aiarchitect.academy?subject=Governed%20AI%20Program%20Canvas",
      },
      {
        name: "Executive ROI Narrative Pack",
        summary: "Slide decks, calculators, and prompt packs to communicate value across the C-suite.",
        format: "Slide deck + prompt pack",
        href: "mailto:frank@aiarchitect.academy?subject=Executive%20ROI%20Narrative%20Pack",
      },
      {
        name: "Creator Influence Playbook",
        summary: "Video series, worksheets, and automation recipes for consistent thought leadership drops.",
        format: "Video series + worksheets",
        href: "mailto:frank@aiarchitect.academy?subject=Creator%20Influence%20Playbook",
      },
    ],
    note: "Includes cohort invites and priority assistant access.",
  },
  {
    tier: "Agent API Beta",
    badge: "Beta",
    description:
      "Structured data surfaces for autonomous agents and automation teams. Designed to keep human and agent experiences in sync.",
    items: [
      {
        name: "Resource Metadata Endpoint",
        summary: "JSON schema exposing resource titles, tiers, personas, formats, and canonical links.",
        format: "JSON schema",
        href: "mailto:frank@aiarchitect.academy?subject=Agent%20API%20Access",
      },
      {
        name: "Persona & Journey Feed",
        summary: "Machine-readable feed of personas, outcomes, and recommended journeys for quick onboarding.",
        format: "JSON feed",
        href: "mailto:frank@aiarchitect.academy?subject=Agent%20API%20Access",
      },
      {
        name: "Project Pulse Webhooks",
        summary: "Event-driven webhooks broadcasting roadmap updates, evaluations, and content releases.",
        format: "Webhook subscription",
        href: "mailto:frank@aiarchitect.academy?subject=Agent%20API%20Access",
      },
    ],
    note: "Invite-only until GA; partner with us to define the contract.",
  },
];

const projectPulses = [
  {
    title: "Book: Architecting Governed AI Programs",
    stage: "Drafting chapter four",
    lastUpdated: "This week",
    nextMilestone: "Peer review circle & beta reader invite",
    summary:
      "Field-tested patterns, governance scorecards, and stakeholder scripts captured from enterprise engagements.",
    tags: ["Publishing", "Governance", "Thought leadership"],
  },
  {
    title: "AI Architect Academy Hub",
    stage: "Alpha release v0.4",
    lastUpdated: "Sprint six",
    nextMilestone: "Resource Vault API preview & workspace walkthroughs",
    summary:
      "Hub expansion with services deck, Resource Vault tiers, and agent-ready schema definitions.",
    tags: ["Product", "Hub", "Agent API"],
  },
  {
    title: "Creator Influence Engine",
    stage: "Content sprint two",
    lastUpdated: "Bi-weekly cadence",
    nextMilestone: "Launch newsletter cross-posting automations",
    summary:
      "Editorial runway turning platform updates into newsletters, podcasts, and social stories with metrics instrumentation.",
    tags: ["Creator ops", "Marketing", "Automation"],
  },
  {
    title: "Family Circle Digest",
    stage: "Monthly broadcast",
    lastUpdated: "This month",
    nextMilestone: "Private Q&A livestream and behind-the-scenes tour",
    summary:
      "Curated digest featuring personal updates, favorite resources, and ways to support the mission.",
    tags: ["Community", "Family", "Supporters"],
  },
];

const insightPlaylists = [
  {
    title: "Responsible AI Operations",
    focus: "Operationalize guardrails, evaluation, and compliance without slowing delivery.",
    keywords: ["responsible ai controls", "ai governance checklist", "model risk management"],
    assets: ["Playbook article", "Evaluation metric cheat sheet", "Podcast segment"],
  },
  {
    title: "Enterprise Architecture Patterns",
    focus: "Blueprint production-ready RAG, agentic automation, and observability stacks.",
    keywords: ["enterprise ai blueprint", "rag platform design", "agentic automation framework"],
    assets: ["Deep-dive guide", "Architecture diagram pack", "Live build workshop"],
  },
  {
    title: "Creator Influence Ops",
    focus: "Scale the AI Architect voice across newsletters, podcasts, and social channels.",
    keywords: ["ai thought leadership engine", "ai influencer toolkit", "ai progress digest"],
    assets: ["Editorial calendar", "Short-form prompt pack", "Analytics dashboard walk-through"],
  },
];

const searchIntents = [
  {
    term: "ai architecture patterns",
    human: "Compare reference designs and production-ready blueprints.",
    agent: "Retrieve modules tagged architecture + diagrams with citations.",
    destination: "#curriculum",
  },
  {
    term: "ai governance advisory",
    human: "Understand premium services and ROI benchmarks for executives.",
    agent: "Fetch service offers, proof points, and engagement cadences.",
    destination: "#services",
  },
  {
    term: "ai influencer content strategy",
    human: "Plan multi-channel thought leadership drops backed by technical depth.",
    agent: "Request insight playlists, prompt packs, and distribution workflows.",
    destination: "#insights",
  },
  {
    term: "ai resource vault",
    human: "Download templates, checklists, and premium kits for immediate use.",
    agent: "Query resource metadata with tiers, formats, and persona tags.",
    destination: "#library",
  },
  {
    term: "ai progress digest",
    human: "Follow platform, book, and community milestones in real time.",
    agent: "Subscribe to project pulses and webhook updates.",
    destination: "#projects",
  },
  {
    term: "agent-ready dataset",
    human: "Give companion agents structured access to modules and personas.",
    agent: "Call beta API endpoints for resources, personas, and project pulses.",
    destination: "#library",
  },
];

const operationsPractices = [
  {
    title: "Responsible AI controls",
    description: "Codify policy expectations into day-to-day workflows for every persona.",
    practices: [
      "Policy mapping to module steps and deliverables",
      "Risk scoring triggers with auto-escalation",
      "Approval workflows and digital signatures tracked over time",
    ],
  },
  {
    title: "Evaluation observability",
    description: "Treat evaluations like production systems with traceability and guardrails.",
    practices: [
      "Scenario libraries and scorecards fed by telemetry",
      "Pre-commit and post-deploy gates with exception logging",
      "Langfuse, Weights & Biases, and custom dashboards wired in",
    ],
  },
  {
    title: "Value instrumentation",
    description: "Quantify business impact, adoption, and operational efficiency across programs.",
    practices: [
      "KPI handshake templates and measurement cadences",
      "Impact tracking pulses for stakeholders and sponsors",
      "Executive briefing generator summarizing wins and risks",
    ],
  },
  {
    title: "Reputation & trust signals",
    description: "Showcase proof points for clients, creators, and supporters across channels.",
    practices: [
      "Testimonials, case studies, and success metrics mapped to services",
      "Creator analytics and content performance loops",
      "Family & inner circle feedback woven into product priorities",
    ],
  },
];

const integrationHighlights = [
  "OpenRouter + Supabase Vector for grounded retrieval and personalization.",
  "GitHub, Linear, Jira, and Notion syncing architecture artifacts, tasks, and knowledge.",
  "Slack, Teams, email digests, and private RSS for assistant handoffs and supporter updates.",
  "Langfuse, Weights & Biases, and analytics connectors for evaluation and reputation telemetry.",
  "API hooks for newsletter automation, podcast syndication, and creator distribution.",
];

const knowledgeLinks = [
  {
    label: "Hub Content & Data Model",
    href: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/hub-content-model.md",
  },
  {
    label: "Experience Blueprint",
    href: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/experience-blueprint.md",
  },
  {
    label: "SEO & Findability",
    href: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/seo-strategy.md",
  },
  {
    label: "Product Blueprint",
    href: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/product-blueprint.md",
  },
  {
    label: "Strategy Overview",
    href: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/strategy.md",
  },
  {
    label: "Agent Journeys",
    href: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/agent-journeys.md",
  },
  {
    label: "Capabilities & Specs",
    href: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/capabilities.md",
  },
  {
    label: "UI & UX Principles",
    href: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/ui-ux-principles.md",
  },
];

const sitemapSections = [
  {
    title: "Platform overview",
    links: [
      { label: "Vision", href: "#vision" },
      { label: "Experience pillars", href: "#experience" },
      { label: "Persona outcomes", href: "#personas" },
      { label: "Search studio", href: "#search" },
    ],
  },
  {
    title: "Build & operate",
    links: [
      { label: "Micro-learning curriculum", href: "#curriculum" },
      { label: "AI Architect assistant", href: "#assistant" },
      { label: "Workspaces & dashboards", href: "#workspaces" },
      { label: "Operations & governance", href: "#operations" },
      { label: "Roadmap", href: "#roadmap" },
    ],
  },
  {
    title: "Engage & grow",
    links: [
      { label: "Signature services", href: "#services" },
      { label: "Resource vault", href: "#library" },
      { label: "Projects pulseboard", href: "#projects" },
      { label: "Insight playlists", href: "#insights" },
      { label: "Community & access", href: "#community" },
    ],
  },
  {
    title: "Reference",
    links: [
      { label: "Knowledge network", href: "#resources" },
      { label: "FAQ", href: "#faq" },
    ],
  },
];

const roadmap = [
  {
    phase: "Phase 1 - Foundations",
    focus:
      "Marketing site, waitlist, curriculum browser, Resource Vault essentials, and showcase modules seeded from the AI Architect Academy repository.",
    outcome: "Public launch with SEO foundations, content tagging, and waitlist instrumentation.",
  },
  {
    phase: "Phase 2 - Guided Delivery",
    focus:
      "Authenticated workspace with learning paths, progress tracking, companion notebooks, services CRM, and project pulse exports.",
    outcome: "Teams co-build with the assistant, share workspaces, and monitor evaluation health with stakeholder updates.",
  },
  {
    phase: "Phase 3 - AI Pair-Partner",
    focus:
      "Full AI assistant with retrieval-augmented generation, sandbox execution, insight playlist automation, and team collaboration hooks (Slack, Linear, Notion).",
    outcome: "Adaptive plans, automated evidence packages, and agent-triggered workflows across delivery and content channels.",
  },
  {
    phase: "Phase 4 - Marketplace + Ops",
    focus:
      "Community-sourced modules, evaluation benchmarks, premium services marketplace, and operational analytics for AI Centers of Excellence.",
    outcome: "Ecosystem of reusable assets with performance benchmarks, monetization options, and supporter experiences.",
  },
];

const communityHighlights = [
  {
    title: "Waitlist & cohort interest",
    description: "Secure an invite to upcoming accelerators, masterminds, and advisory sprints.",
    ctaLabel: "Join the waitlist",
    href: "mailto:frank@aiarchitect.academy?subject=AI%20Architect%20Academy%20Waitlist",
  },
  {
    title: "GitHub discussions",
    description: "Collaborate on modules, share feedback, and shape the open-source knowledge base.",
    ctaLabel: "Contribute on GitHub",
    href: "https://github.com/frankxai/saas-ai-architect-academy/discussions",
  },
  {
    title: "Creator mastermind",
    description: "Monthly salons for creators and influencers amplifying responsible AI narratives.",
    ctaLabel: "Request an invite",
    href: "mailto:frank@aiarchitect.academy?subject=Creator%20Mastermind%20Invite",
  },
  {
    title: "Inner circle digest",
    description: "Private monthly digest and live Q&A for family, friends, and premium supporters.",
    ctaLabel: "Subscribe to the digest",
    href: "mailto:frank@aiarchitect.academy?subject=Inner%20Circle%20Digest",
  },
];

const faqItems = [
  {
    question: "How does the AI Architect Assistant stay grounded and trustworthy?",
    answer:
      "The assistant retrieves answers from the Academy knowledge graph, GitHub artifacts, premium service playbooks, and verified partner stories. Every response includes citations, evaluation status, and suggested next steps so humans and companion agents can verify outputs before execution.",
  },
  {
    question: "What deliverables do teams, creators, and supporters receive as they engage?",
    answer:
      "Each module or service ends with a concrete asset - architecture diagram, ADR, runbook, checklist, ROI calculator, editorial kit, or KPI tracker. Deliverables are versioned, exportable to Jira/Linear/Notion, and linked back to policy controls and content prompts for amplification.",
  },
  {
    question: "How do high-value clients activate premium services?",
    answer:
      "Choose from the service deck and schedule a consult. We align on scope, ROI targets, governance expectations, and collaboration rhythms. Engagements include dedicated assistant channels, weekly telemetry, and executive-ready storytelling assets.",
  },
  {
    question: "How do friends, family, and the community stay updated?",
    answer:
      "Subscribe to the inner circle digest, join community rituals, and follow the projects pulseboard. We share personal milestones, behind-the-scenes progress, and curated resource recommendations designed for every experience level.",
  },
  {
    question: "How can autonomous agents plug into the platform?",
    answer:
      "Agents can request structured JSON views of modules, personas, services, and roadmap data (beta), trigger assistant workflows, and receive webhooks when evaluations drift or approvals are required. Stable anchor IDs ensure reliable scraping and referencing across experiences.",
  },
];

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-100">
      <Script id="faq-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(faqStructuredData)}
      </Script>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3 text-cyan-100">
            <Image src="/logo.svg" alt="AI Architect Academy" width={28} height={28} className="h-7 w-7" />
            <span className="text-lg font-semibold tracking-tight">AI Architect Academy</span>
          </Link>
          <nav className="hidden items-center gap-5 text-sm font-medium xl:flex">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition hover:text-cyan-300">
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3 text-sm font-semibold">
            <Link
              href="/curriculum"
              className="rounded-full bg-cyan-400 px-4 py-2 text-slate-900 transition hover:bg-cyan-300"
            >
              Curriculum experience
            </Link>
            <Link
              href="#services"
              className="hidden rounded-full border border-white/30 px-4 py-2 transition hover:border-cyan-300 hover:text-cyan-200 sm:inline-flex"
            >
              View services
            </Link>
            <Link
              href="https://github.com/frankxai/saas-ai-architect-academy"
              className="rounded-full border border-white/30 px-4 py-2 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              Follow the build
            </Link>
          </div>
        </div>
        <div className="flex gap-3 overflow-x-auto px-6 pb-4 text-xs font-medium text-slate-300 xl:hidden">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="whitespace-nowrap rounded-full border border-white/10 px-3 py-1">
              {link.label}
            </Link>
          ))}
        </div>
      </header>

      <main className="mx-auto flex max-w-7xl flex-col gap-24 px-6 py-16">
        <section id="vision" className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-10">
          <div className="pointer-events-none absolute inset-0 opacity-60">
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-cyan-500/20 to-transparent" />
            <div className="absolute -left-16 top-20 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="absolute -right-10 bottom-0 h-52 w-52 rounded-full bg-indigo-500/10 blur-3xl" />
          </div>
          <div className="relative space-y-10">
            <div className="space-y-6">
              <span className="inline-flex items-center rounded-full border border-cyan-300/40 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
                Global AI architect voice - governed impact - creator amplification
              </span>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                The unified hub for architects, creators, high-value clients, family, and their companion agents.
              </h1>
              <p className="max-w-3xl text-base text-slate-200 sm:text-lg">
                Progressive learning paths, premium advisory services, creator systems, and an AI partner orchestrate how we design, ship, and communicate production AI. Every module connects to the open-source AI Architect Academy for deeper research, architecture assets, and project telemetry you can trust.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/curriculum"
                  className="rounded-full bg-cyan-400 px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  Launch the curriculum experience
                </Link>
                <Link
                  href="#experience"
                  className="rounded-full border border-white/20 px-6 py-3 text-center text-sm font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
                >
                  Explore the academy overview
                </Link>
                <Link
                  href="#library"
                  className="rounded-full border border-white/20 px-6 py-3 text-center text-sm font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
                >
                  Browse the Resource Vault
                </Link>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-slate-950/40 p-5 shadow-lg shadow-cyan-500/5">
                  <div className="text-3xl font-semibold text-cyan-200">{stat.value}</div>
                  <div className="mt-2 text-sm font-semibold text-slate-100">{stat.label}</div>
                  <p className="mt-2 text-xs text-slate-300">{stat.description}</p>
                </div>
              ))}
            </div>
            <div className="relative rounded-2xl border border-cyan-300/20 bg-cyan-300/5 p-5 text-sm text-cyan-100">
              <p>
                Powered by the <span className="font-semibold">AI Architect Academy</span> knowledge base: design patterns, projects, governance playbooks, and creator prompt libraries - all cross-linked inside the platform experience.
              </p>
              <div className="mt-6 flex flex-wrap gap-2 text-[10px] font-medium uppercase tracking-[0.3em] text-cyan-200">
                {keywordCloud.map((keyword) => (
                  <span key={keyword} className="rounded-full border border-cyan-300/30 bg-slate-950/60 px-3 py-1">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="space-y-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl space-y-3">
              <h2 className="text-3xl font-semibold">Experience pillars</h2>
              <p className="text-base text-slate-200">
                Designed with architects, program leads, creators, and compliance partners to balance innovation with accountability. Humans and autonomous agents share a consistent interface, structured data, and traceable decisions.
              </p>
            </div>
            <Link
              href="#sitemap"
              className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-cyan-100"
            >
              Jump to sitemap ->
            </Link>
          </div>
          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
            {experiencePillars.map((pillar) => (
              <div key={pillar.title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <h3 className="text-xl font-semibold text-cyan-100">{pillar.title}</h3>
                <p className="mt-3 text-sm text-slate-200">{pillar.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {pillar.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-2">
                      <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-200" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="rounded-3xl border border-cyan-300/30 bg-cyan-300/10 p-6 text-sm text-cyan-50">
            <h3 className="text-lg font-semibold text-cyan-100">Integration fabric</h3>
            <ul className="mt-4 space-y-2">
              {integrationHighlights.map((highlight) => (
                <li key={highlight} className="flex gap-2">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-200" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="curriculum" className="space-y-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold">Micro-learning architecture</h2>
            <p className="max-w-3xl text-base text-slate-200">
              Hundreds of bite-sized modules compose journeys for architects, product leaders, creators, and governance teams. Each module ends with a deliverable - canvas, runbook, code lab, or storytelling asset - so learning translates directly into execution and amplification.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {moduleTracks.map((track) => (
              <div key={track.title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <h3 className="text-xl font-semibold text-cyan-100">{track.title}</h3>
                <p className="mt-3 text-sm text-slate-200">{track.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {track.modules.map((module) => (
                    <li key={module}>- {module}</li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-cyan-200">
                  <span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1">{track.duration}</span>
                  <span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1">{track.deliverable}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-sm text-slate-200">
            <p>
              <span className="font-semibold text-slate-100">Module sources:</span> existing playbooks in the Academy repository, partner case studies, creator collaborations, and community stories curated by maintainers. Content is versioned, tagged by maturity and persona, and enriched with evaluation rubrics plus policy mappings for AI agents.
            </p>
          </div>
        </section>

        <section id="assistant" className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-cyan-300/40 bg-cyan-400/10 p-6">
            <h2 className="text-3xl font-semibold text-cyan-100">AI Architect Assistant</h2>
            <p className="mt-3 text-sm text-cyan-50">
              Retrieval-augmented copilot trained on the Academy corpus, architecture decisions, premium services, and storytelling kits. Tuned for both human collaborators and autonomous agents.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-cyan-50">
              {assistantHighlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-cyan-200" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-2xl border border-white/20 bg-white/10 p-4 text-xs uppercase tracking-[0.3em] text-slate-900 shadow-lg">
              Launching with OpenRouter + Supabase Vector - Session orchestration via LangChain - Inline citations to primary sources
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
            <h3 className="text-lg font-semibold text-slate-100">Assistant workflow</h3>
            <ol className="mt-4 space-y-4 text-sm text-slate-200">
              {assistantWorkflows.map((step, index) => (
                <li key={step.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">Step {index + 1}</div>
                  <div className="mt-1 text-base font-semibold text-slate-100">{step.title}</div>
                  <p className="mt-2 text-sm text-slate-300">{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="workspaces" className="space-y-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold">Architect workspaces</h2>
            <p className="max-w-3xl text-base text-slate-200">
              A shared operating picture that keeps architects, program leads, risk partners, creators, family supporters, and AI agents aligned from strategy through operations.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {workspaceStreams.map((stream) => (
              <div key={stream.title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <h3 className="text-xl font-semibold text-cyan-100">{stream.title}</h3>
                <p className="mt-3 text-sm text-slate-200">{stream.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {stream.elements.map((element) => (
                    <li key={element} className="flex gap-2">
                      <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                      <span>{element}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="personas" className="space-y-6">
          <h2 className="text-3xl font-semibold">Designed for the whole AI program</h2>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {personaGroups.map((persona) => (
              <div key={persona.title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-sm text-slate-200">
                <h3 className="text-lg font-semibold text-cyan-100">{persona.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{persona.summary}</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-300">
                  {persona.outcomes.map((outcome) => (
                    <li key={outcome}>- {outcome}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="space-y-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold">Signature services</h2>
            <p className="max-w-3xl text-base text-slate-200">
              Advisory intensives, embedded labs, creator accelerators, and inner circle experiences designed for executive sponsors, partners, and supporters who need concierge support.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {serviceOffers.map((offer) => (
              <div key={offer.title} className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-sm text-slate-200">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-cyan-100">{offer.title}</h3>
                    <p className="mt-2 text-sm text-slate-300">{offer.summary}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.3em] text-cyan-200">{offer.ideal}</p>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-300">
                    {offer.outcomes.map((outcome) => (
                      <li key={outcome} className="flex gap-2">
                        <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-200" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href={offer.href}
                  className="mt-6 inline-flex items-center justify-center rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-cyan-300"
                >
                  {offer.ctaLabel}
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section id="library" className="space-y-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold">Resource Vault</h2>
            <p className="max-w-3xl text-base text-slate-200">
              Curated assets for humans and their agents - spanning free knowledge, premium studio kits, and structured data contracts. Every card includes persona tags, formats, and access tiers for fast decision-making.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {resourceVault.map((tier) => (
              <div key={tier.tier} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-sm text-slate-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-cyan-100">{tier.tier}</h3>
                  <span className="rounded-full border border-cyan-300/40 bg-cyan-300/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-cyan-200">
                    {tier.badge}
                  </span>
                </div>
                <p className="mt-3 text-sm text-slate-300">{tier.description}</p>
                <ul className="mt-4 space-y-3">
                  {tier.items.map((item) => (
                    <li key={item.name} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-semibold text-slate-100">{item.name}</span>
                        <span className="text-[10px] uppercase tracking-[0.3em] text-cyan-200">{item.format}</span>
                      </div>
                      <p className="mt-2 text-xs text-slate-300">{item.summary}</p>
                      <Link
                        href={item.href}
                        className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-cyan-200 transition hover:text-cyan-100"
                      >
                        Access resource ->
                      </Link>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-cyan-200">{tier.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="space-y-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold">Project pulseboard</h2>
            <p className="max-w-3xl text-base text-slate-200">
              Live telemetry across books, platform releases, creator initiatives, and community rituals. Follow along or plug your agent into webhooks for automated updates.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {projectPulses.map((project) => (
              <div key={project.title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-sm text-slate-200">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-semibold text-cyan-100">{project.title}</h3>
                  <span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-cyan-200">
                    {project.stage}
                  </span>
                </div>
                <p className="mt-3 text-sm text-slate-300">{project.summary}</p>
                <div className="mt-4 grid gap-3 text-xs text-slate-300">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-3">
                    <span className="text-slate-200">Last updated:</span> {project.lastUpdated}
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-3">
                    <span className="text-slate-200">Next milestone:</span> {project.nextMilestone}
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.3em] text-cyan-200">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="search" className="space-y-6">
          <h2 className="text-3xl font-semibold">Search & discovery for humans and agents</h2>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {searchIntents.map((intent) => (
              <Link
                key={intent.term}
                href={intent.destination}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-cyan-300/60 hover:text-cyan-100"
              >
                <div className="text-lg font-semibold text-cyan-100">{intent.term}</div>
                <p className="mt-3 text-sm text-slate-200">{intent.human}</p>
                <p className="mt-2 text-xs text-slate-300">Agent need: {intent.agent}</p>
                <p className="mt-4 text-xs uppercase tracking-[0.3em] text-cyan-200">Jump to section -></p>
              </Link>
            ))}
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 text-sm text-slate-200">
            <p>
              Need structured access? Request the upcoming <span className="font-semibold text-slate-100">API & agent toolkit</span> to query modules, personas, services, and roadmap data directly. Stable anchor IDs keep autonomous agents synchronized with the human experience.
            </p>
          </div>
        </section>

        <section id="insights" className="space-y-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold">Insight playlists</h2>
            <p className="max-w-3xl text-base text-slate-200">
              SEO-powered content clusters that translate platform expertise into evergreen articles, podcasts, videos, and prompt packs. Perfect for creators, clients, and agents searching for structured narratives.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {insightPlaylists.map((playlist) => (
              <div key={playlist.title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-sm text-slate-200">
                <h3 className="text-lg font-semibold text-cyan-100">{playlist.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{playlist.focus}</p>
                <div className="mt-4 space-y-2">
                  <div>
                    <div className="text-xs uppercase tracking-[0.3em] text-cyan-200">Keywords</div>
                    <div className="mt-2 flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.2em] text-slate-300">
                      {playlist.keywords.map((keyword) => (
                        <span key={keyword} className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1">
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.3em] text-cyan-200">Planned assets</div>
                    <ul className="mt-2 space-y-1 text-sm text-slate-300">
                      {playlist.assets.map((asset) => (
                        <li key={asset}>- {asset}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="operations" className="space-y-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold">Operate with confidence</h2>
            <p className="max-w-3xl text-base text-slate-200">
              Governance, evaluation, value tracking, and reputation proof points woven through the platform so teams can scale AI responsibly without slowing momentum.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {operationsPractices.map((practice) => (
              <div key={practice.title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <h3 className="text-xl font-semibold text-cyan-100">{practice.title}</h3>
                <p className="mt-3 text-sm text-slate-200">{practice.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {practice.practices.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="rounded-3xl border border-cyan-300/30 bg-cyan-300/10 p-6 text-sm text-cyan-50">
            <h3 className="text-lg font-semibold text-cyan-100">Integration fabric</h3>
            <ul className="mt-4 space-y-2">
              {integrationHighlights.map((highlight) => (
                <li key={highlight} className="flex gap-2">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-200" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="roadmap" className="space-y-6">
          <h2 className="text-3xl font-semibold">Build roadmap</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {roadmap.map((entry) => (
              <div key={entry.phase} className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 text-sm text-slate-200">
                <div className="text-slate-100">{entry.phase}</div>
                <p className="mt-2">{entry.focus}</p>
                <p className="mt-3 text-slate-300">Outcome: {entry.outcome}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="community" className="space-y-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold">Community & access</h2>
            <p className="max-w-3xl text-base text-slate-200">
              Join the movement - co-build modules, amplify stories, and stay close to every milestone through masterminds, digests, and advisory circles.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {communityHighlights.map((item) => (
              <div key={item.title} className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-sm text-slate-200">
                <div>
                  <h3 className="text-lg font-semibold text-cyan-100">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{item.description}</p>
                </div>
                <Link
                  href={item.href}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-cyan-100"
                >
                  {item.ctaLabel} ->
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section id="resources" className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-sm text-slate-200">
          <h2 className="text-2xl font-semibold text-slate-100">Dive into the build artifacts</h2>
          <p className="mt-3 max-w-3xl">
            Explore the public roadmap, capabilities, experience blueprint, and UX guidance that shape the platform. Perfect for architects, PMs, creators, and AI agents that need deeper context and reusable assets.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {knowledgeLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.25em] text-slate-100 transition hover:border-cyan-300/70 hover:text-cyan-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <section id="sitemap" className="space-y-6">
          <h2 className="text-3xl font-semibold">Site map</h2>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {sitemapSections.map((section) => (
              <div key={section.title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-sm text-slate-200">
                <h3 className="text-lg font-semibold text-cyan-100">{section.title}</h3>
                <ul className="mt-3 space-y-2 text-slate-300">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="transition hover:text-cyan-200">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="faq" className="space-y-6">
          <h2 className="text-3xl font-semibold">FAQ</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {faqItems.map((item) => (
              <div key={item.question} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-sm text-slate-200">
                <h3 className="text-lg font-semibold text-cyan-100">{item.question}</h3>
                <p className="mt-2 text-slate-300">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center text-sm text-slate-200">
          <h2 className="text-2xl font-semibold text-slate-100">Co-build with the Academy</h2>
          <p className="mx-auto mt-3 max-w-3xl">
            We are building in public. Join the waitlist, contribute modules, amplify stories, or partner on alpha cohorts to shape how AI programs deliver governed value at scale.
          </p>
          <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="https://github.com/frankxai/saas-ai-architect-academy/discussions"
              className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-cyan-300"
            >
              Join the discussion
            </Link>
            <Link
              href="mailto:frank@aiarchitect.academy"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-200 hover:text-cyan-200"
            >
              Partner with us
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950/80">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 text-sm text-slate-400 lg:flex-row lg:items-start lg:justify-between">
          <div className="space-y-3">
            <p>
              Built in public by the AI Architect Academy team. Contributions welcome via GitHub issues and discussions.
            </p>
            <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-slate-500">
              <span>Architecture</span>
              <span>Governance</span>
              <span>Agents</span>
              <span>Creators</span>
              <span>Community</span>
            </div>
          </div>
          <div className="flex flex-col items-start gap-3 text-sm text-slate-300 lg:items-end">
            <div className="flex flex-wrap justify-end gap-4">
              <Link href="https://github.com/AI-Architect-Academy/ai-architect-academy" className="hover:text-cyan-200">
                Open-source library
              </Link>
              <Link href="https://github.com/frankxai/saas-ai-architect-academy" className="hover:text-cyan-200">
                Platform repo
              </Link>
              <Link href="mailto:frank@aiarchitect.academy" className="hover:text-cyan-200">
                Contact the team
              </Link>
            </div>
            <div className="flex flex-wrap justify-end gap-2 text-xs text-slate-500">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="hover:text-cyan-200">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
