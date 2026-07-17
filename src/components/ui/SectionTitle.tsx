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
    <div
      className="
        mb-10
        text-center

        lg:mb-14
        lg:text-left
      "
    >
      <h2
        className="
          text-3xl
          font-black
          leading-tight
          text-[#333]

          sm:text-4xl
          lg:text-[46px]
        "
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className="
            mx-auto
            mt-4
            max-w-2xl

            text-base
            leading-7
            text-[#666]

            sm:text-lg

            lg:mx-0
            lg:text-xl
            lg:leading-8
          "
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}