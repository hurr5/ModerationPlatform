import type { Ad, AdStatus } from "@/types/ad";
import type { Pagination } from "@/types/pagination";
import type {ActivityStat}from "@/types/charts"
import { parameters } from "@/constants/ad";

export interface FetchAdsInput {
  page?: number;
  limit?: number;
  status?: AdStatus[];
  categoryId?: number;
  minPrice?: number;
  maxPrice?: number;
  search?: string;
  sortBy?: "createdAt" | "price" | "priority";
  sortOrder?: "asc" | "desc";
}

interface FetchAdsResponse {
  ads: Ad[];
  pagination: Pagination;
}

// Получение объявлений
export const fetchAds = async (
  data: FetchAdsInput
): Promise<FetchAdsResponse> => {
  const params = new URLSearchParams();

  parameters.forEach((param) => {
    if (data[param] !== undefined) params.set(param, data[param].toString());
  });

  if (data.status?.length) {
    data.status.forEach((s) => params.append("status", s));
  }

  const url = `${import.meta.env.VITE_API_ENDPOINT}/ads?${params.toString()}`;

  console.log("All ads", url);
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Не удалось получить объявления");
  }

  return response.json();
};

// Получение объявления по ID
export const fetchAdById = async (id: number): Promise<Ad> => {
  const url = `${import.meta.env.VITE_API_ENDPOINT}/ads/${id}`;

  console.log("Ad by ID", url);
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Не удалось получить объявление");
  }

  return response.json();
};


// Получение статистики
export const fetchStats = async () => {
  const url = `${import.meta.env.VITE_API_ENDPOINT}/moderators/me`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Не удалось получить статистику");
  }

  return response.json();
};

export type FetchActivityResponse = ActivityStat[];

// График активоности
export const = async (
  startDate: string,
  endDate: string
): Promise<FetchActivityResponse> => {
  const params = new URLSearchParams();

  params.append("startDate", startDate);
  params.append("endDate", endDate);

  const url = `${
    import.meta.env.VITE_API_ENDPOINT
  }/stats/chart/activity?${params.toString()}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Не удалось получить статистику");
  }

  return response.json();
};

// График решений
export const fetchDecisions = async (startDate: string, endDate: string) => {
  const params = new URLSearchParams();

  params.append("startDate", startDate);
  params.append("endDate", endDate);

  const url = `${
    import.meta.env.VITE_API_ENDPOINT
  }/stats/chart/decisions?${params.toString()}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Не удалось получить статистику");
  }

  return response.json();
};

// График категорий
export const fetchCategories = async (startDate: string, endDate: string) => {
  const params = new URLSearchParams();

  params.append("startDate", startDate);
  params.append("endDate", endDate);

  const url = `${
    import.meta.env.VITE_API_ENDPOINT
  }/stats/chart/categories?${params.toString()}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Не удалось получить статистику");
  }

  return response.json();
};
