import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { Button } from "../ui/Button";

export function CTA() {
  return (
    <Section
      className="bg-[#7B68EE] py-16 lg:py-24"
      pattern
      darkPattern
    >
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <h2
            className="
              text-3xl
              font-black
              leading-tight
              text-white

              sm:text-4xl

              lg:text-[52px]
            "
          >
            Станьте автором платформы
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-[700px]

              text-base
              leading-7
              text-[#ECE7FF]

              sm:text-lg

              lg:mt-6
              lg:text-[22px]
              lg:leading-9
            "
          >
            Публикуйте аналитические материалы, развивайте
            собственное сообщество и зарабатывайте на подписке.
          </p>

          <Button
            variant="white"
            className="
              mt-8
              w-full

              sm:w-auto

              lg:mt-12
            "
          >
            Подать заявку
          </Button>
        </div>
      </Container>
    </Section>
  );
}