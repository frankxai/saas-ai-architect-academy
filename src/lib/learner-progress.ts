"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

import { useLearnerProgressAdapter } from "./data/data-environment";
import type { LearnerFocusArea, LearnerProgressSnapshot } from "./data/types";

export type { LearnerFocusArea } from "./data/types";

export type LearnerProgressState = LearnerProgressSnapshot;

const defaultState: LearnerProgressSnapshot = {
  focusArea: "agents",
  checkpoints: {},
  lastUpdated: new Date().toISOString(),
};

export function useLearnerProgress() {
  const adapter = useLearnerProgressAdapter();
  const [state, setState] = useState<LearnerProgressSnapshot>(defaultState);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    let active = true;

    adapter
      .load()
      .then((snapshot) => {
        if (!active) return;
        setState(snapshot);
      })
      .catch((error) => {
        console.warn("Failed to load learner progress", error);
      })
      .finally(() => {
        if (active) {
          setIsHydrated(true);
        }
      });

    const unsubscribe = adapter.subscribe?.((snapshot) => {
      setState(snapshot);
    });

    return () => {
      active = false;
      unsubscribe?.();
    };
  }, [adapter]);

  const persist = useCallback(
    (snapshot: LearnerProgressSnapshot) => {
      void adapter.save(snapshot).catch((error) => {
        console.error("Failed to persist learner progress", error);
      });
    },
    [adapter],
  );

  const updateState = useCallback(
    (updater: (prev: LearnerProgressSnapshot) => LearnerProgressSnapshot) => {
      setState((prev) => {
        const next = updater(prev);
        persist(next);
        return next;
      });
    },
    [persist],
  );

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
    isHydrated,
  };
}

export function formatCompletion(ratio: number) {
  return Math.round(ratio * 100)
    .toString()
    .concat("%");
}
