"use client";

import { DataEnvironmentProvider } from "@/lib/data/data-environment";

export function Providers({ children }: { children: React.ReactNode }) {
  return <DataEnvironmentProvider>{children}</DataEnvironmentProvider>;
}
