import { Container } from "../layout/Container";

const filters = [
  "Все",
  "Политология",
  "Экономика",
  "Китай",
  "Военная аналитика",
  "Международные отношения",
];

export function ExpertsFilters() {
  return (
    <section className="bg-white py-10 shadow-sm">
      <Container>

        <input
          placeholder="Поиск эксперта..."
          className="
            mb-8
            w-full
            rounded-xl
            border
            border-gray-200
            px-5
            py-4
            text-lg
            outline-none
            focus:border-[#7B68EE]
          "
        />

        <div className="flex flex-wrap gap-4">

          {filters.map((filter) => (
            <button
              key={filter}
              className="
                rounded-full
                border
                border-[#D8CCFF]
                px-6
                py-3
                transition
                hover:bg-[#7B68EE]
                hover:text-white
              "
            >
              {filter}
            </button>
          ))}

        </div>

      </Container>
    </section>
  );
}