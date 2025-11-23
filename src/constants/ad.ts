export const statusLabels = {
  pending: "Ожидание",
  approved: "Одобрено",
  rejected: "Отклонено",
};

export const statuses = [
  { value: "pending", label: "Ожидание" },
  { value: "approved", label: "Одобрено" },
  { value: "rejected", label: "Отклонено" },
] as const;

export const priorityLabels = {
  urgent: "срочный",
  normal: "обычный",
};

export const parameters = [
  "page",
  "limit",
  "categoryId",
  "minPrice",
  "maxPrice",
  "search",
  "sortBy",
  "sortOrder",
] as const;
