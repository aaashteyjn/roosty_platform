import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export function Container({ children }: Props) {
  return (
    <div className="mx-auto w-full max-w-[1240px] px-6">
      {children}
    </div>
  );
}