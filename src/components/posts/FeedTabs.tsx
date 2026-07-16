import { useState } from "react";

const tabs = [
  "Вся лента",
  "Видео",
  "Статьи",
  "Мероприятия",
];

export function FeedTabs() {

  const [search, setSearch] = useState("");

  return (
    <div>

      {/* Поиск */}

      <div className="mx-auto mb-10 max-w-[760px]">

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Поиск публикаций..."
          className="
            h-[62px]
            w-full
            border
            border-[#D9CCFF]
            bg-white
            px-5
            text-[18px]
            outline-none
            transition-all
            duration-300
            focus:border-[#7B68EE]
            focus:shadow-lg
          "
        />

      </div>


      {/* Фильтры */}

      <div className="flex justify-center gap-4">

        {tabs.map((tab, index) => (

          <button
            key={tab}
            className={`
              px-7
              py-3
              text-[17px]
              font-semibold
              transition-all
              duration-300
              ${
                index === 0
                  ? "bg-[#7B68EE] text-white"
                  : "border border-[#D9CCFF] bg-white text-[#333] hover:bg-[#7B68EE] hover:text-white"
              }
            `}
          >
            {tab}
          </button>

        ))}

      </div>

    </div>
  );
}