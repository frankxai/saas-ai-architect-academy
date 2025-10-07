"use client";

import type {
  DataEnvironment,
  LearnerProgressAdapter,
  LearnerProgressSnapshot,
  WaitlistAdapter,
  WaitlistSubmission,
} from "../types";

const PROGRESS_STORAGE_KEY = "ai-architect-progress";
const WAITLIST_STORAGE_KEY = "ai-architect-waitlist";

function readProgress(): LearnerProgressSnapshot {
  if (typeof window === "undefined") {
    return {
      focusArea: "agents",
      checkpoints: {},
      lastUpdated: new Date().toISOString(),
    };
  }

  try {
    const stored = window.localStorage.getItem(PROGRESS_STORAGE_KEY);
    if (!stored) {
      return {
        focusArea: "agents",
        checkpoints: {},
        lastUpdated: new Date().toISOString(),
      };
    }

    const parsed = JSON.parse(stored) as LearnerProgressSnapshot;
    return {
      focusArea: parsed.focusArea ?? "agents",
      checkpoints: parsed.checkpoints ?? {},
      lastUpdated: parsed.lastUpdated ?? new Date().toISOString(),
    };
  } catch (error) {
    console.warn("Unable to parse learner progress from localStorage", error);
    return {
      focusArea: "agents",
      checkpoints: {},
      lastUpdated: new Date().toISOString(),
    };
  }
}

function writeProgress(snapshot: LearnerProgressSnapshot) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(snapshot));
}

function readWaitlist(): WaitlistSubmission[] {
  if (typeof window === "undefined") return [];
  try {
    const stored = window.localStorage.getItem(WAITLIST_STORAGE_KEY);
    if (!stored) return [];
    const parsed = JSON.parse(stored) as WaitlistSubmission[];
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.warn("Unable to parse waitlist submissions from localStorage", error);
    return [];
  }
}

function writeWaitlist(entries: WaitlistSubmission[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(WAITLIST_STORAGE_KEY, JSON.stringify(entries));
}

export function createLocalLearnerProgressAdapter(): LearnerProgressAdapter {
  const subscribers = new Set<(snapshot: LearnerProgressSnapshot) => void>();
  let storageHandler: ((event: StorageEvent) => void) | null = null;

  const ensureStorageListener = () => {
    if (storageHandler || typeof window === "undefined") return;
    storageHandler = (event: StorageEvent) => {
      if (event.key !== PROGRESS_STORAGE_KEY) return;
      const snapshot = readProgress();
      subscribers.forEach((callback) => callback(snapshot));
    };
    window.addEventListener("storage", storageHandler);
  };

  const teardownStorageListener = () => {
    if (!storageHandler || typeof window === "undefined") return;
    window.removeEventListener("storage", storageHandler);
    storageHandler = null;
  };

  return {
    async load() {
      return readProgress();
    },
    async save(snapshot) {
      writeProgress(snapshot);
      subscribers.forEach((callback) => callback(snapshot));
    },
    subscribe(callback) {
      subscribers.add(callback);
      ensureStorageListener();
      return () => {
        subscribers.delete(callback);
        if (subscribers.size === 0) {
          teardownStorageListener();
        }
      };
    },
  };
}

export function createLocalWaitlistAdapter(): WaitlistAdapter {
  return {
    async submit(entry) {
      const entries = readWaitlist();
      entries.push(entry);
      writeWaitlist(entries);
    },
  };
}

export function createLocalDataEnvironment(): DataEnvironment {
  return {
    learnerProgress: createLocalLearnerProgressAdapter(),
    waitlist: createLocalWaitlistAdapter(),
  };
}
