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
} from "@chakra-ui/react";
// import { Input } from "@chakra-ui/input";
// import { Button } from "@chakra-ui/button";
// import { NativeSelect } from "@chakra-ui/NativeSelect";

export const List = () => {
  const [open, setOpen] = useState(true);

  return (
    <Center w="100%" py="10">
      <Box w="100%" maxW="1200px" bg="gray.900" p="10" borderRadius="2xl">
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
          <Heading size="2xl" cursor="pointer" onClick={() => setOpen(!open)}>
            Фильтры
          </Heading>

          <Button
            variant="ghost"
            color="blackAlpha.700"
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
              <Checkbox.Root>
                <Checkbox.HiddenInput />
                <Checkbox.Control />
                <Checkbox.Label>В ожидании</Checkbox.Label>
              </Checkbox.Root>
              {/* <Checkbox value="pending"></Checkbox>
              <Checkbox value="approved">Одобрено</Checkbox>
              <Checkbox value="rejected">Отклонено</Checkbox> */}
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

              <Input placeholder="От" type="number" mb="2" />
              <Input placeholder="До" type="number" />
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
      </Box>
    </Center>
  );
};
