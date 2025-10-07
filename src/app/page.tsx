import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ProgressIndicator } from "@/components/ui/progress-indicator";
import { SectionHeader, SectionShell } from "@/components/ui/section";
import { WaitlistSection } from "@/components/waitlist/waitlist-form";

const navLinks = [
  { label: "Vision", href: "#vision" },
  { label: "Curriculum", href: "#curriculum" },
  { label: "Assistant", href: "#assistant" },
  { label: "Workspaces", href: "#workspaces" },
  { label: "Personas", href: "#personas" },
  { label: "Services", href: "#services" },
  { label: "Resources", href: "#resources" },
  { label: "Waitlist", href: "/#waitlist" },
];

const heroHighlights = [
  "Sprint-ready curriculum mapped to guardrails and evaluation signals",
  "Learner + agent workspace with telemetry, evidence, and coaching",
  "Creator and sponsor storytelling kits grounded in production proof",
];

const stats = [
  { value: "220+", label: "Curriculum artefacts", note: "Blueprints, checklists, playbooks" },
  { value: "60+", label: "Advisory playbooks", note: "Executive-ready packages" },
  { value: "12", label: "Signature tracks", note: "Agents, prototyping, ops, leadership" },
  { value: "4.8/5", label: "Learner satisfaction", note: "Field-test cohorts & creators" },
];

const specFlow = [
  {
    step: "01",
    title: "Discover & Frame",
    description: "Intake PRDs, business goals, and guardrails to anchor every build in measurable outcomes.",
    artifacts: ["AI CoE PRD template", "Sponsor goal brief", "Risk posture summary"],
  },
  {
    step: "02",
    title: "Pattern & Playbook",
    description: "Select prototyping and SDLC patterns, then author XML/YAML agent playbooks for every role.",
    artifacts: ["Pattern rationale note", "Agent instruction files", "Interface checklist"],
  },
  {
    step: "03",
    title: "Build & Instrument",
    description: "Run Sprint 1 labs, wire evaluation harnesses, and capture telemetry for humans and copilots.",
    artifacts: ["Field test journal", "scripts/eval-harness run", "Telemetry snapshot"],
  },
  {
    step: "04",
    title: "Evidence & Amplify",
    description: "Publish system cards, compliance scorecards, and storytelling kits that prove value and trust.",
    artifacts: ["System card draft", "Compliance scorecard", "Progress digest"],
  },
];

const specPrinciples = [
  {
    title: "Specs before sprints",
    description: "Every initiative starts with a spec referencing AI CoE templates and explicit acceptance criteria.",
  },
  {
    title: "Agent + human parity",
    description: "Playbooks, artefacts, and telemetry are designed for autonomous agents and human teams together.",
  },
  {
    title: "Evidence everywhere",
    description: "Ship evaluation outputs, guardrail coverage, and storytelling assets together to reinforce trust.",
  },
  {
    title: "Continuous frontier sync",
    description: "Weekly lab scans feed updates into modules, harnesses, and dashboards to stay aligned with top AI labs.",
  },
];

const moduleTracks = [
  {
    title: "Agent Foundations",
    description: "Frame, prompt, and field-test dependable coding agents with clear success metrics.",
    modules: ["Agent opportunity mapping", "Prompt & policy baseline", "Agent field test"],
    duration: "2-week sprint",
    deliverable: "Agent blueprint, guardrail baseline, and field-test journal.",
  },
  {
    title: "Rapid Prototyping",
    description: "Move from hypothesis to pilot-ready demos with instrumentation and evidence packs.",
    modules: ["Prototype hypothesis sprint", "Experience story sprint", "Prototype pilot"],
    duration: "3-week cadence",
    deliverable: "Prototype repo, storyboard, and iteration decision memo.",
  },
  {
    title: "Architecture & Ops",
    description: "Translate prototypes into solution architectures, observability, and runbooks.",
    modules: ["Capability mapping lab", "Interface contract design", "Observability rollout"],
    duration: "4-week program",
    deliverable: "Architecture brief, retrieval blueprint, and operations dashboard.",
  },
  {
    title: "Story & Scale",
    description: "Align teams, sponsors, and communities with narratives and activation plans.",
    modules: ["Collaboration operating system", "Storytelling lab", "Investment story studio"],
    duration: "Leadership lane",
    deliverable: "Enablement toolkit, progress digest, and investment narrative.",
  },
];

