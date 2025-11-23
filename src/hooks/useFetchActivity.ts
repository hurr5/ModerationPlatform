import { useQuery } from "@tanstack/react-query";
import { fetchActivity } from "@/components/utils/api";
import { periodFormat } from "@/components/utils/periodFormat";

export const useFetchActivity = (range: "today" | "week" | "month") => {
  const { start, end } = periodFormat(range);

  return useQuery<FetchActivityResponse>({
    queryKey: ["activity", start, end],
    queryFn: () => fetchActivity(start, end),
    refetchOnWindowFocus: false,
  });
};
