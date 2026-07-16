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
    <Card className="flex h-full flex-col overflow-hidden">

      <div className="h-[220px] bg-[#D9CCFF]" />

      <div className="flex flex-1 flex-col p-6">

    <div className="inline-flex">
      <Tag>{category}</Tag>
    </div>

        <h3 className="mt-5 text-[28px] font-bold text-[#333]">
          {title}
        </h3>

        <p className="mt-4 leading-8 text-[#666]">
          {description}
        </p>

        {/* Всегда прижатый низ */}

        <div className="mt-auto pt-8 flex justify-between text-lg text-[#555]">

          <span>👍 124</span>

          <span>💬 36</span>

        </div>

      </div>

    </Card>
  );
}