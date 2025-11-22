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

import { ChevronUp } from "lucide-react";
import { ListCard } from "./ListCard";

const statusOptions = ["В ожидании", "Одобрено", "Отказано"];

export const List = () => {
  const [open, setOpen] = useState<boolean>(true);
  const bg = useColorModeValue("gray.300", "gray.500");
  const text = useColorModeValue("black", "white");

  return (
    <Center w="100%" py="10">
      <Box w="full" maxW="7xl" bg={bg} p="10" borderRadius="2xl">
        <Heading textAlign="center" size="3xl" mb="6">
          Список объявлений
        </Heading>

        {/* Заголовок фильтров */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb="4"
        >
          <Box
            display="flex"
            alignItems="center"
            gap="3"
            cursor="pointer"
            onClick={() => setOpen(!open)}
          >
            <Heading size="2xl">Фильтры</Heading>

            <ChevronUp
              size={32}
              className={`transition-transform duration-300 ${
                open ? "rotate-180" : ""
              }`}
            />
          </Box>

          <Button
            variant="ghost"
            color={text}
            onClick={() => console.log("reset")}
          >
            Сбросить
          </Button>
        </Box>

        {/* Блок фильтров */}
        <Box
          overflow="hidden"
          transition="all 0.3s ease"
          maxH={open ? "600px" : "0px"}
          opacity={open ? 1 : 0}
        >
          <Grid templateColumns="repeat(3, 1fr)" gap="4" mt="4">
            {/* Статус */}
            <Box border="2px solid rgba(0,0,0,0.5)" p="4" borderRadius="2xl">
              <Heading size="lg" mb="2">
                Статус
              </Heading>

              <Stack align="flex-start" flex="1" gap="4">
                {statusOptions.map((status) => (
                  <Checkbox.Root key={status} defaultChecked={false}>
                    <Checkbox.HiddenInput />
                    <Checkbox.Control
                      borderColor="whiteAlpha.800"
                      colorPalette={"blue"}
                    />
                    <Checkbox.Label>{status}</Checkbox.Label>
                  </Checkbox.Root>
                ))}
              </Stack>
            </Box>

            {/* Категория */}
            <Box border="2px solid rgba(0,0,0,0.5)" p="4" borderRadius="2xl">
              <Heading size="lg" mb="2">
                Категория
              </Heading>

              <NativeSelect.Root>
                <NativeSelect.Field placeholder="Категория">
                  <option value="1">Ноутбуки</option>
                  <option value="2">Телевизоры</option>
                  <option value="3">Смартфоны</option>
                </NativeSelect.Field>
              </NativeSelect.Root>
            </Box>

            {/* Цена */}
            <Box border="2px solid rgba(0,0,0,0.5)" p="4" borderRadius="2xl">
              <Heading size="lg" mb="2">
                Цена
              </Heading>
              <div className="flex flex-col gap-5">
                <NumberInput.Root min={0}>
                  <NumberInput.Control>
                    <NumberInput.IncrementTrigger />
                    <NumberInput.DecrementTrigger />
                  </NumberInput.Control>
                  <NumberInput.Input placeholder="Сумма от" />
                </NumberInput.Root>
                <NumberInput.Root min={0}>
                  <NumberInput.Control>
                    <NumberInput.IncrementTrigger />
                    <NumberInput.DecrementTrigger />
                  </NumberInput.Control>
                  <NumberInput.Input placeholder="Сумма до" />
                </NumberInput.Root>
              </div>
            </Box>

            {/* Поиск */}
            <Box
              border="2px solid rgba(0,0,0,0.5)"
              p="4"
              borderRadius="2xl"
              gridColumn="span 3"
            >
              <Heading size="lg" mb="2">
                Поиск объявления
              </Heading>

              <Input placeholder="Введите название объявления" />
            </Box>
          </Grid>
        </Box>
        {/* Карточка под фильтрами */}
        <Box mt="6">
          <ListCard status="approved" category="Машины" priority="urgent" />
          <ListCard status="rejected" category="Лодки" priority="normal" />
          <ListCard status="pending" category="Смартфоны" priority="normal" />
        </Box>
      </Box>
    </Center>
  );
};
