import { FeedHero } from "../../components/posts/FeedHero";
import { FeedTabs } from "../../components/posts/FeedTabs";
import { PostCard } from "../../components/posts/PostCard";

import { posts } from "../../data/posts";

import { Container } from "../../components/layout/Container";
import { Section } from "../../components/layout/Section";

export function Feed() {
  return (
    <>
      <FeedHero />

      <Section
        className="bg-white pt-10 pb-6 lg:pt-14 lg:pb-6"
        pattern
      >
        <Container>
          <FeedTabs />
        </Container>
      </Section>

      <Section
        className="bg-white pt-0 pb-16 lg:pt-2 lg:pb-24"
        pattern
      >
        <Container>
          <p
            className="
              mb-4
              text-center
              text-sm
              text-[#666]

              lg:mb-8
              lg:text-base
            "
          >
            Найдено {posts.length} публикаций
          </p>

          <div
            className="
              grid
              grid-cols-1
              gap-6

              lg:grid-cols-2
              lg:gap-8
            "
          >
            {posts.map((post) => (
              <PostCard
                key={post.id}
                id={post.id}
                title={post.title}
                description={post.description}
                image="/posts/default.jpg"
                likes={post.likes}
                comments={post.comments}
                locked={post.locked}
                type={post.type}
              />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}