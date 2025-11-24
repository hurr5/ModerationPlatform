import { useFetchDecisions } from "@/hooks/useFetchDecisions";
import { Chart, useChart } from "@chakra-ui/charts";
import { Cell, Pie, PieChart } from "recharts";

export const DecisionsChart = () => {
  const { data } = useFetchDecisions("month");

  const chart = useChart({
    data: [
      { name: "Одобрено", value: data?.approved ?? 0, color: "green.solid" },
      { name: "Отказано", value: data?.rejected ?? 0, color: "red.solid" },
    ],
  });

  return (
    <Chart.Root boxSize="200px" mx="auto" chart={chart}>
      <PieChart>
        <Pie
          isAnimationActive={false}
          data={chart.data}
          dataKey={chart.key("value")}
          outerRadius={100}
          innerRadius={0}
          labelLine={false}
          label={({ name, index }) => {
            const { value } = chart.data[index ?? -1];
            if (value === undefined) return `${name}: 0%`;
            const percent = value / chart.getTotal("value");
            return `${name}: ${(percent * 100).toFixed(1)}%`;
          }}
        >
          {chart.data.map((item) => {
            return <Cell key={item.name} fill={chart.color(item.color)} />;
          })}
        </Pie>
      </PieChart>
    </Chart.Root>
  );
};
