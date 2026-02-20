import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant =
  | "primary"
  | "cta"
  | "secondary"
  | "outline"
  | "ghost"
  | "locations"
  | "white";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  className?: string;
  asChild?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[#780000] hover:bg-[#5c0000] text-white rounded-[22px] px-5 py-2.5 text-base font-medium transition-colors",
  cta: "bg-[#b21c0e] hover:bg-[#961709] text-white rounded-3xl px-6 py-2.5 text-xl font-normal transition-colors",
  secondary:
    "border border-white text-white hover:bg-white/10 rounded-3xl px-6 py-2.5 text-xl font-normal transition-colors",
  outline:
    "border-2 border-[#780000] text-[#780000] hover:bg-[#780000] hover:text-white rounded-[22px] px-5 py-2.5 text-base font-medium transition-colors",
  ghost:
    "rounded-[22px] border border-[#780000] text-[#780000] hover:bg-[#780000] hover:text-white px-4 py-2 text-sm font-medium transition-colors",
  locations:
    "bg-[#f9f3f3] hover:bg-[#f9f3f3]/80 text-black rounded-[22px] px-4 py-2 text-sm font-medium transition-colors",
  white:
    "bg-white hover:bg-white/90 text-[#780000] rounded-[22px] px-6 py-2.5 text-sm font-medium transition-colors",
};

const sizes: Record<string, string> = {
  sm: "text-sm px-4 py-2",
  md: "text-base px-5 py-2.5",
  lg: "text-xl px-6 py-3",
};

export function Button({
  variant = "primary",
  size = "md",
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        "inline-flex items-center justify-center gap-2 transition-colors",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
