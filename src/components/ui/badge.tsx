import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

const badgeStyles = {
  neutral: "bg-slate-800/80 text-slate-200 border border-white/10",
  accent: "bg-cyan-500/10 text-cyan-200 border border-cyan-400/30",
  highlight: "bg-emerald-500/15 text-emerald-200 border border-emerald-400/40",
} as const;

type BadgeTone = keyof typeof badgeStyles;

export type BadgeProps = ComponentProps<"span"> & {
  tone?: BadgeTone;
};

export function Badge({ tone = "neutral", className, children, ...rest }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] transition-colors",
        badgeStyles[tone],
        className,
      )}
      {...rest}
    >
      {children}
    </span>
  );
}
