import Link from "next/link";

const microTracks = [
  {
    title: "Operate with Confidence",
    description:
      "Governance, risk, compliance, and value tracking baked into every build.",
    modules: ["Model risk playbooks", "Data privacy lab", "Value and KPI instrumentation"],
  },
  {
    title: "Ship Production Systems",
    description:
      "Hands-on recipes for RAG, agents, observability, guardrails, and automation.",
    modules: ["RAG delivery lab", "Agentic swarms studio", "Eval harness factory"],
  },
  {
    title: "Lead AI Programs",
    description:
      "Executive enablement, discovery questions, stakeholder choreography, and roadmaps.",
    modules: ["AI portfolio strategy", "Governance sprint", "Value discovery scenarios"],
  },
];

const assistantHighlights = [
  "Grounded answers over the Academy knowledge graph and live documentation.",
  "Adaptive learning coach that assembles micro-modules based on your current project context.",
  "Session memory that exports implementation plans, Jira issues, and architecture docs.",
];

const roadmap = [
  {
    phase: "Phase 1 - Foundations",
    focus:
      "Marketing site, waitlist, curriculum browser, and showcase modules seeded from the existing AI Architect Academy repository.",
  },
  {
    phase: "Phase 2 - Guided Delivery",
    focus:
      "Authenticated workspace with learning paths, progress tracking, companion notebooks, and project kits served from Supabase.",
  },
  {
    phase: "Phase 3 - AI Pair-Partner",
    focus:
      "Full AI assistant with retrieval-augmented generation, sandbox execution, and team collaboration hooks (Slack, Linear).",
  },
  {
    phase: "Phase 4 - Marketplace + Ops",
    focus:
      "Community-sourced modules, evaluation benchmarks, and operational analytics for AI Centers of Excellence.",
  },
];

