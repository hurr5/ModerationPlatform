import { useMutation } from "@tanstack/react-query";
import { approveAd } from "@/components/utils/api";

export const useApproveAd = () => {
  return useMutation({
    mutationFn: (id: string) => approveAd(id),
  });
};
