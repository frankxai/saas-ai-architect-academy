"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  learningTracks,
  moduleCatalog,
  personaMicroPaths,
  assistantOps,
  sponsorViews,
  documentationLinks,
} from "@/data/curriculum";

const personaLabels: Record<string, string> = {
  "agent-engineer": "Agent Engineer",
  "solution-architect": "Solution Architect",
  "product-partner": "Product Partner",
  "delivery-lead": "Delivery Lead",
  "risk-partner": "Risk & Governance",
  "designer": "Design Partner",
  "developer": "Developer",
  "data-engineer": "Data Engineer",
  "executive": "Executive Sponsor",
  "finance": "Finance Partner",
  "communications": "Comms & Community",
};

const quickActions = [
  {
    key: "agent",
    title: "Plan the agent sprint",
    description: "Frame the opportunity, guardrails, and first deliverables for your coding agent.",
    ctaLabel: "Start with Discover",
  },
  {
    key: "prototype",
    title: "Launch a prototype",
    description: "Pull the rapid prototyping toolkit and schedule a pilot-ready demo in days.",
    ctaLabel: "Open prototype studio",
  },
  {
    key: "digest",
    title: "Send a progress digest",
    description: "Capture outcomes, evidence, and next actions for sponsors in minutes.",
    ctaLabel: "Compose sponsor update",
  },
] as const;

type QuickActionKey = (typeof quickActions)[number]["key"];

const journeyTimeline = [
  {
    stage: "Sprint 0 · Frame",
    focus: "Clarify agent outcomes, policy guardrails, and prototype hypotheses.",
    milestones: ["Agent opportunity canvas", "Prototype hypothesis brief", "Stakeholder clarity map"],
    moduleCodes: ["AE-101", "AE-102", "RP-201", "CC-401"],
  },
  {
    stage: "Sprint 1 · Build",
    focus: "Compose working agents and prototypes with instrumentation baked in.",
    milestones: ["Agent starter repo", "Prototype component kit", "Telemetry checklist"],
    moduleCodes: ["AE-103", "RP-203", "SA-302"],
  },
  {
    stage: "Sprint 2 · Proof",
    focus: "Run field tests, pilots, and enablement sessions that gather evidence.",
    milestones: ["Field test journal", "Pilot evidence pack", "Enablement loop"],
    moduleCodes: ["AE-104", "RP-204", "CC-403"],
  },
  {
    stage: "Sprint 3 · Launch",
    focus: "Translate results into solution architectures, operational plans, and sponsor briefs.",
    milestones: ["Architecture briefing", "Observability rollout", "Sponsor digest"],
    moduleCodes: ["SA-304", "OR-502", "CC-404"],
  },
  {
    stage: "Scale Lane",
    focus: "Mobilise governance, investment stories, and community activation for the wins.",
    milestones: ["Portfolio signal dashboard", "Investment narrative", "Community activation plan"],
    moduleCodes: ["LS-601", "LS-602", "LS-604"],
  },
];

const priorityModules = ["AE-101", "RP-203", "SA-304", "OR-502", "LS-602"];

