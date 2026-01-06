import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ProgressIndicator } from "@/components/ui/progress-indicator";
import { SectionHeader, SectionShell } from "@/components/ui/section";
import { WaitlistSection } from "@/components/waitlist/waitlist-form";

const navLinks = [
  { label: "Vision", href: "#vision" },
  { label: "Platform", href: "#platform" },
  { label: "Proof", href: "#proof" },
  { label: "Curriculum", href: "#curriculum" },
  { label: "Command Center", href: "/command-center" },
  { label: "Assistant", href: "#assistant" },
  { label: "Workspace", href: "#workspaces" },
  { label: "Personas", href: "#personas" },
  { label: "Advisory", href: "#services" },
  { label: "Resources", href: "#resources" },
  { label: "Waitlist", href: "/#waitlist" },
];

const heroHighlights = [
  "Spec-to-launch operating system linking backlog, labs, and evidence locker updates.",
  "AI assistant coordinates Scout, Coach, Critic, Archivist, and Companion against live telemetry.",
  "Executive storytelling kits deliver ROI dashboards, compliance proof, and sponsor-ready narratives.",
];

const heroMetrics = [
  { value: "72h", label: "Spec to lab handoff", note: "Mission brief to Sprint 1 activation" },
  { value: "96%", label: "Guardrail coverage", note: "Preparedness + constitutional controls instrumented" },
  { value: "4.8/5", label: "Learner NPS", note: "Latest agent-led field test cohorts" },
];

const trustSignals = [
  "OpenAI Evals & Preparedness aligned",
  "Claude 3.5 constitutional guardrails",
  "Gemini 1.5 perception & Astra drills",
  "Microsoft Responsible AI scorecard ready",
  "Grok realtime retrieval scenarios",
];

const proofMoments = [
  {
    title: "Sprint 1 Agent Field Test",
    description:
      "Telemetry-backed evaluation flow covering o1 reasoning, GPT-4o multimodal reliability, realtime Grok probes, and Claude critiques.",
    href: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/labs/sprint1-agent-field-test.md",
    linkLabel: "Review the lab",
  },
  {
    title: "Module Excellence Command Center",
    description:
      "Spec-to-evidence playbook ensuring every module carries guardrails, evaluation suites, and storytelling assets in sync.",
    href: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/module-excellence.md",
    linkLabel: "Open the playbook",
  },
  {
    title: "Evaluation Harness Starter",
    description:
      "Production instrumentation for toxicity, hallucination, preparedness, perception, and realtime retrieval with telemetry hooks.",
    href: "https://github.com/frankxai/saas-ai-architect-academy/tree/main/scripts/eval-harness",
    linkLabel: "Inspect the harness",
  },
];

const testimonials = [
  {
    quote:
      "The Academy gave us a spec-to-storytelling pipeline that finally connected product, governance, and exec reporting in one motion.",
    name: "Global AI Program Lead",
    title: "Fortune 100 Transformation Office",
  },
  {
    quote:
      "Sprint 1 revealed gaps in our guardrails within days and the assistant immediately pushed playbooks, prompts, and telemetry fixes.",
    name: "Director of AI Enablement",
    title: "Enterprise Innovation Lab",
  },
  {
    quote:
      "Our sponsors now get weekly evidence lockers, ROI snapshots, and creator-ready narratives without extra lift from the team.",
    name: "Chief Architect",
    title: "Scale-up SaaS Platform",
  },
];

const stats = [
  { value: "220+", label: "Curriculum artefacts", note: "Blueprints, checklists, playbooks" },
  { value: "60+", label: "Advisory playbooks", note: "Executive-ready packages" },
  { value: "12", label: "Signature tracks", note: "Agents, prototyping, ops, leadership" },
  { value: "40", label: "Telemetry-ready labs", note: "Sprint-tested with guardrail proofs" },
];

