export type ModerationRecordAction = "approved" | "rejected";

export interface ModerationRecord {
  id: number;
  moderatorId: number;
  moderatorName: string;
  action: ModerationRecordAction;
  reason: string | null;
  comment: string | null;
  timestamp: Date;
}
