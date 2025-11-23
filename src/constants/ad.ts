export const statusLabels = {
  pending: "Ожидание",
  approved: "Одобрено",
  rejected: "Отклонено",
  draft: "Ожидает изменений",
  requestChanges: "Ожидает изменений",
};

export const statuses = [
  { value: "pending", label: "Ожидание" },
  { value: "approved", label: "Одобрено" },
  { value: "rejected", label: "Отклонено" },
  { value: "draft", label: "Ожидает изменений" },
  { value: "requestChanges", label: "Ожидает изменений" },
] as const;

export const sortByLabels = {
  createdAt: "дате создания",
  price: "цене",
  priority: "приоритету",
}

export const sortOrderLabels = {
  asc: "по возрастанию",
  desc: "по убыванию"
}

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
