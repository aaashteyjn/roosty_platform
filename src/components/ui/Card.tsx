import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export function Card({
  children,
  className = "",
}: Props) {
  return (
    <div
      className={`
        relative
        z-20

        overflow-hidden

        bg-white

        shadow-md

        transition-all
        duration-300

        md:hover:-translate-y-2
        md:hover:shadow-xl

        ${className}
      `}
    >
      {children}
    </div>
  );
}