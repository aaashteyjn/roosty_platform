import { AuthorHero } from "../../components/author/AuthorHero";
import { FeedTabs } from "../../components/posts/FeedTabs";
import { PostCard } from "../../components/posts/PostCard";
import { SubscriptionCard } from "../../components/subscriptions/SubscriptionCard";

export function Author() {
  return (
    <main className="bg-[#F8F6FF] pb-20">

      <AuthorHero />

      <div className="mx-auto mt-16 flex max-w-[1220px] gap-10 px-6">

        {/* Левая колонка */}

        <div className="flex-1">

          <FeedTabs />

          <div className="mt-10 space-y-8">

            <PostCard
              id={1}
              title="Новая стратегия Китая"
              image="https://picsum.photos/900/500?1"
              likes={124}
              comments={36}
            />

            <PostCard
              id={2}
              title="Будущее мировой экономики"
              image="https://picsum.photos/900/500?2"
              likes={89}
              comments={18}
            />

            <PostCard
              id={3}
              title="Военная аналитика XXI века"
              image="https://picsum.photos/900/500?3"
              likes={212}
              comments={54}
            />

          </div>

        </div>

        {/* Правая колонка */}

        <aside className="w-[340px] shrink-0">

          <div className="sticky top-28 space-y-6">

            <SubscriptionCard
              title="Базовая подписка"
              price={990}
              description="Доступ ко всем закрытым публикациям автора."
              active={false}
            />

            <SubscriptionCard
              title="Премиум"
              price={1990}
              description="Публикации, видео, закрытый чат и онлайн-встречи."
              active={false}
            />

          </div>

        </aside>

      </div>

    </main>
  );
}