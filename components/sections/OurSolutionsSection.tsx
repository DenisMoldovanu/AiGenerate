import Image from "next/image";
import { Container } from "@/components/ui/Container";

const solutionCards = [
  {
    id: 1,
    problem: "Inconsistent lead flow",
    solution: "Predictable multi-channel acquisition systems",
  },
  {
    id: 2,
    problem: "Low return on ad spend",
    solution: "Data-driven campaign optimization and testing",
  },
  {
    id: 3,
    problem: "Unclear brand positioning",
    solution: "Clear positioning and conversion-focused messaging",
  },
  {
    id: 4,
    problem: "No structured growth strategy",
    solution: "Structured growth roadmap with measurable KPIs",
  },
];

function SolutionCard({
  id,
  problem,
  solution,
  className,
}: {
  id: number;
  problem: string;
  solution: string;
  className?: string;
}) {
  return (
    <div
      className={`bg-[rgba(120,0,0,0.05)] border border-white backdrop-blur-[50px] rounded-[20px] p-6 flex flex-col ${className}`}
    >
      <div className="flex flex-col items-end gap-[52px] w-full">
        <span className="font-stack-notch text-[56px] md:text-[72px] lg:text-[86px] font-bold leading-[1] text-right text-black/10">
          {String(id).padStart(2, "0")}
        </span>
        <div className="flex flex-col gap-5 w-full">
          <div className="flex items-center gap-2.5">
            <Image
              src="/images/solutions/octagon-xmark.svg"
              alt=""
              width={20}
              height={20}
              className="w-5 h-5 shrink-0"
            />
            <span className="text-base md:text-lg font-semibold leading-6 text-black">
              {problem}
            </span>
          </div>
          <div className="flex items-start gap-2.5">
            <Image
              src="/images/solutions/shield-trust.svg"
              alt=""
              width={20}
              height={20}
              className="w-5 h-5 shrink-0 mt-0.5"
            />
            <span className="text-base md:text-lg font-semibold leading-6 text-black">
              {solution}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function OurSolutionsSection() {
  return (
    <section className="w-full py-12 lg:py-16 overflow-hidden">
      <Container className="relative">
        <div className="hidden lg:block absolute left-0 top-[134px] w-[302px] h-[394px] overflow-hidden pointer-events-none z-0 opacity-20" />

        <div className="flex items-center gap-[11px] mb-5 relative z-10">
          <Image
            src="/images/w-icon.svg"
            alt=""
            width={9}
            height={15}
            className="w-[9px] h-[15px]"
          />
          <span className="text-base font-normal leading-6 text-[#780000]">
            The Why
          </span>
        </div>

        <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-16 relative z-10">
          <h2 className="text-[32px] lg:text-[48px] font-extrabold leading-[1.17] text-black shrink-0">
            Our Solutions
          </h2>
          <div className="max-w-[710px] flex flex-col gap-[26px]">
            <h3 className="text-xl lg:text-2xl font-extrabold leading-[1] text-black">
              Marketing Without Strategy Is Just Noise
            </h3>
            <p className="text-base font-normal leading-6 text-black">
              Many businesses invest in marketing but struggle to see consistent
              results. Campaigns lack direction, messaging feels disconnected,
              and performance becomes unpredictable. We bridge the gap between
              strategy and execution.
              <br />
              <br />
              Our team combines data, creativity, and technology to build
              marketing systems that generate sustainable growth and measurable
              ROI.
            </p>
          </div>
        </div>

        <div className="relative mt-10 lg:-mt-[150px] z-10">
          <div className="hidden lg:block relative w-full min-h-[400px]">
            {solutionCards.map((card, idx) => (
              <div
                key={card.id}
                className="absolute w-[343px]"
                style={{
                  left: `calc(${idx * 25}% + ${idx * 6}px)`,
                  top: `${idx * 60}px`,
                }}
              >
                <SolutionCard {...card} />
              </div>
            ))}
          </div>

          <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-4">
            {solutionCards.map((card) => (
              <SolutionCard key={card.id} {...card} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
