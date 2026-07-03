import { Container } from "../layout/Container";
import { mockCategories } from "../../data/mockCategories";

export function Categories() {
  return (
    <section className="bg-white py-24">
      <Container>

        <h2 className="text-[46px] font-black text-[#333]">
          Популярные тематики
        </h2>

        <p className="mt-3 text-xl text-[#666]">
          Выберите интересующее направление.
        </p>

        <div className="mt-14 grid grid-cols-4 gap-6">

          {mockCategories.map((category) => (

            <button
              key={category}
              className="
                bg-[#D9CCFF]
                px-8
                py-8
                text-left
                text-[22px]
                font-bold
                text-[#333]
                transition-all
                duration-300
                hover:-translate-y-2
                hover:bg-[#7B68EE]
                hover:text-white
                hover:shadow-xl
              "
            >
              {category}
            </button>

          ))}

        </div>

      </Container>
    </section>
  );
}