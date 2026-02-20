import Image from "next/image";

export function ImageStripSection() {
  return (
    <section className="w-full">
      <div className="flex flex-col md:flex-row gap-1.5">
        <div className="w-full md:w-[24.6%] shrink-0">
          <Image
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=80"
            alt="Business meeting"
            width={400}
            height={412}
            className="w-full h-[260px] md:h-[412px] object-cover"
          />
        </div>
        <div className="relative w-full md:flex-1 group cursor-pointer">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80"
            alt="Team collaboration"
            width={800}
            height={412}
            className="w-full h-[260px] md:h-[412px] object-cover"
          />
          <button
            type="button"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70px] h-[70px] rounded-full bg-white/50 backdrop-blur-[10px] flex items-center justify-center hover:bg-white/70 transition-colors"
            aria-label="Play video"
          >
            <Image
              src="/images/icons/play.svg"
              alt=""
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </button>
        </div>
        <div className="w-full md:w-[24.6%] shrink-0">
          <Image
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
            alt="Working together"
            width={400}
            height={412}
            className="w-full h-[260px] md:h-[412px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
