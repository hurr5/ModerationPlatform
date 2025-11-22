import { useState } from "react";
import {
  Box,
  Center,
  Heading,
  Grid,
  Checkbox,
  Text,
  NativeSelect,
  Button,
  Input,
  NumberInput,
  Stack,
  SimpleGrid,
  GridItem
} from "@chakra-ui/react";

import { useColorModeValue } from "@/components/ui/color-mode";

const statusOptions = ["В ожидании", "Одобрено", "Отказано"];

export const Stats = () => {
  const bg = useColorModeValue("gray.300", "gray.500");
  const statBg = useColorModeValue("whiteAlpha.500", "blackAlpha.500");
  const text = useColorModeValue("black", "white");

  return (
    <Center w="100%" py="10">
      <Box w="full" maxW="7xl" bg={bg} p="10" borderRadius="2xl">
        <Heading textAlign="center" size="3xl" mb="6">
          Алексей Петров
        </Heading>
        <Box
          display="flex"
          justifyContent="flex-start"
          gap={5}
          alignItems="center"
          mb="4"
        >
          <Text>Выберите период статистики:</Text>
          <Button variant="outline">Сегодня</Button>
          <Button variant="outline">7 дней</Button>
          <Button variant="outline">30 дней</Button>
        </Box>
        <SimpleGrid columns={2} gap={10}>
          <GridItem colSpan={{ base: 1 }}>
            <Box bg={statBg} height="60" rounded="xl" p={5}>
              <Heading size="lg">Проверено</Heading>
            </Box>
          </GridItem>
          <GridItem colSpan={{ base: 1 }}>
            <Box bg={statBg} height="60" rounded="xl" p={5}>
              <Heading size="lg">Одобрено</Heading>
            </Box>
          </GridItem>
          <GridItem colSpan={{ base: 1 }}>
            <Box bg={statBg} height="60" rounded="xl" p={5}>
              <Heading size="lg">Отклонено</Heading>
            </Box>

          </GridItem>
          <GridItem colSpan={{ base: 1 }}>
            <Box bg={statBg} height="60" rounded="xl" p={5}>
              <Heading size="lg">Среднее время</Heading>
            </Box>

          </GridItem>
          <GridItem colSpan={{ base: 2 }}>
            <Box bg={statBg} height="60" rounded="xl" p={5}>
              <Heading size="lg">График активности (x дней)</Heading>
            </Box>
          </GridItem>
          <GridItem colSpan={{ base: 2 }}>
            <Box bg={statBg} height="60" rounded="xl" p={5}>
              <Heading size="lg">Распределение решений</Heading>
            </Box>
          </GridItem>
        </SimpleGrid>
      </Box>
    </Center>
  );
};
