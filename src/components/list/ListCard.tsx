import {
  Box,
  SimpleGrid,
  Heading,
  Text,
  Button,
  Card,
  Image,
} from "@chakra-ui/react";
import { useNavigate } from "react-router";

import { statusLabels, priorityLabels } from "../../constants/ad";
import type { Ad } from "../../types/ad";

interface ListCardProps {
  ad: Ad;
}

export const ListCard = ({
  ad: { status, category, priority, title, price, images, createdAt, id },
}: ListCardProps) => {
  const navigate = useNavigate();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("de-DE").format(price);
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("ru-RU");
  };

  return (
    <Card.Root p="4" my={5} borderRadius="2xl" bg={"blackAlpha.600"}>
      <Card.Body p="0">
        <SimpleGrid columns={4} gap={4} alignItems="center">
          {/* Изображение */}
          <Box>
            <Image
              src={images[0]}
              w="16rem"
              h="8rem"
              borderRadius="lg"
              objectFit="cover"
            />
          </Box>

          {/* Центральная часть */}
          <Box
            gridColumn="span 2"
            display="flex"
            flexDirection="column"
            gap="2"
          >
            <Heading size="lg">{title}</Heading>

            <Text fontWeight="bold">{formatPrice(price)} ₽</Text>

            <Box display="flex" gap="3">
              {/* Статус */}
              <Text
                px="3"
                py="1"
                borderRadius="lg"
                bg={
                  status === "pending"
                    ? "yellow.400"
                    : status === "approved"
                      ? "green.400"
                      : status === "rejected"
                        ? "red.400"
                        : "orange.400"
                }
              >
                {statusLabels[status]}
              </Text>

              {/* Категория */}
              <Text px="3" py="1" borderRadius="lg" bg="gray.400">
                {category}
              </Text>
            </Box>
          </Box>

          {/* Третий столбец */}
          <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-end"
            gap={3}
          >
            <Text>Дата создания: {formatDate(createdAt)}</Text>

            <Text
              px="3"
              py="1"
              borderRadius="lg"
              bg={priority === "urgent" ? "red.400" : ""}
            >
              Приоритет {priorityLabels[priority]}
            </Text>

            <Button colorPalette={"green"} onClick={() => navigate(`/item/${id}`)}>
              Открыть
            </Button>
          </Box>
        </SimpleGrid>
      </Card.Body>
    </Card.Root>
  );
};
