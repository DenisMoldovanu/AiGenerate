import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function JoinUsSection() {
  return (
    <section className="w-full py-12 lg:py-20 bg-white">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 lg:gap-6 mb-12">
          <div className="flex flex-col gap-2">
            <span className="text-sm font-medium text-black">
              <span className="text-brand-primary">&gt;</span> Let&apos;s Connect
            </span>
            <h2 className="text-[32px] lg:text-[48px] font-extrabold leading-[1.17] text-black">
              Join Us
            </h2>
          </div>
          <span className="text-sm font-medium text-gray-600 border-b-2 border-brand-primary pb-0.5 shrink-0 self-start lg:self-auto">
            Generate Growth
          </span>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch">
          <div className="flex-1 rounded-card-lg bg-join-card-bg p-6 lg:p-8 flex flex-col">
            <div className="w-12 h-12 rounded-xl bg-white/70 flex items-center justify-center mb-6">
              <Image
                src="/images/icons/join-team.svg"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </div>
            <h3 className="text-xl font-bold text-black mb-4">Join Our Team</h3>
            <p className="text-base font-normal text-gray-600 leading-6 mb-6 flex-1">
              Work with ambitious brands and build meaningful growth strategies.
            </p>
            <Link
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-pill border-2 border-brand-primary px-5 py-2.5 text-base font-medium text-brand-primary hover:bg-brand-primary hover:text-white transition-colors w-fit"
            >
              <span>View Careers</span>
              <Image
                src="/images/icons/arrow-top-right.svg"
                alt=""
                width={12}
                height={12}
                className="w-3 h-3"
              />
            </Link>
          </div>

          <div className="flex-1 rounded-card-lg overflow-hidden shrink-0">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
              alt="Wordwell team collaboration"
              width={800}
              height={600}
              className="w-full h-full object-cover aspect-[4/5] lg:aspect-auto lg:min-h-[320px]"
            />
          </div>

          <div className="flex-1 rounded-card-lg bg-brand-primary p-6 lg:p-8 flex flex-col">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6">
              <Image
                src="/images/icons/join-partner.svg"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              Partner Wordwell
            </h3>
            <p className="text-base font-normal text-white/90 leading-6 mb-6 flex-1">
              Launch your own marketing business within our brand, system, and
              full operational support.
            </p>
            <Link
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-pill bg-white px-5 py-2.5 text-base font-medium text-brand-primary hover:bg-gray-100 transition-colors w-fit"
            >
              <span>Learn More</span>
              <Image
                src="/images/icons/arrow-top-right.svg"
                alt=""
                width={12}
                height={12}
                className="w-3 h-3"
              />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