const experiencePillars = [
  {
    title: "Agent Momentum",
    description: "Stand up dependable coding agents with guardrails, telemetry, and human-in-the-loop rituals.",
    highlights: [
      "Opportunity canvases and guardrail baselines",
      "Reusable agent starter kits with evaluation hooks",
      "Field-test journals and sponsor-ready summaries",
    ],
  },
  {
    title: "Prototype Velocity",
    description: "Move from hypothesis to pilot-ready demos in days with instrumentation and evidence packs.",
    highlights: [
      "Hypothesis briefs and storyboard studios",
      "Pilot facilitation scripts with qualitative + quantitative capture",
      "Iteration decision memos that feed investment stories",
    ],
  },
  {
    title: "Architecture & Ops",
    description: "Translate prototypes into resilient architectures, observability stacks, and runbooks.",
    highlights: [
      "Interface contracts and retrieval blueprints",
      "Observability rollout plans and guardrail coverage reports",
      "Incident simulations with insight briefs for sponsors",
    ],
  },
  {
    title: "Story & Scale",
    description: "Activate communication kits, governance cadences, and community playbooks so wins travel fast.",
    highlights: [
      "Collaboration charters and enablement loops",
      "Progress digests tailored to executives, teams, and communities",
      "Investment narratives grounded in telemetry",
    ],
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
        name: "Responsible AI Readiness Checklist",
        summary: "Checklist aligned to NIST AI RMF and ISO/IEC 42001 principles.",
        format: "Markdown guide",
        href: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/evaluation-ops.md",
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
    description:
      "White-glove support for enterprise transformation, creators, and inner circle patrons.",
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
            Explore curriculum
          </Link>
          <Link
            href="/workspaces"
            className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-cyan-300"
          >
            Enter workspace
          </Link>
        </div>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <SectionShell id="vision" className="bg-gradient-to-br from-slate-900/80 via-slate-950/90 to-slate-900/80">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-6">
          <Badge tone="accent">Sprint-ready SaaS MVP</Badge>
          <h1 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Ship governed AI outcomes with an academy, assistant, and workspace built for architects.
          </h1>
          <p className="max-w-3xl text-base text-slate-300 sm:text-lg">
            The AI Architect Academy SaaS platform blends learning, execution, telemetry, and storytelling so teams and their
            copilots move from intent to production proof without losing trust.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/workspaces"
              className="rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-cyan-300"
            >
              Launch learner workspace
            </Link>
            <Link
              href="/curriculum"
              className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              Browse modules & labs
            </Link>
            <Link
              href="/#waitlist"
              className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              Talk to the team
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center gap-6">
          <ProgressIndicator value={0.68} label="Learner completion" />
          <div className="w-full max-w-xs space-y-3 rounded-3xl border border-white/10 bg-white/5 p-4 text-xs text-slate-200">
            <p className="font-semibold uppercase tracking-[0.3em] text-cyan-200">Highlights</p>
            <ul className="space-y-2">
              {heroHighlights.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-cyan-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

function StatsBar() {
  return (
    <SectionShell className="bg-white/[0.03]">
      <SectionHeader
        eyebrow="Signals"
        title="Evidence that learners and sponsors already rely on"
        subtitle="Every asset is grounded in the open-source academy and updated weekly with frontier lab research."
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
    <SectionShell id="spec" className="bg-gradient-to-br from-slate-900/80 via-slate-950/80 to-slate-900/80">
      <SectionHeader
        eyebrow="Spec-driven delivery"
        title="One operating loop for humans and agents"
        subtitle="Every sprint begins with a mission brief and ends with evidence packaged for stakeholders, copilots, and community."
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
        title="Learning tracks designed to produce artefacts every five days"
        subtitle="Adaptive micro-learning, labs, and evaluation hooks meet you where your team is and keep momentum visible."
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
        title="The learner journey spans four momentum pillars"
        subtitle="Each pillar ships guides, automation, and telemetry so learners, mentors, and copilots stay aligned on progress."
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
        actions={<Link href="/workspaces" className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">View workspace MVP</Link>}
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
          Join the sprint, explore the workspace, or bring the assistant into your portfolio. The MVP is live — let&apos;s make your
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
        <StatsBar />
        <SpecLoop />
        <CurriculumTracks />
        <ExperienceStack />
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
