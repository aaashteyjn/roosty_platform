import { AuthorHero } from '../components/author/AuthorHero';
import { FeedTabs } from '../components/feed/FeedTabs';
import { PostCard } from '../components/feed/PostCard';
import { SubscriptionCard } from '../components/subscriptions/SubscriptionCard';

import { mockPosts } from '../data/mockPosts';
import { mockSubscriptions } from '../data/mockSubscriptions';

export function ChannelPage() {
  return (
    <>
      <AuthorHero />

      <div className="mx-auto max-w-[1220px] px-6">
        <div className="grid grid-cols-[260px_1fr] gap-10">
          <aside>
            <div className="mb-6 bg-[#9B87F5] py-5 text-center text-[24px] font-bold uppercase tracking-[2px] text-[#333333]">
              Донат
            </div>

            {mockSubscriptions.map((subscription) => (
              <SubscriptionCard
                key={subscription.id}
                {...subscription}
              />
            ))}
          </aside>

          <main>
            <FeedTabs />

            <div className="mt-4 space-y-8">
              {mockPosts.map((post) => (
                <PostCard
                  key={post.id}
                  {...post}
                />
              ))}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}