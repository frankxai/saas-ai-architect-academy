"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "ai-architect-progress";

export type LearnerFocusArea = "agents" | "prototyping" | "operations" | "governance" | "story";

export type LearnerProgressState = {
  focusArea: LearnerFocusArea;
  checkpoints: Record<string, boolean>;
  lastUpdated: string;
};

const defaultState: LearnerProgressState = {
  focusArea: "agents",
  checkpoints: {},
  lastUpdated: new Date().toISOString(),
};

function readState(): LearnerProgressState {
  if (typeof window === "undefined") return defaultState;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) return defaultState;
    const parsed = JSON.parse(stored) as LearnerProgressState;
    return {
      focusArea: parsed.focusArea ?? defaultState.focusArea,
      checkpoints: parsed.checkpoints ?? {},
      lastUpdated: parsed.lastUpdated ?? defaultState.lastUpdated,
    };
  } catch (error) {
    console.warn("Unable to parse learner progress state", error);
    return defaultState;
  }
}

function writeState(next: LearnerProgressState) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
}

export function useLearnerProgress() {
  const [state, setState] = useState<LearnerProgressState>(() => readState());

  useEffect(() => {
    setState(readState());
  }, []);

  const updateState = useCallback((updater: (prev: LearnerProgressState) => LearnerProgressState) => {
    setState((prev) => {
      const next = updater(prev);
      writeState(next);
      return next;
    });
  }, []);

  const toggleCheckpoint = useCallback(
    (id: string) => {
      updateState((prev) => {
        const checkpoints = { ...prev.checkpoints, [id]: !prev.checkpoints[id] };
        return {
          ...prev,
          checkpoints,
          lastUpdated: new Date().toISOString(),
        };
      });
    },
    [updateState],
  );

  const setFocusArea = useCallback(
    (focusArea: LearnerFocusArea) => {
      updateState((prev) => ({
        ...prev,
        focusArea,
        lastUpdated: new Date().toISOString(),
      }));
    },
    [updateState],
  );

  const completionRatio = useMemo(() => {
    const values = Object.values(state.checkpoints);
    if (!values.length) return 0;
    const completed = values.filter(Boolean).length;
    return completed / values.length;
  }, [state.checkpoints]);

  return {
    state,
    setFocusArea,
    toggleCheckpoint,
    completionRatio,
  };
}

export function formatCompletion(ratio: number) {
  return Math.round(ratio * 100).toString().concat("%");
}
