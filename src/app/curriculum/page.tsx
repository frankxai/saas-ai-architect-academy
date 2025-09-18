"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  assistantOps,
  credentialLadder,
  documentationLinks,
  industrySpotlights,
  learningGalaxies,
  personaMicroPaths,
  sponsorViews,
} from "@/data/curriculum";

export default function CurriculumPage() {
  const [activeGalaxyIndex, setActiveGalaxyIndex] = useState(0);
  const activeGalaxy = learningGalaxies[activeGalaxyIndex];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3 text-sm font-semibold text-cyan-100">
            <Image src="/logo.svg" alt="AI Architect Academy" width={32} height={32} className="h-8 w-8" />
            <span className="text-lg tracking-tight">AI Architect Academy</span>
          </Link>
          <div className="hidden items-center gap-3 text-sm font-semibold md:flex">
            <Link
              href="https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/modules.md"
              className="rounded-full border border-white/20 px-4 py-2 transition hover:border-cyan-300 hover:text-cyan-200"
              target="_blank"
            >
              Download module atlas
            </Link>
            <Link
              href="/#services"
              className="rounded-full border border-white/20 px-4 py-2 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              View services
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
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200">
                curriculum
                <span className="h-1 w-1 rounded-full bg-cyan-300" />
                operations
                <span className="h-1 w-1 rounded-full bg-cyan-300" />
                governance
              </span>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Launch, run, and scale the AI Architect Academy learning system.
              </h1>
              <p className="text-base text-slate-200 sm:text-lg">
                Navigate galaxies, activate persona micro paths, monitor evidence, and brief sponsors from a single operating layer. Every interaction is instrumented so humans and companion agents can execute with governed confidence.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#galaxies"
                  className="rounded-full bg-cyan-400 px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  Explore learning galaxies
                </Link>
                <Link
                  href="#micro-paths"
                  className="rounded-full border border-white/20 px-6 py-3 text-center text-sm font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
                >
                  Launch a micro path
                </Link>
                <Link
                  href="https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/credentials.md"
                  className="rounded-full border border-white/20 px-6 py-3 text-center text-sm font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
                  target="_blank"
                >
                  Credential framework
                </Link>
              </div>
            </div>
            <div className="grid gap-4 text-sm text-cyan-100">
              <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-5 shadow-lg shadow-cyan-500/5">
                <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">Telemetry loop</h3>
                <p className="mt-2 text-slate-200">
                  Assistant agents stream research, evaluation, and wellness signals into adaptive micro paths and sponsor dashboards.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-5 shadow-lg shadow-cyan-500/5">
                <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">Evidence stack</h3>
                <p className="mt-2 text-slate-200">
                  Every deliverable lands in the Evidence Locker with hashes, reviewers, and jurisdiction tags ready for verifiable credentials.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="galaxies" className="space-y-8">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold">Learning galaxies</h2>
              <p className="max-w-2xl text-sm text-slate-300">
                Twelve galaxies span orientation through frontier innovation. Select a galaxy to inspect arcs, deliverables, and signature evidence before assigning squads or agent automations.
              </p>
            </div>
            <Link
              href="https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/modules.md"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
              target="_blank"
            >
              View full module atlas
            </Link>
          </div>
          <div className="grid gap-4 lg:grid-cols-[240px_1fr]">
            <div className="flex overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.03] p-3 lg:flex-col">
              {learningGalaxies.map((galaxy, index) => {
                const isActive = index === activeGalaxyIndex;
                return (
                  <button
                    key={galaxy.code}
                    type="button"
                    onClick={() => setActiveGalaxyIndex(index)}
                    className={`flex min-w-[180px] flex-1 items-center justify-between rounded-xl px-4 py-3 text-left text-sm transition lg:min-w-0 ${
                      isActive
                        ? "bg-cyan-400/20 text-cyan-100"
                        : "text-slate-300 hover:bg-white/10"
                    }`}
                  >
                    <span className="font-semibold">{galaxy.code}</span>
                    <span className="text-xs">{galaxy.title}</span>
                  </button>
                );
              })}
            </div>
            <div className="space-y-6 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
                  {activeGalaxy.code}
                </span>
                <h3 className="text-2xl font-semibold text-slate-100">{activeGalaxy.title}</h3>
                <p className="text-sm text-slate-300">{activeGalaxy.focus}</p>
                <div className="flex flex-wrap gap-3 text-xs text-slate-400">
                  <span className="rounded-full border border-white/15 px-3 py-1">Duration: {activeGalaxy.duration}</span>
                  <span className="rounded-full border border-white/15 px-3 py-1">
                    Evidence: {activeGalaxy.signatureEvidence}
                  </span>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {activeGalaxy.arcs.map((arc) => (
                  <div key={arc.name} className="rounded-xl border border-white/10 bg-slate-950/40 p-4 text-sm">
                    <h4 className="text-sm font-semibold text-cyan-100">{arc.name}</h4>
                    <p className="mt-2 text-xs text-slate-300">{arc.summary}</p>
                    <ul className="mt-3 space-y-2 text-xs text-slate-400">
                      {arc.deliverables.map((item) => (
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

        <section id="micro-paths" className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold">Persona launchpads</h2>
            <p className="max-w-3xl text-sm text-slate-300">
              Micro paths remix modules into five day sprints tied to telemetry gaps and sponsor priorities. Pair them with the Companion agent to automate nudges, reflections, and sponsor updates.
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

        <section id="credentials" className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold">Credential ladder</h2>
            <p className="max-w-3xl text-sm text-slate-300">
              Verifiable credentials combine evidence locker manifests, evaluation telemetry, and sponsor attestations. Learners stack specialization seals alongside base credentials.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {credentialLadder.map((tier) => (
              <div key={tier.title} className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-sm text-slate-200">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-cyan-100">{tier.title}</h3>
                  <p className="text-slate-300">{tier.description}</p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">Requirements</h4>
                  <ul className="mt-2 space-y-2 text-xs text-slate-300">
                    {tier.requirements.map((req) => (
                      <li key={req} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">Evidence</h4>
                  <p className="mt-2 text-xs text-slate-300">{tier.evidence}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="industries" className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold">Industry playbooks</h2>
            <p className="max-w-3xl text-sm text-slate-300">
              Tailor the academy to regulated and high velocity sectors. Each playbook maps outcomes, telemetry, and compliance signals to the module atlas and micro paths.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {industrySpotlights.map((industry) => (
              <div key={industry.name} className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-sm text-slate-200">
                <h3 className="text-lg font-semibold text-cyan-100">{industry.name}</h3>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">Outcomes</h4>
                  <ul className="mt-2 space-y-2 text-xs text-slate-300">
                    {industry.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 text-[11px] text-slate-400">
                  {industry.signals.map((signal) => (
                    <span key={signal} className="rounded-full border border-white/15 px-2 py-1">
                      {signal}
                    </span>
                  ))}
                </div>
                <Link
                  href={industry.href}
                  target="_blank"
                  className="mt-auto inline-flex items-center justify-center rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
                >
                  Open playbook
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section id="assistant" className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold">Assistant constellation</h2>
            <p className="max-w-3xl text-sm text-slate-300">
              Scout, Coach, Critic, Archivist, and Companion coordinate curriculum freshness, evaluation, and learner support. Use these service levels to instrument observability and governance.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {assistantOps.map((agent) => (
              <div key={agent.name} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-sm text-slate-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-cyan-100">{agent.name}</h3>
                  <span className="text-xs uppercase tracking-[0.3em] text-cyan-200">Agent</span>
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
            <h2 className="text-3xl font-semibold">Sponsor cockpit views</h2>
            <p className="max-w-3xl text-sm text-slate-300">
              Sponsors access live dashboards to inspect outcomes, evidence, risk, and engagement. Each view is backed by the Evidence Locker and evaluation registry API.
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
            <h2 className="text-3xl font-semibold">Primary documentation</h2>
            <p className="max-w-3xl text-sm text-slate-300">
              Keep source of truth docs close. They power the assistant, knowledge graph, and credential workflows.
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
          <h2 className="text-2xl font-semibold text-slate-100">Ready to activate the academy?</h2>
          <p className="mx-auto mt-3 max-w-3xl">
            Deploy the curriculum stack for your cohort or enterprise program. We offer orientation labs, sponsor onboarding, assistant configuration, and governance reviews to accelerate a safe launch.
          </p>
          <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="mailto:frank@aiarchitect.academy"
              className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-cyan-300"
            >
              Book an activation session
            </Link>
            <Link
              href="https://github.com/frankxai/saas-ai-architect-academy/discussions"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
              target="_blank"
            >
              Join the builder community
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
