"use client";

import { useMemo } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ProgressIndicator } from "@/components/ui/progress-indicator";
import { SectionHeader, SectionShell } from "@/components/ui/section";
import { formatCompletion, useLearnerProgress } from "@/lib/learner-progress";

const focusAreas = [
  {
    id: "agents" as const,
    title: "Agent sprint",
    description: "Design dependable coding agents with guardrails and telemetry before launch.",
    modules: ["AE-101", "AE-102", "AE-103", "AE-104"],
    checkpoints: [
      { id: "agents-brief", label: "PRD and guardrail brief submitted", helper: "Use AI CoE template plus NIST mapping." },
      { id: "agents-playbook", label: "Agent playbooks committed", helper: "Builder, Critic, Coach, Archivist, Companion YAML files." },
      { id: "agents-eval", label: "Evaluation harness configured", helper: "Run scripts/eval-harness with realtime, perception, and preparedness suites." },
      { id: "agents-journal", label: "Field test journal updated", helper: "Capture learnings, mitigations, telemetry references." },
    ],
    successSignals: [
      "Guardrail detection rate >= 90%",
      "Telemetry traces exported to Supabase workspace",
      "Sponsor summary delivered with evidence links",
    ],
  },
  {
    id: "prototyping" as const,
    title: "Prototype velocity",
    description: "Move from hypothesis to pilot-ready demo with evidence packs and decision notes.",
    modules: ["RP-201", "RP-203", "RP-204"],
    checkpoints: [
      { id: "proto-hypothesis", label: "Hypothesis storyboard approved", helper: "Personas, metric stack, risk assumptions documented." },
      { id: "proto-demo", label: "Prototype demo recorded", helper: "Link to walkthrough with instrumentation overlays." },
      { id: "proto-feedback", label: "Pilot feedback logged", helper: "Capture qualitative and quantitative insight in workspace." },
      { id: "proto-memo", label: "Iteration memo published", helper: "Decision log exported to sponsors and creators." },
    ],
    successSignals: [
      "Prototype to pilot lead time <= 10 days",
      "Stakeholder confidence delta recorded",
      "Assistant prompt pack refreshed for next experiment",
    ],
  },
  {
    id: "operations" as const,
    title: "Operations and reliability",
    description: "Instrument observability, compliance controls, and incident rehearsals for production.",
    modules: ["OR-502", "SA-304", "EV-401"],
    checkpoints: [
      { id: "ops-slo", label: "SLO and guardrail dashboard live", helper: "Metrics synced to Supabase and Langfuse traces." },
      { id: "ops-scorecard", label: "Compliance scorecard drafted", helper: "Map Microsoft Responsible AI standard and OpenAI Preparedness tiers." },
      { id: "ops-handoff", label: "Runbook and escalation ready", helper: "Include contact tree, playbooks, fallback automations." },
    ],
    successSignals: [
      "Incident rehearsal complete with action items",
      "Telemetry anomalies piped into assistant alerts",
      "Audit export validated against Evidence Locker schema",
    ],
  },
  {
    id: "story" as const,
    title: "Story and scale",
    description: "Translate delivery insight into executive narratives, creator content, and community rituals.",
    modules: ["CC-401", "CC-404", "LS-602"],
    checkpoints: [
      { id: "story-digest", label: "Sponsor digest drafted", helper: "Use sponsor template with ROI and risk status." },
      { id: "story-assets", label: "Creator content kit staged", helper: "Newsletter, social carousel, podcast brief prepared." },
      { id: "story-community", label: "Community touch published", helper: "Townhall update, partner mention, or meetup note." },
    ],
    successSignals: [
      "Stakeholder sentiment and reach metrics logged",
      "Assistant knowledge graph refreshed with latest wins",
      "Creator metrics pushed to Supabase analytics schema",
    ],
  },
];

const quickActions = [
  {
    label: "Run evaluation harness",
    description: "Launch scripts/eval-harness for realtime, perception, and preparedness suites to validate the latest build.",
    href: "https://github.com/frankxai/saas-ai-architect-academy/tree/main/scripts/eval-harness",
  },
  {
    label: "Prep sponsor update",
    description: "Assemble progress digest, telemetry screenshots, and decision log for executives.",
    href: "https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/labs/sprint1-agent-field-test.md",
  },
  {
    label: "Sync assistant prompts",
    description: "Refresh Scout, Coach, Critic, Archivist, and Companion prompt packs with the latest artefacts.",
    href: "/curriculum#assistant",
  },
];

