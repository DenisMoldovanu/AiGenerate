export function NewsletterSection() {
  return (
    <section className="w-full bg-[#780000] py-10 lg:py-12">
      <div className="mx-auto w-full max-w-[1472px] px-4">
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
              className="rounded-[22px] bg-white px-6 py-3 text-base font-medium text-[#780000] hover:bg-gray-100 transition-colors shrink-0"
            >
              Submit Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
