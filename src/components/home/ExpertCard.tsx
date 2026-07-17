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
  id,
  name,
  category,
  description,
  image,
}: Props) {
  return (
    <Card className="flex h-full flex-col">
      <img
        src={image}
        alt={name}
        className="
          h-56
          w-full
          object-cover

          sm:h-64
          lg:h-72
        "
      />

      <div className="flex flex-1 flex-col p-5 lg:p-6">
        <div className="inline-flex">
          <Tag>{category}</Tag>
        </div>

        <h3
          className="
            mt-4
            text-2xl
            font-black
            leading-tight
            text-[#333]

            lg:mt-5
            lg:text-[30px]
          "
        >
          {name}
        </h3>

        <p
          className="
            mt-3
            line-clamp-4

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

        <Link
          to={`/author/${id}`}
          className="mt-auto pt-6 lg:pt-8"
        >
          <Button className="w-full">
            Подробнее
          </Button>
        </Link>
      </div>
    </Card>
  );
}