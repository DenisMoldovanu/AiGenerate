import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

const featuredArticle = {
  image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80",
  title: "The Future of Performance Marketing in 2026",
  excerpt:
    "Discover how performance marketing will evolve in 2026, driven by AI, automation, and real-time analytics. This article explores emerging trends, challenges, and opportunities shaping the industry, helping brands adapt strategies to stay ahead in an increasingly competitive landscape.",
};

const smallArticles = [
  {
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    title: "The Future of Performance Marketing in 2026",
    excerpt:
      "Discover how performance marketing will evolve in 2026, driven by AI, automation, and real-time analytics.",
  },
  {
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80",
    title: "The Future of Performance Marketing in 2026",
    excerpt:
      "Discover how performance marketing will evolve in 2026, driven by AI, automation, and real-time analytics.",
  },
];

export function BlogSection() {
  return (
    <section className="w-full py-12 lg:py-20 bg-white">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 lg:gap-6 mb-12">
          <div className="flex flex-col gap-2">
            <span className="text-sm font-medium text-black">
              <span className="text-[#780000]">&gt;</span> Business Insights
            </span>
            <h2 className="text-[32px] lg:text-[48px] font-extrabold leading-[1.17] text-black">
              Blog
            </h2>
          </div>
          <Link
            href="#"
            className="inline-flex items-center gap-2 rounded-[22px] bg-[#780000] px-5 py-2.5 text-base font-medium text-white hover:bg-[#5c0000] transition-colors shrink-0"
          >
            <span>View All Articles</span>
            <Image
              src="/images/icons/arrow-top-right-white-sm.svg"
              alt=""
              width={12}
              height={12}
              className="w-3 h-3"
            />
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          <Link href="#" className="lg:flex-[1] group block shrink-0">
            <div className="rounded-[20px] overflow-hidden border border-gray-100 hover:border-gray-200 transition-colors h-full flex flex-col">
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  width={900}
                  height={506}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 lg:p-8 bg-white flex flex-col flex-1">
                <h3 className="text-xl lg:text-2xl font-bold text-black mb-3 group-hover:text-[#780000] transition-colors">
                  {featuredArticle.title}
                </h3>
                <p className="text-base font-normal text-gray-500 leading-6 mb-4">
                  {featuredArticle.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-base font-medium text-[#780000] group-hover:underline mt-auto">
                  Read Article
                  <Image
                    src="/images/icons/arrow-top-right.svg"
                    alt=""
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                </span>
              </div>
            </div>
          </Link>

          <div className="flex flex-col gap-6 lg:flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row gap-6 shrink-0">
              {smallArticles.map((article, i) => (
                <Link
                  key={i}
                  href="#"
                  className="group block flex-1 min-w-0"
                >
                  <div className="rounded-[20px] overflow-hidden border border-gray-100 hover:border-gray-200 transition-colors">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.title}
                        width={600}
                        height={450}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-5 bg-white">
                      <h3 className="text-lg font-bold text-black mb-2 group-hover:text-[#780000] transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-sm font-normal text-gray-500 leading-5 mb-4">
                        {article.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-2 text-sm font-medium text-[#780000] group-hover:underline">
                        Read Article
                        <Image
                          src="/images/icons/arrow-top-right.svg"
                          alt=""
                          width={12}
                          height={12}
                          className="w-3 h-3"
                        />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <form
              action="#"
              className="flex flex-col sm:flex-row rounded-full overflow-hidden border border-gray-200 bg-white shadow-sm shrink-0"
            >
              <div className="flex items-center px-6 py-4 sm:py-0 sm:min-h-[56px] bg-[#f9f3f3] shrink-0">
                <span className="text-base font-semibold text-black">
                  Get Growth Insights
                </span>
              </div>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="flex-1 min-w-0 px-6 py-4 text-base text-black placeholder-gray-400 border-0 focus:ring-0 focus:outline-none"
              />
              <button
                type="submit"
                className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-[#780000] hover:bg-[#5c0000] transition-colors shrink-0"
              >
                <Image
                  src="/images/icons/envelope-white.svg"
                  alt="Subscribe"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
