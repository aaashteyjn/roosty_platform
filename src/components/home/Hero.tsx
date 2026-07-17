import { Container } from "../layout/Container";
import { Button } from "../ui/Button";
import { Tag } from "../ui/Tag";
import { Card } from "../ui/Card";
import { ParticlesBackground } from "../common/ParticlesBackground";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#6F5AE8] via-[#7B68EE] to-[#927CFF]">
      <ParticlesBackground />

      <Container>
        <div
          className="
            relative z-10
            flex flex-col
            gap-16
            py-16

            lg:min-h-[720px]
            lg:flex-row
            lg:items-start
            lg:justify-between
            lg:gap-20
            lg:py-20
          "
        >
          {/* Левая колонка */}

          <div className="w-full max-w-[620px]">
            <h1
              className="
                text-5xl
                font-black
                leading-tight
                text-white

                sm:text-6xl
                md:text-7xl
                lg:text-[72px]
                lg:leading-[1.05]
              "
            >
              Экспертные материалы, которых нет в открытом доступе.
            </h1>

            <p
              className="
                mt-6
                text-lg
                leading-8
                text-[#ECE7FF]

                sm:text-xl
                lg:mt-8
                lg:text-[22px]
                lg:leading-9
              "
            >
              Подписывайтесь на ведущих политологов,
              экономистов и аналитиков.
              Получайте доступ к закрытым публикациям,
              авторским статьям, аналитическим обзорам
              и эксклюзивным видео.
            </p>

            <div
              className="
                mt-10
                flex flex-col
                gap-4

                sm:flex-row

                lg:mt-12
              "
            >
              <Button
                variant="white"
                className="w-full sm:w-auto"
              >
                Найти экспертов
              </Button>

              <Button
                variant="outlineWhite"
                className="w-full sm:w-auto"
              >
                Стать автором
              </Button>
            </div>

            <div
              className="
                mt-12
                grid
                grid-cols-3
                gap-6

                lg:mt-20
              "
            >
              <div>
                <div className="text-3xl font-black text-white lg:text-[42px]">
                  120+
                </div>

                <div className="mt-2 text-sm text-[#ECE7FF] lg:text-base">
                  Экспертов
                </div>
              </div>

              <div>
                <div className="text-3xl font-black text-white lg:text-[42px]">
                  2500+
                </div>

                <div className="mt-2 text-sm text-[#ECE7FF] lg:text-base">
                  Публикаций
                </div>
              </div>

              <div>
                <div className="text-3xl font-black text-white lg:text-[42px]">
                  50K+
                </div>

                <div className="mt-2 text-sm text-[#ECE7FF] lg:text-base">
                  Подписчиков
                </div>
              </div>
            </div>
          </div>

          {/* Правая колонка */}

          <div
            className="
              relative
              mx-auto
              w-full
              max-w-[460px]

              lg:mx-0
              lg:mt-2
            "
          >
            <div
              className="
                absolute
                -right-4
                top-6

                h-[320px]
                w-[260px]

                sm:h-[420px]
                sm:w-[340px]

                lg:-right-6
                lg:top-8
                lg:h-[520px]
                lg:w-[430px]

                bg-[#B7A3FF]
              "
            />

            <Card className="relative z-10 bg-[#D9CCFF] p-5 sm:p-6 lg:p-7">
              <div className="mb-6 flex items-center justify-between gap-4">
                <Tag>
                  Геополитика
                </Tag>

                <span className="text-sm font-semibold text-[#555] lg:text-base">
                  Только подписчикам
                </span>
              </div>

              <h2 className="text-3xl font-black leading-tight text-[#333] lg:text-[34px]">
                Новая стратегия Китая
              </h2>

              <p className="mt-5 text-base leading-8 text-[#555] lg:text-lg">
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

              <div className="mt-8 flex items-center gap-8 text-lg lg:text-xl">
                <span>👍 124</span>

                <span>💬 36</span>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}