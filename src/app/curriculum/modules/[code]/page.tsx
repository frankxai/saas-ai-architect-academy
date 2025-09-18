import Link from "next/link";
import { notFound } from "next/navigation";
import {
  assistantOps,
  credentialLadder,
  documentationLinks,
  learningTracks,
  moduleCatalog,
  ModuleDefinition,
  personaMicroPaths,
} from "@/data/curriculum";

function getModule(code: string): ModuleDefinition | undefined {
  return moduleCatalog.find((module) => module.code.toLowerCase() === code.toLowerCase());
}

export function generateStaticParams() {
  return moduleCatalog.map((module) => ({ code: module.code.toLowerCase() }));
}

export function generateMetadata({ params }: { params: { code: string } }) {
  const selectedModule = getModule(params.code);
  if (!selectedModule) {
    return { title: "Module not found" };
  }
  return {
    title: `${selectedModule.code} - ${selectedModule.title} | AI Architect Academy`,
    description: selectedModule.outcomes.join(" - "),
  };
}

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

export default function ModuleDetail({ params }: { params: { code: string } }) {
  const selectedModule = getModule(params.code);
  if (!selectedModule) {
    notFound();
  }

  const trackMeta = learningTracks.find((track) => track.id === selectedModule!.galaxy);
  const relatedMicroPaths = personaMicroPaths.filter((path) =>
    path.days.some((day) => day.modules.includes(selectedModule!.code))
  );
  const relevantCredentials = credentialLadder.filter((tier) =>
    tier.requirements.some((requirement) =>
      requirement.toLowerCase().includes(selectedModule!.code.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-100">
      <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-10">
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em] text-cyan-200">
            <span className="rounded-full border border-cyan-300/40 px-3 py-1">{selectedModule!.code}</span>
            <span className="rounded-full border border-cyan-300/40 px-3 py-1">{selectedModule!.modality}</span>
            <span className="rounded-full border border-cyan-300/40 px-3 py-1">{selectedModule!.mastery}</span>
            <span className="rounded-full border border-cyan-300/40 px-3 py-1">{selectedModule!.arc}</span>
            <span className="rounded-full border border-cyan-300/40 px-3 py-1">
              {selectedModule!.durationHours} hrs
            </span>
            <span className="rounded-full border border-cyan-300/40 px-3 py-1">
              Refreshed {selectedModule!.freshness}
            </span>
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight">{selectedModule!.title}</h1>
            {trackMeta && (
              <p className="text-sm text-cyan-200">
                {trackMeta.id} · {trackMeta.title}
              </p>
            )}
            <p className="max-w-3xl text-base text-slate-200">
              {selectedModule!.outcomes.join(" - ")}
            </p>
            {trackMeta && (
              <p className="text-sm text-slate-400">{trackMeta.subtitle}</p>
            )}
          </div>
          <div className="flex flex-wrap gap-3 text-sm font-semibold">
            <Link
              href="/curriculum/modules"
              className="rounded-full border border-white/20 px-4 py-2 text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              Back to explorer
            </Link>
            <Link
              href="/curriculum#micro-paths"
              className="rounded-full bg-cyan-400 px-4 py-2 text-slate-900 transition hover:bg-cyan-300"
            >
              Add to micro path
            </Link>
            <Link
              href="mailto:frank@aiarchitect.academy"
              className="rounded-full border border-white/20 px-4 py-2 text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              Schedule mentor review
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-10">
        <section className="grid gap-6 md:grid-cols-2">
          <DetailCard title="Key outcomes" items={selectedModule!.outcomes} />
          <DetailCard title="Deliverables" items={selectedModule!.deliverables} />
          <DetailCard
            title="Prerequisites"
            items={selectedModule!.prerequisites.length ? selectedModule!.prerequisites : ["None"]}
          />
          <DetailCard title="Evaluation signals" items={selectedModule!.evaluationSignals} />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Persona fit</h2>
          <div className="flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.3em] text-slate-400">
            {selectedModule!.personaFit.map((persona) => (
              <span key={persona} className="rounded-full border border-white/15 px-3 py-1">
                {personaLabels[persona] ?? persona}
              </span>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-2xl font-semibold">Assistant orchestration</h2>
            <Link
              href="/curriculum#assistant"
              className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200 transition hover:text-cyan-100"
            >
              View assistant playbook
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {assistantOps.map((agent) => (
              <div key={agent.name} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-sm text-slate-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-cyan-100">{agent.name}</h3>
                  <span className="text-xs uppercase tracking-[0.3em] text-cyan-200">Agent</span>
                </div>
                <p className="mt-3 text-xs text-slate-300">{agent.focus}</p>
                <ul className="mt-4 space-y-2 text-xs text-slate-300">
                  {agent.slos.map((slo) => (
                    <li key={slo} className="flex gap-2">
                      <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-cyan-300" />
                      <span>{slo}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Micro paths featuring this module</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {relatedMicroPaths.length ? (
              relatedMicroPaths.map((path) => (
                <div key={path.persona + path.phase} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-sm text-slate-200">
                  <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.3em] text-cyan-200">
                    <span className="rounded-full border border-cyan-300/40 px-3 py-1">{path.phase}</span>
                    <span className="rounded-full border border-cyan-300/40 px-3 py-1">{path.persona}</span>
                  </div>
                  <p className="mt-3 text-sm text-slate-200">{path.intent}</p>
                  <div className="mt-3 space-y-2 text-xs text-slate-300">
                    {path.days.map((day) => (
                      <div key={day.label} className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
                        <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-cyan-200">
                          {day.label} - {day.focus}
                        </div>
                        <div className="mt-2 flex flex-wrap gap-2 text-[11px] text-slate-400">
                          {day.modules.map((code) => (
                            <span
                              key={code}
                              className={`rounded-full border px-2 py-1 ${
                                code === selectedModule!.code ? "border-cyan-300 text-cyan-200" : "border-white/15"
                              }`}
                            >
                              {code}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/curriculum#micro-paths"
                    className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-cyan-200 transition hover:text-cyan-100"
                  >
                    Launch micro path
                  </Link>
                </div>
              ))
            ) : (
              <p className="text-sm text-slate-300">No micro paths listed yet. Pair this module with the companion agent to create one.</p>
            )}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Credential alignment</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {relevantCredentials.length ? (
              relevantCredentials.map((tier) => (
                <div key={tier.title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-sm text-slate-200">
                  <h3 className="text-lg font-semibold text-cyan-100">{tier.title}</h3>
                  <p className="mt-2 text-xs text-slate-300">{tier.description}</p>
                  <ul className="mt-3 space-y-2 text-xs text-slate-300">
                    {tier.requirements.map((requirement) => (
                      <li key={requirement} className="flex gap-2">
                        <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-cyan-300" />
                        <span>{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            ) : (
              <p className="text-sm text-slate-300">This module contributes evidence across multiple credentials. See the credential framework for details.</p>
            )}
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Primary documentation</h2>
          <div className="flex flex-wrap gap-2 text-sm">
            {documentationLinks.map((doc) => (
              <Link
                key={doc.label}
                href={doc.href}
                target="_blank"
                className="rounded-full border border-white/20 px-4 py-2 text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
              >
                {doc.label}
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

type DetailCardProps = {
  title: string;
  items: string[];
};

function DetailCard({ title, items }: DetailCardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-sm text-slate-200">
      <h3 className="text-lg font-semibold text-cyan-100">{title}</h3>
      <ul className="mt-3 space-y-2 text-xs text-slate-300">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-cyan-300" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
