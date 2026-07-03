const tabs = ['Вся лента', 'Видео', 'Статьи', 'Мероприятия'];

export function FeedTabs() {
  return (
    <div className="flex gap-[10px]">
      {tabs.map((tab, index) => (
        <button
          key={tab}
          className={`
            h-[58px]
            px-8
            text-[20px]
            font-bold
            tracking-[1px]
            transition-colors
            ${
              index === 0
                ? 'bg-white text-[#333333]'
                : 'bg-[#8D71FF] text-[#333333]'
            }
          `}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}