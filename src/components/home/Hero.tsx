import { Container } from "../layout/Container";
import { Button } from "../ui/Button";
import { Tag } from "../ui/Tag";
import { Card } from "../ui/Card";
import { ParticlesBackground } from "../common/ParticlesBackground";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#7B68EE]">
      <ParticlesBackground />

      <Container>
        <div className="relative z-10 flex min-h-[720px] items-center justify-between gap-20 py-20">

          {/* Левая колонка */}

          <div className="max-w-[620px]">

            <h1 className="mt-8 text-[72px] font-black leading-[1.05] text-white">
              Экспертные
              <br />
              материалы,
              <br />
              которых нет
              <br />
              в открытом доступе.
            </h1>

            <p className="mt-8 text-[22px] leading-9 text-[#ECE7FF]">
              Подписывайтесь на ведущих политологов,
              экономистов и аналитиков.
              Получайте доступ к закрытым публикациям,
              авторским статьям, аналитическим обзорам
              и эксклюзивным видео.
            </p>

            <div className="mt-12 flex gap-5">

              <Button variant="white">
                Найти экспертов
              </Button>

              <Button
                variant="secondary"
                className="border-white text-white hover:bg-white hover:text-[#7B68EE]"
              >
                Стать автором
              </Button>

            </div>

            <div className="mt-20 flex gap-16">

              <div>
                <div className="text-[42px] font-black text-white">
                  120+
                </div>

                <div className="mt-2 text-[#ECE7FF]">
                  Экспертов
                </div>
              </div>

              <div>
                <div className="text-[42px] font-black text-white">
                  2500+
                </div>

                <div className="mt-2 text-[#ECE7FF]">
                  Публикаций
                </div>
              </div>

              <div>
                <div className="text-[42px] font-black text-white">
                  50K+
                </div>

                <div className="mt-2 text-[#ECE7FF]">
                  Подписчиков
                </div>
              </div>

            </div>

          </div>

          {/* Правая колонка */}

          <div className="relative w-[460px] -translate-y-30">

            <div className="absolute -right-6 top-8 h-[520px] w-[430px] bg-[#B7A3FF]" />

            <Card className="relative z-10 bg-[#D9CCFF] p-7">

              <div className="mb-6 flex items-center justify-between">

                <Tag>
                  Геополитика
                </Tag>

                <span className="font-semibold text-[#555]">
                  Только подписчикам
                </span>

              </div>

              <h2 className="text-[34px] font-black leading-tight text-[#333]">
                Новая стратегия Китая
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#555]">
                Эксклюзивный аналитический материал
                о внешней политике Китая и её влиянии
                на мировую экономику.
              </p>

              <div className="mt-8 bg-white p-6">

                <div className="mb-4 h-4 w-2/3 bg-[#D9CCFF]" />

                <div className="mb-3 h-3 bg-[#ECE7FF]" />

                <div className="mb-3 h-3 bg-[#ECE7FF]" />

                <div className="mb-3 h-3 w-4/5 bg-[#ECE7FF]" />

                <div className="h-3 w-2/3 bg-[#ECE7FF]" />

              </div>

              <div className="mt-8 flex items-center gap-8 text-xl">

                <span>❤️ 124</span>

                <span>💬 36</span>

              </div>

            </Card>

          </div>

        </div>
      </Container>
    </section>
  );
}