import { Container } from "../layout/Container";
import { Section } from "../layout/Section";

const filters = [
  "Все",
  "Политика",
  "Экономика",
  "Международные отношения",
  "Военная аналитика",
  "История",
];

export function ExpertsFilters() {
  return (
    <Section
      className="bg-white pt-10 pb-8 lg:pt-14 lg:pb-10"
      pattern
    >
      <Container>
        <div className="mx-auto mb-8 max-w-[700px] lg:mb-10">
          <input
            placeholder="Поиск эксперта..."
            className="
              h-14
              w-full

              border
              border-[#D9CCFF]

              bg-white

              px-5

              text-base

              outline-none

              transition-all
              duration-300

              focus:border-[#7B68EE]
              focus:shadow-lg

              lg:h-[62px]
              lg:text-[18px]
            "
          />
        </div>

        <div
          className="
            flex
            gap-3

            overflow-x-auto
            pb-2

            lg:flex-wrap
            lg:justify-center
          "
        >
          {filters.map((filter, index) => (
            <button
              key={filter}
              className={`
                shrink-0

                px-5
                py-3

                text-sm
                font-semibold

                transition-all
                duration-300

                md:px-7
                md:text-[17px]

                ${
                  index === 0
                    ? "bg-[#7B68EE] text-white"
                    : "border border-[#D9CCFF] bg-white text-[#333] hover:bg-[#7B68EE] hover:text-white"
                }
              `}
            >
              {filter}
            </button>
          ))}
        </div>

        <p
          className="
            mt-6
            text-center
            text-sm
            text-[#666]

            lg:mt-8
            lg:text-base
          "
        >
          Найдено {filters.length - 2} эксперта
        </p>
      </Container>
    </Section>
  );
}