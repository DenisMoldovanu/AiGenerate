import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  "aria-label": string;
  className?: string;
}

export function IconButton({
  children,
  className,
  ...props
}: IconButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        "w-10 h-10 rounded-full flex items-center justify-center transition-colors",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
