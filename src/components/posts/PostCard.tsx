import { Link } from "react-router-dom";

import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { Tag } from "../ui/Tag";

type Props = {
  id: number;
  title: string;
  description?: string;
  image?: string;
  likes: number;
  comments: number;
  locked?: boolean;
  type?: string;
};

export function PostCard({
  id,
  title,
  description,
  image,
  likes,
  comments,
  locked = false,
  type = "Статья",
}: Props) {
  return (
    <Card className="flex h-full flex-col bg-white">
      {image && (
        <img
          src={image}
          alt={title}
          className="
            h-56
            w-full
            object-cover

            sm:h-64
            lg:h-72
          "
        />
      )}

      <div className="flex flex-1 flex-col p-5 lg:p-7">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Tag>{type}</Tag>

          {locked && (
            <span
              className="
                text-xs
                font-bold
                text-[#7B68EE]

                sm:text-sm
              "
            >
              🔒 Только подписчикам
            </span>
          )}
        </div>

        <h2
          className="
            mt-5
            text-2xl
            font-black
            leading-tight
            text-[#333]

            lg:mt-6
            lg:text-[32px]
          "
        >
          {title}
        </h2>

        {description && (
          <p
            className="
              mt-3
              flex-1

              text-[15px]
              leading-7
              text-[#666]

              lg:mt-4
              lg:text-lg
              lg:leading-8
            "
          >
            {description}
          </p>
        )}

        <div
          className="
            mt-6
            flex
            flex-col
            gap-4

            border-t
            border-[#ECE8FF]

            pt-5

            sm:flex-row
            sm:items-center
            sm:justify-between

            lg:mt-8
            lg:pt-6
          "
        >
          <div className="flex gap-6 text-[#555]">
            <span>👍 {likes}</span>
            <span>💬 {comments}</span>
          </div>

          {locked ? (
            <Button className="w-full sm:w-auto">
              Подписаться
            </Button>
          ) : (
            <Link
              to={`/post/${id}`}
              className="w-full sm:w-auto"
            >
              <Button
                variant="secondary"
                className="w-full"
              >
                Читать
              </Button>
            </Link>
          )}
        </div>
      </div>
    </Card>
  );
}