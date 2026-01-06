import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SectionHeader, SectionShell } from "@/components/ui/section";
import {
  commandCenterSkills,
  architectureTemplates,
  commandCenterTrack,
  commandCenterModules,
  skillCategories,
  type SkillCategory,
} from "@/data/command-center";

const heroStats = [
  { value: "22", label: "Expert Skills", note: "Auto-activated on context" },
  { value: "50+", label: "Templates", note: "D2, Terraform, examples" },
  { value: "12", label: "Modules", note: "Hands-on curriculum" },
  { value: "6", label: "Weeks", note: "Mastery track" },
];

const slashCommands = [
  { command: "/design-solution", description: "End-to-end AI solution design with discovery questions" },
  { command: "/deploy-genai", description: "Deploy OCI GenAI Dedicated AI Cluster" },
  { command: "/build-rag", description: "Build RAG system with knowledge bases" },
  { command: "/draw-architecture", description: "Generate professional D2 diagrams" },
  { command: "/security-review", description: "Security assessment with OWASP LLM Top 10" },
  { command: "/optimize-costs", description: "Cost optimization review and recommendations" },
];

const certificationTiers = [
  {
    tier: "Associate",
    hours: "20h",
    requirements: "Foundation + OCI GenAI tracks",
    modules: ["CC-701", "CC-702", "CC-703"],
    badge: "bg-emerald-400/20 text-emerald-300",
  },
  {
    tier: "Professional",
    hours: "50h",
    requirements: "+ Multi-Cloud + Agent Development",
    modules: ["CC-704", "CC-705", "CC-706", "CC-707"],
    badge: "bg-cyan-400/20 text-cyan-300",
  },
  {
    tier: "Expert",
    hours: "80h",
    requirements: "+ Enterprise + Capstone Project",
    modules: ["CC-708", "CC-709", "CC-710", "CC-711", "CC-712"],
    badge: "bg-purple-400/20 text-purple-300",
  },
];

