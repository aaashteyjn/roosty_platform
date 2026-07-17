import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function Tag({ children }: Props) {
  return (
    <span
      className="
        inline-flex
        items-center
        justify-center

        bg-[#7B68EE]

        px-3
        py-1.5

        text-xs
        font-bold
        uppercase
        tracking-wide

        text-white

        sm:px-3.5
        sm:py-2
        sm:text-sm
      "
    >
      {children}
    </span>
  );
}