const specFlow = [
  {
    step: "01",
    title: "Signal & Spec",
    description:
      "Absorb frontier intelligence, align the Spec-Driven Backlog, and capture mission briefs with risk posture.",
    artifacts: ["Frontier signal card", "AI CoE PRD + acceptance metrics", "Spec-critical risk & guardrail log"],
  },
  {
    step: "02",
    title: "Pattern & Playbook",
    description:
      "Select delivery pattern, author agent instructions, and map human + assistant responsibilities across the journey.",
    artifacts: ["Pattern rationale note", "Agent XML/YAML playbooks", "Interface & UX checklist"],
  },
  {
    step: "03",
    title: "Instrument & Build",
    description:
      "Activate Sprint labs, wire evaluation harness checks, and capture telemetry across every critical workflow.",
    artifacts: ["Sprint 1 run plan", "scripts/eval-harness configuration", "Telemetry & Langfuse trace IDs"],
  },
  {
    step: "04",
    title: "Evidence & Amplify",
    description:
      "Package outputs for sponsors, governance, and community with ROI storytelling and compliance proof.",
    artifacts: ["Evidence locker journal", "Sponsor storytelling kit", "Compliance & readiness scorecard"],
  },
];

const specPrinciples = [
  {
    title: "Signal-first planning",
    description: "Every update begins with actionable signals mapped to backlog IDs and persona impact.",
  },
  {
    title: "Assistant + human parity",
    description: "Instructions, assets, and telemetry stay consumable by copilots and teams at every step.",
  },
  {
    title: "Evidence travels with code",
    description: "Evaluation outputs, guardrail coverage, and narrative artefacts move together.",
  },
  {
    title: "Experience-led governance",
    description: "UX, compliance, and adoption rituals remain intertwined so value ships responsibly.",
  },
];

const moduleTracks = [
  {
    title: "Agent Foundations",
    description: "Frame opportunity, harden prompts, and field-test dependable coding agents with measurable guardrails.",
    modules: ["Agent opportunity mapping", "Prompt & policy baseline", "Agent field test"],
    duration: "2-week sprint",
    deliverable: "Agent blueprint, guardrail baseline, sprint journal",
  },
  {
    title: "Rapid Prototyping",
    description: "Move from hypothesis to pilot-ready demo with qualitative + quantitative instrumentation baked in.",
    modules: ["Prototype hypothesis sprint", "Experience story sprint", "Prototype pilot"],
    duration: "3-week cadence",
    deliverable: "Prototype repo, storyboard, iteration decision memo",
  },
  {
    title: "Architecture & Ops",
    description: "Translate prototypes into production-grade architectures, observability, and on-call rituals.",
    modules: ["Capability mapping lab", "Interface contract design", "Observability rollout"],
    duration: "4-week program",
    deliverable: "Architecture brief, retrieval blueprint, operations dashboard",
  },
  {
    title: "Story & Scale",
    description: "Activate sponsors, communities, and partners with telemetry-backed narratives and enablement systems.",
    modules: ["Collaboration operating system", "Storytelling lab", "Investment story studio"],
    duration: "Leadership lane",
    deliverable: "Enablement toolkit, progress digest, investment narrative",
  },
];

const experiencePillars = [
  {
    title: "Signal to Spec",
    description: "Turn intelligence into mission briefs and backlog moves that unlock the next release.",
    highlights: ["Frontier digest review ritual", "Spec-driven backlog alignment", "Risk posture + policy sync"],
  },
  {
    title: "Build Momentum",
    description: "Guide teams and agents through labs, harness runs, and co-build rituals without dropping guardrails.",
    highlights: ["Sprint 1 activation playbook", "Evaluation harness automation", "Realtime telemetry dashboards"],
  },
  {
    title: "Operate & Assure",
    description: "Keep production health visible with observability, governance cadences, and readiness reports.",
    highlights: ["Preparedness scorecards", "Incident rehearsal templates", "Guardrail coverage analytics"],
  },
  {
    title: "Story & Amplify",
    description: "Compress wins into executive briefings, creator content, and community campaigns.",
    highlights: ["Sponsor digest factory", "Creator studio prompts", "Evidence locker linking guidance"],
  },
];

