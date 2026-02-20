import Image from "next/image";
import { Container } from "@/components/ui/Container";

const featuredTestimonial = {
  stat: "8X",
  statLabel: "Increase in conversion rate",
  quote1:
    '"Wordwell transformed our entire approach to performance marketing. Before partnering with them, we were struggling with inconsistent results and fragmented campaigns. Their strategic framework brought clarity and accountability to every channel."',
  quote2:
    '"Within six months, we saw an 8X increase in our conversion rate and a significant improvement in customer lifetime value. The team is professional, responsive, and truly invested in our success. I can\'t recommend them highly enough."',
  author: {
    name: "Michael Turner",
    role: "CEO, TechNova Solutions",
    location: "Calgary, Canada",
    image: "https://i.pravatar.cc/120?img=12",
  },
};

type TestimonialVariant = "white" | "primary";

const smallTestimonials: Array<{
  stat?: string;
  statLabel?: string;
  quote: string;
  variant: TestimonialVariant;
  author: { name: string; role: string; location: string; image: string };
}> = [
  {
    stat: "8X",
    statLabel: "Increase in conversion rate",
    quote:
      '"The level of expertise and commitment they brought to our campaigns exceeded every expectation. Our ROI improved dramatically."',
    variant: "white",
    author: {
      name: "Emily Rodriguez",
      role: "Marketing Director, Elevate Retail",
      location: "Calgary, Canada",
      image: "https://i.pravatar.cc/80?img=5",
    },
  },
  {
    quote:
      '"They turned our scattered marketing into a scalable growth system. The ROI speaks for itself."',
    variant: "white",
    author: {
      name: "Daniel Brooks",
      role: "Marketing Director, Elevate Retail",
      location: "Calgary, Canada",
      image: "https://i.pravatar.cc/80?img=11",
    },
  },
  {
    variant: "primary",
    quote:
      '"Strategic, data-driven, and incredibly efficient. Our best marketing investment so far."',
    author: {
      name: "Olivia Chen",
      role: "COO, Nexa Group",
      location: "Calgary, Canada",
      image: "https://i.pravatar.cc/80?img=9",
    },
  },
];

export function TestimonialsSection() {
  return (
    <section className="w-full py-12 lg:py-20 bg-[#f9f3f3]">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 lg:gap-6 mb-12">
          <div className="flex flex-col gap-2">
            <span className="text-sm font-medium text-[#780000]">
              &gt; Client Feedback
            </span>
            <h2 className="text-[32px] lg:text-[48px] font-extrabold leading-[1.17] text-black">
              Testimonials
            </h2>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <Image
                  key={i}
                  src={`https://i.pravatar.cc/80?img=${i}`}
                  alt=""
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full object-cover border-2 border-white"
                />
              ))}
            </div>
            <div>
              <span className="block text-2xl lg:text-3xl font-extrabold text-black font-stack-notch">
                24K+
              </span>
              <span className="text-sm font-normal text-gray-600">
                Clients Worldwide
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          <div className="flex-1 lg:flex-[1.2] rounded-[24px] bg-white p-6 lg:p-8 shadow-sm flex flex-col">
            <div className="mb-6">
              <span className="block text-4xl lg:text-5xl font-extrabold text-black leading-none mb-1 font-stack-notch">
                {featuredTestimonial.stat}
              </span>
              <span className="text-base font-normal text-gray-600">
                {featuredTestimonial.statLabel}
              </span>
            </div>
            <div className="flex-1 space-y-4 mb-6">
              <p className="text-base font-normal text-black leading-6">
                {featuredTestimonial.quote1}
              </p>
              <p className="text-base font-normal text-black leading-6">
                {featuredTestimonial.quote2}
              </p>
            </div>
            <div className="flex items-center gap-4 mt-auto">
              <Image
                src={featuredTestimonial.author.image}
                alt={featuredTestimonial.author.name}
                width={48}
                height={48}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="text-base font-bold text-black">
                  {featuredTestimonial.author.name}
                </h3>
                <p className="text-sm font-normal text-gray-500">
                  {featuredTestimonial.author.role}
                </p>
                <p className="text-xs font-normal text-gray-400">
                  {featuredTestimonial.author.location}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:flex-1 lg:max-w-[400px]">
            {smallTestimonials.map((t, i) => (
              <div
                key={i}
                className={`rounded-[24px] p-6 shadow-sm flex flex-col flex-1 ${
                  t.variant === "primary" ? "bg-[#780000]" : "bg-white"
                }`}
              >
                {t.stat && t.statLabel && (
                  <div className="mb-4">
                    <span
                      className={`text-xl font-bold font-stack-notch ${
                        t.variant === "primary" ? "text-white" : "text-black"
                      }`}
                    >
                      {t.stat}
                    </span>
                    <span
                      className={`text-sm font-normal ml-1 ${
                        t.variant === "primary"
                          ? "text-white/90"
                          : "text-gray-600"
                      }`}
                    >
                      {t.statLabel}
                    </span>
                  </div>
                )}
                <p
                  className={`text-sm font-normal leading-6 mb-6 flex-1 ${
                    t.variant === "primary" ? "text-white" : "text-black"
                  }`}
                >
                  {t.quote}
                </p>
                <div className="flex items-center gap-4">
                  <Image
                    src={t.author.image}
                    alt={t.author.name}
                    width={40}
                    height={40}
                    className={`w-10 h-10 rounded-full object-cover ${
                      t.variant === "primary"
                        ? "border-2 border-white/30"
                        : ""
                    }`}
                  />
                  <div>
                    <h3
                      className={`text-sm font-bold ${
                        t.variant === "primary" ? "text-white" : "text-black"
                      }`}
                    >
                      {t.author.name}
                    </h3>
                    <p
                      className={`text-xs font-normal ${
                        t.variant === "primary"
                          ? "text-white/90"
                          : "text-gray-500"
                      }`}
                    >
                      {t.author.role}
                    </p>
                    <p
                      className={`text-xs font-normal ${
                        t.variant === "primary"
                          ? "text-white/70"
                          : "text-gray-400"
                      }`}
                    >
                      {t.author.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
