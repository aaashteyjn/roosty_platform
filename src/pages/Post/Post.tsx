import { useParams } from "react-router-dom";

import { posts } from "../../data/posts";

import { Container } from "../../components/layout/Container";
import { SubscriptionCard } from "../../components/subscriptions/SubscriptionCard";


export function Post() {

  const { id } = useParams();

  const post = posts.find(
    (item) => item.id === Number(id)
  );


  if (!post) {
    return (
      <div className="py-20 text-center text-2xl">
        Публикация не найдена
      </div>
    );
  }


  return (
    <main className="bg-[#F8F6FF] min-h-screen py-16">

      <Container>

        <div className="flex gap-10">


          {/* Материал */}

          <article className="flex-1 bg-white p-10">


            {/* Категория */}

            <div className="
              inline-block
              bg-[#D9CCFF]
              px-4
              py-2
              font-bold
              text-[#333]
            ">
              {post.type}
            </div>



            {/* Автор публикации */}

            <div className="
              mt-6
              flex
              items-center
              gap-4
            ">

              <img
                src={post.authorAvatar}
                alt={post.author}
                className="
                  h-14
                  w-14
                  rounded-full
                  object-cover
                "
              />


              <div>

                <div className="
                  font-bold
                  text-[#333]
                ">
                  {post.author}
                </div>


                <div className="
                  text-sm
                  text-[#777]
                ">
                  {post.date}
                </div>

              </div>

            </div>



            {/* Закрытый материал */}

            {post.locked && (

              <div className="
                mt-5
                font-bold
                text-[#7B68EE]
              ">
                🔒 Материал доступен подписчикам
              </div>

            )}



            {/* Заголовок */}

            <h1 className="
              mt-8
              text-[48px]
              font-black
              leading-tight
              text-[#333]
            ">
              {post.title}
            </h1>



            {/* Описание */}

            <p className="
              mt-6
              text-xl
              leading-9
              text-[#555]
            ">
              {post.description}
            </p>



            {/* Контент */}

            {post.locked ? (

              <div className="
                mt-12
                rounded-2xl
                bg-[#F3EEFF]
                p-10
                text-center
              ">

                <h2 className="
                  text-3xl
                  font-black
                  text-[#333]
                ">
                  Оформите подписку,
                  чтобы прочитать материал
                </h2>


                <p className="
                  mt-4
                  text-[#666]
                ">
                  Получите доступ к закрытым
                  аналитическим материалам автора.
                </p>


                <button className="
                  mt-8
                  bg-[#7B68EE]
                  px-8
                  py-4
                  font-bold
                  text-white
                  transition
                  hover:bg-[#6855E5]
                ">
                  Оформить подписку
                </button>


              </div>

            ) : (

              <div className="
                mt-10
                text-lg
                leading-9
                text-[#444]
              ">

                Здесь будет полный текст публикации.

                <br /><br />

                После подключения API этот блок
                будет получать контент с сервера.

              </div>

            )}


          </article>



          {/* Подписка */}

          <aside className="w-[340px]">

            <div className="sticky top-28">


              <SubscriptionCard
                title="Премиум подписка"
                price={1990}
                description="
                  Доступ ко всем закрытым материалам,
                  видео и мероприятиям.
                "
                active={false}
              />


            </div>

          </aside>


        </div>

      </Container>

    </main>
  );
}