"use client";

import { ChangeEvent, FormEvent, useMemo, useState } from "react";

import { useWaitlistAdapter } from "@/lib/data/data-environment";
import type { LearnerFocusArea, WaitlistSubmission } from "@/lib/data/types";

const focusAreas: { value: LearnerFocusArea; label: string }[] = [
  { value: "agents", label: "Agent Systems" },
  { value: "prototyping", label: "Rapid Prototyping" },
  { value: "operations", label: "Architecture & Ops" },
  { value: "governance", label: "Governance" },
  { value: "story", label: "Story & Scale" },
];

const tiers = [
  { value: "workspace" as const, label: "Learner Workspace" },
  { value: "advisory" as const, label: "Executive Advisory" },
  { value: "creator" as const, label: "Creator Studio" },
  { value: "enterprise" as const, label: "Enterprise Transformation" },
];

const initialFormState = {
  fullName: "",
  email: "",
  role: "",
  focusArea: focusAreas[0]!.value,
  desiredTier: tiers[0]!.value,
  notes: "",
};

type FormState = typeof initialFormState;

type SubmissionStatus = "idle" | "submitting" | "success" | "error";

function createPayload(form: FormState): WaitlistSubmission {
  const notes = form.notes.trim();
  return {
    fullName: form.fullName.trim(),
    email: form.email.trim().toLowerCase(),
    role: form.role.trim(),
    focusArea: form.focusArea,
    desiredTier: form.desiredTier,
    notes: notes.length ? notes : undefined,
    submittedAt: new Date().toISOString(),
  };
}

export function WaitlistForm() {
  const waitlist = useWaitlistAdapter();
  const [form, setForm] = useState<FormState>(initialFormState);
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const disableSubmit = useMemo(() => {
    if (status === "submitting") return true;
    return !form.fullName.trim() || !form.email.trim() || !form.role.trim();
  }, [form.email, form.fullName, form.role, status]);

  const handleChange = (field: keyof FormState) => (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
    if (status === "success" || status === "error") {
      setStatus("idle");
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (disableSubmit) return;
    setStatus("submitting");
    try {
      await waitlist.submit(createPayload(form));
      setStatus("success");
      setForm(initialFormState);
    } catch (error) {
      console.error("Waitlist submission failed", error);
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col text-sm font-medium text-slate-900 dark:text-slate-100">
          Full name
          <input
            required
            value={form.fullName}
            onChange={handleChange("fullName")}
            placeholder="Frank Martinez"
            className="mt-2 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            type="text"
            name="fullName"
            autoComplete="name"
          />
        </label>
        <label className="flex flex-col text-sm font-medium text-slate-900 dark:text-slate-100">
          Email
          <input
            required
            value={form.email}
            onChange={handleChange("email")}
            placeholder="you@company.com"
            className="mt-2 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            type="email"
            name="email"
            autoComplete="email"
          />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col text-sm font-medium text-slate-900 dark:text-slate-100">
          Role / Title
          <input
            required
            value={form.role}
            onChange={handleChange("role")}
            placeholder="Head of AI Architecture"
            className="mt-2 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            type="text"
            name="role"
            autoComplete="organization-title"
          />
        </label>
        <label className="flex flex-col text-sm font-medium text-slate-900 dark:text-slate-100">
          Primary focus area
          <select
            value={form.focusArea}
            onChange={handleChange("focusArea")}
            className="mt-2 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            name="focusArea"
          >
            {focusAreas.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col text-sm font-medium text-slate-900 dark:text-slate-100">
          Service tier interest
          <select
            value={form.desiredTier}
            onChange={handleChange("desiredTier")}
            className="mt-2 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            name="desiredTier"
          >
            {tiers.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col text-sm font-medium text-slate-900 dark:text-slate-100">
          Notes (optional)
          <textarea
            value={form.notes}
            onChange={handleChange("notes")}
            placeholder="Share context, goals, or timeline expectations"
            className="mt-2 min-h-[112px] rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            name="notes"
          />
        </label>
      </div>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={disableSubmit}
          className="inline-flex w-full items-center justify-center rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-slate-950 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {status === "submitting" ? "Joining waitlist..." : "Join the waitlist"}
        </button>
        <StatusMessage status={status} />
      </div>
    </form>
  );
}

function StatusMessage({ status }: { status: SubmissionStatus }) {
  if (status === "success") {
    return <p className="text-sm text-emerald-500">Saved! We will reach out as soon as onboarding opens.</p>;
  }
  if (status === "error") {
    return <p className="text-sm text-rose-500">Something went wrong. Please try again.</p>;
  }
  return <p className="text-sm text-slate-500">We respond within one business day for executive and enterprise cohorts.</p>;
}

export function WaitlistSection() {
  return (
    <section id="waitlist" className="relative isolate overflow-hidden bg-slate-900 py-16 sm:py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),_transparent_55%)]" aria-hidden="true" />
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-6 text-white sm:px-10">
        <div className="space-y-4 text-center sm:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-cyan-300">Stay in the loop</p>
          <h2 className="text-3xl font-bold sm:text-4xl">Reserve your spot in the AI Architect Academy</h2>
          <p className="max-w-3xl text-base text-cyan-100/90">
            Tell us where you want the assistant, curriculum, and advisory services to plug into your roadmap. We will ship the
            Supabase-backed workspace shortly—sign up now and we will notify you the moment the beta opens.
          </p>
        </div>
        <div className="rounded-3xl border border-cyan-500/40 bg-slate-950/60 p-6 shadow-[0_0_80px_rgba(34,211,238,0.12)] backdrop-blur sm:p-10">
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
}
