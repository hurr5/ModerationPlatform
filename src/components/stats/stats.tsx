import { useState } from "react";
import {
  Box,
  Center,
  Heading,
  Text,
  Button,
  SimpleGrid,
  GridItem,
} from "@chakra-ui/react";

import { useColorModeValue } from "@/components/ui/color-mode";
import { ActivityChart, CategoriesChart, DecisionsChart } from "./charts";
import { useFetchStats } from "@/hooks/useFetchStats";

export const Stats = () => {
  const { data, isLoading, error } = useFetchStats();

  const [range, setRange] = useState<"today" | "week" | "month">("week");

  const bg = useColorModeValue("gray.300", "gray.500");
  const statBg = useColorModeValue("whiteAlpha.500", "blackAlpha.500");

  if (isLoading) return <Heading>Skeleton</Heading>;
  if (error || !data) return <Heading>Ничего не найдено</Heading>;

  const periodReviewed =
    range === "today"
      ? data.statistics.todayReviewed
      : range === "week"
      ? data.statistics.thisWeekReviewed
      : data.statistics.thisMonthReviewed;

  // Подсчет одобренных и отклоненных объявлений
  const approved = Math.round(
    periodReviewed * (data.statistics.approvalRate / 100)
  );

  const rejected = Math.round(
    periodReviewed * ((100 - data.statistics.approvalRate) / 100)
  );

  return (
    <Center w="100%" py="10">
      <Box w="full" maxW="7xl" bg={bg} p="10" borderRadius="2xl">
        <Heading textAlign="center" size="3xl" mb="6">
          {data.name} - {data.role}
        </Heading>

        {/* Выбор периода */}
        <Box display="flex" gap={5} mb={4} alignItems="center">
          <Text>Выберите период статистики:</Text>

          <Button
            variant={range === "today" ? "solid" : "outline"}
            onClick={() => setRange("today")}
          >
            Сегодня
          </Button>

          <Button
            variant={range === "week" ? "solid" : "outline"}
            onClick={() => setRange("week")}
          >
            7 дней
          </Button>

          <Button
            variant={range === "month" ? "solid" : "outline"}
            onClick={() => setRange("month")}
          >
            30 дней
          </Button>
        </Box>

        <SimpleGrid columns={2} gap={10}>
          {/* Проверено */}
          <GridItem>
            <Box bg={statBg} height="60" rounded="xl" p={5}>
              <Heading size="lg">Проверено</Heading>
              <Text textStyle="7xl" textAlign="center" mt={5}>
                {periodReviewed}
              </Text>
            </Box>
          </GridItem>

          {/* Одобрено */}
          <GridItem>
            <Box bg={statBg} height="60" rounded="xl" p={5}>
              <Heading size="lg">Одобрено</Heading>
              <Text textStyle="7xl" textAlign="center" mt={5}>
                {approved}
              </Text>
            </Box>
          </GridItem>

          {/* Отклонено */}
          <GridItem>
            <Box bg={statBg} height="60" rounded="xl" p={5}>
              <Heading size="lg">Отклонено</Heading>
              <Text textStyle="7xl" textAlign="center" mt={5}>
                {rejected}
              </Text>
            </Box>
          </GridItem>

          {/* Среднее время */}
          <GridItem>
            <Box bg={statBg} height="60" rounded="xl" p={5}>
              <Heading size="lg">Среднее время</Heading>
              <Text textStyle="7xl" textAlign="center" mt={5}>
                {data.statistics.averageReviewTime} секунд
              </Text>
            </Box>
          </GridItem>

          {/* графики — без изменений */}
          <GridItem colSpan={2}>
            <Box bg={statBg} rounded="xl" p={5}>
              <Heading size="lg">График активности</Heading>
              <ActivityChart />
            </Box>
          </GridItem>

          <GridItem colSpan={2}>
            <Box bg={statBg} rounded="xl" p={5}>
              <Heading size="lg">Распределение решений</Heading>
              <DecisionsChart />
            </Box>
          </GridItem>

          <GridItem colSpan={2}>
            <Box bg={statBg} rounded="xl" p={5}>
              <Heading size="lg">График по категориям</Heading>
              <CategoriesChart />
            </Box>
          </GridItem>
        </SimpleGrid>
      </Box>
    </Center>
  );
};
