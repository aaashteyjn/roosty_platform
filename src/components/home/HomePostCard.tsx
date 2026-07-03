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
    <Card className="overflow-hidden">

      <div className="h-[220px] bg-[#D9CCFF]" />

      <div className="p-6">

        <Tag>
          {category}
        </Tag>

        <h3 className="mt-5 text-[28px] font-bold text-[#333]">
          {title}
        </h3>

        <p className="mt-4 leading-8 text-[#666]">
          {description}
        </p>

        <div className="mt-8 flex justify-between text-lg">

          <span>❤️ 124</span>

          <span>💬 36</span>

        </div>

      </div>

    </Card>
  );
}