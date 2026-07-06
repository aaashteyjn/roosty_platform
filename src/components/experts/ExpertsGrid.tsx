import { Container } from "../layout/Container";
import { ExpertCard } from "../home/ExpertCard";
import { mockExperts } from "../../data/mockExperts";

export function ExpertsGrid() {
  return (
    <section className="bg-[#F8F6FF] py-16">
      <Container>

        <div className="grid grid-cols-4 gap-8">

          {mockExperts.map((expert) => (
            <ExpertCard
              key={expert.id}
              {...expert}
            />
          ))}

        </div>

      </Container>
    </section>
  );
}