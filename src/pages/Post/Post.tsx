import { useState } from "react";
import { useParams } from "react-router-dom";

import { posts } from "../../data/posts";
import { comments as initialComments } from "../../data/comments";

import { Container } from "../../components/layout/Container";
import { Section } from "../../components/layout/Section";
import { SubscriptionCard } from "../../components/subscriptions/SubscriptionCard";
import { CommentCard } from "../../components/comments/CommentCard";
import { CommentForm } from "../../components/comments/CommentForm";

export function Post() {
  const { id } = useParams();

  const post = posts.find((item) => item.id === Number(id));

  if (!post) {
    return (
      <main className="py-32">
        <Container>
          <h1 className="text-center text-4xl font-black">
            Публикация не найдена
          </h1>
        </Container>
      </main>
    );
  }

  const [comments, setComments] = useState(
    initialComments.filter((comment) => comment.postId === post.id)
  );

  function handleAddComment(text: string) {
    setComments((prev) => [
      {
        id: Date.now(),
        postId: post.id,
        author: "Вы",
        avatar: "https://i.pravatar.cc/100?img=8",
        date: "Только что",
        content: text,
        likes: 0,
      },
      ...prev,
    ]);
  }

  return (
    <main className="bg-[#F8F6FF]">
      <Section pattern className="py-20">
        <Container>
          <div className="flex items-start gap-10">
            <article
              className="
                flex-1
                border
                border-[#E7E2FF]
                bg-white
                p-12
                shadow-[0_18px_45px_rgba(123,104,238,0.08)]
              "
            >
              <span
                className="
                  inline-flex
                  bg-[#D9CCFF]
                  px-4
                  py-2
                  text-sm
                  font-bold
                  text-[#333]
                "
              >
                {post.type}
              </span>

              <h1
                className="
                  mt-8
                  text-[56px]
                  font-black
                  leading-[1.08]
                  tracking-[-1px]
                  text-[#222]
                "
              >
                {post.title}
              </h1>

              <p
                className="
                  mt-6
                  max-w-4xl
                  text-[22px]
                  leading-[1.9]
                  text-[#666]
                "
              >
                {post.description}
              </p>

              <div
                className="
                  mt-10
                  flex
                  items-center
                  justify-between
                  border
                  border-[#ECE8FF]
                  bg-[#FAF8FF]
                  px-7
                  py-6
                "
              >
                <div className="flex items-center gap-4">
                  <img
                    src={post.authorAvatar}
                    alt={post.author}
                    className="h-14 w-14 rounded-full object-cover"
                  />

                  <div>
                    <div className="font-bold text-[#222]">
                      {post.author}
                    </div>

                    <div className="text-sm text-[#777]">
                      Автор публикации
                    </div>
                  </div>
                </div>

                <div className="text-right text-[#666]">
                  <div>{post.date}</div>

                  <div>{post.readingTime}</div>
                </div>
              </div>

              {post.locked ? (
                <div
                  className="
                    mt-12
                    border
                    border-[#E7E2FF]
                    bg-[#F8F6FF]
                    p-10
                    text-center
                    shadow-[0_10px_30px_rgba(123,104,238,.06)]
                  "
                >
                  <h2 className="text-3xl font-black text-[#333]">
                    Материал доступен только подписчикам
                  </h2>

                  <p className="mt-4 text-lg leading-8 text-[#666]">
                    Оформите подписку, чтобы получить доступ ко всему материалу.
                  </p>

                  <button
                    className="
                      mt-8
                      bg-[#7B68EE]
                      px-8
                      py-4
                      font-bold
                      text-white
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:bg-[#6855E5]
                      hover:shadow-xl
                    "
                  >
                    Оформить подписку
                  </button>
                </div>
              ) : (
                <div
                  className="
                    mt-12
                    max-w-[850px]
                    whitespace-pre-line
                    text-[21px]
                    leading-[2.1]
                    text-[#444]
                  "
                >
                  {post.content}
                </div>
              )}

              <div
                className="
                  mt-14
                  -mx-12
                  flex
                  items-center
                  gap-8
                  border-t
                  border-[#ECE8FF]
                  bg-[#FCFBFF]
                  px-12
                  py-6
                  text-lg
                  text-[#666]
                "
              >
                <span>👍 {post.likes}</span>

                <span>💬 {comments.length}</span>
              </div>

              <div className="mt-16">
  <h2 className="text-4xl font-black text-[#222]">
    Комментарии ({comments.length})
  </h2>

  <div
      className="
        mt-8
        overflow-hidden
        rounded-xl
        border
        border-[#E7E2FF]
        bg-white
      "
    >
      <div
        className="
          max-h-[500px]
          overflow-y-auto
        "
      >
        {comments.length === 0 ? (
          <div className="p-10 text-center text-[#777]">
            Пока нет комментариев.
            <br />
            Будьте первым, кто поделится своим мнением!
          </div>
        ) : (
          <div className="px-6">
            {comments.map((comment) => (
              <CommentCard
                key={comment.id}
                comment={comment}
              />
            ))}
          </div>
        )}
      </div>

      <div className="border-t border-[#ECE8FF] p-6">
        <CommentForm onSubmit={handleAddComment} />
      </div>
    </div>
  </div>
            </article>

            <aside className="w-[340px] shrink-0">
              <div className="sticky top-28">
                <SubscriptionCard
                  title="Премиум подписка"
                  price={1990}
                  description="Получите доступ ко всем закрытым материалам автора."
                  active={false}
                />
              </div>
            </aside>
          </div>
        </Container>
      </Section>
    </main>
  );
}