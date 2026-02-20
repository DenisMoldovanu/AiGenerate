import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1472px] px-4 xl:px-4",
        className
      )}
    >
      {children}
    </div>
  );
}
