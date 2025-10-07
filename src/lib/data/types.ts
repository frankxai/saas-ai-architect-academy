export type LearnerFocusArea = "agents" | "prototyping" | "operations" | "governance" | "story";

export interface LearnerProgressSnapshot {
  focusArea: LearnerFocusArea;
  checkpoints: Record<string, boolean>;
  lastUpdated: string;
}

export interface LearnerProgressAdapter {
  load(): Promise<LearnerProgressSnapshot>;
  save(snapshot: LearnerProgressSnapshot): Promise<void>;
  subscribe?(callback: (snapshot: LearnerProgressSnapshot) => void): () => void;
}

export interface WaitlistSubmission {
  fullName: string;
  email: string;
  role: string;
  focusArea: LearnerFocusArea;
  desiredTier: "workspace" | "advisory" | "creator" | "enterprise";
  notes?: string;
  submittedAt: string;
}

export interface WaitlistAdapter {
  submit(entry: WaitlistSubmission): Promise<void>;
}

export interface DataEnvironment {
  learnerProgress: LearnerProgressAdapter;
  waitlist: WaitlistAdapter;
}
