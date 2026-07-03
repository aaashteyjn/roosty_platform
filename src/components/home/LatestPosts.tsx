import { Container } from "../layout/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { HomePostCard } from "./HomePostCard";
import { mockHomePosts } from "../../data/mockHomePosts";

export function LatestPosts() {
  return (
    <section className="bg-[#F8F6FF] py-24">

      <Container>

        <SectionTitle
          title="Популярные публикации"
          subtitle="Лучшие материалы этой недели."
        />

        <div className="grid grid-cols-3 gap-8">

          {mockHomePosts.map((post) => (
            <HomePostCard
              key={post.id}
              {...post}
            />
          ))}

        </div>

      </Container>

    </section>
  );
}