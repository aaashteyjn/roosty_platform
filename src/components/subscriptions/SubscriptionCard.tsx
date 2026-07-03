type Props = {
  title: string;
  price: number;
  description: string;
  active: boolean;
};

export function SubscriptionCard({
  title,
  price,
  description,
  active,
}: Props) {
  return (
    <div className="mb-5 bg-[#d9ccff] p-6">
      <h3 className="text-[18px] font-bold text-[#333]">
        {title}
      </h3>

      <p className="mt-2 text-[16px]">
        {price} рублей в месяц
      </p>

      <p className="mt-4 text-[15px] leading-8 text-[#555]">
        {description}
      </p>

      <button
        className={`mt-6 w-full py-3 font-bold uppercase tracking-wider ${
          active
            ? 'bg-[#8d71ff] text-white'
            : 'bg-[#7b68ee] text-white'
        }`}
      >
        {active ? 'Оформлена' : 'Подписаться'}
      </button>
    </div>
  );
}