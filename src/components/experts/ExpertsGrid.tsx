import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { ExpertCard } from "../home/ExpertCard";
import { mockExperts } from "../../data/mockExperts";

export function ExpertsGrid() {
  return (
    <Section
      className="bg-white pt-2 pb-16 lg:pb-24"
      pattern
    >
      <Container>
        <div
          className="
            grid
            grid-cols-1
            gap-6

            sm:grid-cols-2

            lg:grid-cols-3

            xl:grid-cols-4
            xl:gap-8
          "
        >
          {mockExperts.map((expert) => (
            <ExpertCard
              key={expert.id}
              {...expert}
            />
          ))}
        </div>

        <div
          className="
            mt-10
            flex
            justify-center
            gap-2

            lg:mt-16
            lg:gap-3
          "
        >
          <button
            className="
              h-10
              w-10

              bg-[#7B68EE]

              text-sm
              font-bold
              text-white

              lg:h-12
              lg:w-12
              lg:text-base
            "
          >
            1
          </button>

          <button
            className="
              h-10
              w-10

              border
              border-[#D9CCFF]

              text-sm

              transition
              hover:bg-[#7B68EE]
              hover:text-white

              lg:h-12
              lg:w-12
              lg:text-base
            "
          >
            2
          </button>

          <button
            className="
              h-10
              w-10

              border
              border-[#D9CCFF]

              text-sm

              transition
              hover:bg-[#7B68EE]
              hover:text-white

              lg:h-12
              lg:w-12
              lg:text-base
            "
          >
            3
          </button>
        </div>
      </Container>
    </Section>
  );
}