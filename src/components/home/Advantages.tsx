import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { SectionTitle } from "../ui/SectionTitle";
import { Card } from "../ui/Card";

const advantages = [
  {
    title: "Авторские материалы",
    description:
      "Эксклюзивные статьи и аналитика, недоступные в открытом доступе.",
  },
  {
    title: "Видео и эфиры",
    description:
      "Закрытые видеоматериалы, лекции и прямые трансляции экспертов.",
  },
  {
    title: "Подписка",
    description:
      "Получайте полный доступ к материалам любимых авторов.",
  },
  {
    title: "Общение",
    description:
      "Задавайте вопросы авторам и участвуйте в обсуждениях.",
  },
];

export function Advantages() {
  return (
    <Section
      className="bg-[#F8F6FF] py-16 lg:py-24"
      pattern
    >
      <Container>
        <SectionTitle
          title="Почему выбирают РУСТИ"
          subtitle="Всё необходимое для получения качественной экспертной аналитики."
        />

        <div
          className="
            mt-10
            grid
            grid-cols-1
            gap-6

            md:grid-cols-2

            lg:gap-8
          "
        >
          {advantages.map((item) => (
            <Card
              key={item.title}
              className="p-6 lg:p-8"
            >
              <h3
                className="
                  text-2xl
                  font-bold
                  leading-tight
                  text-[#333]

                  lg:text-[28px]
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  mt-4
                  text-[15px]
                  leading-7
                  text-[#666]

                  lg:mt-5
                  lg:text-[18px]
                  lg:leading-8
                "
              >
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}