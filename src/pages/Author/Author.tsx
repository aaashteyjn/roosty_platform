import { AuthorHero } from "../../components/author/AuthorHero";
import { FeedTabs } from "../../components/posts/FeedTabs";
import { PostCard } from "../../components/posts/PostCard";
import { SubscriptionCard } from "../../components/subscriptions/SubscriptionCard";

import { posts } from "../../data/posts";
import { subscriptions } from "../../data/subscriptions";


export function Author() {
  const authorPosts = posts.filter(
    (post) => post.authorId === 1
  );


  return (
    <main className="bg-[#F8F6FF] pb-20">

      <AuthorHero />


      <div className="
        mx-auto
        mt-16
        flex
        max-w-[1220px]
        gap-10
        px-6
      ">


        {/* Лента публикаций */}

        <section className="flex-1">


          <FeedTabs />


          <div className="mt-10 space-y-8">

            {authorPosts.map((post) => (

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


        </section>



        {/* Подписки */}

        <aside className="w-[340px] shrink-0">


          <div className="
            sticky
            top-28
          ">


            {subscriptions.map((subscription) => (

              <SubscriptionCard
                key={subscription.id}
                title={subscription.title}
                price={subscription.price}
                description={subscription.description}
                active={false}
              />

            ))}


          </div>


        </aside>


      </div>


    </main>
  );
}