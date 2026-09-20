import type { ElementType, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

/** Container centrado, max-width 1200px, gutters 24/32/40px (brief sección 4). */
export function Container({ children, className = "", as: Tag = "div" }: ContainerProps) {
  return (
    <Tag className={`mx-auto w-full max-w-[1200px] px-6 sm:px-8 lg:px-10 ${className}`}>
      {children}
    </Tag>
  );
}
