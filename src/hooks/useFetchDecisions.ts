import { useQuery } from "@tanstack/react-query";

import { fetchAdById } from "@/components/utils/api";

export const useFetchDecisions = (id: number) => {
  return useQuery({
    queryKey: ["ads", id],
    queryFn: () => fetchAdById(id),
    refetchOnWindowFocus: false,
  });
};
