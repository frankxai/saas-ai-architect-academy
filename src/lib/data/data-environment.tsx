"use client";

import { createContext, useContext, useMemo } from "react";

import { createLocalDataEnvironment } from "./adapters/local-storage";
import { createStaticDataEnvironment } from "./adapters/static";
import type { DataEnvironment, LearnerProgressAdapter, WaitlistAdapter } from "./types";

const DataEnvironmentContext = createContext<DataEnvironment | null>(null);

export function DataEnvironmentProvider({ children }: { children: React.ReactNode }) {
  const value = useMemo<DataEnvironment>(() => {
    if (typeof window === "undefined") {
      return createStaticDataEnvironment();
    }
    return createLocalDataEnvironment();
  }, []);

  return <DataEnvironmentContext.Provider value={value}>{children}</DataEnvironmentContext.Provider>;
}

function useDataEnvironment() {
  const context = useContext(DataEnvironmentContext);
  if (!context) {
    throw new Error("DataEnvironmentProvider is missing. Wrap your app with the provider before using data hooks.");
  }
  return context;
}

export function useLearnerProgressAdapter(): LearnerProgressAdapter {
  return useDataEnvironment().learnerProgress;
}

export function useWaitlistAdapter(): WaitlistAdapter {
  return useDataEnvironment().waitlist;
}
