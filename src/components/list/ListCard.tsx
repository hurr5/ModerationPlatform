import {
  Box,
  SimpleGrid,
  Heading,
  Text,
  Button,
  Card,
  Image,
} from "@chakra-ui/react";

import { statusLabels, priorityLabels } from "../../constants/ad";
import type { AdStatus } from "../../types/ad";

interface ListCardProps {
  status: AdStatus;
  category: string;
  priority: string;
}

export const ListCard = ({ status, category, priority }: ListCardProps) => {
  return (
    <Card.Root p="4" my={5} borderRadius="2xl" bg={"blackAlpha.600"}>
      <Card.Body p="0">
        <SimpleGrid columns={4} gap={4} alignItems="center">
          {/* Изображение */}
          <Box>
            <Image
              src="https://placehold.co/300x200/cccccc/969696?text=Image+125-1"
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
            <Heading size="lg">Лодка надувная</Heading>

            <Text fontWeight="bold">15 000 ₽</Text>

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
                    : "red.400"
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
            <Text>Дата создания: 01.01.2025</Text>

            <Text px="3" py="1" borderRadius="lg" bg="red.400">
              Приоритет {priorityLabels[priority]}
            </Text>

            <Button bg="green">Открыть</Button>
          </Box>
        </SimpleGrid>
      </Card.Body>
    </Card.Root>
  );
};
