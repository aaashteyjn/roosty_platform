import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { SectionTitle } from "../ui/SectionTitle";
import { HomePostCard } from "./HomePostCard";
import { mockHomePosts } from "../../data/mockHomePosts";

export function LatestPosts() {
  return (
    <Section
      className="bg-[#F8F6FF] py-16 lg:py-24"
      pattern
    >
      <Container>
        <SectionTitle
          title="Популярные публикации"
          subtitle="Лучшие материалы этой недели."
        />

        <div
          className="
            mt-10
            grid
            grid-cols-1
            gap-6

            md:grid-cols-2

            xl:grid-cols-3
            xl:gap-8
          "
        >
          {mockHomePosts.map((post) => (
            <HomePostCard
              key={post.id}
              {...post}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}