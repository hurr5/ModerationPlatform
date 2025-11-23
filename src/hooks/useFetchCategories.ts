import { useQuery } from "@tanstack/react-query";
import {
  fetchCategories,
  type FetchCategoriesResponse,
} from "@/components/utils/api";
import { periodFormat } from "@/components/utils/periodFormat";

export const useFetchCategories = (range: "today" | "week" | "month") => {
  const { start, end } = periodFormat(range);

  return useQuery<FetchCategoriesResponse>({
    queryKey: ["categories", start, end],
    queryFn: () => fetchCategories(start, end),
    refetchOnWindowFocus: false,
  });
};
