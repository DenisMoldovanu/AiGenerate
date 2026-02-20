"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";

const partnerLogos = Array.from({ length: 10 }, (_, i) => ({
  src: `/images/partners/partner-${i + 1}.png`,
  alt: `Partner ${i + 1}`,
}));

export function PartnersSection() {
  return (
    <section className="w-full py-8 lg:py-10">
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[11px]">
            <Image
              src="/images/w-icon.svg"
              alt=""
              width={9}
              height={15}
              className="w-[9px] h-[15px]"
            />
            <span className="text-sm font-medium leading-6 text-black">
              Powering Global Growth
            </span>
          </div>
          <a
            href="#"
            className="inline-flex items-center border-b border-[#780000] pb-[3px] text-sm font-bold leading-6 text-black hover:text-[#780000] transition-colors"
          >
            Grow With Us
          </a>
        </div>
      </Container>

      <div className="w-full h-px bg-[#D9D9D9] mt-8" />

      <div className="w-full mt-10 overflow-hidden">
        <div className="flex animate-marquee w-max">
          {[...partnerLogos, ...partnerLogos].map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center px-6 lg:px-10 shrink-0"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={42}
                className="h-[42px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
