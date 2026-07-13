import { Container } from "../../components/layout/Container";
import { SubscriptionCard } from "../../components/subscriptions/SubscriptionCard";
import { PostCard } from "../../components/posts/PostCard";

import { mockUser } from "../../data/user";


export function Profile() {

  return (
    <main className="min-h-screen bg-[#F8F6FF] py-16">

      <Container>


        {/* Верхний блок профиля */}

        <section className="bg-white p-10">


          <div className="flex items-center justify-between">


            <div className="flex items-center gap-6">


              <img
                src={mockUser.avatar}
                alt={mockUser.name}
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
                  {mockUser.name}
                </h1>


                <p className="
                  mt-2
                  text-[#666]
                ">
                  {mockUser.email}
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
                transition
                hover:bg-[#7B68EE]
                hover:text-white
              "
            >
              Редактировать
            </button>


          </div>


        </section>





        {/* Подписки */}


        <section className="mt-12">


          <h2 className="
            text-3xl
            font-black
            text-[#333]
          ">
            Мои подписки
          </h2>



          <div className="
            mt-6
            grid
            grid-cols-2
            gap-6
          ">


            {mockUser.subscriptions.map(
              (subscription) => (

                <SubscriptionCard

                  key={subscription.author}

                  title={subscription.author}

                  price={subscription.price}

                  description={`
                    ${subscription.plan}
                    
                    Статус:
                    ${subscription.status}
                  `}

                  active={true}

                />

              )
            )}


          </div>


        </section>





        {/* Избранное */}


        <section className="mt-12">


          <h2 className="
            text-3xl
            font-black
            text-[#333]
          ">
            Сохраненные материалы
          </h2>



          <div className="mt-6">


            <PostCard

              id={1}

              title="Новая стратегия Китая"

              description="
                Аналитический материал о внешней политике Китая
                и изменении мирового порядка.
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
            Настройки
          </h2>



          <div className="
            mt-6
            flex
            flex-col
            gap-4
          ">


            <button
              className="
                text-left
                font-semibold
                text-[#555]
                hover:text-[#7B68EE]
              "
            >
              Изменить пароль
            </button>


            <button
              className="
                text-left
                font-semibold
                text-[#555]
                hover:text-[#7B68EE]
              "
            >
              Настройки уведомлений
            </button>


            <button
              className="
                text-left
                font-semibold
                text-red-500
              "
            >
              Выйти из аккаунта
            </button>


          </div>


        </section>



      </Container>


    </main>
  );
}