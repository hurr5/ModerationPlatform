import { useMutation } from "@tanstack/react-query";
import { requestAdChanges, type RejectionData } from "@/components/utils/api";

export const useRequestAdChanges = () => {
  return useMutation({
    mutationFn: (data: RejectionData) => requestAdChanges(data),
  });
};