const assistantHighlights = [
  "Grounded responses reference the academy knowledge graph, evaluation harness, and evidence locker artefacts.",
  "Persona-aware coaching assembles micro-modules, labs, and prompts tuned to skill gaps and goals.",
  "Session memory exports implementation plans, executive briefings, social copy, and deliverable checklists.",
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
      "Assistant assembles modules, labs, governance tasks, and content assets with full reasoning trails and citations.",
  },
  {
    title: "Co-build execution",
    description:
      "Generate diagrams, ADRs, evaluation suites, automation snippets, and editorial outlines with guardrails enforced.",
  },
  {
    title: "Evidence & handover",
    description:
      "Publish dashboards, stakeholder updates, compliance packets, and ROI narratives to the channels your sponsors expect.",
  },
  {
    title: "Amplify & syndicate",
    description:
      "Produce newsletters, podcast briefs, social posts, and supporter digests so every win is celebrated.",
  },
];

const workspaceStreams = [
  {
    title: "Strategy cockpit",
    description:
      "Define ambition, map maturity, and surface the next most valuable capability to activate.",
    elements: [
      "Capability heatmap keyed to personas",
      "Portfolio prioritisation and impact sizing",
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
      "Control centre for approvals, attestations, and evidence",
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
      "Atomisation prompts for newsletter, podcast, and social drops",
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
      "Approval workflow with audit-ready artefacts",
      "Policy mapping to modules, deliverables, and integrations",
    ],
  },
  {
    title: "High-Value Sponsor",
    summary: "Invests in governed AI acceleration and expects measurable ROI.",
    outcomes: [
      "Curated advisory package with ROI and trust benchmarks",
      "Executive dashboards and briefing cadence tailored to stakeholders",
      "Dedicated assistant channel plus white-glove onboarding",
    ],
  },
  {
    title: "Creator Partner",
    summary: "Amplifies the AI Architect voice across media channels.",
    outcomes: [
      "Editorial runway and content atomisation recipes",
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
    title: "Autonomous Agents",
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
      "Policy-to-delivery mapping with risk heatmap",
      "Evaluation operating model with metrics and owners",
      "Executive-ready narrative plus board briefing artefacts",
    ],
    ctaLabel: "Book the sprint",
    href: "/#waitlist",
  },
  {
    title: "Enterprise Transformation Lab",
    summary:
      "Embedded build-operate-transfer partnership delivering production architectures and change management.",
    ideal: "Ideal for AI CoE leads, program directors, and innovation sponsors.",
    outcomes: [
      "Customized learning path and workspace for cross-functional teams",
      "Production blueprint with governance, observability, and automation",
      "OKR and ROI instrumentation plus handover playbook",
    ],
    ctaLabel: "Schedule lab consult",
    href: "/#waitlist",
  },
  {
    title: "Creator Influence Accelerator",
    summary:
      "Hands-on accelerator turning deep expertise into multi-channel influence with AI-assisted storytelling systems.",
    ideal: "Ideal for creators, influencers, and partners amplifying the Academy voice.",
    outcomes: [
      "Editorial calendar synced to launches and cohorts",
      "Content atomisation prompts and workflow automation",
      "Analytics dashboard with sponsorship and conversion insights",
    ],
    ctaLabel: "Request media kit",
    href: "/#waitlist",
  },
  {
    title: "Inner Circle Advisory",
    summary:
      "Dedicated support channel for family, close supporters, and premium patrons to stay ahead of every milestone.",
    ideal: "Ideal for inner circle champions and philanthropic partners.",
    outcomes: [
      "Monthly studio briefing with private Q&A",
      "Curated resource bundles tailored to each supporter",
      "Early invites to launches, masterminds, and community rituals",
    ],
    ctaLabel: "Join the advisory",
    href: "/#waitlist",
  },
];

