import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

const caseStudies = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
    alt: "Bacio Italiano case study",
    title: "How We Increased Revenue by 240% in 6 Months",
    excerpt:
      "Sustainable growth doesn't happen by chance. When this client approached us, they were generating traffic but struggling to convert it into consistent revenue. Their marketing efforts lacked structure, campaigns were under-optimized, and scaling felt risky rather than strategic. In this case study, we break down the exact framework we implemented.",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    alt: "Portfolio case study",
    title: "How We Increased Revenue by 240% in 6 Months",
    excerpt:
      "Sustainable growth doesn't happen by chance. When this client approached us, they were generating traffic but struggling to convert it into consistent revenue. Their marketing efforts lacked structure, campaigns were under-optimized, and scaling felt risky rather than strategic. In this case study, we break down the exact framework we implemented.",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    alt: "GASMIR case study",
    title: "How We Increased Revenue by 240% in 6 Months",
    excerpt:
      "Sustainable growth doesn't happen by chance. When this client approached us, they were generating traffic but struggling to convert it into consistent revenue. Their marketing efforts lacked structure, campaigns were under-optimized, and scaling felt risky rather than strategic. In this case study, we break down the exact framework we implemented.",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    alt: "Flexible Payment case study",
    title: "How We Increased Revenue by 240% in 6 Months",
    excerpt:
      "Sustainable growth doesn't happen by chance. When this client approached us, they were generating traffic but struggling to convert it into consistent revenue. Their marketing efforts lacked structure, campaigns were under-optimized, and scaling felt risky rather than strategic. In this case study, we break down the exact framework we implemented.",
  },
];

export function CaseStudiesSection() {
  return (
    <section className="w-full py-12 lg:py-20 bg-white">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 lg:gap-6 mb-12">
          <div className="flex flex-col gap-2">
            <span className="text-sm font-medium text-gray-500">
              &gt; Proven Results
            </span>
            <h2 className="text-[32px] lg:text-[48px] font-extrabold leading-[1.17] text-black">
              Case Studies
            </h2>
          </div>
          <Link
            href="#"
            className="inline-flex items-center gap-2 rounded-pill bg-brand-primary px-5 py-2.5 text-base font-medium text-white hover:bg-brand-primary-hover transition-colors shrink-0"
          >
            <span>View All Projects</span>
            <Image
              src="/images/icons/arrow-top-right-white-sm.svg"
              alt=""
              width={12}
              height={12}
              className="w-3 h-3"
            />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {caseStudies.map((item) => (
            <Link key={item.id} href="#" className="group block">
              <div className="rounded-card overflow-hidden border border-gray-100 hover:border-gray-200 transition-colors">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <Image
                      src="/images/icons/arrow-top-right.svg"
                      alt=""
                      width={16}
                      height={16}
                      className="w-4 h-4"
                    />
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-bold text-black mb-3 group-hover:text-brand-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-base font-normal text-gray-500 leading-6 line-clamp-3">
                    {item.excerpt}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
