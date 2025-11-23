export interface SellerInfo {
  id: string;
  name: string;
  rating: number;
  totalAds: number;
  registeredAt: string;
}

export interface ModerationAction {
  id: string;
  moderatorId: string;
  moderatorName: string;
  action: string; // "approved" | "rejected" | ...
  reason: string | null;
  comment: string | null;
  timestamp: string;
}

export interface AdCharacteristics {
  [key: string]: string | number | boolean | null;
}

export interface ApprovedAd {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  categoryId: string;
  status: string;
  priority: number;
  createdAt: string;
  updatedAt: string;
  images: string[];
  seller: SellerInfo;
  characteristics: AdCharacteristics;
  moderationHistory: ModerationAction[];
}

export interface ApproveAdResponse {
  message: string;
  ad: ApprovedAd;
}
