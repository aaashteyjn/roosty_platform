import type { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export function Input({
  label,
  className = "",
  ...props
}: Props) {
  return (
    <div className="mb-6">
      <label className="mb-2 block text-sm font-semibold text-[#555]">
        {label}
      </label>

      <input
        className={`
          w-full
          rounded-lg
          border
          border-[#DDD]
          px-4
          py-3
          outline-none
          transition
          focus:border-[#7B68EE]
          focus:ring-2
          focus:ring-[#D9CCFF]
          ${className}
        `}
        {...props}
      />
    </div>
  );
}