"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Link as NavLink } from "@/components/ui/Link";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  "Company",
  "Services",
  "Location",
  "Work Process",
  "Careers",
  "Business Partnership",
  "Blog",
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative w-full bg-white">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-1 w-[92px] bg-[#780000] rounded-b-[3px]" />

      <div className="container">
        <nav className="flex items-center justify-between py-4">
          <Link href="/" className="shrink-0">
            <Image
              src="/images/logo.svg"
              alt="Wordwell"
              width={120}
              height={30}
              className="h-[30px] w-auto"
            />
          </Link>

          <ul className="hidden lg:flex items-center gap-0">
            {navItems.map((item) => (
              <li key={item}>
                <NavLink href="#" variant="nav">
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-5">
            <button
              type="button"
              className="flex items-center gap-[5px] bg-[#f9f3f3] rounded-[22px] px-4 py-2 hover:bg-[#f9f3f3]/80 transition-colors"
            >
              <Image
                src="/images/icons/globe.svg"
                alt=""
                width={14}
                height={14}
                className="w-3.5 h-3.5"
              />
              <span className="text-sm font-medium leading-6 text-black">
                Locations
              </span>
              <ChevronDown className="w-4 h-4" />
            </button>

            <NavLink href="#" variant="primary" className="!flex items-center gap-2.5">
              <span>Book a Strategy Call</span>
              <Image
                src="/images/icons/arrow-top-right-white-sm.svg"
                alt=""
                width={12}
                height={12}
                className="w-3 h-3"
              />
            </NavLink>
          </div>

          <button
            type="button"
            id="mobile-menu-toggle"
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="block w-6 h-0.5 bg-[#2b3437]" />
            <span className="block w-6 h-0.5 bg-[#2b3437]" />
            <span className="block w-6 h-0.5 bg-[#2b3437]" />
          </button>
        </nav>

        {mobileMenuOpen && (
          <div
            className={cn(
              "lg:hidden absolute left-0 right-0 top-full bg-white shadow-lg border-t border-gray-100 py-4 z-50"
            )}
          >
            <ul className="flex flex-col gap-0 px-4">
              {navItems.map((item) => (
                <li key={item}>
                  <NavLink
                    href="#"
                    variant="nav"
                    className="block py-3"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
