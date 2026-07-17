import { Card } from "../ui/Card";
import { Tag } from "../ui/Tag";

type Props = {
  title: string;
  category: string;
  description: string;
};

export function HomePostCard({
  title,
  category,
  description,
}: Props) {
  return (
    <Card className="flex h-full flex-col overflow-hidden transition-transform duration-300 hover:-translate-y-1">
      {/* Обложка */}

      <div
        className="
          h-52
          bg-[#D9CCFF]

          sm:h-60
          lg:h-56
        "
      />

      {/* Контент */}

      <div className="flex flex-1 flex-col p-5 lg:p-6">
        <div className="inline-flex">
          <Tag>{category}</Tag>
        </div>

        <h3
          className="
            mt-4
            text-2xl
            font-bold
            leading-tight
            text-[#333]

            lg:mt-5
            lg:text-[28px]
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-3
            text-[15px]
            leading-7
            text-[#666]

            lg:mt-4
            lg:text-base
            lg:leading-8
          "
        >
          {description}
        </p>

        <div
          className="
            mt-auto
            flex
            items-center
            justify-between
            pt-6

            text-base
            text-[#555]

            lg:pt-8
            lg:text-lg
          "
        >
          <span>👍 124</span>

          <span>💬 36</span>
        </div>
      </div>
    </Card>
  );
}