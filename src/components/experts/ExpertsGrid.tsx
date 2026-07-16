import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { ExpertCard } from "../home/ExpertCard";
import { mockExperts } from "../../data/mockExperts";

export function ExpertsGrid() {
  return (
    <Section
      className="bg-white pt-2 pb-24"
      pattern
    >
      <Container>

        <div className="grid grid-cols-4 gap-8">

          {mockExperts.map((expert) => (
            <ExpertCard
              key={expert.id}
              {...expert}
            />
          ))}

        </div>

        <div className="mt-16 flex justify-center gap-3">

          <button
            className="
              h-12
              w-12
              bg-[#7B68EE]
              font-bold
              text-white
            "
          >
            1
          </button>

          <button
            className="
              h-12
              w-12
              border
              border-[#D9CCFF]
              transition
              hover:bg-[#7B68EE]
              hover:text-white
            "
          >
            2
          </button>

          <button
            className="
              h-12
              w-12
              border
              border-[#D9CCFF]
              transition
              hover:bg-[#7B68EE]
              hover:text-white
            "
          >
            3
          </button>

        </div>

      </Container>
    </Section>
  );
}