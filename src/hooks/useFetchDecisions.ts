import { useQuery } from "@tanstack/react-query";
import {
  fetchDecisions,
  type FetchDecisionsResponse,
} from "@/components/utils/api";
import { periodFormat } from "@/components/utils/periodFormat";

export const useFetchDecisions = (range: "today" | "week" | "month") => {
  const { start, end } = periodFormat(range);

  return useQuery<FetchDecisionsResponse>({
    queryKey: ["decisions", start, end],
    queryFn: () => fetchDecisions(start, end),
    refetchOnWindowFocus: false,
  });
};