const personas = [
  {
    title: "Lead Architect",
    outcomes: [
      "Production-ready blueprint with staged rollout plan",
      "Evaluation and observability strategy baked into delivery",
      "Documented risk posture with automated controls",
    ],
  },
  {
    title: "Program / Product Lead",
    outcomes: [
      "Persona-aware learning path and module backlog",
      "Stakeholder updates with progress and value narrative",
      "Integration plan for delivery teams and partners",
    ],
  },
  {
    title: "Risk & Compliance Partner",
    outcomes: [
      "Continuous assurance with evidence collection hooks",
      "Approval workflow with audit-ready artifacts",
      "Policy mapping to modules and deliverables",
    ],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <header className="border-b border-white/10 bg-slate-950/60 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <Link href="/" className="text-lg font-semibold tracking-tight">
            AI Architect Academy Platform
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium sm:flex">
            <Link href="#curriculum" className="hover:text-cyan-300">
              Curriculum
            </Link>
            <Link href="#assistant" className="hover:text-cyan-300">
              AI Assistant
            </Link>
            <Link href="#personas" className="hover:text-cyan-300">
              Personas
            </Link>
            <Link href="#platform" className="hover:text-cyan-300">
              Platform
            </Link>
            <Link href="#roadmap" className="hover:text-cyan-300">
              Roadmap
            </Link>
          </nav>
          <Link
            href="https://github.com/frankxai/saas-ai-architect-academy"
            className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-cyan-300"
          >
            Follow the build
          </Link>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 py-16">
        <section className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]" id="hero">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full border border-cyan-300/40 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
              Build real-world AI value faster
            </span>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              The operating system for AI Architects and Centers of Excellence.
            </h1>
            <p className="text-base text-slate-200 sm:text-lg">
              Progressive paths, battle-tested playbooks, and an AI partner that helps
              you design, ship, and operate production AI systems with confidence. Every
              module links back to the open-source AI Architect Academy for deeper
              research, architecture assets, and project kits.
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
                See the AI Assistant
              </Link>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl">
            <h2 className="text-lg font-semibold text-cyan-100">Strategic Outcomes</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-200">
              <li>
                <span className="font-medium text-slate-100">Accelerate delivery:</span> ship
                production features in weeks, not quarters.
              </li>
              <li>
                <span className="font-medium text-slate-100">Reduce operational risk:</span> embed
                governance, evals, and SLOs from day one.
              </li>
              <li>
                <span className="font-medium text-slate-100">Upskill teams continuously:</span>
                micro-modules map to real initiatives and job roles.
              </li>
            </ul>
            <div className="mt-6 rounded-2xl border border-cyan-300/30 bg-cyan-300/10 p-4 text-sm text-cyan-100">
              <p>
                Powered by the <span className="font-semibold">AI Architect Academy</span> knowledge
                base: design patterns, projects, governance playbooks, and prompt
                libraries—all cross-linked inside the platform experience.
              </p>
            </div>
          </div>
        </section>

        <section id="curriculum" className="space-y-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold">Micro-learning architecture</h2>
            <p className="max-w-3xl text-base text-slate-200">
              Hundreds of bite-sized modules compose journeys for architects, product
              leaders, engineers, and governance teams. Each module closes with a
              deliverable (canvas, runbook, code lab, or decision record) so learning
              immediately translates into execution.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {microTracks.map((track) => (
              <div
                key={track.title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
              >
                <h3 className="text-xl font-semibold text-cyan-100">{track.title}</h3>
                <p className="mt-3 text-sm text-slate-200">{track.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {track.modules.map((module) => (
                    <li key={module}>• {module}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-sm text-slate-200">
            <p>
              <span className="font-semibold text-slate-100">Module sources:</span> existing
              playbooks in the Academy repository, new case studies from partner
              companies, and crowd-sourced stories curated by maintainers. Content is
              versioned, tagged by maturity, and enriched with evaluation rubrics.
            </p>
          </div>
        </section>

        <section id="assistant" className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-cyan-300/40 bg-cyan-400/10 p-6">
            <h2 className="text-3xl font-semibold text-cyan-100">AI Architect Assistant</h2>
            <p className="mt-3 text-sm text-cyan-50">
              Retrieval-augmented copilot trained on the Academy corpus, architecture
              decisions, and implementation checklists.
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
              Launching with OpenRouter + Supabase Vector · Session orchestration via
              LangChain · Inline citations to primary sources
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
            <h3 className="text-lg font-semibold text-slate-100">
              Assistant playbook (preview)
            </h3>
            <ol className="mt-4 space-y-3 text-sm text-slate-200">
              <li>
                <span className="font-semibold text-slate-100">Intake:</span> capture company
                objectives, guardrails, and success metrics via conversational forms.
              </li>
              <li>
                <span className="font-semibold text-slate-100">Plan synthesis:</span> assistant
                assembles a suggested sequence of modules, labs, and governance tasks.
              </li>
              <li>
                <span className="font-semibold text-slate-100">Co-build sessions:</span> code and
                architecture snippets generated with full citations plus links to
                in-depth references in the Academy repository.
              </li>
              <li>
                <span className="font-semibold text-slate-100">Handover:</span> export evaluation
                dashboards, stakeholder comms, and recurring rituals into project tools.
              </li>
            </ol>
          </div>
        </section>

        <section id="personas" className="space-y-6">
          <h2 className="text-3xl font-semibold">Designed for the whole AI program</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {personas.map((persona) => (
              <div
                key={persona.title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-sm text-slate-200"
              >
                <h3 className="text-lg font-semibold text-cyan-100">{persona.title}</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-300">
                  {persona.outcomes.map((outcome) => (
                    <li key={outcome}>• {outcome}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="platform" className="space-y-6">
          <h2 className="text-3xl font-semibold">Platform architecture</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-sm text-slate-200">
              <h3 className="text-lg font-semibold text-slate-100">Experience layer</h3>
              <p className="mt-3">
                Next.js App Router with route groups for marketing, authenticated
                workspace, and partner experiences. Tailwind + shadcn UI primitives for
                consistent theming. Server Actions drive personalization, progress
                tracking, and assistant conversations.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-sm text-slate-200">
              <h3 className="text-lg font-semibold text-slate-100">Data + intelligence</h3>
              <p className="mt-3">
                Supabase for relational data, row-level access control, and edge
                functions. Vector store (pgvector or Qdrant) indexes Academy knowledge and
                user artifacts. Background workers handle evaluation scoring and module
                recommendations.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-sm text-slate-200">
              <h3 className="text-lg font-semibold text-slate-100">Content pipeline</h3>
              <p className="mt-3">
                Markdown + MDX modules sourced from the open repository, enriched with
                front matter for prerequisites, outcomes, and assets. Build step publishes
                to both the static marketing site and the in-app module registry.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-sm text-slate-200">
              <h3 className="text-lg font-semibold text-slate-100">Integrations</h3>
              <p className="mt-3">
                GitHub (module feedback), Linear/Azure Boards (execution), Slack/Teams
                (assistant handoffs), and observability hooks for Langfuse, Weights &
                Biases, and vendor dashboards.
              </p>
            </div>
          </div>
        </section>

        <section id="roadmap" className="space-y-6">
          <h2 className="text-3xl font-semibold">Build roadmap</h2>
          <div className="space-y-4">
            {roadmap.map((entry) => (
              <div
                key={entry.phase}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 text-sm text-slate-200"
              >
                <div className="text-slate-100">{entry.phase}</div>
                <p className="mt-2">{entry.focus}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center text-sm text-slate-200">
          <h2 className="text-2xl font-semibold text-slate-100">Co-build with the Academy</h2>
          <p className="mt-3 max-w-3xl mx-auto">
            We are building in public. Join the waitlist, contribute modules, or partner on alpha cohorts to shape how AI programs deliver governed value.
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

      <footer className="border-t border-white/10 bg-slate-950/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Built in public by the AI Architect Academy team. Contributions welcome via
            GitHub issues and discussions.
          </p>
          <div className="flex gap-4">
            <Link
              href="https://github.com/AI-Architect-Academy/ai-architect-academy"
              className="hover:text-cyan-200"
            >
              Open-source library
            </Link>
            <Link href="mailto:frank@aiarchitect.academy" className="hover:text-cyan-200">
              Contact the team
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}