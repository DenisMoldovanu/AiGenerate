import Image from "next/image";
import Link from "next/link";

export function CTABannerSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 -m-4">
        <Image
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920&q=80"
          alt=""
          fill
          className="w-full h-full object-cover blur-sm scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-brand-primary/85" />
      <div className="container relative py-16 lg:py-24 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
          Scale Your Business
        </h2>
        <p className="text-base lg:text-lg font-normal text-white max-w-2xl mx-auto mb-8">
          Let&apos;s build a growth system that delivers measurable results and
          long-term impact.
        </p>
        <Link
          href="#"
          className="inline-flex items-center gap-2 rounded-pill bg-brand-cta px-6 py-3.5 text-base font-medium text-white hover:bg-brand-cta-hover transition-colors"
        >
          <span>Book a Strategy Call</span>
          <Image
            src="/images/icons/arrow-top-right-white-sm.svg"
            alt=""
            width={12}
            height={12}
            className="w-3 h-3"
          />
        </Link>
      </div>
    </section>
  );
}