const assistantPrompts = [
  {
    title: "Scout briefing",
    content: "Summarise changes to modules AE-101, RP-203, and OR-502. Include risks flagged by OpenAI, Anthropic, or DeepMind this week.",
  },
  {
    title: "Coach session",
    content: "Review the agent playbook YAML and propose improvements to tool selection, success metrics, and mitigation prompts.",
  },
  {
    title: "Critic eval run",
    content: "Execute the latest evaluation config with realtime freshness and perception checks. Highlight regressions versus baseline metrics.",
  },
  {
    title: "Archivist export",
    content: "Generate Evidence Locker summary for the current focus. Include PRD link, evaluation run IDs, telemetry references, and CTA for stakeholders.",
  },
];

const telemetryStreams = [
  {
    title: "Supabase learner hub",
    description: "Stores module progress, evaluation runs, sponsor digests, and creator assets with row level security.",
  },
  {
    title: "Langfuse and OpenTelemetry",
    description: "Captures assistant traces, guardrail verdicts, and latency SLAs for realtime dashboards.",
  },
  {
    title: "Evidence Locker",
    description: "Versioned artefact repository linked to curriculum modules, playbooks, and compliance reports.",
  },
];

const roadmapItems = [
  {
    title: "Supabase onboarding",
    detail: "Provision Supabase project with auth, row level security, and tables for learners, progress checkpoints, evaluation runs, and sponsor briefs.",
  },
  {
    title: "Workspace telemetry widgets",
    detail: "Embed Langfuse dashboards and Supabase chart components directly in the workspace once APIs are wired.",
  },
  {
    title: "Assistant live sync",
    detail: "Enable real-time updates so Scout and Archivist reference Supabase data without manual refresh.",
  },
];

const evidenceAreas = [
  {
    label: "PRD and guardrails",
    helper: "docs/evidence/prd/",
    description: "Mission brief, guardrail assumptions, and acceptance criteria for the active sprint.",
  },
  {
    label: "Evaluation runs",
    helper: "scripts/eval-harness/runs/",
    description: "Toxicity, hallucination, realtime freshness, perception, and preparedness metrics exported as JSON and markdown.",
  },
  {
    label: "Sponsor digest",
    helper: "docs/evidence/digests/",
    description: "Narratives, outcomes, ROI signals, and next steps for executives and patrons.",
  },
];

