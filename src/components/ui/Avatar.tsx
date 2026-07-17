import type { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement> & {
  name: string;
};

export function Avatar({
  name,
  className = "",
  ...props
}: Props) {
  const initials = name
    .trim()
    .split(/\s+/)
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className={`
        flex
        h-20
        w-20

        items-center
        justify-center

        rounded-full

        bg-[#7B68EE]

        text-2xl
        font-black
        text-white

        shrink-0

        sm:h-24
        sm:w-24
        sm:text-3xl

        lg:h-28
        lg:w-28

        ${className}
      `}
      {...props}
    >
      {initials}
    </div>
  );
}