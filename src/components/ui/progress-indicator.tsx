import type { CSSProperties } from "react";
import { cn } from "@/lib/cn";

export type ProgressIndicatorProps = {
  value: number; // 0 - 1
  label?: string;
  className?: string;
};

export function ProgressIndicator({ value, label, className }: ProgressIndicatorProps) {
  const safeValue = Math.min(Math.max(value, 0), 1);
  const percentage = Math.round(safeValue * 100);
  const style = {
    "--progress": percentage + "%",
  } as CSSProperties;

  return (
    <div className={cn("flex flex-col items-center gap-2", className)}>
      <div
        className="relative grid aspect-square w-24 place-content-center rounded-full border border-cyan-400/40 bg-slate-900/60 text-cyan-200"
        style={style}
      >
        <svg className="h-24 w-24 -rotate-90" viewBox="0 0 100 100" aria-hidden>
          <circle
            className="text-slate-700"
            stroke="currentColor"
            strokeWidth="10"
            fill="transparent"
            r="45"
            cx="50"
            cy="50"
            opacity={0.4}
          />
          <circle
            className="text-cyan-300 transition-all duration-500 ease-out"
            stroke="currentColor"
            strokeWidth="10"
            strokeLinecap="round"
            fill="transparent"
            r="45"
            cx="50"
            cy="50"
            strokeDasharray={Math.PI * 2 * 45}
            strokeDashoffset={(1 - safeValue) * Math.PI * 2 * 45}
          />
        </svg>
        <span className="absolute text-lg font-semibold text-cyan-100">{percentage}%</span>
      </div>
      {label && <span className="text-xs uppercase tracking-[0.3em] text-slate-400">{label}</span>}
    </div>
  );
}
