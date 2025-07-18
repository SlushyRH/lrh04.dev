import type { ReactNode } from "react";

export function Title({ children, className = "" }: { children: ReactNode, className?: string }) {
  return (
    <h1 className={`text-2xl font-bold py-4 ${className }`}>{children}</h1>
  );
}

export function Paragraph({ children, className = "" }: { children: ReactNode, className?: string }) {
  return (
    <p className={`pb-2 ${className }`}>{children}</p>
  );
}