import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function Tag({ children }: Props) {
  return (
    <span
      className="
        inline-block
        bg-[#7B68EE]
        px-3
        py-2
        text-sm
        font-bold
        text-white
      "
    >
      {children}
    </span>
  );
}