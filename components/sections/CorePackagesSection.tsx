import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

const packageFeatures = [
  { icon: "/images/icons/dollar.svg", text: "$1,500" },
  { icon: "/images/icons/package.svg", text: "14 Days" },
  {
    icon: "/images/icons/check.svg",
    text: "30 Days Performance Monitoring",
  },
  { icon: "/images/icons/pencil.svg", text: "2 Included" },
];

const packages = [
  {
    id: "growth",
    title: "Growth Package",
    icon: "/images/icons/growth-package.svg",
    variant: "light",
    ctaText: "View Included Services",
    ctaVariant: "white" as const,
  },
  {
    id: "performance",
    title: "Performance Package",
    icon: "/images/icons/performance-package-white.svg",
    variant: "primary" as const,
    badge: "Most Popular",
    ctaText: "View Included Services",
    ctaVariant: "primary" as const,
  },
  {
    id: "scalable",
    title: "Scalable Growth",
    icon: "/images/icons/scalable-growth.svg",
    variant: "light",
    ctaText: "View Included Services",
    ctaVariant: "white" as const,
  },
];

function PackageCard({
  title,
  icon,
  variant,
  badge,
  ctaText,
  ctaVariant,
}: (typeof packages)[0]) {
  const isPrimary = variant === "primary";

  return (
    <div
      className={`flex flex-col rounded-card border border-solution-card-border overflow-hidden ${
        isPrimary ? "lg:-mt-4" : "bg-locations-bg/50"
      }`}
    >
      <div
        className={`flex flex-col items-center pt-8 pb-6 px-6 ${
          isPrimary ? "bg-gradient-to-r from-brand-primary to-brand-dark relative" : ""
        }`}
      >
        {badge && (
          <span className="absolute top-4 right-4 rounded-full bg-brand-primary px-3 py-1 text-xs font-medium text-white">
            {badge}
          </span>
        )}
        <div
          className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
            isPrimary ? "bg-white/20" : "bg-white"
          }`}
        >
          <Image src={icon} alt="" width={40} height={40} className="w-10 h-10" />
        </div>
        <h3
          className={`text-xl font-bold mb-6 ${
            isPrimary ? "text-white" : "text-black"
          }`}
        >
          {title}
        </h3>
        <Link
          href="#"
            className={`inline-flex items-center justify-center rounded-pill px-6 py-2.5 text-sm font-medium transition-colors ${
            ctaVariant === "primary"
              ? "bg-brand-primary text-white hover:bg-brand-primary-hover"
              : "bg-white text-brand-primary hover:bg-white/90"
          }`}
        >
          {ctaText}
        </Link>
      </div>
      <div
        className={`flex flex-col border-t ${
          isPrimary ? "bg-locations-bg/50 border-locations-bg" : "border-locations-bg"
        }`}
      >
        {packageFeatures.map((feature, i) => (
          <div
            key={i}
            className="flex items-center justify-between px-4 py-3 border-b border-locations-bg last:border-b-0"
          >
            <div className="flex items-center gap-2.5">
              <Image
                src={feature.icon}
                alt=""
                width={20}
                height={20}
                className="w-5 h-5 shrink-0"
              />
              <span className="text-sm text-gray-500">{feature.text}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function CorePackagesSection() {
  return (
    <section className="w-full py-12 lg:py-20">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 lg:gap-6 mb-12">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8 lg:flex-1">
            <span className="flex items-center gap-2 text-sm font-medium text-brand-primary">
              <span>The What</span>
              <Image
                src="/images/icons/chevron-right.svg"
                alt=""
                width={16}
                height={16}
                className="w-4 h-4"
              />
            </span>
            <h2 className="text-[32px] lg:text-[48px] font-extrabold leading-[1.17] text-black">
              Core Packages
            </h2>
          </div>
          <Link
            href="#"
            className="border-b border-black pb-1 text-base font-medium text-black hover:text-brand-primary transition-colors shrink-0"
          >
            Growth Focused Solutions
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} {...pkg} />
          ))}
        </div>
      </Container>
    </section>
  );
}
