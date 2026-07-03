import { Container } from "../layout/Container";

export function CTA() {
  return (
    <section className="bg-[#7B68EE] py-24">
      <Container>

        <div className="text-center">

          <h2 className="text-[52px] font-black text-white">
            Станьте автором платформы
          </h2>

          <p className="mx-auto mt-6 max-w-[700px] text-[22px] leading-9 text-[#ECE7FF]">
            Публикуйте аналитические материалы, развивайте
            собственное сообщество и зарабатывайте на подписке.
          </p>

          <button
            className="
              mt-12
              bg-white
              px-10
              py-5
              text-[20px]
              font-bold
              text-[#7B68EE]
              transition
              hover:scale-105
            "
          >
            Подать заявку
          </button>

        </div>

      </Container>
    </section>
  );
}