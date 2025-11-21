import type { Seller } from "./seller";

export type AdStatus = "pending" | "rejected" | "approved";

export type AdPriority = "normal" | "urgent";

type Dict = {
  [key: string]: string;
};

export type Ad = {
  id: number;
  title: string;
  desiption: string;
  price: number;
  categoryId: number;
  status: AdStatus;
  priority: AdPriority;
  createdAt: Date;
  updatedAt: Date;
  images: string[];
  seller: Seller;
  characteristics: Dict;
};
