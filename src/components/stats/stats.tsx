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
} from "@chakra-ui/react";

import { useColorModeValue } from "@/components/ui/color-mode";

const statusOptions = ["В ожидании", "Одобрено", "Отказано"];

export const Stats = () => {
  const bg = useColorModeValue("gray.300", "gray.500");
  const text = useColorModeValue("black", "white");

  return (
    <Center w="100%" py="10">
      <Box w="full" maxW="7xl" bg={bg} p="10" borderRadius="2xl">
        <Heading textAlign="center" size="3xl" mb="6">
          Алексей Петров
        </Heading>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb="4"
        >
          <Text>Выберите период статистики:</Text>
          <Button variant="outline">Сегодня</Button>
          <Button variant="outline">7 дней</Button>
          <Button variant="outline">30 дней</Button>
        </Box>
      </Box>
    </Center>
  );
};
