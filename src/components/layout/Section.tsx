import type { ReactNode } from "react";
import { ParticlesBackground } from "../common/ParticlesBackground";

type Props = {
  children: ReactNode;
  className?: string;
  pattern?: boolean;
  darkPattern?: boolean;
};

export function Section({
  children,
  className = "",
  pattern = false,
  darkPattern = false,
}: Props) {
  return (
    <section
      className={`relative overflow-hidden ${className}`}
    >
      {pattern && (
        <div className="absolute inset-0 z-0">
          <ParticlesBackground
            variant={darkPattern ? "dark" : "light"}
          />
        </div>
      )}

      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
}