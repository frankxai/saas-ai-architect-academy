import type { DataEnvironment, LearnerProgressAdapter, LearnerProgressSnapshot, WaitlistAdapter } from "../types";

const fallbackSnapshot: LearnerProgressSnapshot = {
  focusArea: "agents",
  checkpoints: {},
  lastUpdated: new Date().toISOString(),
};

const staticLearnerProgressAdapter: LearnerProgressAdapter = {
  async load() {
    return fallbackSnapshot;
  },
  async save() {
    if (process.env.NODE_ENV !== "production") {
      console.warn("Learner progress save called without a client environment. No data persisted.");
    }
  },
  subscribe() {
    return () => undefined;
  },
};

const staticWaitlistAdapter: WaitlistAdapter = {
  async submit() {
    if (process.env.NODE_ENV !== "production") {
      console.warn("Waitlist submission attempted without a client environment. No data persisted.");
    }
  },
};

export function createStaticDataEnvironment(): DataEnvironment {
  return {
    learnerProgress: staticLearnerProgressAdapter,
    waitlist: staticWaitlistAdapter,
  };
}
