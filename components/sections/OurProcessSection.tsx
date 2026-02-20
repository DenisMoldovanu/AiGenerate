import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

const processSteps = [
  {
    icon: "/images/icons/process-discovery.svg",
    title: "Discovery",
    description:
      "We audit your current marketing ecosystem and identify growth opportunities.",
  },
  {
    icon: "/images/icons/process-strategy.svg",
    title: "Strategy",
    description: "We design a data-driven roadmap tailored to your goals.",
  },
  {
    icon: "/images/icons/process-execution.svg",
    title: "Execution",
    description:
      "We launch campaigns, build funnels, and activate your growth engine.",
  },
  {
    icon: "/images/icons/process-optimization.svg",
    title: "Optimization",
    description: "We continuously refine performance based on real data.",
  },
  {
    icon: "/images/icons/process-scaling.svg",
    title: "Scaling",
    description: "We double down on what works and expand strategically.",
  },
];

export function OurProcessSection() {
  return (
    <section className="w-full py-12 lg:py-20 bg-white">
      <Container>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="lg:max-w-[560px] flex-shrink-0">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/images/icons/chevron-right.svg"
                alt=""
                width={16}
                height={16}
                className="w-4 h-4"
              />
              <span className="text-sm font-medium text-[#780000]">
                &gt; The How
              </span>
            </div>
            <h2 className="text-[32px] lg:text-[48px] font-extrabold leading-[1.17] text-black mb-6">
              Our Process
            </h2>
            <p className="text-base font-normal text-black leading-6 mb-4">
              We don&apos;t rely on guesswork - we operate through a structured
              growth framework.
            </p>
            <p className="text-base font-normal text-black leading-6 mb-4">
              Every stage of our process is designed to reduce uncertainty,
              maximize efficiency, and deliver measurable impact. We begin with
              deep analysis to understand your market, positioning, and growth
              potential. From there, we develop a data-driven strategy, execute
              with precision, and continuously optimize based on real performance
              metrics.
            </p>
            <p className="text-base font-normal text-black leading-6">
              Our approach ensures that every decision is intentional, every
              campaign is aligned with your business goals, and every step moves
              you closer to scalable, sustainable growth.
            </p>
          </div>

          <div className="flex-1 lg:max-w-[520px]">
            <Link
              href="#"
              className="inline-block border-b border-[#780000] pb-1 text-base font-medium text-black hover:text-[#780000] transition-colors mb-8"
            >
              Proven Growth Model
            </Link>
            <div className="relative pl-12">
              <div className="absolute left-[11px] top-6 bottom-6 w-0 border-l-2 border-dashed border-[#780000]" />
              <div className="flex flex-col gap-8">
                {processSteps.map((step) => (
                  <div key={step.title} className="relative flex gap-4">
                    <div className="absolute left-0 w-3 h-3 rounded-full bg-[#780000] -translate-x-1/2 top-2.5 z-10" />
                    <div className="flex-1 flex gap-4">
                      <div className="w-12 h-12 rounded-lg bg-[#f9f3f3] flex items-center justify-center shrink-0">
                        <Image
                          src={step.icon}
                          alt=""
                          width={24}
                          height={24}
                          className="w-6 h-6"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-black mb-1">
                          {step.title}
                        </h3>
                        <p className="text-base font-normal text-black leading-6">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
