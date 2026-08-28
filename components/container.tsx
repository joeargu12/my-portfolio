import type { ReactNode } from "react";

export function Container({ children }: { children: ReactNode }) {
  return <div className="mx-auto w-full max-w-content px-6 sm:px-8">{children}</div>;
}
