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
    <div className="mb-5 lg:mb-6">
      <label
        className="
          mb-2
          block

          text-sm
          font-semibold
          text-[#555]

          lg:text-base
        "
      >
        {label}
      </label>

      <input
        className={`
          w-full

          rounded-lg
          border
          border-[#DDD]

          bg-white

          px-4
          py-3

          text-base
          text-[#333]
          placeholder:text-[#999]

          outline-none

          transition-all
          duration-200

          focus:border-[#7B68EE]
          focus:ring-2
          focus:ring-[#D9CCFF]

          disabled:cursor-not-allowed
          disabled:bg-[#F5F5F5]
          disabled:text-[#999]

          ${className}
        `}
        {...props}
      />
    </div>
  );
}