"use client";

import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

const teamMembers = [
  {
    name: "John Doe",
    role: "Performance Marketing Director",
    location: "Calgary, Canada",
    image: "https://i.pravatar.cc/300?img=11",
  },
  {
    name: "Jane Smith",
    role: "Growth Strategy Lead",
    location: "Toronto, Canada",
    image: "https://i.pravatar.cc/300?img=5",
  },
  {
    name: "Michael Johnson",
    role: "Digital Marketing Manager",
    location: "Vancouver, Canada",
    image: "https://i.pravatar.cc/300?img=12",
  },
  {
    name: "Sarah Williams",
    role: "Content Strategy Director",
    location: "Montreal, Canada",
    image: "https://i.pravatar.cc/300?img=9",
  },
  {
    name: "David Brown",
    role: "Paid Media Specialist",
    location: "Edmonton, Canada",
    image: "https://i.pravatar.cc/300?img=33",
  },
];

function TeamCard({
  name,
  role,
  location,
  image,
}: (typeof teamMembers)[0]) {
  return (
    <div className="bg-white rounded-card p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col shrink-0 w-full min-w-0">
      <div className="flex flex-col gap-4">
        <div>
          <h3 className="text-lg font-bold text-black">{name}</h3>
          <p className="text-sm text-gray-600 mt-0.5">{role}</p>
          <p className="text-xs text-gray-500 mt-1">{location}</p>
        </div>
        <div className="flex justify-center">
          <Image
            src={image}
            alt={name}
            width={96}
            height={96}
            className="w-24 h-24 rounded-[16px] object-cover"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-pill border-2 border-brand-primary bg-white px-4 py-2 text-sm font-medium text-brand-primary hover:bg-brand-primary hover:text-white transition-colors"
          >
            Learn More
          </Link>
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-pill bg-brand-primary px-4 py-2 text-sm font-medium text-white hover:bg-brand-primary-hover transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export function OurTeamSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 640px)": { slidesToScroll: 2 },
      "(min-width: 1024px)": { slidesToScroll: 3 },
      "(min-width: 1280px)": { slidesToScroll: 4 },
    },
  });

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="w-full py-12 lg:py-20 bg-locations-bg">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-8">
          <div>
            <span className="text-sm font-medium text-brand-primary">
              &gt; Professional Expertise
            </span>
            <h2 className="text-[32px] lg:text-[48px] font-extrabold leading-[1.17] text-black mt-2">
              Our Team
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={scrollPrev}
                disabled={prevBtnDisabled}
                className="w-10 h-10 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={scrollNext}
                disabled={nextBtnDisabled}
                className="w-10 h-10 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <Link
              href="#"
              className="inline-flex items-center gap-2 rounded-pill bg-brand-primary px-5 py-2.5 text-base font-medium text-white hover:bg-brand-primary-hover transition-colors"
            >
              <span>View All Members</span>
              <Image
                src="/images/icons/arrow-top-right-white-sm.svg"
                alt=""
                width={12}
                height={12}
                className="w-3 h-3"
              />
            </Link>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          <div className="lg:w-[280px] shrink-0">
            <div className="relative bg-brand-primary rounded-card-lg p-8 h-full min-h-[200px] flex flex-col justify-center overflow-hidden">
              <div className="absolute -right-4 -bottom-4 w-24 h-24 text-brand-dark/30">
                <ChevronRight className="w-full h-full rotate-45 scale-150" />
              </div>
              <span className="text-[56px] lg:text-[64px] font-extrabold leading-none text-white">
                67+
              </span>
              <span className="text-lg font-medium text-white mt-2">
                Marketing Professionals
              </span>
            </div>
          </div>

          <div className="flex-1 overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="flex-[0_0_100%] sm:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)] xl:flex-[0_0_calc(25%-18px)] min-w-0"
                >
                  <TeamCard {...member} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
