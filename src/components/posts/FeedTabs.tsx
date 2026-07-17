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

      <div className="mx-auto mb-8 max-w-[760px] lg:mb-10">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Поиск публикаций..."
          className="
            h-14
            w-full

            border
            border-[#D9CCFF]

            bg-white

            px-5

            text-base

            outline-none

            transition-all
            duration-300

            focus:border-[#7B68EE]
            focus:shadow-lg

            lg:h-[62px]
            lg:text-[18px]
          "
        />
      </div>

      {/* Фильтры */}

      <div
        className="
          flex
          gap-3

          overflow-x-auto

          lg:justify-center
        "
      >
        {tabs.map((tab, index) => (
          <button
            key={tab}
            className={`
              shrink-0

              px-5
              py-3

              text-sm
              font-semibold

              transition-all
              duration-300

              md:px-7
              md:text-[17px]

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