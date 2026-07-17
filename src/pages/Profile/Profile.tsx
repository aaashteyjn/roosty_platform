import { Container } from "../../components/layout/Container";
import { SubscriptionCard } from "../../components/subscriptions/SubscriptionCard";
import { PostCard } from "../../components/posts/PostCard";

import { mockUser } from "../../data/user";

import { ParticlesBackground } from "../../components/common/ParticlesBackground";

export function Profile() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#FCFBFF] via-[#F8F6FF] to-[#F3F0FF] py-12">
      <ParticlesBackground variant="light" />
        <div className="relative z-10">
      <Container>
        <div className="grid grid-cols-[320px_1fr] gap-8">

          {/* Левая колонка */}

          <aside
            className="
              sticky
              top-8
              self-start
            "
          >
            <div className="flex flex-col items-center">

              <img
                src={mockUser.avatar}
                alt={mockUser.name}
                className="
                  h-36
                  w-36
                  rounded-full
                  border-8
                  border-[#D9CCFF]
                  object-cover
                "
              />

              <h1 className="mt-6 text-3xl font-black text-[#333]">
                {mockUser.name}
              </h1>

              <span
                className="
                  mt-3
                  rounded-full
                  bg-[#ECE7FF]
                  px-4
                  py-2
                  text-sm
                  font-bold
                  text-[#6E5AE6]
                "
              >
                {mockUser.role}
              </span>

              <p className="mt-4 text-center text-[#666]">
                {mockUser.email}
              </p>

              <button
                className="
                  mt-8
                  w-full
                  rounded-xl
                  bg-[#7B68EE]
                  py-3
                  font-bold
                  text-white
                  transition
                  hover:bg-[#6D58E9]
                "
              >
                Редактировать профиль
              </button>
            </div>

            <div className="my-8 h-px bg-[#ECE8FF]" />

            <div className="space-y-5">

              <div className="flex items-center justify-between">
                <span className="text-[#666]">
                  Публикации
                </span>

                <span className="font-bold text-[#333]">
                  {mockUser.posts}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[#666]">
                  Подписчики
                </span>

                <span className="font-bold text-[#333]">
                  {mockUser.subscribers}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[#666]">
                  Сохранено
                </span>

                <span className="font-bold text-[#333]">
                  {mockUser.saved}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[#666]">
                  Сообщения
                </span>

                <span className="font-bold text-[#7B68EE]">
                  {mockUser.unreadMessages}
                </span>
              </div>

            </div>

            <div className="my-8 h-px bg-[#ECE8FF]" />

            <div className="space-y-3">

              <button className="w-full rounded-xl border border-[#ECE8FF] py-3 text-left px-4 font-semibold hover:bg-[#F7F5FF]">
                ⚙️ Настройки
              </button>

              <button className="w-full rounded-xl border border-[#ECE8FF] py-3 text-left px-4 font-semibold hover:bg-[#F7F5FF]">
                🔐 Пароль
              </button>

              <button className="w-full rounded-xl border border-red-200 py-3 text-left px-4 font-semibold text-red-500 hover:bg-red-50">
                Выйти
              </button>

            </div>

          </aside>

          {/* Правая колонка */}

          <section className="space-y-8">

                        {/* Сохраненные материалы */}

            <div
              className="
                rounded-3xl
                border
                border-[#ECE8FF]
                bg-white
                p-8
              "
            >
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-3xl font-black text-[#333]">
                  Сохраненные материалы
                </h2>

                <button className="font-semibold text-[#7B68EE] hover:underline">
                  Смотреть все
                </button>
              </div>

              <PostCard
                id={1}
                title="Новая стратегия развития цифровой экономики"
                description="Разбор ключевых тенденций и прогнозов развития отрасли."
                image="/posts/default.jpg"
                likes={124}
                comments={36}
                locked={false}
                type="Статья"
              />
            </div>

            {/* Подписки */}

            <div
              className="
                rounded-3xl
                border
                border-[#ECE8FF]
                bg-white
                p-8
              "
            >
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-3xl font-black text-[#333]">
                  Мои подписки
                </h2>

                <span className="rounded-full bg-[#ECE7FF] px-4 py-2 text-sm font-bold text-[#6E5AE6]">
                  {mockUser.subscriptions.length}
                </span>
              </div>

              <div className="grid gap-6 lg:grid-cols-2">
                {mockUser.subscriptions.map((subscription) => (
                  <SubscriptionCard
                    key={subscription.author}
                    title={subscription.author}
                    price={subscription.price}
                    description={`${subscription.plan}\nСтатус: ${subscription.status}`}
                    active={true}
                  />
                ))}
              </div>
            </div>

          </section>

        </div>
      </Container>
    </div>
    </main>
  );
}