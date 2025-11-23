import { useMutation } from "@tanstack/react-query";
import { rejectAd } from "@/components/utils/api";

export const useRejectAd = () => {
  return useMutation({
    mutationFn: rejectAd,
  });
};
