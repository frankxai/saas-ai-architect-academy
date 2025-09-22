import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type PageShellProps = {
  children: ReactNode;
  className?: string;
};

export function PageShell({ children, className }: PageShellProps) {
  return (
    <div
      className={cn(
        "min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950 text-slate-100",
        className,
      )}
    >
      <div className="pointer-events-none fixed inset-0 select-none opacity-50">
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -right-20 top-1/3 h-64 w-64 rounded-full bg-indigo-500/15 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />
      </div>
      <div className="relative z-10 mx-auto max-w-6xl px-4 pb-32 pt-12 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
}
