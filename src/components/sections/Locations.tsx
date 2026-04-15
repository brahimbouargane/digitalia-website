"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionSubtitle from "../ui/SectionSubtitle";
import SectionTitle from "../ui/SectionTitle";
import Image from "next/image";
import { useLocale } from "@/i18n/LocaleContext";
import MAFlag from "@/../public/morocco.svg";
import FRFlag from "@/../public/fr.svg";
import USFlag from "@/../public/usa.svg";

gsap.registerPlugin(ScrollTrigger);

const flagAssets: Record<string, typeof MAFlag> = {
  MA: MAFlag,
  FR: FRFlag,
  US: USFlag,
};

export default function Locations() {
  const { dict } = useLocale();
  const t = dict.locations;

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headerRef.current) {
        const els = headerRef.current.querySelectorAll("[data-reveal]");
        gsap.fromTo(
          els,
          { y: 40, opacity: 0, filter: "blur(6px)" },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.9,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll(".location-card");
        gsap.fromTo(
          cards,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          },
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="locations"
      className="relative overflow-hidden py-14 md:py-[7.5rem]"
    >
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #0040c1 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative mx-auto max-w-[83rem] px-5 md:px-[3.75rem]">
        {/* Header */}
        <div ref={headerRef} className="mb-16 text-center">
          <div data-reveal className="flex justify-center">
            <SectionSubtitle text={t.subtitle} />
          </div>
          <div data-reveal className="mt-6">
            <SectionTitle text={t.title} highlight={t.titleHighlight} />
          </div>
          <p
            data-reveal
            className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-independence"
          >
            {t.description}
          </p>
        </div>

        {/* Location Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {t.places.map((place, i) => {
            const isMain = i === 0;
            return (
              <div
                key={i}
                className={`location-card group relative overflow-hidden rounded-3xl border transition-all duration-500 ${
                  isMain
                    ? "border-primary/20 bg-primary text-white"
                    : "border-azureish-white bg-white text-eerie-black hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
                }`}
              >
                {/* Header: Flag + City */}
                <div className="p-8 pb-0 md:p-10 md:pb-0">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <Image src={flagAssets[place.flag]} alt={place.country} width={40} height={28} className="shrink-0" />
                      <div>
                        <h3 className="font-instrument text-xl font-bold md:text-2xl">
                          {place.city}
                        </h3>
                        <p
                          className={`text-sm font-medium ${
                            isMain ? "text-white/70" : "text-independence"
                          }`}
                        >
                          {place.country}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`mt-1 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider ${
                        isMain
                          ? "bg-white/15 text-white/80"
                          : "bg-alice-blue text-independence"
                      }`}
                    >
                      {place.timezone}
                    </span>
                  </div>
                </div>

                {/* Divider */}
                <div className="mx-8 my-6 md:mx-10">
                  <div
                    className={`h-px ${
                      isMain ? "bg-white/20" : "bg-azureish-white"
                    }`}
                  />
                </div>

                {/* Details */}
                <div className="px-8 pb-8 md:px-10 md:pb-10">
                  <div
                    className={`mb-4 inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                      isMain
                        ? "bg-white/15 text-white"
                        : "bg-primary/5 text-primary"
                    }`}
                  >
                    {place.role}
                  </div>

                  <div className="space-y-3">
                    {/* Address */}
                    <div className="flex items-start gap-3">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className={`mt-0.5 h-4 w-4 shrink-0 ${
                          isMain ? "text-white/60" : "text-primary"
                        }`}
                      >
                        <path
                          d="M12 2a7 7 0 017 7c0 5-7 13-7 13S5 14 5 9a7 7 0 017-7z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <circle cx="12" cy="9" r="2.5" />
                      </svg>
                      <span
                        className={`text-sm ${
                          isMain ? "text-white/80" : "text-independence"
                        }`}
                      >
                        {place.address}
                      </span>
                    </div>

                    {/* Details */}
                    <div className="flex items-start gap-3">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className={`mt-0.5 h-4 w-4 shrink-0 ${
                          isMain ? "text-white/60" : "text-primary"
                        }`}
                      >
                        <path
                          d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <circle cx="9" cy="7" r="4" />
                        <path
                          d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span
                        className={`text-sm ${
                          isMain ? "text-white/80" : "text-independence"
                        }`}
                      >
                        {place.details}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
