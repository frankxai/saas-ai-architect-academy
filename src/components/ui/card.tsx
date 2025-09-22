import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

export type CardProps = {
  title?: string;
  subtitle?: string;
  icon?: ReactNode;
  footer?: ReactNode;
  className?: string;
  tone?: "default" | "accent" | "outline";
} & ComponentProps<"div">;

const toneStyles: Record<NonNullable<CardProps["tone"]>, string> = {
  default: "bg-slate-950/80 border-white/10",
  accent: "bg-sky-500/10 border-sky-400/25",
  outline: "bg-transparent border-white/15",
};

export function Card({
  title,
  subtitle,
  icon,
  footer,
  children,
  className,
  tone = "default",
  ...rest
}: CardProps) {
  return (
    <div
      className={cn(
        "relative flex h-full flex-col gap-4 rounded-3xl border px-6 py-6 text-sm text-slate-200",
        "shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:shadow-black/30",
        toneStyles[tone],
        className,
      )}
      {...rest}
    >
      {(title || icon) && (
        <div className="flex items-start gap-3">
          {icon && <span className="mt-1 text-lg text-cyan-200">{icon}</span>}
          <div className="space-y-2">
            {title && <h3 className="text-lg font-semibold text-slate-100">{title}</h3>}
            {subtitle && <p className="text-xs text-slate-400">{subtitle}</p>}
          </div>
        </div>
      )}
      {children && <div className="flex-1 space-y-3 text-sm text-slate-300">{children}</div>}
      {footer && <div className="mt-auto pt-3 text-xs text-slate-400">{footer}</div>}
    </div>
  );
}
