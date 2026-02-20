import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

const footerNav = [
  "Company",
  "Services",
  "Location",
  "Work Process",
  "Careers",
  "Business Partnership",
  "Blog",
  "Contact",
];

export function Footer() {
  return (
    <footer className="w-full bg-white">
      <Container className="py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 lg:gap-12 mb-10">
          <div className="flex flex-col gap-4">
            <p className="text-sm font-medium text-[#780000]">
              Ready to talk? Reach out!
            </p>
            <a
              href="tel:+18778779673"
              className="text-2xl lg:text-3xl font-bold text-black hover:text-[#780000] transition-colors"
            >
              +1 877 877 9673
            </a>
            <div>
              <p className="text-sm font-medium text-[#780000] mb-1">Email</p>
              <a
                href="mailto:contact@wordwell.co"
                className="text-base font-normal text-black hover:text-[#780000] transition-colors"
              >
                contact@wordwell.co
              </a>
            </div>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#f9f3f3] flex items-center justify-center hover:bg-[#780000]/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Image
                  src="/images/icons/linkedin-brand.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#f9f3f3] flex items-center justify-center hover:bg-[#780000]/10 transition-colors"
                aria-label="Facebook"
              >
                <Image
                  src="/images/icons/facebook-brand.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#f9f3f3] flex items-center justify-center hover:bg-[#780000]/10 transition-colors"
                aria-label="YouTube"
              >
                <Image
                  src="/images/icons/youtube.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
              </a>
            </div>
          </div>

          <div className="flex flex-col lg:items-end gap-6">
            <nav className="flex flex-wrap gap-x-6 gap-y-2">
              {footerNav.map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-base font-normal text-black hover:text-[#780000] transition-colors"
                >
                  {item}
                </Link>
              ))}
            </nav>
            <button
              type="button"
              className="flex items-center gap-2 bg-[#f9f3f3] rounded-[22px] px-4 py-2.5 text-sm font-medium text-black hover:bg-[#f9f3f3]/80 transition-colors w-fit"
            >
              <Image
                src="/images/icons/globe.svg"
                alt=""
                width={14}
                height={14}
                className="w-3.5 h-3.5"
              />
              <span>English (Canada)</span>
              <Image
                src="/images/icons/chevron-down.svg"
                alt=""
                width={16}
                height={16}
                className="w-4 h-4"
              />
            </button>
            <Link href="/" className="shrink-0">
              <Image
                src="/images/logo.svg"
                alt="Wordwell"
                width={120}
                height={30}
                className="h-[30px] w-auto"
              />
            </Link>
          </div>
        </div>

        <div className="h-px w-full bg-gray-200 mb-8" />

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-sm font-normal text-gray-500">
            &copy;2026 Wordwell Marketing Inc
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="text-sm font-normal text-gray-500 hover:text-[#780000] transition-colors"
            >
              Cookie Policy
            </Link>
            <span className="text-gray-400">|</span>
            <Link
              href="#"
              className="text-sm font-normal text-gray-500 hover:text-[#780000] transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-gray-400">|</span>
            <Link
              href="#"
              className="text-sm font-normal text-gray-500 hover:text-[#780000] transition-colors"
            >
              Company Terms
            </Link>
            <Image
              src="/images/icons/quote.svg"
              alt=""
              width={20}
              height={20}
              className="w-5 h-5 ml-2"
            />
          </div>
        </div>
      </Container>
    </footer>
  );
}
