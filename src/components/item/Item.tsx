import { useState } from "react";
import {
  Box,
  Center,
  Heading,
  Image,
  Flex,
  Button,
  Text,
  SimpleGrid,
  Stack,
  Carousel,
  IconButton,
  DataList,
} from "@chakra-ui/react";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";

import { useColorModeValue } from "@/components/ui/color-mode";

const arr = [
  "https://placehold.co/300x200/cccccc/969696?text=Image+125-1",
  "https://placehold.co/300x200/cccccc/969696?text=Image+125-2",
  "https://placehold.co/300x200/cccccc/969696?text=Image+125-3",
];

const characteristics = {
  Состояние: "Хорошее",
  Гарантия: "Частичная",
  Производитель: "Бренд R",
  Модель: "Модель 10",
  Цвет: "Белый",
};

export const Item = () => {
  const bg = useColorModeValue("gray.300", "gray.500");
  const text = useColorModeValue("black", "white");

  return (
    <Center w="100%" py="10">
      <Box w="full" maxW="7xl" bg={bg} p="10" borderRadius="2xl" shadow="lg">
        <Heading textAlign="center" size="2xl" mb="6">
          Название объявления
        </Heading>

        {/* Первая строка: Слайдер + История модерации */}
        <SimpleGrid columns={2} gap={6} mb="6">
          {/* Слайдер */}
          <Box borderRadius="2xl" p="4">
            <Carousel.Root slideCount={arr.length} maxW="xl" mx="auto" gap="4">
              <Carousel.Control justifyContent="center" gap="4" width="full">
                <Carousel.PrevTrigger asChild>
                  <IconButton size="xs" variant="outline">
                    <LuArrowLeft />
                  </IconButton>
                </Carousel.PrevTrigger>

                <Carousel.ItemGroup width="full">
                  {arr.map((src, idx) => (
                    <Carousel.Item key={idx} index={idx}>
                      <Image
                        key={idx}
                        src={src}
                        borderRadius="xl"
                        objectFit="cover"
                        width="100%"
                        height="100%"
                      />
                    </Carousel.Item>
                  ))}
                </Carousel.ItemGroup>

                <Carousel.NextTrigger asChild>
                  <IconButton size="xs" variant="outline">
                    <LuArrowRight />
                  </IconButton>
                </Carousel.NextTrigger>
              </Carousel.Control>

              <Carousel.Indicators />
            </Carousel.Root>
            {/* <Carousel
              onChange={(index) => setCurrentIndex(index)}
              slideCount={arr.length}
              currentIndex={currentIndex}
              showArrows
              width="100%"
              height="200px"
            >
            </Carousel> */}
          </Box>

          {/* История модерации */}
          <Box
            bg={useColorModeValue("gray.100", "gray.700")}
            borderRadius="2xl"
            p="4"
          >
            <Heading size="md" mb="2">
              История модерации
            </Heading>
            <Stack>
              <Text>01.01.2025 - Одобрено</Text>
              <Text>02.01.2025 - Изменено описание</Text>
              <Text>03.01.2025 - Приоритет изменен</Text>
            </Stack>
          </Box>
        </SimpleGrid>

        {/* Вторая строка: Подробное описание */}
        <Box
          mb="6"
          bg={useColorModeValue("gray.100", "gray.700")}
          borderRadius="2xl"
          p="4"
        >
          <Heading size="md" mb="5">
            Описание объявления
          </Heading>
          {/* Описание */}
          <Text fontSize="md">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
            officiis quas saepe totam! Pariatur corporis exercitationem aperiam
            voluptas incidunt, est perferendis officia amet eaque possimus! Eum,
            ab tenetur. Nam, laudantium. Nisi tempora, nobis soluta consequuntur
            saepe natus, cumque ut quibusdam mollitia reprehenderit commodi
            libero animi? Quos doloribus facilis rem adipisci, ex nesciunt
            officiis culpa nobis incidunt perferendis in, excepturi voluptatem.
            Aperiam voluptatibus quo ipsa quidem culpa! Eaque minus totam in,
            doloremque alias tempora expedita fugiat! Rem libero totam nihil
            illo accusamus, perspiciatis ducimus fuga qui? Debitis, doloremque.
            Ex, necessitatibus accusantium? Laudantium animi placeat distinctio
            voluptatibus soluta, enim dolores quod temporibus cupiditate cum
            voluptates cumque, omnis perferendis fugiat, deleniti possimus sit
            nesciunt eos blanditiis dicta. Obcaecati rem tempora laboriosam
            fugit officia! Consequuntur, itaque odit. Cumque velit asperiores
            doloremque consequuntur necessitatibus dolore, provident ducimus
            iure aspernatur rerum et magni, corporis perspiciatis repellat
            minima exercitationem obcaecati placeat, beatae molestias natus in
            voluptatibus illum?
          </Text>

          {/* Характеристики */}
          <Heading size="md" my="5">
            Характеристики
          </Heading>

          <DataList.Root orientation="horizontal">
            {Object.entries(characteristics).map(([key, value]) => (
              <DataList.Item key={key} colorPalette="green">
                <DataList.ItemLabel color="white">{key}</DataList.ItemLabel>
                <DataList.ItemLabel color="white">{value}</DataList.ItemLabel>
              </DataList.Item>
            ))}
          </DataList.Root>

          {/* Информация о продавце */}
          <Heading size="md" my="5">
            Информация о продавце
          </Heading>
          <Text>Имя продавца</Text>
          <Text>Рейтинг продавца</Text>
          <Text>Количество объявлений</Text>
          <Text>Дата регистрации</Text>
        </Box>

        {/* Третья строка: Кнопки управления */}
        <Flex justify="space-between" gap="4">
          <Button bg="green.500">Одобрить</Button>
          <Button bg="yellow.500">Редактировать</Button>
          <Button bg="red.500">Удалить</Button>
        </Flex>
      </Box>
    </Center>
  );
};
