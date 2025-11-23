import { useQuery } from "@tanstack/react-query";

import { fetchAds, type FetchAdsInput } from "@/components/utils/api";
import { useDebounce } from "@/hooks/useDebounce";

export const useFetchAds = (params: FetchAdsInput) => {
  const debouncedParams = useDebounce(params, 400);

  return useQuery({
    queryKey: ["ads", debouncedParams],
    queryFn: () => fetchAds(debouncedParams),
    refetchOnWindowFocus: false,
  });
};
