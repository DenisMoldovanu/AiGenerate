import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

const socialLinks = [
  { href: "#", label: "LinkedIn", icon: "/images/icons/linkedin.svg" },
  { href: "#", label: "Facebook", icon: "/images/icons/facebook.svg" },
  { href: "#", label: "YouTube", icon: "/images/icons/youtube.svg" },
];

const avatarUrls = [
  "https://i.pravatar.cc/64?img=1",
  "https://i.pravatar.cc/64?img=2",
  "https://i.pravatar.cc/64?img=3",
  "https://i.pravatar.cc/64?img=4",
];

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-[#780000] to-[#410303]">
      {/* Subtle dark red gradient overlay */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#780000] via-[#650000] to-[#410303] opacity-90" />

      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16 py-12 lg:py-16">
          {/* Left: Social icons + Headline block */}
          <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-8 w-full lg:flex-1">
            {/* Social icons - vertical stack */}
            <div className="hidden lg:flex flex-col items-center gap-6 shrink-0">
              {socialLinks.map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  className="w-10 h-10 rounded-full bg-black/30 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity"
                  aria-label={label}
                >
                  <Image src={icon} alt="" width={18} height={18} className="w-[18px] h-[18px]" />
                </a>
              ))}
              <a
                href="#main-content"
                className="w-10 h-10 rounded-full bg-black/30 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity"
                aria-label="Scroll down"
              >
                <Image
                  src="/images/icons/chevron-down.svg"
                  alt=""
                  width={18}
                  height={18}
                  className="w-[18px] h-[18px] rotate-180"
                />
              </a>
            </div>

            <div className="flex flex-col gap-6 flex-1">
              {/* Marketing tag - dark red pill */}
              <span className="inline-flex items-center gap-2.5 bg-[#5C0000] rounded-full px-4 py-2 text-sm font-medium text-white w-fit">
                Growth Focused Marketing
              </span>

              {/* Headline: Results with bar chart icon */}
              <div className="flex flex-col gap-0">
                <div className="flex items-baseline gap-3 flex-wrap">
                  <span className="inline-flex items-center gap-2.5">
                    <span className="w-12 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                      <Image
                        src="/images/icons/growth-package.svg"
                        alt=""
                        width={24}
                        height={24}
                        className="w-6 h-6"
                      />
                    </span>
                    <span className="text-[40px] lg:text-[64px] font-bold text-white leading-none">
                      Results
                    </span>
                  </span>
                </div>
                <h1 className="text-[64px] lg:text-[113px] font-bold text-white leading-[0.85] tracking-[2.26px]">
                  Beyond
                </h1>
                <span className="text-[40px] lg:text-[66px] font-bold text-white leading-none">
                  Words
                </span>
              </div>

              {/* Client avatars + count */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {avatarUrls.map((url, i) => (
                    <div
                      key={i}
                      className="w-9 h-9 rounded-full border-2 border-[#780000] bg-gray-300 overflow-hidden"
                    >
                      <Image
                        src={url}
                        alt=""
                        width={36}
                        height={36}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <span className="text-base font-medium text-white">
                  24K+<br />
                  Clients Worldwide
                </span>
              </div>
            </div>
          </div>

          {/* Right: Description + CTA buttons */}
          <div className="flex flex-col gap-8 lg:max-w-[480px] lg:py-8">
            <p className="text-base font-normal text-white leading-6">
              We help ambitious brands scale through strategy, growth focused
              marketing, and creative execution that delivers measurable results.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="#"
                className="inline-flex items-center gap-2.5 bg-[#b21c0e] hover:bg-[#961709] rounded-2xl px-6 py-3 text-base font-medium text-white transition-colors"
              >
                <span>Start Your Growth Journey</span>
                <Image
                  src="/images/icons/arrow-top-right-white.svg"
                  alt=""
                  width={15}
                  height={15}
                  className="w-[15px] h-[15px]"
                />
              </Link>
              <Link
                href="#"
                className="inline-flex items-center gap-2.5 border-2 border-[#b21c0e] bg-transparent rounded-2xl px-6 py-3 text-base font-medium text-white hover:bg-[#b21c0e]/20 transition-colors"
              >
                <span>View Our Work</span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
