import type { ReactNode } from "react";

type Props = {
  title: ReactNode;
  subtitle?: ReactNode;
};

export function SectionTitle({
  title,
  subtitle,
}: Props) {
  return (
    <div className="mb-14">

      <h2 className="text-[46px] font-black text-[#333]">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-xl text-[#666]">
          {subtitle}
        </p>
      )}

    </div>
  );
}