import type { ButtonHTMLAttributes, ReactNode } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "white" | "outlineWhite";
};

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: Props) {
  const base =
    "px-8 py-4 font-bold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl";

  const variants = {
    primary:
      "bg-[#7B68EE] text-white hover:bg-[#6855E5]",

    secondary:
      "border-2 border-[#7B68EE] bg-transparent text-[#7B68EE] hover:bg-[#7B68EE] hover:text-white",

    white:
      "bg-white text-[#7B68EE] hover:bg-[#ECE7FF]",

    outlineWhite:
      "border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#7B68EE]",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}