import { useEffect, useState } from 'react';

type Comment = {
  id: number;
  name: string;
  content: string;
};

type Props = {
  id: number;
  title: string;
  image: string;
  likes: number;
  comments: number;
};

export function PostCard({
  id,
  title,
  image,
  likes,
}: Props) {
  const [likesCount, setLikesCount] = useState(likes);
  const [isLiked, setIsLiked] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const [commentsList, setCommentsList] = useState<Comment[]>([]);
  const [commentText, setCommentText] = useState('');

  useEffect(() => {
    fetch(`http://localhost:5000/posts/${id}/likes`)
      .then((res) => res.json())
      .then((data) => {
        setLikesCount(data.likes);
        setIsLiked(data.liked);
      })
      .catch(console.error);

    fetch(`http://localhost:5000/posts/${id}/comments`)
      .then((res) => res.json())
      .then((data) => {
        setCommentsList(data);
      })
      .catch(console.error);
  }, [id]);

  const handleLike = async () => {
    try {
      setIsAnimating(true);

      const response = await fetch(
        `http://localhost:5000/posts/${id}/like`,
        {
          method: 'POST',
        }
      );

      const data = await response.json();

      setLikesCount(data.likes);
      setIsLiked(data.liked);

      setTimeout(() => {
        setIsAnimating(false);
      }, 350);
    } catch (error) {
      console.error(error);
      setIsAnimating(false);
    }
  };

  const handleComment = async () => {
    if (!commentText.trim()) return;

    try {
      const response = await fetch(
        `http://localhost:5000/posts/${id}/comments`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            content: commentText,
          }),
        }
      );

      const data = await response.json();

      setCommentsList(data);
      setCommentText('');
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteComment = async (
  commentId: number
  ) => {
    try {
      await fetch(
        `http://localhost:5000/comments/${commentId}`,
        {
          method: 'DELETE',
        }
      );

      setCommentsList((prev) =>
        prev.filter(
          (comment) => comment.id !== commentId
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-[#d9ccff] p-4">
      <div className="mb-3 flex justify-between">
        <span className="font-bold">
          Уровень подписки №1
        </span>

        <span>Видео</span>
      </div>

      <h2 className="mb-4 text-[32px] font-bold text-[#333]">
        {title}
      </h2>

      <img
        src={image}
        alt={title}
        className="h-[500px] w-full object-cover"
      />

      <div className="mt-4 flex gap-8 text-[18px]">
        <button
          onClick={handleLike}
          className="flex items-center gap-2"
        >
          <span
            className={`
              flex h-8 w-8 items-center justify-center
              text-3xl
              transition-all duration-200
              hover:scale-110
              ${isLiked ? 'text-red-500' : 'text-gray-400'}
              ${isAnimating ? 'like-pop' : ''}
            `}
          >
            {isLiked ? '❤️' : '🤍'}
          </span>

          <span>{likesCount}</span>
        </button>

        <div className="flex items-center gap-2">
        <span className="flex h-8 w-8 items-center justify-center text-3xl">
          💬
        </span>

        <span>{commentsList.length}</span>
      </div>
      </div>

      <div className="mt-6">
        <div className="flex gap-3">
          <input
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Написать комментарий..."
            className="
              flex-1
              rounded-lg
              border
              border-[#b7a8ff]
              px-4
              py-3
              outline-none
              focus:border-[#8d71ff]
            "
          />

          <button
            onClick={handleComment}
            className="
              rounded-lg
              bg-[#8d71ff]
              px-5
              py-3
              font-bold
              text-white
              transition
              hover:opacity-90
            "
          >
            Отправить
          </button>
        </div>

        <div className="mt-4 space-y-3">
          {commentsList.map((comment) => (
            <div
              key={comment.id}
              className="rounded-lg bg-white/60 p-3"
            >
              <div className="flex items-center justify-between">
                <p className="font-semibold">
                  {comment.name}
                </p>

                <button
                  onClick={() =>
                    handleDeleteComment(comment.id)
                  }
                  className="
                    text-xl
                    transition
                    hover:scale-110
                  "
                >
                  🗑️
                </button>
              </div>

              <p className="mt-1 text-[#555]">
                {comment.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}