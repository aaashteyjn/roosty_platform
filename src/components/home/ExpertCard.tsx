import { Link } from "react-router-dom";

import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { Tag } from "../ui/Tag";

type Props = {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
};

export function ExpertCard({
  name,
  category,
  description,
  image,
}: Props) {
  return (
    <Card className="overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-2xl">

      <img
        src={image}
        alt={name}
        className="h-[280px] w-full object-cover"
      />

      <div className="p-6">

        <Tag>{category}</Tag>

        <h3 className="mt-5 text-[30px] font-black leading-tight text-[#333]">
          {name}
        </h3>

        <p className="mt-4 line-clamp-4 text-[16px] leading-8 text-[#666]">
          {description}
        </p>

        <Link to="/author/dmitry-evstafiev">
          <Button className="mt-8 w-full">
            Подробнее
          </Button>
        </Link>

      </div>

    </Card>
  );
}