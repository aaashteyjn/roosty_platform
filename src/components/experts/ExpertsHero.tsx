import { Container } from "../layout/Container";
import { ParticlesBackground } from "../common/ParticlesBackground";

export function ExpertsHero() {
  return (
    <section className="relative overflow-hidden bg-[#7B68EE] py-16 lg:py-24">
      <ParticlesBackground variant="dark" />

      <Container>
        <div className="relative z-10 max-w-3xl">
          <h1
            className="
              text-4xl
              font-black
              leading-tight
              text-white

              sm:text-5xl

              lg:text-[64px]
              lg:leading-none
            "
          >
            Эксперты
          </h1>

          <p
            className="
              mt-5
              text-base
              leading-7
              text-[#ECE7FF]

              sm:text-lg

              lg:mt-8
              lg:text-[22px]
              lg:leading-9
            "
          >
            Подпишитесь на ведущих политологов,
            экономистов, военных аналитиков и
            специалистов по международным отношениям.
          </p>
        </div>
      </Container>
    </section>
  );
}