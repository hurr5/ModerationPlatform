import { useState } from "react";
import { useFetchAds } from "@/hooks/useFetchAds";
import {
  Box,
  Center,
  Heading,
  Grid,
  Checkbox,
  Button,
  Input,
  InputGroup,
  NumberInput,
  Stack,
  Select,
  Portal,
  createListCollection,
  Menu,
} from "@chakra-ui/react";

import { useColorModeValue } from "@/components/ui/color-mode";

import { ChevronUp, RussianRuble } from "lucide-react";
import { ListCard } from "./ListCard";
import { ListPagination } from "./ListPagination";

import { statuses } from "@/constants/ad";
import type { AdStatus } from "@/types/ad";

export const List = () => {
  const [open, setOpen] = useState<boolean>(false);

  const [status, setStatus] = useState<AdStatus[]>([]);
  const [categoryId, setCategoryId] = useState<number>();
  const [minPrice, setMinPrice] = useState<number>();
  const [maxPrice, setMaxPrice] = useState<number>();
  const [search, setSearch] = useState<string>("");

  const [sortBy, setSortBy] = useState<"createdAt" | "price" | "priority">();
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">();

  const [page, setPage] = useState<number>(1);

  const resetFilters = () => {
    setStatus([]);
    setCategoryId(undefined);
    setMinPrice(undefined);
    setMaxPrice(undefined);
    setSearch("");

    setPage(1);
  };

  const categories = createListCollection({
    items: [
      { label: "Электроника", value: 0 },
      { label: "Недвижимость", value: 1 },
      { label: "Транспорт", value: 2 },
      { label: "Работа", value: 3 },
      { label: "Услуги", value: 4 },
      { label: "Животные", value: 5 },
      { label: "Мода", value: 6 },
      { label: "Детское", value: 7 },
    ],
  });

  const { data } = useFetchAds({
    status,
    categoryId,
    minPrice,
    maxPrice,
    search,
    sortBy,
    sortOrder,
    page,
  });

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
              className={`transition-transform duration-300 ${open ? "rotate-180" : ""
                }`}
            />
          </Box>

          <Button variant="ghost" color={text} onClick={resetFilters}>
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
                {statuses.map((status) => (
                  <Checkbox.Root
                    key={status.value}
                    defaultChecked={false}
                    onCheckedChange={({ checked }) => {
                      setStatus((prev) =>
                        checked
                          ? [...prev, status.value]
                          : prev.filter((v) => v !== status.value)
                      );
                      setPage(1);
                    }}
                  >
                    <Checkbox.HiddenInput />
                    <Checkbox.Control
                      borderColor="whiteAlpha.800"
                      colorPalette={"blue"}
                    />
                    <Checkbox.Label>{status.label}</Checkbox.Label>
                  </Checkbox.Root>
                ))}
              </Stack>
            </Box>

            {/* Категория */}
            <Box border="2px solid rgba(0,0,0,0.5)" p="4" borderRadius="2xl">
              <Heading size="lg" mb="2">
                Категория
              </Heading>

              <Select.Root
                collection={categories}
                size="sm"
                width="320px"
                onValueChange={(e) => {
                  setCategoryId(e.items[0].value);
                  setPage(1);
                }}
              >
                <Select.HiddenSelect />
                <Select.Control>
                  <Select.Trigger>
                    <Select.ValueText placeholder="Выберите категорию" />
                  </Select.Trigger>
                  <Select.IndicatorGroup>
                    <Select.Indicator />
                  </Select.IndicatorGroup>
                </Select.Control>
                <Portal>
                  <Select.Positioner>
                    <Select.Content>
                      {categories.items.map((category) => (
                        <Select.Item item={category} key={category.value}>
                          {category.label}
                          <Select.ItemIndicator />
                        </Select.Item>
                      ))}
                    </Select.Content>
                  </Select.Positioner>
                </Portal>
              </Select.Root>
            </Box>

            {/* Цена */}
            <Box border="2px solid rgba(0,0,0,0.5)" p="4" borderRadius="2xl">
              <Heading size="lg" mb="2">
                Цена
              </Heading>
              <div className="flex flex-col gap-5">
                <NumberInput.Root
                  onValueChange={(e) => {
                    setMinPrice(parseInt(e.value));
                    setPage(1);
                  }}
                  min={0}
                >
                  <NumberInput.Control />
                  <InputGroup startElement={<RussianRuble color="black" />}>
                    <NumberInput.Input placeholder="Сумма от" />
                  </InputGroup>
                </NumberInput.Root>
                <NumberInput.Root
                  onValueChange={(e) => {
                    setMaxPrice(parseInt(e.value));
                    setPage(1);
                  }}
                  min={0}
                >
                  <NumberInput.Control />
                  <InputGroup startElement={<RussianRuble color="black" />}>
                    <NumberInput.Input placeholder="Сумма до" />
                  </InputGroup>
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

              <Input
                name="search"
                placeholder="Введите название объявления"
                onChange={(e) => {
                  setSearch(e.target.value);
                  setPage(1);
                }}
              />
            </Box>
          </Grid>
        </Box>

        {/* Фильтры */}
        <Box mt={5} display="flex" justifyContent="flex-start" gap={5}>
          <Menu.Root>
            <Menu.Trigger asChild>
              <Button variant="outline" size="sm">
                Сортировать по: {sortBy}
              </Button>
            </Menu.Trigger>
            <Portal>
              <Menu.Positioner>
                <Menu.Content>
                  <Menu.Item
                    value="createdAt"
                    onSelect={() => setSortBy("createdAt")}
                  >
                    Дате создания
                  </Menu.Item>
                  <Menu.Item value="price" onSelect={() => setSortBy("price")}>
                    Цене
                  </Menu.Item>
                  <Menu.Item
                    value="priority"
                    onSelect={() => setSortBy("priority")}
                  >
                    Приоритету
                  </Menu.Item>
                </Menu.Content>
              </Menu.Positioner>
            </Portal>
          </Menu.Root>
          <Menu.Root>
            <Menu.Trigger asChild>
              <Button variant="outline" size="sm">
                Порядок: {sortOrder}
              </Button>
            </Menu.Trigger>
            <Portal>
              <Menu.Positioner>
                <Menu.Content>
                  <Menu.Item value="asc" onSelect={() => setSortOrder("asc")}>
                    По возрастанию
                  </Menu.Item>
                  <Menu.Item value="desc" onSelect={() => setSortOrder("desc")}>
                    По убыванию
                  </Menu.Item>
                </Menu.Content>
              </Menu.Positioner>
            </Portal>
          </Menu.Root>
        </Box>

        {/* Объявления */}
        <Box mt="6">
          {data?.ads.map((ad) => (
            <ListCard ad={ad} key={ad.id} />
          ))}
        </Box>

        {/* Пагинация */}
        {data && (
          <ListPagination
            {...data.pagination}
            onPageChange={setPage}
            page={page}
          />
        )}
      </Box>
    </Center>
  );
};
