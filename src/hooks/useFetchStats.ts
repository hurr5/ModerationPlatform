import { useQuery } from "@tanstack/react-query";
import { fetchStats } from "@/components/utils/api";

export const useFetchStats = () => {
  return useQuery({
    queryKey: ["stats"],
    queryFn: () => fetchStats(),
    refetchOnWindowFocus: false,
  });
};
