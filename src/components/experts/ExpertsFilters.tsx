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
      className="bg-white pt-14 pb-10"
      pattern
    >
      <Container>

        <div className="mx-auto max-w-[700px]">

          <input
            placeholder="Поиск эксперта..."
            className="
              h-[62px]
              w-full
              border
              border-[#D9CCFF]
              bg-white
              px-5
              text-[18px]
              outline-none
              transition
              focus:border-[#7B68EE]
              focus:shadow-lg
            "
          />

        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">

          {filters.map((filter, index) => (

            <button
              key={filter}
              className={`
                px-7
                py-3
                text-[17px]
                font-semibold
                transition-all
                duration-300
                ${
                  index === 0
                    ? "bg-[#7B68EE] text-white"
                    : "bg-white border border-[#D9CCFF] text-[#333] hover:bg-[#7B68EE] hover:text-white"
                }
              `}
            >
              {filter}
            </button>

          ))}

        </div>

        <p className="mt-8 text-center text-[#666]">
          Найдено {filters.length - 2} эксперта
        </p>

      </Container>
    </Section>
  );
}