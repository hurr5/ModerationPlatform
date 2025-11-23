import {
  ButtonGroup,
  IconButton,
  Pagination,
  Center,
  Heading,
} from "@chakra-ui/react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { type Pagination as IPagination } from "@/types/pagination";

interface ListPaginationProps extends IPagination {
  page: number;
  onPageChange(page: number): void;
}

export const ListPagination = ({
  totalItems,
  page,
  onPageChange,
}: ListPaginationProps) => {
  return (
    <Center display="flex" flexDir="column" alignItems="center">
      <Pagination.Root
        count={totalItems}
        pageSize={10}
        page={page}
        onPageChange={(e) => onPageChange(e.page)}
      >
        <ButtonGroup variant="ghost" size="sm">
          <Pagination.PrevTrigger asChild>
            <IconButton>
              <LuChevronLeft />
            </IconButton>
          </Pagination.PrevTrigger>

          <Pagination.Items
            render={(page) => (
              <IconButton variant={{ base: "ghost", _selected: "outline" }}>
                {page.value}
              </IconButton>
            )}
          />

          <Pagination.NextTrigger asChild>
            <IconButton>
              <LuChevronRight />
            </IconButton>
          </Pagination.NextTrigger>
        </ButtonGroup>
      </Pagination.Root>
      <Heading size="2xl" mt={5}>
        Всего объявлений {totalItems}
      </Heading>
    </Center>
  );
};
