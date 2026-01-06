"use client";

import { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SectionShell } from "@/components/ui/section";
import {
  commandCenterSkills,
  skillCategories,
  type SkillCategory,
} from "@/data/command-center";

const allCategories: (SkillCategory | "all")[] = ["all", "oci", "multi-cloud", "agents", "security", "infrastructure", "tools"];

export default function SkillsPage() {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSkills = commandCenterSkills.filter((skill) => {
    const matchesCategory = selectedCategory === "all" || skill.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.triggers.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Background effects */}
      <div className="pointer-events-none fixed inset-0 select-none opacity-60">
        <div className="absolute -left-32 top-16 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute -right-32 top-1/3 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/command-center" className="flex items-center gap-3">
            <span className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-200">
              Command Center
            </span>
          </Link>
          <nav className="hidden items-center gap-2 text-xs uppercase tracking-[0.35em] text-slate-300 lg:flex">
            <Link href="/command-center" className="rounded-full px-3 py-2 transition hover:text-cyan-200">
              Overview
            </Link>
            <Link href="/command-center/skills" className="rounded-full bg-cyan-400/20 px-3 py-2 text-cyan-200">
              Skills
            </Link>
            <Link href="/command-center/templates" className="rounded-full px-3 py-2 transition hover:text-cyan-200">
              Templates
            </Link>
            <Link href="/command-center/curriculum" className="rounded-full px-3 py-2 transition hover:text-cyan-200">
              Curriculum
            </Link>
          </nav>
        </div>
      </header>

      <main className="relative z-10 mx-auto flex max-w-6xl flex-col gap-12 px-4 pb-32 pt-12 sm:px-6 lg:px-8">
        {/* Hero */}
        <SectionShell>
          <Badge tone="highlight">22 Expert Skills</Badge>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Skills Library</h1>
          <p className="mt-4 max-w-2xl text-slate-300">
            22 specialized skills covering OCI GenAI, multi-cloud architectures, agent development, security,
            infrastructure, and development tools. Skills auto-activate based on keywords in your queries.
          </p>

          {/* Search */}
          <div className="mt-6">
            <input
              type="text"
              placeholder="Search skills, triggers, or descriptions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full max-w-md rounded-full border border-white/20 bg-slate-900/50 px-4 py-2 text-sm text-slate-100 placeholder-slate-500 outline-none transition focus:border-cyan-300"
            />
          </div>

          {/* Category Filter */}
          <div className="mt-6 flex flex-wrap gap-2">
            {allCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] transition ${
                  selectedCategory === cat
                    ? "bg-cyan-400 text-slate-900"
                    : "border border-white/20 text-slate-300 hover:border-cyan-300 hover:text-cyan-200"
                }`}
              >
                {cat === "all" ? "All" : skillCategories[cat].name}
                {cat !== "all" && (
                  <span className="ml-2 text-[10px]">
                    ({commandCenterSkills.filter((s) => s.category === cat).length})
                  </span>
                )}
              </button>
            ))}
          </div>

          <p className="mt-4 text-xs text-slate-500">
            Showing {filteredSkills.length} of {commandCenterSkills.length} skills
          </p>
        </SectionShell>

        {/* Skills Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredSkills.map((skill) => (
            <Card key={skill.id} tone="outline" className="flex flex-col">
              <div className="flex items-start justify-between gap-2">
                <Badge
                  tone="neutral"
                  className={skillCategories[skill.category].color}
                >
                  {skillCategories[skill.category].name}
                </Badge>
                <span className="text-[10px] text-slate-500">v{skill.version}</span>
              </div>

              <h3 className="mt-3 text-lg font-semibold text-slate-100">{skill.name}</h3>
              <p className="mt-2 flex-1 text-sm text-slate-400">{skill.description}</p>

              {/* Triggers */}
              <div className="mt-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-500">
                  Auto-triggers
                </p>
                <div className="mt-2 flex flex-wrap gap-1">
                  {skill.triggers.map((trigger) => (
                    <span
                      key={trigger}
                      className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-2 py-0.5 text-[10px] text-cyan-200"
                    >
                      {trigger}
                    </span>
                  ))}
                </div>
              </div>

              {/* Related Modules */}
              {skill.relatedModules.length > 0 && (
                <div className="mt-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-500">
                    Related modules
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {skill.relatedModules.map((code) => (
                      <Link
                        key={code}
                        href={`/command-center/curriculum#${code.toLowerCase()}`}
                        className="rounded-full border border-white/15 px-2 py-0.5 text-[10px] text-slate-400 transition hover:border-cyan-300 hover:text-cyan-200"
                      >
                        {code}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="mt-4 flex gap-2 pt-2">
                <Link
                  href={skill.sourceUrl}
                  target="_blank"
                  className="rounded-full border border-white/20 px-3 py-1.5 text-xs font-semibold text-slate-300 transition hover:border-cyan-300 hover:text-cyan-200"
                >
                  View Source
                </Link>
                {skill.cheatsheetUrl && (
                  <Link
                    href={skill.cheatsheetUrl}
                    className="rounded-full border border-white/20 px-3 py-1.5 text-xs font-semibold text-slate-300 transition hover:border-cyan-300 hover:text-cyan-200"
                  >
                    Cheatsheet
                  </Link>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Usage Guide */}
        <SectionShell className="bg-white/[0.02]">
          <h2 className="text-2xl font-semibold text-slate-100">How Skills Work</h2>
          <p className="mt-4 text-slate-300">
            Skills automatically activate when you mention relevant keywords in your queries.
            No configuration needed - just ask questions naturally.
          </p>

          <div className="mt-6 space-y-4">
            <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-200">Example 1: OCI GenAI</p>
              <pre className="mt-2 overflow-x-auto text-sm text-slate-300">
                <code>How do I deploy a Dedicated AI Cluster for production?</code>
              </pre>
              <p className="mt-2 text-xs text-slate-400">
                Activates: <span className="text-cyan-200">genai-dac-specialist</span>, <span className="text-cyan-200">oci-services-expert</span>
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-200">Example 2: Multi-Agent</p>
              <pre className="mt-2 overflow-x-auto text-sm text-slate-300">
                <code>Build a multi-agent system with Oracle ADK and LangGraph orchestration</code>
              </pre>
              <p className="mt-2 text-xs text-slate-400">
                Activates: <span className="text-cyan-200">oracle-adk</span>, <span className="text-cyan-200">langgraph-patterns</span>, <span className="text-cyan-200">agentic-orchestration</span>
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-200">Example 3: Architecture</p>
              <pre className="mt-2 overflow-x-auto text-sm text-slate-300">
                <code>/draw-architecture "RAG system with security zones"</code>
              </pre>
              <p className="mt-2 text-xs text-slate-400">
                Activates: <span className="text-cyan-200">architecture-diagramming</span>, <span className="text-cyan-200">rag-expert</span>, <span className="text-cyan-200">ai-security-expert</span>
              </p>
            </div>
          </div>
        </SectionShell>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-950/90">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 text-xs text-slate-400 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <Link href="/command-center" className="text-[11px] uppercase tracking-[0.35em] text-cyan-200">
              Command Center
            </Link>
            <div className="flex flex-wrap gap-3">
              <Link href="/command-center" className="hover:text-cyan-200">Overview</Link>
              <Link href="/command-center/templates" className="hover:text-cyan-200">Templates</Link>
              <Link href="/command-center/curriculum" className="hover:text-cyan-200">Curriculum</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
