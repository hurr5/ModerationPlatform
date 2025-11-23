import type { ModerationRecord } from "./moderation";
import type { Seller } from "./seller";

export type AdStatus = "pending" | "rejected" | "approved";

export type AdPriority = "normal" | "urgent";

export interface Ad {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  categoryId: number;
  status: AdStatus;
  priority: AdPriority;
  createdAt: Date;
  updatedAt: Date;
  images: string[];
  seller: Seller;
  characteristics: Record<string, string>;
  moderationHistory: ModerationRecord[];
}
