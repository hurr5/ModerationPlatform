import { Typography, Button } from "antd";
import classNames from "classnames";

import { Card } from "antd";
import { statusLabels, priorityLabels } from "../../constants/ad";
import type { AdStatus } from "../../types/ad";

const { Title, Text } = Typography;

interface ListCardProps {
  status: AdStatus;
  category: string;
  priority: string;
}

export const ListCard = ({ status, category, priority }: ListCardProps) => {
  return (
    <Card>
      <div className="grid grid-cols-4 gap-4">
        <img
          src="https://placehold.co/300x200/cccccc/969696?text=Image+125-1"
          className="w-64 h-32"
        />

        <div className="col-span-2 flex flex-col items-start gap-2">
          <Title level={3}>Лодка надувная</Title>
          <Text strong>15.000 ₽</Text>
          <div>
            <Text
              className={classNames("p-2 rounded-lg", {
                "bg-yellow-200": status === "pending",
                "bg-green-200": status === "approved",
                "bg-red-200": status === "rejected",
              })}
            >
              {statusLabels[status]}
            </Text>
            <Text className="mx-5 p-2 bg-gray-200 rounded-lg">{category}</Text>
          </div>
        </div>

        <div className="flex flex-col items-end justify-around">
          <Text>Дата создания: 01.01.2025</Text>
          <Text className="bg-red-300 p-1 rounded-lg">
            Приоритет {priorityLabels[priority]}
          </Text>
          <Button variant="solid" color="green">
            Открыть
          </Button>
        </div>
      </div>
    </Card>
  );
};
