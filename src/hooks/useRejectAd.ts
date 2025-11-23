import { useMutation, useQueryClient } from "@tanstack/react-query";
import { rejectAd } from "@/components/utils/api";

export const useRejectAd = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: rejectAd,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["ads"] });
    },
  });
};
