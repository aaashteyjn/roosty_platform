import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { SectionTitle } from "../ui/SectionTitle";
import { ExpertCard } from "./ExpertCard";
import { mockExperts } from "../../data/mockExperts";

export function PopularExperts() {
  return (
    <Section
      className="bg-white py-16 lg:py-24"
      pattern
    >
      <Container>
        <SectionTitle
          title="Популярные эксперты"
          subtitle="Следите за публикациями ведущих аналитиков платформы."
        />

        <div
          className="
            mt-10
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
      </Container>
    </Section>
  );
}