export default function CurriculumPage() {
  const [activeTrackIndex, setActiveTrackIndex] = useState(0);
  const activeTrack = learningTracks[activeTrackIndex];

  const moduleSpotlights = useMemo(() => {
    const highlighted = priorityModules
      .map((code) => moduleCatalog.find((module) => module.code === code))
      .filter((module): module is (typeof moduleCatalog)[number] => Boolean(module));

    if (highlighted.length < 3) {
      const extras = moduleCatalog.filter((module) => !priorityModules.includes(module.code));
      highlighted.push(...extras.slice(0, 3 - highlighted.length));
    }

    return highlighted;
  }, []);

  const [highlightedSection, setHighlightedSection] = useState<string | null>(null);
  const highlightTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const focusSection = (id: string) => {
    if (typeof window === "undefined") return;
    const element = document.getElementById(id);
    if (!element) return;

    element.scrollIntoView({ behavior: "smooth", block: "start" });
    if (element instanceof HTMLElement) {
      element.focus({ preventScroll: true });
    }
    setHighlightedSection(id);
    if (highlightTimeout.current) {
      clearTimeout(highlightTimeout.current);
    }
    highlightTimeout.current = setTimeout(() => setHighlightedSection(null), 4000);
  };

  const handleQuickAction = (key: QuickActionKey) => {
    if (key === "agent") {
      focusSection("tracks");
      return;
    }
    if (key === "prototype") {
      focusSection("module-spotlights");
      return;
    }
    if (key === "digest") {
      focusSection("assistant");
      setTimeout(() => focusSection("micro-paths"), 600);
    }
  };

  useEffect(() => {
    return () => {
      if (highlightTimeout.current) {
        clearTimeout(highlightTimeout.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3 text-sm font-semibold text-cyan-100">
            <Image src="/logo.svg" alt="AI Architect Academy" width={40} height={40} className="h-10 w-10" />
          </Link>
          <div className="hidden items-center gap-3 text-sm font-semibold md:flex">
            <Link
              href="/curriculum/modules"
              className="rounded-full border border-white/20 px-4 py-2 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              Module explorer
            </Link>
            <Link
              href="https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/modules.md"
              className="rounded-full border border-white/20 px-4 py-2 transition hover:border-cyan-300 hover:text-cyan-200"
              target="_blank"
            >
              Download syllabus
            </Link>
            <Link
              href="https://github.com/frankxai/saas-ai-architect-academy"
              className="rounded-full bg-cyan-400 px-4 py-2 text-slate-900 transition hover:bg-cyan-300"
              target="_blank"
            >
              Follow the build
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-7xl flex-col gap-20 px-6 py-16">
        <section
          id="overview"
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-10"
        >
          <div className="pointer-events-none absolute inset-0 opacity-60">
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-cyan-500/10 to-transparent" />
            <div className="absolute -left-12 top-16 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="absolute -right-10 bottom-0 h-56 w-56 rounded-full bg-indigo-500/10 blur-3xl" />
          </div>
          <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-6 lg:max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200">
                micro learning
              </span>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                A sprint-based curriculum for building, shipping, and scaling coding agents.
              </h1>
              <p className="text-base text-slate-200 sm:text-lg">
                Start with dependable agent foundations, move into rapid prototyping, and graduate with production-ready
                architectures, enablement stories, and sponsor proof. Every module lands with deliverables, evidence,
                and assistant support so your team keeps momentum.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#tracks"
                  className="rounded-full bg-cyan-400 px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  Explore learning tracks
                </Link>
                <Link
                  href="#micro-paths"
                  className="rounded-full border border-white/20 px-6 py-3 text-center text-sm font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
                >
                  Launch a micro sprint
                </Link>
                <Link
                  href="/curriculum/modules"
                  className="rounded-full border border-white/20 px-6 py-3 text-center text-sm font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
                >
                  Browse modules
                </Link>
              </div>
              <div className="grid gap-3 pt-4 sm:grid-cols-2 lg:grid-cols-3">
                {quickActions.map((action) => (
                  <div
                    key={action.key}
                    className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-slate-950/50 p-4 text-xs text-slate-300 shadow-lg shadow-cyan-500/5"
                  >
                    <div className="space-y-2">
                      <h3 className="text-sm font-semibold text-cyan-100">{action.title}</h3>
                      <p>{action.description}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleQuickAction(action.key)}
                      className="mt-auto inline-flex items-center justify-center rounded-full border border-cyan-300/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-100 transition hover:border-cyan-300 hover:text-cyan-200"
                    >
                      {action.ctaLabel}
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-4 text-sm text-cyan-100">
              <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-5 shadow-lg shadow-cyan-500/5">
                <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">What you get</h3>
                <p className="mt-2 text-slate-200">
                  Every module ends with a tangible asset—canvas, repo, deck, or digest—plus assistant prompts and
                  evaluation signals so the work fuels production delivery.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-5 shadow-lg shadow-cyan-500/5">
                <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">How it flows</h3>
                <p className="mt-2 text-slate-200">
                  Tracks stack into micro sprints: Frame → Build → Proof → Launch → Scale. Learners move with teammates,
                  mentors, and companion agents through each layer.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="tracks"
          tabIndex={-1}
          className={`space-y-8 transition-shadow duration-500 ${
            highlightedSection === "tracks" ? "ring-2 ring-cyan-300 ring-offset-2 ring-offset-slate-900" : ""
          }`}
        >
          <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold">Learning tracks</h2>
              <p className="max-w-2xl text-sm text-slate-300">
                Six tracks guide you from agent foundations to leadership and scale. Each track includes three stages—Discover,
                Build, Launch—with clear deliverables you can put in front of stakeholders.
              </p>
            </div>
            <Link
              href="/curriculum/modules"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              View module explorer
            </Link>
          </div>
          <div className="grid gap-4 lg:grid-cols-[240px_1fr]">
            <div className="flex overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.03] p-3 lg:flex-col">
              {learningTracks.map((track, index) => {
                const isActive = index === activeTrackIndex;
                return (
                  <button
                    key={track.id}
                    type="button"
                    onClick={() => setActiveTrackIndex(index)}
                    className={`flex min-w-[200px] flex-1 items-center justify-between rounded-xl px-4 py-3 text-left text-sm transition lg:min-w-0 ${
                      isActive ? "bg-cyan-400/20 text-cyan-100" : "text-slate-300 hover:bg-white/10"
                    }`}
                  >
                    <span className="font-semibold">{track.title}</span>
                    <span className="text-xs">{track.duration}</span>
                  </button>
                );
              })}
            </div>
            <div className="space-y-6 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">{activeTrack.id}</span>
                <h3 className="text-2xl font-semibold text-slate-100">{activeTrack.title}</h3>
                <p className="text-sm text-slate-300">{activeTrack.subtitle}</p>
                <div className="flex flex-wrap gap-3 text-xs text-slate-400">
                  <span className="rounded-full border border-white/15 px-3 py-1">Duration: {activeTrack.duration}</span>
                  <span className="rounded-full border border-white/15 px-3 py-1">
                    Evidence: {activeTrack.signatureEvidence}
                  </span>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {activeTrack.stages.map((stage) => (
                  <div key={stage.name} className="rounded-xl border border-white/10 bg-slate-950/40 p-4 text-sm">
                    <h4 className="text-sm font-semibold text-cyan-100">{stage.name}</h4>
                    <p className="mt-2 text-xs text-slate-300">{stage.summary}</p>
                    <ul className="mt-3 space-y-2 text-xs text-slate-400">
                      {stage.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="journey" className="space-y-8">
          <div className="flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold">Sprint journey</h2>
              <p className="max-w-3xl text-sm text-slate-300">
                Follow the recommended sequence from framing to scale. Each phase bundles modules that create tangible
                outputs—repos, decks, digests—ready for teams and sponsors.
              </p>
            </div>
            <Link
              href="/curriculum/modules"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              Browse all modules
            </Link>
          </div>
          <div className="space-y-6">
            {journeyTimeline.map((stage) => {
              const stageModules = stage.moduleCodes
                .map((code) => moduleCatalog.find((module) => module.code === code))
                .filter((module): module is (typeof moduleCatalog)[number] => Boolean(module));
              return (
                <div key={stage.stage} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                  <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">{stage.stage}</div>
                      <p className="text-sm text-slate-300">{stage.focus}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 text-[11px] text-slate-400">
                      {stage.milestones.map((item) => (
                        <span key={item} className="rounded-full border border-white/15 px-3 py-1">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {stageModules.map((module) => (
                      <div key={module.code} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm text-slate-200">
                        <div className="flex flex-wrap items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-cyan-200">
                          <span className="rounded-full border border-cyan-300/40 px-3 py-1">{module.code}</span>
                          <span className="rounded-full border border-cyan-300/40 px-3 py-1">{module.arc}</span>
                          <span className="rounded-full border border-cyan-300/40 px-3 py-1">{module.modality}</span>
                        </div>
                        <div className="mt-3 space-y-1">
                          <h4 className="text-base font-semibold text-slate-100">{module.title}</h4>
                          <p className="text-xs text-slate-300">{module.outcomes.slice(0, 2).join(" · ")}</p>
                        </div>
                        <div className="mt-3 flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.3em] text-slate-400">
                          {module.personaFit.map((persona) => (
                            <span key={persona} className="rounded-full border border-white/15 px-2 py-1">
                              {personaLabels[persona] ?? persona}
                            </span>
                          ))}
                        </div>
                        <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-slate-400">
                          {module.evaluationSignals.slice(0, 2).map((signal) => (
                            <span key={signal} className="rounded-full border border-white/15 px-3 py-1">
                              {signal}
                            </span>
                          ))}
                        </div>
                        <Link
                          href={}
                          className="mt-4 inline-flex items-center justify-center rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
                        >
                          View detail
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section
          id="micro-paths"
          tabIndex={-1}
          className={`space-y-8 transition-shadow duration-500 ${
            highlightedSection === "micro-paths" ? "ring-2 ring-cyan-300 ring-offset-2 ring-offset-slate-900" : ""
          }`}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold">Persona micro sprints</h2>
            <p className="max-w-3xl text-sm text-slate-300">
              Five-day plans designed around agents, architects, product partners, delivery leads, and executive sponsors.
              Each day combines two modules and a clear focus so teams can move quickly without losing rigor.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {personaMicroPaths.map((path) => (
              <div key={path.persona} className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
                      {path.phase}
                    </span>
                    <span className="text-sm font-semibold text-slate-100">{path.persona}</span>
                  </div>
                  <p className="text-sm text-slate-300">{path.intent}</p>
                </div>
                <ul className="grid gap-3 text-xs text-slate-300">
                  {path.days.map((day) => (
                    <li key={day.label} className="rounded-xl border border-white/10 bg-slate-950/40 p-3">
                      <div className="flex items-center justify-between text-[11px] font-semibold text-cyan-200">
                        <span>{day.label}</span>
                        <span>{day.focus}</span>
                      </div>
                      <div className="mt-2 flex flex-wrap gap-2 text-[11px] text-slate-400">
                        {day.modules.map((module) => (
                          <span key={module} className="rounded-full border border-white/15 px-2 py-1">
                            {module}
                          </span>
                        ))}
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 text-xs text-slate-400">
                  {path.highlights.map((item) => (
                    <span key={item} className="rounded-full border border-white/15 px-3 py-1">
                      {item}
                    </span>
                  ))}
                </div>
                <Link
                  href={path.ctaHref}
                  className="inline-flex items-center justify-center rounded-full border border-cyan-300/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-100 transition hover:border-cyan-300 hover:text-cyan-200"
                >
                  {path.ctaLabel}
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section id="module-spotlights" className="space-y-8">
          <div className="flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold">Featured modules</h2>
              <p className="max-w-3xl text-sm text-slate-300">
                Start here if you want fast wins: map the agent opportunity, stand up a reusable prototype loop, and brief
                sponsors on the architecture path forward.
              </p>
            </div>
            <Link
              href="/curriculum/modules"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              Open module explorer
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {moduleSpotlights.map((module) => (
              <div key={module.code} className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-sm text-slate-200">
                <div className="flex flex-wrap items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-cyan-200">
                  <span className="rounded-full border border-cyan-300/40 px-3 py-1">{module.code}</span>
                  <span className="rounded-full border border-cyan-300/40 px-3 py-1">{module.arc}</span>
                  <span className="rounded-full border border-cyan-300/40 px-3 py-1">{module.modality}</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-slate-100">{module.title}</h3>
                  <p className="text-xs text-slate-300">{module.outcomes.slice(0, 2).join(" · ")}</p>
                </div>
                <ul className="space-y-2 text-xs text-slate-300">
                  {module.deliverables.map((deliverable) => (
                    <li key={deliverable} className="flex gap-2">
                      <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-cyan-300" />
                      <span>{deliverable}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.3em] text-slate-400">
                  {module.personaFit.map((persona) => (
                    <span key={persona} className="rounded-full border border-white/15 px-2 py-1">
                      {personaLabels[persona] ?? persona}
                    </span>
                  ))}
                </div>
                <Link
                  href={}
                  className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-900 transition hover:bg-cyan-300"
                >
                  View module detail
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section id="assistant" className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold">Assistant constellation</h2>
            <p className="max-w-3xl text-sm text-slate-300">
              Scout, Coach, Critic, Archivist, Companion, and Navigator work in the background—refreshing research,
              pairing during builds, running evaluations, and composing sponsor-ready digests.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {assistantOps.map((agent) => (
              <div key={agent.name} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-sm text-slate-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-cyan-100">{agent.name}</h3>
                  <span className="text-xs uppercase tracking-[0.3em] text-cyan-200">Assistant</span>
                </div>
                <p className="mt-3 text-xs text-slate-300">{agent.focus}</p>
                <ul className="mt-4 space-y-2 text-xs text-slate-300">
                  {agent.slos.map((slo) => (
                    <li key={slo} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                      <span>{slo}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="sponsors" className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold">Sponsor dashboards</h2>
            <p className="max-w-3xl text-sm text-slate-300">
              Keep decision makers close with outcome, build, reliability, and portfolio views. Each dashboard is fed by
              module evidence, assistant telemetry, and progress digests.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {sponsorViews.map((view) => (
              <div key={view.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-sm text-slate-200">
                <h3 className="text-lg font-semibold text-cyan-100">{view.title}</h3>
                <p className="mt-3 text-xs text-slate-300">{view.description}</p>
                <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-slate-400">
                  {view.metrics.map((metric) => (
                    <span key={metric} className="rounded-full border border-white/15 px-3 py-1">
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="docs" className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold">Source of truth docs</h2>
            <p className="max-w-3xl text-sm text-slate-300">
              Keep the playbooks, checklists, and templates that power each module at your fingertips.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {documentationLinks.map((doc) => (
              <Link
                key={doc.label}
                href={doc.href}
                target="_blank"
                className="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
              >
                {doc.label}
              </Link>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center text-sm text-slate-200">
          <h2 className="text-2xl font-semibold text-slate-100">Ready to drop into the next sprint?</h2>
          <p className="mx-auto mt-3 max-w-3xl">
            Pick a track, launch a micro sprint, and let the assistants keep teams moving. Each module is built to produce
            value, evidence, and stories your sponsors can act on.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/curriculum/modules"
              className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-cyan-300"
            >
              Browse modules
            </Link>
            <Link
              href="#micro-paths"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              Launch micro sprint
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
