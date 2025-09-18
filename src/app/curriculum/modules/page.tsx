"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { moduleCatalog, learningTracks, ModuleDefinition } from "@/data/curriculum";

const masteryLevels = ["Explorer", "Builder", "Architect", "Strategist", "Luminary"] as const;
const modalities = ["ML", "LB", "WK", "SP", "CL", "MC", "RT", "RS"] as const;
const sortOptions = [
  { value: "freshness", label: "Freshest" },
  { value: "duration", label: "Duration" },
  { value: "mastery", label: "Mastery" },
  { value: "alphabetical", label: "A to Z" },
];

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

function formatDuration(hours: number) {
  if (hours <= 1) return `${hours} hr`;
  if (!Number.isInteger(hours)) return `${hours.toFixed(1)} hrs`;
  return `${hours} hrs`;
}

function parseFreshness(value: string) {
  const timestamp = Date.parse(value);
  return Number.isNaN(timestamp) ? 0 : timestamp;
}

export default function ModulesPage() {
  const sampleModuleCode = moduleCatalog[0]?.code.toLowerCase() ?? "";

  const [selectedTrack, setSelectedTrack] = useState<string>("ALL");
  const [selectedMastery, setSelectedMastery] = useState<string[]>([]);
  const [selectedPersona, setSelectedPersona] = useState<string[]>([]);
  const [selectedModality, setSelectedModality] = useState<string[]>([]);
  const [selectedJourney, setSelectedJourney] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<string>("freshness");

  const personaOptions = useMemo(() => {
    const set = new Set<string>();
    moduleCatalog.forEach((module) => module.personaFit.forEach((persona) => set.add(persona)));
    return Array.from(set);
  }, []);

  const journeyStages = useMemo(() => {
    const set = new Set<string>();
    moduleCatalog.forEach((module) => set.add(module.journeyStage));
    return Array.from(set);
  }, []);

  const filteredModules = useMemo(() => {
    return moduleCatalog.filter((module) => {
      if (selectedTrack !== "ALL" && module.galaxy !== selectedTrack) {
        return false;
      }
      if (selectedMastery.length && !selectedMastery.includes(module.mastery)) {
        return false;
      }
      if (selectedJourney.length && !selectedJourney.includes(module.journeyStage)) {
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
          module.journeyStage,
          module.phase,
        ]
          .join(" ")
          .toLowerCase();
        if (!haystack.includes(normalized)) {
          return false;
        }
      }
      return true;
    });
  }, [selectedTrack, selectedMastery, selectedJourney, selectedPersona, selectedModality, searchTerm]);

  const sortedModules = useMemo(() => {
    const mapped = [...filteredModules];
    switch (sortBy) {
      case "duration":
        mapped.sort((a, b) => a.durationHours - b.durationHours);
        break;
      case "mastery":
        mapped.sort((a, b) =>
          masteryLevels.indexOf(a.mastery as typeof masteryLevels[number]) -
          masteryLevels.indexOf(b.mastery as typeof masteryLevels[number])
        );
        break;
      case "alphabetical":
        mapped.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "freshness":
      default:
        mapped.sort((a, b) => parseFreshness(b.freshness) - parseFreshness(a.freshness));
        break;
    }
    return mapped;
  }, [filteredModules, sortBy]);

  const activeFilters = [
    selectedTrack !== "ALL" ? "Track" : null,
    selectedMastery.length ? "Mastery" : null,
    selectedJourney.length ? "Journey" : null,
    selectedPersona.length ? "Persona" : null,
    selectedModality.length ? "Modality" : null,
    searchTerm.trim() ? "Search" : null,
  ].filter(Boolean) as string[];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-100">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-8 md:flex-row md:items-center md:justify-between">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">Curriculum</p>
            <h1 className="text-3xl font-semibold tracking-tight">Module explorer</h1>
            <p className="max-w-2xl text-sm text-slate-300">
              Filter the sprint-ready modules that power agent foundations, rapid prototyping, architecture, operations,
              and scale. Every module delivers artefacts, evaluation hooks, and assistant prompts so your team keeps
              momentum.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              <Link
                href="/curriculum"
                className="rounded-full border border-white/20 px-4 py-2 transition hover:border-cyan-300 hover:text-cyan-200"
              >
                Back to curriculum hub
              </Link>
              {sampleModuleCode && (
                <Link
                  href={`/curriculum/modules/${sampleModuleCode}`}
                  className="rounded-full border border-white/20 px-4 py-2 transition hover:border-cyan-300 hover:text-cyan-200"
                >
                  Sample module detail
                </Link>
              )}
              <Link
                href="https://github.com/frankxai/saas-ai-architect-academy/blob/main/docs/curriculum/modules.md"
                target="_blank"
                className="rounded-full border border-white/20 px-4 py-2 transition hover:border-cyan-300 hover:text-cyan-200"
              >
                Download module atlas
              </Link>
            </div>
          </div>
          <div className="w-full max-w-md space-y-3">
            <input
              type="search"
              placeholder="Search modules, outcomes, deliverables..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none"
            />
            <select
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value)}
              className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-slate-100 focus:border-cyan-300 focus:outline-none"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value} className="text-slate-900">
                  Sort by {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-10">
        <section className="grid gap-6 rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:grid-cols-2 xl:grid-cols-4">
          <FilterGroup
            title="Track"
            options={["ALL", ...learningTracks.map((track) => track.title)]}
            optionValues={["ALL", ...learningTracks.map((track) => track.id)]}
            selected={selectedTrack}
            onSelect={(value) => setSelectedTrack(value)}
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
            title="Journey stage"
            options={journeyStages}
            selected={selectedJourney}
            onToggle={(value) =>
              setSelectedJourney((current) =>
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
            <div className="space-y-1">
              <h2 className="text-xl font-semibold text-slate-100">
                {sortedModules.length} module{sortedModules.length === 1 ? "" : "s"}
              </h2>
              {activeFilters.length > 0 && (
                <p className="text-xs text-slate-400">
                  Active filters: {activeFilters.join(", ")}
                </p>
              )}
            </div>
            <button
              type="button"
              onClick={() => {
                setSelectedTrack("ALL");
                setSelectedMastery([]);
                setSelectedPersona([]);
                setSelectedModality([]);
                setSelectedJourney([]);
                setSearchTerm("");
                setSortBy("freshness");
              }}
              className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200 transition hover:text-cyan-100"
            >
              Reset filters
            </button>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {sortedModules.map((module) => (
              <ModuleCard key={module.code} module={module} />
            ))}
            {!sortedModules.length && (
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
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    if (!copied) return;
    const id = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(id);
  }, [copied]);

  const trackMeta = learningTracks.find((track) => track.id === module.galaxy);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(module.code);
      setCopied(true);
    } catch (error) {
      console.error("Unable to copy module code", error);
    }
  };

  const topResources = module.resources.slice(0, 2);

  return (
    <div className="flex h-full flex-col justify-between gap-5 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-cyan-200">
          <span className="rounded-full border border-cyan-300/40 px-3 py-1">{module.code}</span>
          <span className="rounded-full border border-cyan-300/40 px-3 py-1">{module.modality}</span>
          <span className="rounded-full border border-cyan-300/40 px-3 py-1">{module.mastery}</span>
          <span className="rounded-full border border-cyan-300/40 px-3 py-1">{module.phase}</span>
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-slate-100">{module.title}</h3>
          <p className="text-sm text-slate-300">Journey: {module.journeyStage}</p>
          <p className="text-sm text-slate-300">{module.outcomes.slice(0, 2).join(" - ")}</p>
        </div>
        <div className="flex flex-wrap gap-2 text-[11px] text-slate-400">
          <span className="rounded-full border border-white/15 px-3 py-1">{formatDuration(module.durationHours)}</span>
          {trackMeta && (
            <span className="rounded-full border border-white/15 px-3 py-1">{trackMeta.title}</span>
          )}
          <span className="rounded-full border border-white/15 px-3 py-1">Fresh {module.freshness}</span>
        </div>
      </div>

      <div className="space-y-3">
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">Deliverables</h4>
          <ul className="mt-2 space-y-1 text-xs text-slate-300">
            {module.deliverables.map((deliverable) => (
              <li key={deliverable} className="flex gap-2">
                <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-cyan-300" />
                <span>{deliverable}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">Quick steps</h4>
          <ol className="mt-2 space-y-1 text-xs text-slate-300">
            {module.steps.slice(0, 3).map((step) => (
              <li key={step.title}>
                <span className="font-semibold text-cyan-100">{step.title}:</span> {step.description}
              </li>
            ))}
          </ol>
        </div>
        <div className="flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.3em] text-slate-400">
          {module.personaFit.map((persona) => (
            <span key={persona} className="rounded-full border border-white/15 px-2 py-1">
              {personaLabels[persona] ?? persona}
            </span>
          ))}
        </div>
        {topResources.length > 0 && (
          <div className="flex flex-wrap gap-2 text-xs">
            {topResources.map((resource) => (
              <Link
                key={resource.label}
                href={resource.url}
                target="_blank"
                className="rounded-full border border-white/15 px-3 py-1 text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
              >
                {resource.label}
              </Link>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-3 text-sm font-semibold">
        <Link
          href={`/curriculum/modules/${module.code.toLowerCase()}`}
          className="rounded-full bg-cyan-400 px-4 py-2 text-slate-900 transition hover:bg-cyan-300"
        >
          View detail
        </Link>
        <button
          type="button"
          onClick={handleCopy}
          className="rounded-full border border-white/20 px-4 py-2 text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
        >
          {copied ? "Code copied" : "Copy code"}
        </button>
        <Link
          href="/curriculum#micro-paths"
          className="rounded-full border border-white/20 px-4 py-2 text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
        >
          Add to journey
        </Link>
      </div>
    </div>
  );
}
