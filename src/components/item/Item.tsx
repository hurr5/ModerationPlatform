import { useParams, useNavigate } from "react-router";
import { useFetchById } from "@/hooks/useFetchById";

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

import { useColorModeValue } from "@/components/ui/color-mode";

import { ArrowLeft, ArrowRight, House } from "lucide-react";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";

import { Modal } from "./modal";

import { statusLabels } from "@/constants/ad";
import { useApproveAd } from "@/hooks/useApproveAd";
import { useRejectAd } from "@/hooks/useRejectAd";
import { useRequestAdChanges } from "@/hooks/useRequestAdChanges";

export const Item = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { mutate: approve } = useApproveAd();
  const { mutate: reject } = useRejectAd();
  const { mutate: pending } = useRequestAdChanges();

  const { data, error, isLoading } = useFetchById(parseInt(id ?? ""));

  const mainBg = useColorModeValue("gray.300", "gray.500");
  const secondaryBg = useColorModeValue("gray.100", "gray.700");

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("ru-RU");
  };

  const formatDateTime = (date: Date) => {
    return new Date(date).toLocaleDateString("ru-RU", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (isLoading) {
    return <Heading>Skeleton</Heading>;
  }

  if (error || !data || !id) {
    return <Heading>Ничего не найдено</Heading>;
  }

  return (
    <>
      <Center w="100%" py="10">
        <Box
          w="full"
          maxW="7xl"
          bg={mainBg}
          p="10"
          borderRadius="2xl"
          shadow="lg"
        >
          <Heading textAlign="center" size="2xl" mb="6">
            {data.title}
          </Heading>

          {/* Слайдер + История модерации */}
          <SimpleGrid columns={2} gap={6} mb="6">
            {/* Слайдер */}
            <Box borderRadius="2xl" p="4">
              <Carousel.Root
                slideCount={data.images.length}
                maxW="xl"
                mx="auto"
                gap="4"
              >
                <Carousel.Control justifyContent="center" gap="4" width="full">
                  <Carousel.PrevTrigger asChild>
                    <IconButton size="xs" variant="outline">
                      <LuArrowLeft />
                    </IconButton>
                  </Carousel.PrevTrigger>

                  <Carousel.ItemGroup width="full">
                    {data.images.map((src, idx) => (
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
            </Box>

            {/* История модерации */}
            <Box
              bg={secondaryBg}
              overflow={"scroll"}
              maxH={400}
              borderRadius="2xl"
              p="4"
            >
              <Heading size="md" mb="2">
                История модерации
              </Heading>
              <Stack>
                {data && data.moderationHistory.length > 0 ? (
                  data.moderationHistory.map((el, idx) => (
                    <Box key={idx}>
                      <Heading>Имя модератора: {el.moderatorName}</Heading>
                      <Text>Дата проверки: {formatDateTime(el.timestamp)}</Text>
                      <Text>Результат проверки: {statusLabels[el.action]}</Text>
                      <Text>Комментарий: {el.comment}</Text>
                    </Box>
                  ))
                ) : (
                  <Text textStyle="4xl">Нет истории изменений</Text>
                )}
              </Stack>
            </Box>
          </SimpleGrid>

          {/* Подробное описание */}
          <Box mb="6" bg={secondaryBg} borderRadius="2xl" p="4">
            <Heading size="md" mb="5">
              Описание объявления
            </Heading>
            {/* Описание */}
            <Text fontSize="md">
              {data && data.description
                ? data.description
                : "Описание отсутствует"}
            </Text>

            {/* Характеристики */}
            <Heading size="md" my="5">
              Характеристики
            </Heading>

            <DataList.Root
              bg={"gray.700"}
              p={3}
              rounded={"xl"}
              orientation="horizontal"
            >
              {Object.entries(data.characteristics).map(([key, value]) => (
                <DataList.Item key={key}>
                  <DataList.ItemLabel color="white">{key}</DataList.ItemLabel>
                  <DataList.ItemLabel color="white">{value}</DataList.ItemLabel>
                </DataList.Item>
              ))}
            </DataList.Root>

            {/* Информация о продавце */}
            <Heading size="md" my="5">
              Информация о продавце
            </Heading>
            <Text textStyle="lg">Имя продавца</Text>
            <Text textStyle="md">{data.seller.name}</Text>
            <Text textStyle="lg">Рейтинг продавца</Text>
            <Text textStyle="md">{data.seller.rating}</Text>
            <Text textStyle="lg">Количество объявлений</Text>
            <Text textStyle="md">{data.seller.totalAds}</Text>
            <Text textStyle="lg">Дата регистрации</Text>
            <Text textStyle="md">{formatDate(data.seller.registeredAt)}</Text>
          </Box>

          <Flex justify="space-between" gap="4">
            <Button bg="green.500" onClick={() => approve(id)}>
              Одобрить
            </Button>

            {/* На доработку */}
            <Modal
              label="Отправить на доработку"
              bgColor="yellow.500"
              type="changes"
              onSubmit={(payload) => pending({ id, ...payload })}
            />
            {/* Отклонить */}
            <Modal
              label="Отклонить"
              bgColor="red.500"
              type="reject"
              onSubmit={(payload) => reject({ id, ...payload })}
            />
          </Flex>

          <Flex justify="space-between" gap="4" mt={10}>
            <Button
              bg="whiteAlpha.500"
              onClick={() => navigate(`/list`)}
              color={"gray.900"}
            >
              К списку <House />
            </Button>
            <Flex justify="space-between" gap="4">
              <Button
                bg="whiteAlpha.500"
                onClick={() => {
                  navigate(`/item/${parseInt(id) - 1}`);
                  window.scrollTo({ top: 0, behavior: "instant" });
                }}
                color={"gray.900"}
              >
                <ArrowLeft />
              </Button>
              <Button
                bg="whiteAlpha.500"
                onClick={() => {
                  navigate(`/item/${parseInt(id) + 1}`);
                  window.scrollTo({ top: 0, behavior: "instant" });
                }}
                color={"gray.900"}
              >
                <ArrowRight />
              </Button>
            </Flex>
          </Flex>
        </Box>
      </Center>
    </>
  );
};
