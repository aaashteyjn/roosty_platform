import { Container } from "../layout/Container";
import { Section } from "../layout/Section";

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
      className="bg-[#F8F6FF] py-24"
      pattern
    >
      <Container>

        <h2 className="text-[46px] font-black text-[#333]">
          Почему выбирают РУСТИ
        </h2>

        <p className="mt-3 text-xl text-[#666]">
          Всё необходимое для получения качественной экспертной аналитики.
        </p>

        <div className="mt-14 grid grid-cols-2 gap-8">

          {advantages.map((item) => (
            <div
              key={item.title}
              className="
                relative
                z-20
                bg-white
                p-8
                shadow-md
                transition
                hover:shadow-xl
              "
            >
              <h3 className="text-[28px] font-bold text-[#333]">
                {item.title}
              </h3>

              <p className="mt-5 text-[18px] leading-8 text-[#666]">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </Container>
    </Section>
  );
}