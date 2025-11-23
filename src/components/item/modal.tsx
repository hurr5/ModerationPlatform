import {
  Button,
  Dialog,
  Field,
  Input,
  Portal,
  Stack,
  RadioGroup,
  Heading,
  Flex,
} from "@chakra-ui/react";
import { useRef, useState } from "react";

interface SubmitModalPayload {
  reason: string;
  comment: string;
}

interface ModalProps {
  label: string;
  bgColor: string;
  type: string;
  onSubmit: (data: SubmitModalPayload) => void;
}

export const Modal = ({ label, bgColor, type, onSubmit }: ModalProps) => {
  const ref = useRef(null);

  const [reason, setReason] = useState("Запрещённый товар");
  const [otherReason, setOtherReason] = useState("");
  const [comment, setComment] = useState("");

  const reasons = [
    "Запрещённый товар",
    "Неверная категория",
    "Некорректное описание",
    "Проблемы с фото",
    "Подозрение на мошенничество",
    "Другое",
  ];

  const handleSubmit = () => {
    const finalReason = reason === "Другое" ? otherReason : reason;

    onSubmit({
      reason: finalReason,
      comment,
    });
  };

  return (
    <Dialog.Root initialFocusEl={() => ref.current}>
      <Dialog.Trigger asChild>
        <Button variant="solid" bg={bgColor}>
          {label}
        </Button>
      </Dialog.Trigger>

      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>
                {type === "reject"
                  ? "Отклонение объявления"
                  : "Отправить на доработку"}
              </Dialog.Title>
            </Dialog.Header>

            <Dialog.Body pb="4">
              <Stack gap="4">
                <Heading size="md">Причина</Heading>

                <RadioGroup.Root
                  value={reason}
                  onValueChange={(details) => {
                    setReason(details.value);
                  }}
                >
                  <Flex direction="column" gap={3}>
                    {reasons.map((r) => (
                      <RadioGroup.Item key={r} value={r}>
                        <RadioGroup.ItemHiddenInput />
                        <RadioGroup.ItemIndicator />
                        <RadioGroup.ItemText>{r}</RadioGroup.ItemText>
                      </RadioGroup.Item>
                    ))}
                  </Flex>
                </RadioGroup.Root>

                {reason === "Другое" && (
                  <Input
                    placeholder="Укажите свою причину"
                    value={otherReason}
                    onChange={(e) => setOtherReason(e.target.value)}
                  />
                )}

                <Field.Root>
                  <Field.Label>Комментарий</Field.Label>
                  <Input
                    ref={ref}
                    placeholder="Комментарий"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                </Field.Root>
              </Stack>
            </Dialog.Body>

            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button variant="outline">Отменить</Button>
              </Dialog.ActionTrigger>
              <Dialog.ActionTrigger asChild>
                <Button
                  onClick={() => {
                    handleSubmit();
                  }}
                >
                  Отправить
                </Button>
              </Dialog.ActionTrigger>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};
