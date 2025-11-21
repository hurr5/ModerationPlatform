import { Heading, Carousel } from "@chakra-ui/react";

const arr = Array(3).fill(
  "https://placehold.co/300x200/cccccc/969696?text=Image+125-1"
);

export const Item = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="w-full bg-gray-300 p-6 md:p-10 rounded-2xl">
        <Heading className="text-center" size={"2xl"}>
          Название объявления
        </Heading>
        <div className="grid grid-cols-12 gap-5">
          {/* Галерея + история модерации */}
          <div className="col-span-12 grid grid-cols-12 max-w-3xl bg-black rounded-2xl shadow-lg p-6 ">
            <div className="col-span-6 ">
              <Carousel.Root slideCount={arr.length}>
                <Carousel.ItemGroup>
                  {arr.map((src, idx) => (
                    <Carousel.Item key={idx} index={idx}>
                      <div>
                        <img src={src} />
                      </div>
                    </Carousel.Item>
                  ))}
                </Carousel.ItemGroup>
                <Carousel.Control>
                  <Carousel.PrevTrigger />
                  <Carousel.Indicators />
                  <Carousel.NextTrigger />
                  <Carousel.ProgressText />
                </Carousel.Control>
              </Carousel.Root>
            </div>
          </div>

          {/* Описание объявления */}
          <div className="col-span-12"></div>

          {/* Кнопки управления */}
          <div className="col-span-12"></div>
        </div>
      </div>
    </div>
  );
};
