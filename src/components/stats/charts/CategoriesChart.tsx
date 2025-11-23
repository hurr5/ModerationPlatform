import { useFetchCategories } from "@/hooks/useFetchCategories";
import { BarList, type BarListData, useChart } from "@chakra-ui/charts";
import { useMemo } from "react";

export const CategoriesChart = () => {
  const { data, isLoading, error } = useFetchCategories("month");

  const chartData: BarListData = useMemo(() => {
    if (!data) return [];

    return Object.entries(data).map(([name, value]) => ({
      name,
      value,
    }));
  }, [data]);

  const chart = useChart<BarListData>({
    sort: { by: "value", direction: "desc" },
    data: chartData,
    series: [{ name: "name", color: "cyan.500" }],
  });

  if (isLoading) return null;
  if (error || !data) return null;

  return (
    <BarList.Root chart={chart}>
      <BarList.Content>
        <BarList.Bar />
        <BarList.Value />
      </BarList.Content>
    </BarList.Root>
  );
};
