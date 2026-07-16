import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { SectionTitle } from "../ui/SectionTitle";
import { ExpertCard } from "./ExpertCard";
import { mockExperts } from "../../data/mockExperts";

export function PopularExperts() {
  return (
    <Section
      className="bg-white py-24"
      pattern
    >
      <Container>

        <SectionTitle
          title="Популярные эксперты"
          subtitle="Следите за публикациями ведущих аналитиков платформы."
        />

        <div className="grid grid-cols-4 gap-8">

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