import { useMutation, useQueryClient } from "@tanstack/react-query";
import { approveAd } from "@/components/utils/api";

export const useApproveAd = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => approveAd(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["ads"] });
    },
  });
};
