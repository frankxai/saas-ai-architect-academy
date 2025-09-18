"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  moduleCatalog,
  learningGalaxies,
  ModuleDefinition,
} from "@/data/curriculum";

const masteryLevels = ["Explorer", "Builder", "Architect", "Strategist", "Luminary"] as const;
const modalities = ["ML", "LB", "WK", "SP", "CL", "MC", "RT", "RS"] as const;

const personaLabels: Record<string, string> = {
  "lead-architect": "Lead Architect",
  "program-leader": "Program & Product Leader",
  "risk-partner": "Risk & Compliance Partner",
  "agent-lead": "Automation & Agent Lead",
  "ops-lead": "Operations Lead",
  creator: "Creator & Influence Partner",
  research: "Research Guild",
};

function formatDuration(hours: number) {
  if (hours < 2) return `${hours} hr`;
  if (hours % 1 !== 0) return `${hours.toFixed(1)} hrs`;
  return `${hours} hrs`;
}

export default function ModulesPage() {
  const [selectedGalaxy, setSelectedGalaxy] = useState<string>("ALL");
  const [selectedMastery, setSelectedMastery] = useState<string[]>([]);
  const [selectedPersona, setSelectedPersona] = useState<string[]>([]);
  const [selectedModality, setSelectedModality] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredModules = useMemo(() => {
    return moduleCatalog.filter((module) => {
      if (selectedGalaxy !== "ALL" && module.galaxy !== selectedGalaxy) {
        return false;
      }
      if (selectedMastery.length && !selectedMastery.includes(module.mastery)) {
        return false;
      }
      if (
        selectedPersona.length &&
        !selectedPersona.some((persona) => module.personaFit.includes(persona))
      ) {
        return false;
      }
      if (selectedModality.length && !selectedModality.includes(module.modality)) {
        return false;
      }
      if (searchTerm.trim()) {
        const normalized = searchTerm.trim().toLowerCase();
        const haystack = [
          module.code,
          module.title,
          module.outcomes.join(" "),
          module.deliverables.join(" "),
        ]
          .join(" ")
          .toLowerCase();
        if (!haystack.includes(normalized)) {
          return false;
        }
      }
      return true;
    });
  }, [selectedGalaxy, selectedMastery, selectedPersona, selectedModality, searchTerm]);

  const personaOptions = useMemo(() => {
    const set = new Set<string>();
    moduleCatalog.forEach((module) => module.personaFit.forEach((p) => set.add(p)));
    return Array.from(set);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-100">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-8 md:flex-row md:items-center md:justify-between">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">Curriculum</p>
            <h1 className="text-3xl font-semibold tracking-tight">Micro-learning module explorer</h1>
            <p className="max-w-2xl text-sm text-slate-300">
              Filter hundreds of modules by galaxy, mastery ladder, persona, and modality. Every module connects to the evidence locker, evaluation registry, and assistant guidance so you can drop it into cohort journeys instantly.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              <Link
                href="/curriculum"
                className="rounded-full border border-white/20 px-4 py-2 transition hover:border-cyan-300 hover:text-cyan-200"
              >
                Back to curriculum hub
              </Link>
              <Link
                href="https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/modules.md"
                target="_blank"
                className="rounded-full border border-white/20 px-4 py-2 transition hover:border-cyan-300 hover:text-cyan-200"
              >
                Download module atlas
              </Link>
            </div>
          </div>
          <div className="w-full max-w-md">
            <input
              type="search"
              placeholder="Search modules, outcomes, deliverables..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none"
            />
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-10">
        <section className="grid gap-6 rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:grid-cols-2 xl:grid-cols-4">
          <FilterGroup
            title="Galaxy"
            options={["ALL", ...learningGalaxies.map((galaxy) => galaxy.code)]}
            selected={selectedGalaxy}
            onSelect={(value) => setSelectedGalaxy(value)}
            single
          />
          <FilterGroup
            title="Mastery"
            options={Array.from(masteryLevels)}
            selected={selectedMastery}
            onToggle={(value) =>
              setSelectedMastery((current) =>
                current.includes(value)
                  ? current.filter((item) => item !== value)
                  : [...current, value]
              )
            }
          />
          <FilterGroup
            title="Persona"
            options={personaOptions.map((p) => personaLabels[p] ?? p)}
            optionValues={personaOptions}
            selected={selectedPersona}
            onToggle={(value) =>
              setSelectedPersona((current) =>
                current.includes(value)
                  ? current.filter((item) => item !== value)
                  : [...current, value]
              )
            }
          />
          <FilterGroup
            title="Modality"
            options={Array.from(modalities)}
            selected={selectedModality}
            onToggle={(value) =>
              setSelectedModality((current) =>
                current.includes(value)
                  ? current.filter((item) => item !== value)
                  : [...current, value]
              )
            }
          />
        </section>

        <section className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-xl font-semibold text-slate-100">
              {filteredModules.length} module{filteredModules.length === 1 ? "" : "s"}
            </h2>
            <button
              type="button"
              onClick={() => {
                setSelectedGalaxy("ALL");
                setSelectedMastery([]);
                setSelectedPersona([]);
                setSelectedModality([]);
                setSearchTerm("");
              }}
              className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200 transition hover:text-cyan-100"
            >
              Reset filters
            </button>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {filteredModules.map((module) => (
              <ModuleCard key={module.code} module={module} />
            ))}
            {!filteredModules.length && (
              <div className="col-span-full rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center text-sm text-slate-300">
                <p>No modules match the current filters. Adjust filters or search keywords.</p>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

type FilterGroupProps = {
  title: string;
  options: string[];
  optionValues?: string[];
  selected: string | string[];
  onSelect?: (value: string) => void;
  onToggle?: (value: string) => void;
  single?: boolean;
};

function FilterGroup({
  title,
  options,
  optionValues,
  selected,
  onSelect,
  onToggle,
  single,
}: FilterGroupProps) {
  return (
    <div className="space-y-3">
      <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {options.map((label, index) => {
          const value = optionValues ? optionValues[index] : label;
          const isActive = single
            ? selected === value
            : Array.isArray(selected) && selected.includes(value);

          const className = isActive
            ? "bg-cyan-400 text-slate-900 border-cyan-300"
            : "bg-white/5 text-slate-200 border-white/15 hover:border-cyan-200 hover:text-cyan-200";

          return (
            <button
              key={value}
              type="button"
              onClick={() => {
                if (single && onSelect) {
                  onSelect(value);
                }
                if (!single && onToggle) {
                  onToggle(value);
                }
              }}
              className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] transition ${className}`}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

type ModuleCardProps = {
  module: ModuleDefinition;
};

function ModuleCard({ module }: ModuleCardProps) {
  const galaxyMeta = learningGalaxies.find((g) => g.code === module.galaxy);

  return (
    <div className="flex h-full flex-col justify-between gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em] text-cyan-200">
          <span className="rounded-full border border-cyan-300/30 px-3 py-1">{module.code}</span>
          <span className="rounded-full border border-cyan-300/30 px-3 py-1">{module.modality}</span>
          <span className="rounded-full border border-cyan-300/30 px-3 py-1">{module.mastery}</span>
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-slate-100">{module.title}</h3>
          <p className="text-sm text-slate-300">
            {module.outcomes.slice(0, 2).join(" - ")}
            {module.outcomes.length > 2 ? "..." : ""}
          </p>
        </div>
        <div className="flex flex-wrap gap-2 text-[11px] text-slate-400">
          <span className="rounded-full border border-white/15 px-3 py-1">{module.arc}</span>
          <span className="rounded-full border border-white/15 px-3 py-1">{formatDuration(module.durationHours)}</span>
          {galaxyMeta && (
            <span className="rounded-full border border-white/15 px-3 py-1">
              {galaxyMeta.title}
            </span>
          )}
        </div>
      </div>
      <div className="space-y-3 text-xs text-slate-300">
        <div>
          <h4 className="font-semibold uppercase tracking-[0.3em] text-cyan-200">Deliverables</h4>
          <ul className="mt-2 space-y-1">
            {module.deliverables.map((deliverable) => (
              <li key={deliverable} className="flex gap-2">
                <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-cyan-300" />
                <span>{deliverable}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.3em] text-slate-400">
          {module.personaFit.map((persona) => (
            <span key={persona} className="rounded-full border border-white/15 px-2 py-1">
              {personaLabels[persona] ?? persona}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 text-[11px] text-slate-400">
          {module.evaluationSignals.map((signal) => (
            <span key={signal} className="rounded-full border border-white/15 px-3 py-1">
              {signal}
            </span>
          ))}
        </div>
        <div className="text-[10px] uppercase tracking-[0.3em] text-slate-500">
          Refreshed {module.freshness}
        </div>
      </div>
      <div className="flex flex-wrap gap-3 text-sm font-semibold">
        <Link
          href={`/curriculum/modules/${module.code.toLowerCase()}`}
          className="rounded-full bg-cyan-400 px-4 py-2 text-slate-900 transition hover:bg-cyan-300"
        >
          View module detail
        </Link>
        <Link
          href="/curriculum"
          className="rounded-full border border-white/20 px-4 py-2 text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
        >
          Add to micro path
        </Link>
      </div>
    </div>
  );
}
