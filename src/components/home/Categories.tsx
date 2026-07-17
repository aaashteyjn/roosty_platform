import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { SectionTitle } from "../ui/SectionTitle";
import { mockCategories } from "../../data/mockCategories";

export function Categories() {
  return (
    <Section
      className="bg-white py-16 lg:py-24"
      pattern
    >
      <Container>
        <SectionTitle
          title="Популярные тематики"
          subtitle="Выберите интересующее направление."
        />

        <div
          className="
            mt-10
            grid
            grid-cols-1
            gap-4

            sm:grid-cols-2

            lg:grid-cols-3

            xl:grid-cols-4
            xl:gap-6
          "
        >
          {mockCategories.map((category) => (
            <button
              key={category}
              className="
                relative
                z-20

                flex
                items-center

                min-h-[88px]

                bg-[#D9CCFF]

                px-6
                py-6

                text-left
                text-lg
                font-bold
                text-[#333]

                transition-all
                duration-300

                md:hover:-translate-y-2
                md:hover:bg-[#7B68EE]
                md:hover:text-white
                md:hover:shadow-xl

                lg:min-h-[110px]
                lg:px-8
                lg:py-8
                lg:text-[22px]
              "
            >
              {category}
            </button>
          ))}
        </div>
      </Container>
    </Section>
  );
}