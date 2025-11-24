import { useFetchActivity } from "@/hooks/useFetchActivity";
import { Chart, useChart } from "@chakra-ui/charts";
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";

export const ActivityChart = () => {
  const {
    data: statsData,
  } = useFetchActivity("week");
  const chart = useChart({
    data: statsData ?? [],
    series: [
      { name: "approved", color: "teal.solid", label: "Одобрено" },
      { name: "rejected", color: "green.500", label: "Отказано" },
    ],
  });

  return (
    <Chart.Root maxH="sm" chart={chart}>
      <BarChart data={chart.data}>
        <CartesianGrid stroke={chart.color("border.muted")} vertical={false} />
        <XAxis
          axisLine={false}
          tickLine={false}
          dataKey={chart.key("date")}
          tickFormatter={chart.formatDate({ month: "short", day: "2-digit" })}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tickFormatter={chart.formatNumber({
            style: "decimal",
            notation: "compact",
          })}
        />
        <Tooltip
          cursor={{ fill: chart.color("bg.muted") }}
          animationDuration={0}
          content={<Chart.Tooltip />}
        />
        {chart.series.map((item) => (
          <Bar
            isAnimationActive={false}
            key={item.name}
            dataKey={chart.key(item.name)}
            fill={chart.color(item.color)}
          />
        ))}
      </BarChart>
    </Chart.Root>
  );
};
