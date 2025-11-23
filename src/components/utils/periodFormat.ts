export const periodFormat = (range: "today" | "week" | "month") => {
  const end = new Date();
  const start = new Date();

  if (range === "today") {
    return {
      start: end.toISOString().slice(0, 10),
      end: end.toISOString().slice(0, 10),
    };
  }

  if (range === "week") {
    start.setDate(end.getDate() - 7);
  }

  if (range === "month") {
    start.setDate(end.getDate() - 30);
  }

  return {
    start: start.toISOString().slice(0, 10),
    end: end.toISOString().slice(0, 10),
  };
};