export default function CommandCenterPage() {
  // Group skills by category
  const skillsByCategory = commandCenterSkills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    },
    {} as Record<SkillCategory, typeof commandCenterSkills>
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Background effects */}
      <div className="pointer-events-none fixed inset-0 select-none opacity-60">
        <div className="absolute -left-32 top-16 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute -right-32 top-1/3 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <span className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-200">
              AI Architect Academy
            </span>
          </Link>
          <nav className="hidden items-center gap-2 text-xs uppercase tracking-[0.35em] text-slate-300 lg:flex">
            <Link href="/curriculum" className="rounded-full px-3 py-2 transition hover:text-cyan-200">
              Curriculum
            </Link>
            <Link href="/command-center/skills" className="rounded-full px-3 py-2 transition hover:text-cyan-200">
              Skills
            </Link>
            <Link href="/command-center/templates" className="rounded-full px-3 py-2 transition hover:text-cyan-200">
              Templates
            </Link>
          </nav>
          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/command-center/curriculum"
              className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-cyan-300"
            >
              Start Learning
            </Link>
          </div>
        </div>
      </header>

      <main className="relative z-10 mx-auto flex max-w-6xl flex-col gap-16 px-4 pb-32 pt-12 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <SectionShell className="bg-gradient-to-br from-purple-500/10 via-slate-950/80 to-cyan-500/10">
          <div className="space-y-6">
            <Badge tone="highlight">Track T7 - 6-Week Mastery Program</Badge>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl">
              AI Architect Command Center
            </h1>
            <p className="max-w-3xl text-base text-slate-300 sm:text-lg">
              Transform Claude Code into your expert AI Architecture assistant. Master multi-cloud architectures with
              22 specialized skills, 50+ templates, and production-ready infrastructure-as-code.
            </p>

            {/* Stats */}
            <div className="grid gap-4 pt-4 sm:grid-cols-2 lg:grid-cols-4">
              {heroStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-3xl font-semibold text-cyan-200">{stat.value}</p>
                  <p className="text-sm font-semibold text-slate-100">{stat.label}</p>
                  <p className="text-xs text-slate-400">{stat.note}</p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-4">
              <Link
                href="/command-center/curriculum"
                className="rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-cyan-300"
              >
                Start the 6-week program
              </Link>
              <Link
                href="/command-center/skills"
                className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
              >
                Browse 22 skills
              </Link>
              <Link
                href="/command-center/templates"
                className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
              >
                View templates
              </Link>
              <Link
                href="https://github.com/AI-Architect-Academy/ai-architect-academy/tree/main/claude-ai-architect"
                target="_blank"
                className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
              >
                GitHub source
              </Link>
            </div>
          </div>
        </SectionShell>

        {/* Slash Commands */}
        <SectionShell>
          <SectionHeader
            eyebrow="Quick Start"
            title="Powerful slash commands at your fingertips"
            subtitle="Start Claude Code in the command center directory and use these commands to design, deploy, and optimize."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {slashCommands.map((cmd) => (
              <Card key={cmd.command} tone="outline">
                <code className="text-lg font-semibold text-cyan-200">{cmd.command}</code>
                <p className="mt-2 text-sm text-slate-300">{cmd.description}</p>
              </Card>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/50 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">Quick Start</p>
            <pre className="mt-2 overflow-x-auto text-sm text-cyan-200">
              <code>{`cd claude-ai-architect/
claude
/design-solution "Customer support AI with RAG"`}</code>
            </pre>
          </div>
        </SectionShell>

        {/* Skills by Category */}
        <SectionShell className="bg-white/[0.02]">
          <SectionHeader
            eyebrow="22 Specialized Skills"
            title="Expert knowledge activated on-demand"
            subtitle="Skills auto-activate based on keywords in your queries. Master OCI, multi-cloud, RAG, agents, security, and IaC."
            actions={
              <Link href="/command-center/skills" className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
                View all skills
              </Link>
            }
          />
          <div className="mt-8 space-y-8">
            {(Object.keys(skillsByCategory) as SkillCategory[]).map((category) => (
              <div key={category}>
                <div className="mb-4 flex items-center gap-3">
                  <span className={`text-sm font-semibold uppercase tracking-[0.25em] ${skillCategories[category].color}`}>
                    {skillCategories[category].name}
                  </span>
                  <span className="text-xs text-slate-500">{skillCategories[category].description}</span>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {skillsByCategory[category].slice(0, 3).map((skill) => (
                    <Card key={skill.id} tone="outline">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-slate-100">{skill.name}</h3>
                          <p className="mt-1 text-xs text-slate-400">{skill.description}</p>
                        </div>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-1">
                        {skill.triggers.slice(0, 3).map((trigger) => (
                          <span key={trigger} className="rounded-full border border-white/15 px-2 py-0.5 text-[10px] text-slate-400">
                            {trigger}
                          </span>
                        ))}
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </SectionShell>

        {/* Templates Preview */}
        <SectionShell>
          <SectionHeader
            eyebrow="50+ Architecture Templates"
            title="Production-ready blueprints"
            subtitle="D2 diagrams, Terraform modules, and example solutions you can deploy immediately."
            actions={
              <Link href="/command-center/templates" className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
                View all templates
              </Link>
            }
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {architectureTemplates.slice(0, 6).map((template) => (
              <Card key={template.id} tone="outline">
                <div className="flex items-center gap-2">
                  <Badge tone={template.type === "d2" ? "accent" : "neutral"}>{template.type.toUpperCase()}</Badge>
                  <Badge tone="neutral">{template.difficulty}</Badge>
                </div>
                <h3 className="mt-3 font-semibold text-slate-100">{template.name}</h3>
                <p className="mt-1 text-xs text-slate-400">{template.description}</p>
              </Card>
            ))}
          </div>
        </SectionShell>

        {/* Curriculum Overview */}
        <SectionShell className="bg-gradient-to-br from-indigo-500/10 via-slate-950/80 to-purple-500/10">
          <SectionHeader
            eyebrow="6-Week Mastery Track"
            title={commandCenterTrack.title}
            subtitle={commandCenterTrack.subtitle}
            actions={
              <Link href="/command-center/curriculum" className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
                View full curriculum
              </Link>
            }
          />
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {commandCenterTrack.stages.map((stage) => (
              <Card key={stage.name} tone="default">
                <h3 className="text-lg font-semibold text-cyan-200">{stage.name}</h3>
                <p className="mt-2 text-sm text-slate-300">{stage.summary}</p>
                <ul className="mt-4 space-y-2 text-xs text-slate-400">
                  {stage.deliverables.map((deliverable) => (
                    <li key={deliverable} className="flex gap-2">
                      <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-cyan-300" />
                      <span>{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          {/* Module Grid */}
          <div className="mt-10">
            <h3 className="text-xl font-semibold text-slate-100">12 Hands-On Modules</h3>
            <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {commandCenterModules.slice(0, 6).map((module) => (
                <div key={module.code} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em]">
                    <span className="rounded-full border border-cyan-300/40 px-2 py-0.5 text-cyan-200">{module.code}</span>
                    <span className="text-slate-500">{module.arc}</span>
                    <span className="text-slate-500">{module.durationHours}h</span>
                  </div>
                  <h4 className="mt-2 font-semibold text-slate-100">{module.title}</h4>
                  <p className="mt-1 text-xs text-slate-400">{module.outcomes[0]}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link
                href="/command-center/curriculum"
                className="inline-flex rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
              >
                View all 12 modules
              </Link>
            </div>
          </div>
        </SectionShell>

        {/* Certification Path */}
        <SectionShell>
          <SectionHeader
            eyebrow="Certification Path"
            title="Earn your AI Architect credentials"
            subtitle="Progress through three certification tiers as you complete modules and build your portfolio."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {certificationTiers.map((cert) => (
              <Card key={cert.tier} tone="outline">
                <Badge tone="highlight" className={cert.badge}>
                  {cert.tier}
                </Badge>
                <h3 className="mt-3 text-xl font-semibold text-slate-100">{cert.tier}</h3>
                <p className="text-sm text-cyan-200">{cert.hours}</p>
                <p className="mt-2 text-xs text-slate-400">{cert.requirements}</p>
                <div className="mt-4 flex flex-wrap gap-1">
                  {cert.modules.map((code) => (
                    <span key={code} className="rounded-full border border-white/15 px-2 py-0.5 text-[10px] text-slate-400">
                      {code}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </SectionShell>

        {/* CTA */}
        <SectionShell className="bg-gradient-to-br from-cyan-500/15 via-slate-950/80 to-purple-500/15 text-center">
          <Badge tone="highlight" className="mx-auto">
            Ready to transform your AI architecture capabilities?
          </Badge>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Start the Command Center program today
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-300">
            Join the 6-week mastery track, earn your certification, and build production-ready AI architectures
            with 22 expert skills at your command.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/command-center/curriculum"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
            >
              Start learning now
            </Link>
            <Link
              href="/command-center/skills"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              Explore skills library
            </Link>
          </div>
        </SectionShell>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-950/90">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 text-xs text-slate-400 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="text-[11px] uppercase tracking-[0.35em] text-cyan-200">AI Architect Academy</span>
            <div className="flex flex-wrap gap-3">
              <Link href="/" className="hover:text-cyan-200">Home</Link>
              <Link href="/curriculum" className="hover:text-cyan-200">Curriculum</Link>
              <Link href="https://github.com/AI-Architect-Academy/ai-architect-academy" target="_blank" className="hover:text-cyan-200">GitHub</Link>
            </div>
          </div>
          <p>AI Architect Command Center - Design with excellence, diagram with clarity, deploy with confidence.</p>
        </div>
      </footer>
    </div>
  );
}
