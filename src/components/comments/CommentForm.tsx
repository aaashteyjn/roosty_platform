import type { FormEvent } from "react";

type Props = {
  onSubmit?: (text: string) => void;
};

export function CommentForm({ onSubmit }: Props) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    const textarea = form.elements.namedItem(
      "comment"
    ) as HTMLTextAreaElement;

    const text = textarea.value.trim();

    if (!text) return;

    onSubmit?.(text);

    textarea.value = "";
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="
        border
        border-[#E7E2FF]
        bg-white
        p-5
      "
    >
      <div className="flex gap-4">
        <img
          src="https://i.pravatar.cc/100?img=8"
          alt="Вы"
          className="h-10 w-10 shrink-0 rounded-full object-cover"
        />

        <div className="flex-1">
          <textarea
            name="comment"
            rows={3}
            maxLength={1000}
            placeholder="Напишите комментарий..."
            className="
              w-full
              resize-none
              rounded-md
              border
              border-[#ECE8FF]
              bg-[#FCFBFF]
              px-4
              py-3
              text-[15px]
              leading-7
              outline-none
              transition-all
              placeholder:text-[#999]
              focus:border-[#7B68EE]
              focus:bg-white
            "
          />

          <div className="mt-4 flex items-center justify-between">
            <span className="text-xs text-[#999]">
              Максимум 1000 символов
            </span>

            <button
              type="submit"
              className="
                rounded-md
                bg-[#7B68EE]
                px-5
                py-2.5
                text-sm
                font-semibold
                text-white
                transition-all
                hover:bg-[#6855E5]
                hover:shadow-md
              "
            >
              Опубликовать
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}