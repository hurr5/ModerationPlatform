import { useMutation, useQueryClient } from "@tanstack/react-query";
import { requestAdChanges, type RejectionData } from "@/components/utils/api";

export const useRequestAdChanges = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: RejectionData) => requestAdChanges(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["ads"] });
    },
  });
};
