import { Container } from "../../components/layout/Container";
import { PostCard } from "../../components/posts/PostCard";


export function AuthorDashboard() {

  return (
    <main className="min-h-screen bg-[#F8F6FF] py-16">

      <Container>


        {/* Профиль автора */}

        <section className="bg-white p-10">


          <div className="flex items-center justify-between">


            <div className="flex items-center gap-6">


              <img
                src="/experts/eustafiev.jpg"
                alt="Дмитрий Евстафьев"
                className="
                  h-32
                  w-32
                  rounded-full
                  border-8
                  border-[#D9CCFF]
                  object-cover
                "
              />


              <div>

                <h1 className="
                  text-4xl
                  font-black
                  text-[#333]
                ">
                  Дмитрий Евстафьев
                </h1>


                <p className="
                  mt-2
                  text-[#666]
                ">
                  Политолог, аналитик международных отношений
                </p>


              </div>


            </div>



            <button
              className="
                border-2
                border-[#7B68EE]
                px-6
                py-3
                font-bold
                text-[#7B68EE]
                hover:bg-[#7B68EE]
                hover:text-white
              "
            >
              Редактировать
            </button>


          </div>


        </section>





        {/* Статистика */}

        <section className="
          mt-10
          grid
          grid-cols-3
          gap-6
        ">


          <div className="bg-white p-8 text-center">

            <div className="
              text-4xl
              font-black
              text-[#7B68EE]
            ">
              14 200
            </div>

            <div className="mt-2 text-[#666]">
              Подписчиков
            </div>

          </div>



          <div className="bg-white p-8 text-center">

            <div className="
              text-4xl
              font-black
              text-[#7B68EE]
            ">
              134
            </div>

            <div className="mt-2 text-[#666]">
              Публикаций
            </div>

          </div>



          <div className="bg-white p-8 text-center">

            <div className="
              text-4xl
              font-black
              text-[#7B68EE]
            ">
              280 000 ₽
            </div>

            <div className="mt-2 text-[#666]">
              Доход
            </div>

          </div>


        </section>





        {/* Публикации */}

        <section className="mt-12">


          <div className="
            flex
            items-center
            justify-between
          ">


            <h2 className="
              text-3xl
              font-black
              text-[#333]
            ">
              Мои публикации
            </h2>



            <button
              className="
                bg-[#7B68EE]
                px-6
                py-3
                font-bold
                text-white
              "
            >
              + Создать публикацию
            </button>


          </div>




          <div className="mt-8">


            <PostCard

              id={1}

              title="Новая стратегия Китая"

              description="
                Анализ внешней политики Китая
                и глобальных изменений.
              "

              image="/posts/default.jpg"

              likes={124}

              comments={36}

              locked={true}

              type="Статья"

            />


          </div>


        </section>





        {/* Настройки */}

        <section className="
          mt-12
          bg-white
          p-10
        ">


          <h2 className="
            text-3xl
            font-black
            text-[#333]
          ">
            Настройки автора
          </h2>


          <div className="
            mt-6
            flex
            flex-col
            gap-4
          ">


            <button className="text-left font-semibold text-[#555]">
              Изменить описание
            </button>


            <button className="text-left font-semibold text-[#555]">
              Настроить подписки
            </button>


            <button className="text-left font-semibold text-[#555]">
              Платежные данные
            </button>


          </div>


        </section>


      </Container>

    </main>
  );
}