const resourceVault = [
  {
    tier: "Open Source Essentials",
    badge: "Free",
    description:
      "Foundational resources sourced from the AI Architect Academy knowledge base. Share freely with teams and collaborators getting started.",
    items: [
      {
        name: "AI Architect Academy Knowledge Base",
        summary: "Comprehensive library of patterns, labs, governance assets, and module templates.",
        format: "GitHub repository",
        href: "https://github.com/AI-Architect-Academy/ai-architect-academy",
      },
      {
        name: "Module Excellence Command Center",
        summary: "Spec-to-evidence orchestration guide for every module iteration.",
        format: "Markdown playbook",
        href: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/module-excellence.md",
      },
      {
        name: "Frontier Intelligence Digest Template",
        summary: "Weekly signal tracker covering OpenAI, Anthropic, DeepMind, xAI, Microsoft, Meta, and more.",
        format: "Markdown template",
        href: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/frontier-intelligence.md",
      },
    ],
  },
  {
    tier: "Academy Workspace",
    badge: "Included",
    description:
      "Learner workspace with track navigation, assistant prompts, evaluation harness starter, and sponsor storytelling kits.",
    items: [
      {
        name: "Curriculum Explorer",
        summary: "Interactive navigator for tracks, micro-paths, and module details.",
        format: "Web experience",
        href: "/curriculum",
      },
      {
        name: "Evaluation Harness Starter",
        summary: "Toxicity, hallucination, realtime, perception, and preparedness checks with telemetry export hooks.",
        format: "Python toolkit",
        href: "https://github.com/frankxai/saas-ai-architect-academy/tree/main/scripts/eval-harness",
      },
      {
        name: "Sprint 1 Field Test Lab",
        summary: "Step-by-step workflow for agent field testing with deliverables and evaluation gates.",
        format: "Lab guide",
        href: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/labs/sprint1-agent-field-test.md",
      },
    ],
  },
  {
    tier: "Premium Advisory",
    badge: "Invite-only",
    description: "White-glove support for enterprise transformation, creators, and inner circle patrons.",
    items: [
      {
        name: "Executive Governance Sprint",
        summary: "Four-week engagement aligning policy, evaluation, and launch rhythms.",
        format: "Advisory sprint",
        href: "/#waitlist",
      },
      {
        name: "Enterprise Transformation Lab",
        summary: "Embedded partnership shipping governed architectures and enablement.",
        format: "Advisory lab",
        href: "/#waitlist",
      },
      {
        name: "Creator Influence Accelerator",
        summary: "Systems, analytics, and assistant prompts for multi-channel influence.",
        format: "Creator accelerator",
        href: "/#waitlist",
      },
    ],
  },
];

