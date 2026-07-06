import { Container } from "../layout/Container";

export function ExpertsHero() {
  return (
    <section className="bg-[#7B68EE] py-20">
      <Container>
        <div className="max-w-3xl">

          <h1 className="text-6xl font-black text-white">
            Эксперты
          </h1>

          <p className="mt-6 text-xl leading-9 text-[#ECE7FF]">
            Найдите ведущих политологов, экономистов,
            специалистов по международным отношениям,
            военной аналитике и Китаю.
          </p>

        </div>
      </Container>
    </section>
  );
}