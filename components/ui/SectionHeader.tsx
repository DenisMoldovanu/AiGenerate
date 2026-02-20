import { cn } from "@/lib/utils";
import Image from "next/image";
import type { ReactNode } from "react";

interface SectionHeaderProps {
  tag?: string;
  title: string;
  subtitle?: string;
  icon?: string;
  action?: ReactNode;
  className?: string;
}

export function SectionHeader({
  tag,
  title,
  subtitle,
  icon,
  action,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 lg:gap-6 mb-12",
        className
      )}
    >
      <div className="flex flex-col gap-2">
        {(tag || icon) && (
          <div className="flex items-center gap-2 mb-1">
            {icon && (
              <Image
                src={icon}
                alt=""
                width={9}
                height={15}
                className="w-[9px] h-[15px]"
              />
            )}
            {tag && (
              <span className="text-sm font-medium text-[#780000]">{tag}</span>
            )}
          </div>
        )}
        <h2 className="text-[32px] lg:text-[48px] font-extrabold leading-[1.17] text-black">
          {title}
        </h2>
        {subtitle && (
          <span className="text-sm font-medium text-gray-500">{subtitle}</span>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
