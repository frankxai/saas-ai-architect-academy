import Link from "next/link";
import Script from "next/script";

const navLinks = [
  { label: "Vision", href: "#vision" },
  { label: "Experience", href: "#experience" },
  { label: "Curriculum", href: "#curriculum" },
  { label: "Assistant", href: "#assistant" },
  { label: "Workspaces", href: "#workspaces" },
  { label: "Operations", href: "#operations" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Resources", href: "#resources" },
];

const stats = [
  {
    value: "180+",
    label: "Architecture patterns",
    description: "Curated modules and build recipes from enterprise teams.",
  },
  {
    value: "45",
    label: "Governance controls",
    description: "Pre-mapped safeguards, evidence templates, and checkpoints.",
  },
  {
    value: "24/7",
    label: "Assistant coverage",
    description: "Context-aware copilot for architects, partners, and agents.",
  },
];

const keywordCloud = [
  "ai architect academy",
  "enterprise ai architecture",
  "rag platform blueprint",
  "ai governance controls",
  "model risk management",
  "agentic automation design",
  "llm evaluation playbook",
  "ai program roadmap",
  "ai center of excellence",
  "assistant deployment toolkit",
  "responsible ai operations",
  "ai architecture certification",
];

const experiencePillars = [
  {
    title: "Architect Velocity",
    description:
      "Launch programs with curated playbooks, templates, and architecture assets tuned for enterprise delivery.",
    highlights: [
      "Progressive module paths that adapt to maturity signals",
      "Diagrams, ADRs, and canvas kits ready to copy into your workspace",
      "Embedded prompts and evaluation rubrics for fast iteration",
    ],
  },
  {
    title: "Governed Delivery",
    description:
      "Operationalize responsible AI controls without slowing teams down—every track bakes in policy, privacy, and oversight.",
    highlights: [
      "Risk, compliance, and privacy tasks mapped to every module",
      "Evidence capture and approval rituals surfaced inline",
      "Automated alerts for evaluation drift and policy exceptions",
    ],
  },
  {
    title: "Operational Intelligence",
    description:
      "Connect architecture decisions to measurable outcomes and stakeholder narratives across the AI program.",
    highlights: [
      "Value tracking dashboards tied to KPIs and SLOs",
      "Assistant summaries for executives, risk partners, and delivery teams",
      "Integrations that stream updates into Jira, Linear, Slack, and analytics",
    ],
  },
];

const moduleTracks = [
  {
    title: "Operate with Confidence",
    description:
      "Governance, risk, compliance, and value tracking baked into every build.",
    modules: ["Model risk playbooks", "Data privacy lab", "Value and KPI instrumentation"],
    duration: "2–3 weeks",
    deliverable: "Audit-ready risk posture mapped to controls and evidence.",
  },
  {
    title: "Ship Production Systems",
    description:
      "Hands-on recipes for RAG, agents, observability, guardrails, and automation.",
    modules: ["RAG delivery lab", "Agentic swarms studio", "Eval harness factory"],
    duration: "3–4 sprints",
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
];

const assistantHighlights = [
  "Grounded answers over the Academy knowledge graph and live documentation.",
  "Adaptive learning coach that assembles micro-modules based on project context.",
  "Session memory exports implementation plans, Jira issues, and architecture docs.",
  "Telemetry captures citations, evaluation status, and readiness signals for stakeholders.",
];

const assistantWorkflows = [
  {
    title: "Context intake",
    description:
      "Conversational brief captures systems, constraints, policies, KPIs, and timelines in minutes.",
  },
  {
    title: "Plan composition",
    description:
      "Assistant assembles modules, labs, governance tasks, and integrations with full reasoning trails.",
  },
  {
    title: "Co-build execution",
    description:
      "Generate diagrams, ADRs, evaluation suites, and automation snippets with citations ready to import.",
  },
  {
    title: "Evidence & handover",
    description:
      "Publish dashboards, stakeholder updates, and compliance packets to Slack, Jira, Linear, or Confluence.",
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
];

const operationsPractices = [
  {
    title: "Responsible AI controls",
    description:
      "Codify policy expectations into day-to-day workflows for every persona.",
    practices: [
      "Policy mapping to module steps and deliverables",
      "Risk scoring triggers with auto-escalation",
      "Approval workflows and digital signatures tracked over time",
    ],
  },
  {
    title: "Evaluation observability",
    description:
      "Treat evaluations like production systems with traceability and guardrails.",
    practices: [
      "Scenario libraries and scorecards fed by telemetry",
      "Pre-commit and post-deploy gates with exception logging",
      "Langfuse, Weights & Biases, and custom dashboards wired in",
    ],
  },
  {
    title: "Value instrumentation",
    description:
      "Quantify business impact, adoption, and operational efficiency across programs.",
    practices: [
      "KPI handshake templates and measurement cadences",
      "Impact tracking pulses for stakeholders and sponsors",
      "Executive briefing generator summarizing wins and risks",
    ],
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
    term: "ai governance checklist",
    human: "Embed controls, policies, and evidence collection in delivery.",
    agent: "Fetch compliance tasks, approval workflows, and audit exports.",
    destination: "#operations",
  },
  {
    term: "rag evaluation strategy",
    human: "Instrument experiments and quality gates before production.",
    agent: "Request eval harness templates and telemetry schemas.",
    destination: "#assistant",
  },
  {
    term: "ai program roadmap",
    human: "Align stakeholders, sequencing, and investment conversations.",
    agent: "Summarize roadmap milestones with dependencies and KPIs.",
    destination: "#roadmap",
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
];

const integrationHighlights = [
  "OpenRouter + Supabase Vector for grounded retrieval and personalization.",
  "GitHub, Linear, and Jira hooks to push tasks, ADRs, and follow-ups.",
  "Slack, Teams, and email digests for assistant handoffs and alerts.",
  "Langfuse, W&B, and custom telemetry connectors for evaluation analytics.",
];

const knowledgeLinks = [
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
  {
    label: "SEO & Findability",
    href: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/seo-strategy.md",
  },
  {
    label: "Experience Blueprint",
    href: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/experience-blueprint.md",
  },
];

const sitemapSections = [
  {
    title: "Platform overview",
    links: [
      { label: "Vision", href: "#vision" },
      { label: "Experience pillars", href: "#experience" },
      { label: "Persona outcomes", href: "#personas" },
    ],
  },
  {
    title: "Build & operate",
    links: [
      { label: "Micro-learning curriculum", href: "#curriculum" },
      { label: "AI Architect assistant", href: "#assistant" },
      { label: "Workspaces & dashboards", href: "#workspaces" },
      { label: "Operations & governance", href: "#operations" },
    ],
  },
  {
    title: "Plan ahead",
    links: [
      { label: "Search & discovery", href: "#search" },
      { label: "Roadmap", href: "#roadmap" },
      { label: "Knowledge network", href: "#resources" },
      { label: "FAQ", href: "#faq" },
    ],
  },
];

const roadmap = [
  {
    phase: "Phase 1 – Foundations",
    focus:
      "Marketing site, waitlist, curriculum browser, and showcase modules seeded from the AI Architect Academy repository.",
    outcome: "Public launch with SEO foundations, content tagging, and waitlist instrumentation.",
  },
  {
    phase: "Phase 2 – Guided Delivery",
    focus:
      "Authenticated workspace with learning paths, progress tracking, companion notebooks, and project kits served from Supabase.",
    outcome: "Teams co-build with the assistant, share workspaces, and monitor evaluation health.",
  },
  {
    phase: "Phase 3 – AI Pair-Partner",
    focus:
      "Full AI assistant with retrieval-augmented generation, sandbox execution, and team collaboration hooks (Slack, Linear).",
    outcome: "Adaptive plans, automated evidence packages, and agent-triggered workflows.",
  },
  {
    phase: "Phase 4 – Marketplace + Ops",
    focus:
      "Community-sourced modules, evaluation benchmarks, and operational analytics for AI Centers of Excellence.",
    outcome: "Ecosystem of reusable assets with performance benchmarks and monetization options.",
  },
];

const faqItems = [
  {
    question: "How does the AI Architect Assistant stay grounded and trustworthy?",
    answer:
      "The assistant retrieves answers from the Academy knowledge graph, GitHub artifacts, and verified partner playbooks. Every response includes citations, evaluation status, and suggested next steps so humans and companion agents can verify outputs before execution.",
  },
  {
    question: "What deliverables do teams receive as they progress through modules?",
    answer:
      "Each micro-module ends with a concrete asset—architecture diagram, ADR, runbook, checklist, or KPI tracker. Deliverables are versioned, exportable to Jira/Linear, and linked back to policy controls for audit readiness.",
  },
  {
    question: "How do autonomous agents plug into the platform?",
    answer:
      "Agents can request structured JSON views of modules, personas, and roadmap data (beta), trigger assistant workflows, and receive webhooks when evaluations drift or approvals are required. Stable anchor IDs ensure reliable scraping and referencing.",
  },
  {
    question: "Which metrics are monitored to prove program impact?",
    answer:
      "We track capability maturity, time-to-production, evaluation coverage, policy compliance, and business KPIs. Dashboards surface trendlines for executives while granular telemetry feeds retrospectives and continuous improvement.",
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
          <Link href="/" className="text-lg font-semibold tracking-tight text-cyan-100">
            AI Architect Academy Platform
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium lg:flex">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition hover:text-cyan-300">
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3 text-sm font-semibold">
            <Link
              href="mailto:frank@aiarchitect.academy"
              className="hidden rounded-full border border-white/30 px-4 py-2 transition hover:border-cyan-300 hover:text-cyan-200 sm:inline-flex"
            >
              Start a cohort
            </Link>
            <Link
              href="https://github.com/frankxai/saas-ai-architect-academy"
              className="rounded-full bg-cyan-400 px-4 py-2 text-slate-900 transition hover:bg-cyan-300"
            >
              Follow the build
            </Link>
          </div>
        </div>
        <div className="flex gap-4 overflow-x-auto px-6 pb-4 text-xs font-medium text-slate-300 lg:hidden">
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
                Build real-world AI value faster
              </span>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                The operating system for AI Architects, their teams, and their companion agents.
              </h1>
              <p className="max-w-3xl text-base text-slate-200 sm:text-lg">
                Progressive learning paths, battle-tested playbooks, and an AI partner orchestrate how enterprise programs design,
                ship, and operate production AI. Every module connects to the open-source AI Architect Academy for deeper research,
                architecture assets, and project kits.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#curriculum"
                  className="rounded-full bg-cyan-400 px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  Preview the curriculum
                </Link>
                <Link
                  href="#assistant"
                  className="rounded-full border border-white/20 px-6 py-3 text-center text-sm font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
                >
                  See the AI assistant
                </Link>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
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
                Powered by the <span className="font-semibold">AI Architect Academy</span> knowledge base: design patterns, projects,
                governance playbooks, and prompt libraries—all cross-linked inside the platform experience.
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
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl space-y-3">
              <h2 className="text-3xl font-semibold">Experience pillars</h2>
              <p className="text-base text-slate-200">
                Designed with architects, program leads, and compliance partners to balance innovation with accountability. Humans
                and autonomous agents share a consistent interface, structured data, and traceable decisions.
              </p>
            </div>
            <Link
              href="#sitemap"
              className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-cyan-100"
            >
              Jump to sitemap ↗
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {experiencePillars.map((pillar) => (
              <div key={pillar.title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <h3 className="text-xl font-semibold text-cyan-100">{pillar.title}</h3>
                <p className="mt-3 text-sm text-slate-200">{pillar.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {pillar.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-2">
                      <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="curriculum" className="space-y-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold">Micro-learning architecture</h2>
            <p className="max-w-3xl text-base text-slate-200">
              Hundreds of bite-sized modules compose journeys for architects, product leaders, engineers, and governance teams.
              Each module ends with a deliverable—canvas, runbook, code lab, or decision record—so learning translates directly
              into execution.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {moduleTracks.map((track) => (
              <div key={track.title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <h3 className="text-xl font-semibold text-cyan-100">{track.title}</h3>
                <p className="mt-3 text-sm text-slate-200">{track.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {track.modules.map((module) => (
                    <li key={module}>• {module}</li>
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
              <span className="font-semibold text-slate-100">Module sources:</span> existing playbooks in the Academy repository,
              partner case studies, and community stories curated by maintainers. Content is versioned, tagged by maturity, and
              enriched with evaluation rubrics plus policy mappings for AI agents.
            </p>
          </div>
        </section>

        <section id="assistant" className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-cyan-300/40 bg-cyan-400/10 p-6">
            <h2 className="text-3xl font-semibold text-cyan-100">AI Architect Assistant</h2>
            <p className="mt-3 text-sm text-cyan-50">
              Retrieval-augmented copilot trained on the Academy corpus, architecture decisions, and implementation checklists.
              Tuned for both human collaborators and autonomous agents.
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
              Launching with OpenRouter + Supabase Vector · Session orchestration via LangChain · Inline citations to primary sources
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
              A shared operating picture that keeps architects, program leads, risk partners, and AI agents aligned from strategy
              through operations.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
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
          <div className="grid gap-6 md:grid-cols-3">
            {personaGroups.map((persona) => (
              <div key={persona.title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-sm text-slate-200">
                <h3 className="text-lg font-semibold text-cyan-100">{persona.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{persona.summary}</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-300">
                  {persona.outcomes.map((outcome) => (
                    <li key={outcome}>• {outcome}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="search" className="space-y-6">
          <h2 className="text-3xl font-semibold">Search & discovery for humans and agents</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {searchIntents.map((intent) => (
              <Link
                key={intent.term}
                href={intent.destination}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-cyan-300/60 hover:text-cyan-100"
              >
                <div className="text-lg font-semibold text-cyan-100">{intent.term}</div>
                <p className="mt-3 text-sm text-slate-200">{intent.human}</p>
                <p className="mt-2 text-xs text-slate-300">Agent need: {intent.agent}</p>
                <p className="mt-4 text-xs uppercase tracking-[0.3em] text-cyan-200">Jump to section ↗</p>
              </Link>
            ))}
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 text-sm text-slate-200">
            <p>
              Need structured access? Request the upcoming <span className="font-semibold text-slate-100">API & agent toolkit</span>
              to query modules, personas, and roadmap data directly. Stable anchor IDs keep autonomous agents synchronized with the
              human experience.
            </p>
          </div>
        </section>

        <section id="operations" className="space-y-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold">Operate with confidence</h2>
            <p className="max-w-3xl text-base text-slate-200">
              Governance, evaluation, and value tracking are woven through the platform so teams can scale AI responsibly without
              slowing momentum.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
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
          <div className="space-y-4">
            {roadmap.map((entry) => (
              <div key={entry.phase} className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 text-sm text-slate-200">
                <div className="text-slate-100">{entry.phase}</div>
                <p className="mt-2">{entry.focus}</p>
                <p className="mt-3 text-slate-300">Outcome: {entry.outcome}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="resources" className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-sm text-slate-200">
          <h2 className="text-2xl font-semibold text-slate-100">Dive into the build artifacts</h2>
          <p className="mt-3 max-w-3xl">
            Explore the public roadmap, capabilities, experience blueprint, and UX guidance that shape the platform. Perfect for
            architects, PMs, and AI agents that need deeper context and reusable assets.
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
          <div className="grid gap-6 md:grid-cols-3">
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
            We are building in public. Join the waitlist, contribute modules, or partner on alpha cohorts to shape how AI programs
            deliver governed value at scale.
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
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 text-sm text-slate-400 md:flex-row md:items-start md:justify-between">
          <div className="space-y-3">
            <p>
              Built in public by the AI Architect Academy team. Contributions welcome via GitHub issues and discussions.
            </p>
            <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-slate-500">
              <span>Architecture</span>
              <span>Governance</span>
              <span>Agents</span>
              <span>Education</span>
            </div>
          </div>
          <div className="flex flex-col items-start gap-3 md:items-end">
            <div className="flex gap-4">
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
