import { Container } from "../layout/Container";
import { ParticlesBackground } from "../common/ParticlesBackground";

export function ExpertsHero() {
  return (
    <section className="relative overflow-hidden bg-[#7B68EE] py-24">

      <ParticlesBackground variant="dark" />

      <Container>

        <div className="relative z-10 max-w-3xl">

          <h1 className="text-[64px] font-black leading-none text-white">
            Эксперты
          </h1>

          <p className="mt-8 text-[22px] leading-9 text-[#ECE7FF]">
            Подпишитесь на ведущих политологов,
            экономистов, военных аналитиков и
            специалистов по международным отношениям.
          </p>

        </div>

      </Container>

    </section>
  );
}