import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  actions?: ReactNode;
  className?: string;
};

export function SectionHeader({ eyebrow, title, subtitle, align = "left", actions, className }: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        align === "left" && "items-start text-left",
        className,
      )}
    >
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-[0.4em] text-cyan-200">{eyebrow}</span>
      )}
      <div className="flex w-full flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
          {subtitle && <p className="max-w-2xl text-sm text-slate-300 md:text-base">{subtitle}</p>}
        </div>
        {actions && <div className="flex flex-col gap-3 text-sm md:items-end">{actions}</div>}
      </div>
    </div>
  );
}

export type SectionShellProps = {
  id?: string;
  children: ReactNode;
  className?: string;
};

export function SectionShell({ id, children, className }: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] px-6 py-12 shadow-lg shadow-black/20 md:px-10",
        className,
      )}
    >
      {children}
    </section>
  );
}