const keywordCloud = [
  "AI architecture hub",
  "AI governance advisory",
  "Enterprise AI blueprint",
  "Agentic automation playbook",
  "Responsible AI controls",
  "AI evaluation strategy",
  "AI progress digest",
  "AI assistant for architects",
  "AI program roadmap",
  "AI resource vault",
  "AI executive briefing template",
  "Agent-ready dataset",
];
function Navigation() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.svg" alt="AI Architect Academy" width={36} height={36} className="h-9 w-9" />
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-200">
            AI Architect Academy
          </span>
        </Link>
        <nav className="hidden items-center gap-2 text-xs uppercase tracking-[0.35em] text-slate-300 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className="rounded-full px-3 py-2 transition hover:text-cyan-200">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/curriculum"
            className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
          >
            Curriculum hub
          </Link>
          <Link
            href="mailto:frank@aiarchitect.academy?subject=AI%20Architect%20Academy%20Strategy%20Call"
            className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-cyan-300"
          >
            Book strategy call
          </Link>
        </div>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <SectionShell id="vision" className="bg-gradient-to-br from-slate-900/80 via-slate-950/90 to-slate-900/80">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div className="space-y-8">
          <Badge tone="accent">Frontier AI operating system</Badge>
          <h1 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Launch your AI architecture company-in-a-box with governed velocity.
          </h1>
          <p className="max-w-3xl text-base text-slate-300 sm:text-lg">
            The Academy blends curriculum, assistant, workspace, and evidence locker into one connected experience so your teams and
            copilots move from mission brief to executive-ready proof without breaking trust.
          </p>
          <ul className="grid gap-3 text-sm text-slate-300">
            {heroHighlights.map((highlight) => (
              <li key={highlight} className="flex gap-3">
                <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-cyan-300" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/workspaces"
              className="rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-cyan-300"
            >
              Launch workspace demo
            </Link>
            <Link
              href="/curriculum"
              className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              Explore modules & labs
            </Link>
            <Link
              href="/#waitlist"
              className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              Talk to the professor
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {heroMetrics.map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-3xl font-semibold text-cyan-200">{metric.value}</p>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">{metric.label}</p>
                <p className="text-[11px] text-slate-400">{metric.note}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.3em] text-slate-500">
            {trustSignals.slice(0, 3).map((signal) => (
              <Badge key={signal} tone="neutral">
                {signal}
              </Badge>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <Card tone="default">
            <div className="space-y-4 text-sm text-slate-200">
              <ProgressIndicator value={0.74} label="Launch readiness" />
              <p className="text-xs text-slate-300">
                14-day pilot blueprint connecting Spec-Driven Backlog, Sprint 1 lab, assistant prompts, and evidence locker rituals.
              </p>
              <ul className="space-y-3 text-xs text-slate-200">
                <li className="flex items-center justify-between gap-3">
                  <span>Module excellence command center</span>
                  <Link href="#platform" className="text-[11px] uppercase tracking-[0.3em] text-cyan-200">
                    View
                  </Link>
                </li>
                <li className="flex items-center justify-between gap-3">
                  <span>Sprint 1 field test lab</span>
                  <Link href="#proof" className="text-[11px] uppercase tracking-[0.3em] text-cyan-200">
                    Proof
                  </Link>
                </li>
                <li className="flex items-center justify-between gap-3">
                  <span>Assistant telemetry stack</span>
                  <Link href="#assistant" className="text-[11px] uppercase tracking-[0.3em] text-cyan-200">
                    Meet
                  </Link>
                </li>
              </ul>
            </div>
          </Card>
          <Card tone="outline" title="Sponsor-ready artefacts" subtitle="Delivered automatically with every sprint">
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex gap-2">
                <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-emerald-300" />
                <span>Evidence locker entries linked to telemetry IDs</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-emerald-300" />
                <span>Executive briefings with ROI + guardrail snapshot</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-emerald-300" />
                <span>Creator-ready story packs and social atomisation prompts</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </SectionShell>
  );
}

function ProofSection() {
  return (
    <SectionShell id="proof" className="bg-white/[0.03]">
      <SectionHeader
        eyebrow="Proof"
        title="Evidence that the operating system already ships outcomes"
        subtitle="Live labs, telemetry, and governance-ready storytelling connect every touchpoint."
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div className="grid gap-6 md:grid-cols-2">
          {proofMoments.map((moment) => (
            <Card key={moment.title} tone="outline" title={moment.title} subtitle={moment.description}>
              <Link
                href={moment.href}
                target={moment.href.startsWith('http') ? "_blank" : undefined}
                className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200"
              >
                {moment.linkLabel}
              </Link>
            </Card>
          ))}
        </div>
        <Card tone="default" title="Voices from the field">
          <ul className="space-y-6 text-sm text-slate-200">
            {testimonials.map((testimonial) => (
              <li key={testimonial.quote} className="space-y-2">
                <p className="text-sm text-slate-200">“{testimonial.quote}”</p>
                <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
                  {testimonial.name} • {testimonial.title}
                </p>
              </li>
            ))}
          </ul>
        </Card>
      </div>
      <div className="mt-10 flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-slate-400">
        {trustSignals.map((signal) => (
          <Badge key={signal} tone="neutral">
            {signal}
          </Badge>
        ))}
      </div>
    </SectionShell>
  );
}

function StatsBar() {
  return (
    <SectionShell className="bg-gradient-to-br from-slate-950/70 via-slate-900/80 to-slate-950/70">
      <SectionHeader
        eyebrow="Signals"
        title="Why architects, sponsors, and copilots keep choosing the Academy"
        subtitle="Numbers stay anchored to the public changelog and evidence locker so every claim is verifiable."
        actions={
          <Link
            href="https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/changelog.md"
            target="_blank"
            className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200"
          >
            View changelog
          </Link>
        }
      />
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label} tone="outline">
            <p className="text-3xl font-semibold text-cyan-200">{stat.value}</p>
            <p className="text-sm font-semibold text-slate-100">{stat.label}</p>
            <p className="text-xs text-slate-400">{stat.note}</p>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}

function SpecLoop() {
  return (
    <SectionShell id="platform" className="bg-gradient-to-br from-slate-900/80 via-slate-950/80 to-slate-900/80">
      <SectionHeader
        eyebrow="Platform loop"
        title="One operating loop binding specs, labs, assistant, and evidence"
        subtitle="Start with a mission brief, run governed sprints, and publish proof that keeps teams and sponsors aligned."
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-4">
        {specFlow.map((step) => (
          <Card key={step.step} title={step.step + ". " + step.title} subtitle={step.description} tone="outline">
            <ul className="space-y-2 text-xs text-slate-400">
              {step.artifacts.map((artifact) => (
                <li key={artifact} className="flex gap-2">
                  <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-cyan-300" />
                  <span>{artifact}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {specPrinciples.map((principle) => (
          <Card key={principle.title} tone="default" title={principle.title}>
            <p className="text-sm text-slate-300">{principle.description}</p>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}

function CurriculumTracks() {
  return (
    <SectionShell id="curriculum">
      <SectionHeader
        eyebrow="Curriculum"
        title="Learning tracks engineered to ship artefacts every five days"
        subtitle="Micro-paths, labs, and evaluation hooks meet teams where they are and prove value fast."
        actions={<Link href="/curriculum" className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">Open curriculum hub</Link>}
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {moduleTracks.map((track) => (
          <Card key={track.title} title={track.title} subtitle={track.duration + " • " + track.deliverable}>
            <p className="text-sm text-slate-300">{track.description}</p>
            <ul className="mt-4 space-y-2 text-xs text-slate-400">
              {track.modules.map((module) => (
                <li key={module} className="flex gap-2">
                  <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-cyan-300" />
                  <span>{module}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
      <div className="mt-10 flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-slate-400">
        {keywordCloud.map((keyword) => (
          <Badge key={keyword} tone="neutral">
            {keyword}
          </Badge>
        ))}
      </div>
    </SectionShell>
  );
}

function ExperienceStack() {
  return (
    <SectionShell id="experience" className="bg-white/[0.03]">
      <SectionHeader
        eyebrow="Experience"
        title="Four momentum pillars keep teams shipping with confidence"
        subtitle="Every pillar comes with guides, automations, and telemetry so learners, mentors, and copilots stay in sync."
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {experiencePillars.map((pillar) => (
          <Card key={pillar.title} title={pillar.title} subtitle={pillar.description}>
            <ul className="space-y-2 text-xs text-slate-400">
              {pillar.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-2">
                  <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-emerald-300" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}

function AssistantSection() {
  return (
    <SectionShell id="assistant" className="bg-gradient-to-br from-slate-900/80 via-slate-950/80 to-slate-900/80">
      <SectionHeader
        eyebrow="AI Architect Assistant"
        title="Your copilots co-build, evaluate, and communicate with you"
        subtitle="Scout, Coach, Critic, Archivist, and Companion operate across the learner experience with clear SLAs and telemetry."
        actions={<Link href="/curriculum#assistant" className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">Assistant playbooks</Link>}
      />
      <div className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-6">
          <Card tone="default">
            <ul className="space-y-3 text-sm text-slate-300">
              {assistantHighlights.map((highlight) => (
                <li key={highlight} className="flex gap-2">
                  <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-cyan-300" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </Card>
          <div className="grid gap-4 md:grid-cols-2">
            {assistantWorkflows.map((workflow) => (
              <Card key={workflow.title} tone="outline" title={workflow.title}>
                <p className="text-xs text-slate-400">{workflow.description}</p>
              </Card>
            ))}
          </div>
        </div>
        <Card tone="accent" title="Assistant telemetry stack" subtitle="Planned MVP integrations">
          <ul className="space-y-3 text-sm text-slate-200">
            <li className="flex flex-col gap-1">
              <span className="font-semibold text-slate-100">Supabase learner hub</span>
              <span className="text-xs text-slate-300">
                Store module progress, evaluation snapshots, and sponsor artefacts with row level security.
              </span>
            </li>
            <li className="flex flex-col gap-1">
              <span className="font-semibold text-slate-100">Langfuse & OpenTelemetry</span>
              <span className="text-xs text-slate-300">Trace assistant actions, runtime SLAs, and guardrail verdicts.</span>
            </li>
            <li className="flex flex-col gap-1">
              <span className="font-semibold text-slate-100">Knowledge graph sync</span>
              <span className="text-xs text-slate-300">Daily ingestion from Academy docs, labs, and Evidence Locker entries.</span>
            </li>
          </ul>
          <p className="mt-4 text-xs text-slate-300">
            Want to help wire the Supabase experience? Drop your details and we will invite you to the integration preview.
          </p>
          <Link
            href="/#waitlist"
            className="mt-4 inline-flex w-max rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-900 transition hover:bg-slate-200"
          >
            Support the MVP build
          </Link>
        </Card>
      </div>
    </SectionShell>
  );
}
function WorkspaceSection() {
  return (
    <SectionShell id="workspaces" className="bg-white/[0.03]">
      <SectionHeader
        eyebrow="Learner workspace"
        title="One cockpit ties modules, assistant prompts, telemetry, and storytelling"
        subtitle="Every stream keeps learners on track while sponsors and creators can see progress in one place."
        actions={<Link href="/workspaces" className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">See workspace preview</Link>}
      />
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {workspaceStreams.map((stream) => (
          <Card key={stream.title} title={stream.title} subtitle={stream.description}>
            <ul className="space-y-2 text-xs text-slate-400">
              {stream.elements.map((element) => (
                <li key={element} className="flex gap-2">
                  <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-emerald-300" />
                  <span>{element}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}

function PersonaSection() {
  return (
    <SectionShell id="personas" className="bg-gradient-to-br from-slate-900/80 via-slate-950/80 to-slate-900/80">
      <SectionHeader
        eyebrow="Personas"
        title="Designed for every stakeholder in the AI Architect orbit"
        subtitle="Learners, sponsors, creators, and even autonomous agents get clear outcomes and artefacts tailored to them."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {personaGroups.map((persona) => (
          <Card key={persona.title} title={persona.title} subtitle={persona.summary}>
            <ul className="space-y-2 text-xs text-slate-400">
              {persona.outcomes.map((outcome) => (
                <li key={outcome} className="flex gap-2">
                  <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-purple-300" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}

function ServicesSection() {
  return (
    <SectionShell id="services">
      <SectionHeader
        eyebrow="Premium services"
        title="Advisory and accelerators that plug directly into the platform"
        subtitle="Enterprise, creator, and inner circle partners can extend the SaaS experience with white-glove guidance."
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {serviceOffers.map((offer) => (
          <Card key={offer.title} title={offer.title} subtitle={offer.summary}>
            <p className="text-xs text-slate-400">{offer.ideal}</p>
            <ul className="mt-4 space-y-2 text-xs text-slate-400">
              {offer.outcomes.map((outcome) => (
                <li key={outcome} className="flex gap-2">
                  <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-cyan-300" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <Link
                href={offer.href}
                className="inline-flex rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
              >
                {offer.ctaLabel}
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}

function ResourceSection() {
  return (
    <SectionShell id="resources" className="bg-white/[0.03]">
      <SectionHeader
        eyebrow="Resource vault"
        title="Choose the access level that matches your mission"
        subtitle="Open-source assets, learner workspace, and premium advisory channels are ready when you are."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {resourceVault.map((tier) => (
          <Card key={tier.tier} tone="outline">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold text-slate-100">{tier.tier}</h3>
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-200">{tier.badge}</p>
              </div>
            </div>
            <p className="text-sm text-slate-300">{tier.description}</p>
            <ul className="space-y-3 text-xs text-slate-400">
              {tier.items.map((item) => (
                <li key={item.name} className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 transition hover:border-cyan-300/40">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-slate-100">{item.name}</p>
                      <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">{item.format}</p>
                    </div>
                    <Link
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200"
                    >
                      Open
                    </Link>
                  </div>
                  <p className="mt-3 text-xs text-slate-400">{item.summary}</p>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}

function ClosingCta() {
  return (
    <SectionShell className="bg-gradient-to-br from-cyan-500/15 via-slate-950/80 to-indigo-500/20 text-slate-100">
      <div className="flex flex-col gap-6 text-center">
        <Badge tone="highlight" className="self-center">
          Ready to co-build
        </Badge>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Ship your next AI milestone with governed velocity.
        </h2>
        <p className="mx-auto max-w-2xl text-sm text-slate-200 sm:text-base">
          Join the sprint, explore the workspace, or bring the assistant into your portfolio. The MVP is live—let&apos;s make your
          learners unstoppable.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/workspaces"
            className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
          >
            Enter learner workspace
          </Link>
          <Link
            href="/curriculum/modules"
            className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
          >
            Explore module atlas
          </Link>
          <Link
            href="/#waitlist"
            className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
          >
            Become a launch partner
          </Link>
        </div>
      </div>
    </SectionShell>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/90">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 text-xs text-slate-400 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Image src="/logo.svg" alt="AI Architect Academy" width={28} height={28} className="h-7 w-7" />
            <span className="text-[11px] uppercase tracking-[0.35em] text-cyan-200">AI Architect Academy</span>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="hover:text-cyan-200">frank@aiarchitect.academy</span>
            <Link href="/#waitlist" className="hover:text-cyan-200">
              Join waitlist
            </Link>
            <Link href="https://github.com/frankxai/saas-ai-architect-academy" target="_blank" className="hover:text-cyan-200">
              GitHub
            </Link>
            <Link href="https://github.com/AI-Architect-Academy/ai-architect-academy" target="_blank" className="hover:text-cyan-200">
              Open source knowledge base
            </Link>
          </div>
        </div>
        <p>
          Built in public to accelerate real-world AI value delivery. Curriculum, assistant playbooks, evaluation harnesses, and
          governance artefacts update weekly with signals from OpenAI, Anthropic, DeepMind, xAI, Microsoft, Meta, and the broader
          ecosystem.
        </p>
      </div>
    </footer>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 select-none opacity-60">
        <div className="absolute -left-32 top-16 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -right-32 top-1/3 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>
      <Navigation />
      <main className="relative z-10 mx-auto flex max-w-6xl flex-col gap-12 px-4 pb-32 pt-12 sm:px-6 lg:px-8">
        <HeroSection />
        <ProofSection />
        <StatsBar />
        <SpecLoop />
        <ExperienceStack />
        <CurriculumTracks />
        <AssistantSection />
        <WorkspaceSection />
        <PersonaSection />
        <ServicesSection />
        <ResourceSection />
        <WaitlistSection />
        <ClosingCta />
      </main>
      <Footer />
    </div>
  );
}
