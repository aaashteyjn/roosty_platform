import { Card } from "../ui/Card";
import { Link } from "react-router-dom";

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

        <div className="flex items-center justify-between">

          <span
            className="
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
              text-lg
              leading-8
              text-[#666]
            "
          >
            {description}
          </p>
        )}

        {/* Нижняя часть всегда прижата вниз */}

        <div
          className="
            mt-auto
            pt-8
            flex
            items-center
            justify-between
          "
        >

          <div className="flex gap-6 text-[#555]">

            <span>
              👍 {likes}
            </span>

            <span>
              💬 {comments}
            </span>

          </div>

          {locked ? (

            <button
              className="
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
              border-2
              border-[#7B68EE]
              px-6
              py-3
              font-bold
              text-[#7B68EE]
              transition-all
              duration-300
              hover:bg-[#7B68EE]
              hover:text-white
              hover:-translate-y-1
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