export default function WorkspacePage() {
  const { state, setFocusArea, toggleCheckpoint, completionRatio } = useLearnerProgress();
  const activeArea = useMemo(() => {
    return focusAreas.find((area) => area.id === state.focusArea) ?? focusAreas[0];
  }, [state.focusArea]);

  const completedCount = useMemo(() => {
    return activeArea.checkpoints.filter((checkpoint) => Boolean(state.checkpoints[checkpoint.id])).length;
  }, [activeArea, state.checkpoints]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 select-none opacity-60">
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -right-16 top-1/2 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>
      <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-col">
            <span className="text-[11px] uppercase tracking-[0.35em] text-cyan-200">Workspace</span>
            <h1 className="text-lg font-semibold">Learner cockpit</h1>
          </div>
          <div className="flex gap-3 text-xs uppercase tracking-[0.3em]">
            <Link href="/" className="rounded-full px-3 py-2 text-slate-300 transition hover:text-cyan-200">
              Home
            </Link>
            <Link href="/curriculum" className="rounded-full px-3 py-2 text-slate-300 transition hover:text-cyan-200">
              Curriculum
            </Link>
            <Link href="/curriculum/modules" className="rounded-full px-3 py-2 text-slate-300 transition hover:text-cyan-200">
              Modules
            </Link>
          </div>
        </div>
      </header>

      <main className="relative z-10 mx-auto flex max-w-6xl flex-col gap-12 px-4 pb-32 pt-12 sm:px-6 lg:px-8">
        <SectionShell className="bg-gradient-to-br from-slate-900/80 via-slate-950/80 to-slate-900/80">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-6">
              <Badge tone="accent">Live learner progress</Badge>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{activeArea.title}</h2>
              <p className="max-w-2xl text-sm text-slate-300 sm:text-base">{activeArea.description}</p>
              <div className="flex flex-wrap gap-3">
                {focusAreas.map((area) => {
                  const isActive = area.id === activeArea.id;
                  const baseClasses = "rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] transition";
                  const stateClasses = isActive
                    ? " bg-cyan-400 text-slate-900"
                    : " border border-white/15 text-slate-300 hover:border-cyan-300 hover:text-cyan-200";
                  return (
                    <button
                      key={area.id}
                      type="button"
                      onClick={() => setFocusArea(area.id)}
                      className={baseClasses + stateClasses}
                    >
                      {area.title}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <ProgressIndicator value={completionRatio} label="Overall" />
              <p className="text-xs text-slate-400">
                {completedCount} of {activeArea.checkpoints.length} checkpoints complete • {formatCompletion(completionRatio)}
              </p>
            </div>
          </div>
        </SectionShell>

        <SectionShell className="bg-white/[0.03]">
          <SectionHeader
            eyebrow="Checkpoints"
            title="Complete the focus area plan"
            subtitle="Track deliverables, evaluations, and storytelling artefacts in one place." />
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <Card tone="default" title="Action checklist">
              <ul className="space-y-3 text-sm text-slate-300">
                {activeArea.checkpoints.map((checkpoint) => {
                  const baseButton = "mt-1 h-5 w-5 rounded border border-white/20 transition";
                  const buttonState = state.checkpoints[checkpoint.id] ? " bg-cyan-400 text-slate-900" : " bg-transparent";
                  return (
                    <li key={checkpoint.id} className="flex items-start gap-3">
                      <button
                        type="button"
                        onClick={() => toggleCheckpoint(checkpoint.id)}
                        className={baseButton + buttonState}
                        aria-pressed={state.checkpoints[checkpoint.id] ? "true" : "false"}
                      >
                        {state.checkpoints[checkpoint.id] ? "✓" : ""}
                      </button>
                      <div>
                        <p className="font-semibold text-slate-100">{checkpoint.label}</p>
                        <p className="text-xs text-slate-400">{checkpoint.helper}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </Card>
            <Card tone="outline" title="Success signals">
              <ul className="space-y-2 text-sm text-slate-300">
                {activeArea.successSignals.map((signal) => (
                  <li key={signal} className="flex gap-2">
                    <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-cyan-300" />
                    <span>{signal}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4 text-xs text-slate-400">
                Modules: {activeArea.modules.join(", ")}
              </div>
            </Card>
          </div>
        </SectionShell>

        <SectionShell>
          <SectionHeader
            eyebrow="Quick actions"
            title="Keep momentum across delivery and storytelling"
            subtitle="Launch evaluations, prep sponsor updates, or refresh assistant prompts without leaving the workspace." />
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {quickActions.map((action) => (
              <Card key={action.label} tone="outline" title={action.label}>
                <p className="text-sm text-slate-300">{action.description}</p>
                <div className="pt-4">
                  <Link
                    href={action.href}
                    target={action.href.startsWith("http") ? "_blank" : undefined}
                    className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200"
                  >
                    Open
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </SectionShell>

        <SectionShell className="bg-gradient-to-br from-slate-900/80 via-slate-950/80 to-slate-900/80">
          <SectionHeader
            eyebrow="Assistant prompts"
            title="Equip Scout, Coach, Critic, Archivist, and Companion"
            subtitle="Copy-ready instructions keep agents aligned with the learner workspace and Supabase data." />
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {assistantPrompts.map((prompt) => (
              <Card key={prompt.title} tone="default" title={prompt.title}>
                <p className="text-sm text-slate-300">{prompt.content}</p>
              </Card>
            ))}
          </div>
        </SectionShell>

        <SectionShell className="bg-white/[0.03]">
          <SectionHeader
            eyebrow="Evidence locker"
            title="Where artefacts live"
            subtitle="Link deliverables so assistants, mentors, and sponsors can verify progress." />
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {evidenceAreas.map((area) => (
              <Card key={area.label} tone="outline" title={area.label}>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">{area.helper}</p>
                <p className="mt-3 text-sm text-slate-300">{area.description}</p>
              </Card>
            ))}
          </div>
        </SectionShell>

        <SectionShell>
          <SectionHeader
            eyebrow="Telemetry"
            title="Data sources powering the workspace"
            subtitle="Supabase keeps state, Langfuse captures traces, and Evidence Locker stores artefacts." />
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {telemetryStreams.map((stream) => (
              <Card key={stream.title} tone="default" title={stream.title}>
                <p className="text-sm text-slate-300">{stream.description}</p>
              </Card>
            ))}
          </div>
        </SectionShell>

        <SectionShell className="bg-gradient-to-br from-cyan-500/15 via-slate-950/80 to-indigo-500/20">
          <SectionHeader
            eyebrow="Workspace roadmap"
            title="What we are wiring next"
            subtitle="Help us stand up Supabase auth, telemetry widgets, and assistant sync." />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {roadmapItems.map((item) => (
              <Card key={item.title} tone="outline" title={item.title}>
                <p className="text-sm text-slate-300">{item.detail}</p>
              </Card>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3 text-xs">
            <Link
              href="/#waitlist"
              className="rounded-full bg-white px-4 py-2 font-semibold uppercase tracking-[0.3em] text-slate-900 transition hover:bg-slate-200"
            >
              Join the build circle
            </Link>
            <Link
              href="https://github.com/frankxai/saas-ai-architect-academy"
              className="rounded-full border border-white/20 px-4 py-2 font-semibold uppercase tracking-[0.3em] text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
              target="_blank"
            >
              Follow the public repo
            </Link>
          </div>
        </SectionShell>
      </main>
    </div>
  );
}
