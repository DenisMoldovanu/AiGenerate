import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

const socialLinks = [
  { href: "#", label: "Facebook", icon: "/images/icons/facebook.svg" },
  { href: "#", label: "Twitter", icon: "/images/icons/twitter.svg" },
  { href: "#", label: "Instagram", icon: "/images/icons/instagram.svg" },
  { href: "#", label: "LinkedIn", icon: "/images/icons/linkedin.svg" },
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
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920&q=80"
          alt="Business meeting"
          fill
          className="object-cover opacity-30"
          priority
        />
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 py-12 lg:py-0">
          <div className="hidden lg:flex flex-col items-center gap-6 py-8 shrink-0">
            {socialLinks.map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                className="opacity-60 hover:opacity-100 transition-opacity"
                aria-label={label}
              >
                <Image src={icon} alt="" width={20} height={20} className="w-5 h-5" />
              </a>
            ))}
          </div>

          <div className="flex-1 flex flex-col gap-6 lg:gap-8 lg:py-16">
            <div className="flex items-center">
              <span className="inline-flex items-center gap-2.5 bg-white/15 rounded-xl px-2.5 py-[5px] text-xs font-normal text-white">
                <span className="w-6 h-6 rounded-[12px] bg-[#b21c0e] flex items-center justify-center">
                  <Image
                    src="/images/icons/arrow-top-right-white-xs.svg"
                    alt=""
                    width={10}
                    height={10}
                    className="w-2.5 h-2.5"
                  />
                </span>
                Growth Focused Marketing
              </span>
            </div>

            <div className="flex flex-col gap-0">
              <div className="flex items-baseline gap-3 flex-wrap">
                <span className="text-[40px] lg:text-[64px] font-bold text-white leading-none">
                  Results
                </span>
              </div>
              <h1 className="text-[64px] lg:text-[113px] font-bold text-white leading-[0.85] tracking-[2.26px]">
                Beyond
              </h1>
              <span className="text-[40px] lg:text-[66px] font-bold text-white leading-none">
                Words
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {avatarUrls.map((url, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white bg-gray-300 overflow-hidden"
                  >
                    <Image
                      src={url}
                      alt=""
                      width={32}
                      height={32}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <span className="text-base font-medium text-white">
                24K +<br />
                Clients Worldwide
              </span>
            </div>

            <p className="text-base font-normal text-white leading-6 max-w-[480px]">
              We help ambitious brands scale through strategy, growth focused
              marketing, and creative execution that delivers measurable results.
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <Link
                href="#"
                className="inline-flex items-center gap-2.5 bg-[#b21c0e] hover:bg-[#961709] rounded-3xl px-6 py-2.5 text-xl font-normal text-white transition-colors"
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
                className="inline-flex items-center gap-2.5 border border-white rounded-3xl px-6 py-2.5 text-xl font-normal text-white hover:bg-white/10 transition-colors"
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
