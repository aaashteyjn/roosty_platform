import { Avatar } from "../ui/Avatar";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";

type Props = {
  name: string;
  category: string;
  subscribers: string;
  posts: number;
};

export function ExpertCard({
  name,
  category,
  subscribers,
  posts,
}: Props) {
  return (
    <Card className="flex flex-col items-center p-8">

      <Avatar name={name} />

      <h3 className="mt-6 text-center text-[26px] font-bold text-[#333]">
        {name}
      </h3>

      <p className="mt-2 text-center text-[#666]">
        {category}
      </p>

      <div className="mt-8 flex w-full justify-between text-sm text-[#666]">

        <div className="text-center">
          <div className="text-lg font-bold text-[#333]">
            {subscribers}
          </div>

          <div>
            подписчиков
          </div>
        </div>

        <div className="text-center">
          <div className="text-lg font-bold text-[#333]">
            {posts}
          </div>

          <div>
            публикаций
          </div>
        </div>

      </div>

      <Button className="mt-8 w-full">
        Подробнее
      </Button>

    </Card>
  );
}