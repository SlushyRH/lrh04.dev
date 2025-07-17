import type { ReactNode } from "react";

export function Title({ children }: { children: ReactNode }) {
  return (
    <h1 className="text-2xl font-bold py-4">{children}</h1>
  );
}

export function Paragraph({ children }: { children: ReactNode }) {
  return (
    <p className="pb-2">{children}</p>
  );
}