export function NewsletterSection() {
  return (
    <section className="w-full bg-brand-primary py-10 lg:py-12">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
            Let&apos;s Grow Together!
          </h2>
          <form
            action="#"
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 flex-1 lg:flex-initial lg:min-w-[400px] max-w-xl"
          >
            <div className="flex-1 relative">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full bg-transparent border-0 border-b-2 border-white/80 pb-3 text-white placeholder-white/70 focus:outline-none focus:border-white focus:ring-0 text-base"
              />
            </div>
            <button
              type="submit"
              className="rounded-pill bg-white px-6 py-3 text-base font-medium text-brand-primary hover:bg-gray-100 transition-colors shrink-0"
            >
              Submit Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
