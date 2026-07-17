import type { Comment } from "../../data/comments";

type Props = {
  comment: Comment;
};

export function CommentCard({ comment }: Props) {
  return (
    <article
      className="
        border-b
        border-[#F0EDFF]
        py-4
        last:border-b-0
      "
    >
      <div className="flex gap-3">
        <img
          src={comment.avatar}
          alt={comment.author}
          className="h-10 w-10 shrink-0 rounded-full object-cover"
        />

        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-4">
            <span className="font-semibold text-[#222]">
              {comment.author}
            </span>

            <span className="shrink-0 text-xs text-[#999]">
              {comment.date}
            </span>
          </div>

          <p
            className="
              mt-2
              whitespace-pre-line
              text-[15px]
              leading-7
              text-[#444]
            "
          >
            {comment.content}
          </p>

          <div className="mt-3 flex items-center gap-6">
            <button
              className="
                text-[13px]
                text-[#777]
                transition-colors
                hover:text-[#7B68EE]
              "
            >
              👍 {comment.likes}
            </button>

            <button
              className="
                text-[13px]
                text-[#777]
                transition-colors
                hover:text-[#7B68EE]
              "
            >
              Ответить
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}