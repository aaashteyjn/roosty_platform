import { Container } from "../../components/layout/Container";
import { PostCard } from "../../components/posts/PostCard";
import { SubscriptionCard } from "../../components/subscriptions/SubscriptionCard";
import { ParticlesBackground } from "../../components/common/ParticlesBackground";

export function AuthorDashboard() {
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
                p-8
              "
            >
              <div className="flex flex-col items-center">
                <img
                  src="/experts/eustafiev.jpg"
                  alt="Дмитрий Евстафьев"
                  className="
                    h-36
                    w-36
                    rounded-full
                    border-8
                    border-[#D9CCFF]
                    object-cover
                  "
                />

                <h1 className="mt-6 text-center text-3xl font-black text-[#333]">
                  Дмитрий Евстафьев
                </h1>

                <p className="mt-3 text-center text-[#666]">
                  Политолог, аналитик международных отношений
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
                  <span className="text-[#666]">Подписчики</span>
                  <span className="font-bold text-[#333]">14 200</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[#666]">Публикации</span>
                  <span className="font-bold text-[#333]">134</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[#666]">Доход</span>
                  <span className="font-bold text-[#7B68EE]">
                    280 000 ₽
                  </span>
                </div>
              </div>

              <div className="my-8 h-px bg-[#ECE8FF]" />

              <div>
                <div className="mb-5 flex items-center justify-between">
                  <h2 className="text-xl font-black text-[#333]">
                    Уровни подписки
                  </h2>
                </div>

                <SubscriptionCard
                  title="Базовая"
                  price={290}
                  description="Доступ к закрытым публикациям"
                  active={true}
                  showButton={false}
                />

                  <SubscriptionCard
                    title="Стандарт"
                    price={590}
                    description="Публикации + аналитика"
                    active={true}
                    showButton={false}
                  />

                  <SubscriptionCard
                    title="Премиум"
                    price={990}
                    description="Полный доступ ко всему контенту"
                    active={true}
                    showButton={false}
                  />
                </div>

              <div className="my-8 h-px bg-[#ECE8FF]" />

              <div className="space-y-3">
                <button className="w-full rounded-xl border border-[#ECE8FF] py-3 px-4 text-left font-semibold hover:bg-[#F7F5FF]">
                  ✏️ Изменить описание
                </button>

                <button className="w-full rounded-xl border border-[#ECE8FF] py-3 px-4 text-left font-semibold hover:bg-[#F7F5FF]">
                  💰 Выплаты
                </button>
              </div>
            </aside>

            {/* Правая колонка */}

            <section>
              <div className="mb-8 flex items-center justify-between">
                <h2 className="text-4xl font-black text-[#333]">
                  Мои публикации
                </h2>

                <button
                  className="
                    rounded-xl
                    bg-[#7B68EE]
                    px-6
                    py-3
                    font-bold
                    text-white
                    transition
                    hover:bg-[#6D58E9]
                  "
                >
                  + Создать публикацию
                </button>
              </div>

              <div className="space-y-8">
                <PostCard
                  id={1}
                  title="Новая стратегия Китая"
                  description="
                    Анализ внешней политики Китая
                    и глобальных изменений.
                  "
                  image="/posts/default.jpg"
                  likes={124}
                  comments={36}
                  locked={true}
                  type="Статья"
                />

                <PostCard
                  id={2}
                  title="Будущее многополярного мира"
                  description="
                    Почему мировой порядок меняется
                    и какие последствия это несет.
                  "
                  image="/posts/default.jpg"
                  likes={89}
                  comments={18}
                  locked={false}
                  type="Видео"
                />
              </div>
            </section>
          </div>
        </Container>
      </div>
    </main>
  );
}