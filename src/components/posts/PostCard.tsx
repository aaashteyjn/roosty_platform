import { Link } from "react-router-dom";

import { Card } from "../ui/Card";

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
    <Card className="flex h-full flex-col overflow-hidden bg-white">

      {image && (
        <img
          src={image}
          alt={title}
          className="h-[280px] w-full object-cover"
        />
      )}

      <div className="flex flex-1 flex-col p-7">

        <div className="flex items-start justify-between gap-4">

          <span
            className="
              rounded-lg
              bg-[#D9CCFF]
              px-4
              py-2
              text-sm
              font-bold
              text-[#333]
            "
          >
            {type}
          </span>

          {locked && (
            <span
              className="
                whitespace-nowrap
                text-sm
                font-bold
                text-[#7B68EE]
              "
            >
              🔒 Только подписчикам
            </span>
          )}

        </div>

        <h2
          className="
            mt-6
            text-[32px]
            font-black
            leading-tight
            text-[#333]
          "
        >
          {title}
        </h2>

        {description && (
          <p
            className="
              mt-4
              flex-1
              text-lg
              leading-8
              text-[#666]
            "
          >
            {description}
          </p>
        )}

        <div
          className="
            mt-8
            flex
            items-center
            justify-between
            border-t
            border-[#ECE8FF]
            pt-6
          "
        >

          <div className="flex gap-6 text-[#555]">

            <span>👍 {likes}</span>

            <span>💬 {comments}</span>

          </div>

          {locked ? (
            <button
              className="
                rounded-xl
                bg-[#7B68EE]
                px-6
                py-3
                font-bold
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#6855E5]
                hover:shadow-lg
              "
            >
              Подписаться
            </button>
          ) : (
            <Link
              to={`/post/${id}`}
              className="
                rounded-xl
                border-2
                border-[#7B68EE]
                px-6
                py-3
                font-bold
                text-[#7B68EE]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#7B68EE]
                hover:text-white
              "
            >
              Читать
            </Link>
          )}

        </div>

      </div>

    </Card>
  );
}