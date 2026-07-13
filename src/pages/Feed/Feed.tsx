import { FeedTabs } from "../../components/posts/FeedTabs";
import { PostCard } from "../../components/posts/PostCard";

import { posts } from "../../data/posts";

import { Container } from "../../components/layout/Container";


export function Feed() {

  return (
    <main className="bg-[#F8F6FF] min-h-screen py-16">

      <Container>

        <h1 className="
          text-[48px]
          font-black
          text-[#333]
        ">
          Лента публикаций
        </h1>


        <p className="
          mt-4
          text-xl
          text-[#666]
        ">
          Эксклюзивные материалы авторов платформы
        </p>



        <div className="mt-10">

          <FeedTabs />

        </div>



        <div className="
          mt-10
          grid
          grid-cols-2
          gap-8
        ">


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

    </main>
  );
}