import { cn } from "@/lib/utils";
import NextLink from "next/link";
import type { ComponentProps, ReactNode } from "react";

type LinkVariant =
  | "nav"
  | "primary"
  | "underline"
  | "underline-primary"
  | "article";

interface LinkProps extends Omit<ComponentProps<typeof NextLink>, "href"> {
  href: string;
  variant?: LinkVariant;
  children: ReactNode;
  className?: string;
}

const variants: Record<LinkVariant, string> = {
  nav: "block px-2.5 py-2.5 text-base font-medium leading-6 text-black hover:text-brand-primary transition-colors",
  primary:
    "inline-flex items-center gap-2.5 bg-brand-primary rounded-pill px-5 py-2 text-base font-medium leading-6 text-white hover:bg-brand-primary-hover transition-colors",
  underline:
    "inline-flex items-center border-b border-black pb-1 text-base font-medium text-black hover:text-brand-primary transition-colors",
  "underline-primary":
    "inline-flex items-center border-b border-brand-primary pb-[3px] text-sm font-bold leading-6 text-black hover:text-brand-primary transition-colors",
  article:
    "inline-flex items-center gap-2 text-base font-medium text-brand-primary hover:underline",
};

export function Link({
  href,
  variant = "nav",
  children,
  className,
  ...props
}: LinkProps) {
  return (
    <NextLink href={href} className={cn(variants[variant], className)} {...props}>
      {children}
    </NextLink>
  );
}
