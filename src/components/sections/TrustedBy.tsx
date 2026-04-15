"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionSubtitle from "../ui/SectionSubtitle";
import SectionTitle from "../ui/SectionTitle";
import { useLocale } from "@/i18n/LocaleContext";

gsap.registerPlugin(ScrollTrigger);

const clients = [
  { name: "BMCE Bank", logo: "/Industry/BMCE Bank.png", w: 50, h: 20 },
  {
    name: "AXA Assurances",
    logo: "/Industry/AXA Assurances.png",
    w: 50,
    h: 20,
  },
  { name: "Samsung", logo: "/Industry/Samsung.png", w: 20, h: 20 },
  { name: "TotalEnergies", logo: "/Industry/TotalEnergies.png", w: 20, h: 20 },
  { name: "Bouygues", logo: "/Industry/Bouygues.png", w: 20, h: 20 },
  { name: "PSA Groupe", logo: "/Industry/PSA Groupe.png", w: 20, h: 20 },
  { name: "Allianz", logo: "/Industry/Allianz.png", w: 20, h: 20 },
  { name: "Dalkia", logo: "/Industry/Dalkia.png", w: 20, h: 20 },
  { name: "Cheil", logo: "/Industry/Cheil.png", w: 20, h: 20 },
  {
    name: "Skoda",
    logo: "/Industry/Skoda-logo-noir-2022-1024x576.png",
    w: 20,
    h: 20,
  },
  { name: "OiLibya", logo: "/Industry/Oilibya_Logo.png", w: 20, h: 20 },
  { name: "OFPPT", logo: "/Industry/OFPPT.png", w: 20, h: 20 },
  { name: "Sanlam", logo: "/Industry/Sanlam_logo.svg.png", w: 20, h: 20 },
  { name: "Geodis", logo: "/Industry/Geodis.png", w: 20, h: 20 },
  { name: "ACAPS", logo: "/Industry/ACAPS.png", w: 20, h: 20 },
  {
    name: "Bourse de Casablanca",
    logo: "/Industry/logo_bourse-iv_6.png",
    w: 20,
    h: 20,
  },
];

export default function TrustedBy() {
  const { dict } = useLocale();
  const ref = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

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

      [row1Ref, row2Ref].forEach((r) => {
        if (r.current) {
          gsap.fromTo(
            r.current,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: r.current,
                start: "top 90%",
                toggleActions: "play none none none",
              },
            },
          );
        }
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  const t = dict.trustedBy;

  // Split clients into two rows for two marquee directions
  const row1 = clients.slice(0, 8);
  const row2 = clients.slice(8);

  return (
    <section
      ref={ref}
      id="trusted"
      className="overflow-hidden bg-alice-blue py-14 md:py-[7.5rem]"
    >
      <div className="mx-auto max-w-[83rem] px-5 md:px-[3.75rem]">
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

        {/* Logo marquee - Row 1 (left to right) */}
        <div ref={row1Ref} className="mb-6 overflow-hidden py-4">
          <div
            className="flex w-max items-center"
            style={{ animation: "ticker 60s linear infinite" }}
          >
            {[...Array(4)].map((_, set) =>
              row1.map((client, i) => (
                <div
                  key={`r1-${set}-${i}`}
                  className="mx-8 flex h-10 w-16 shrink-0 items-center justify-center md:mx-12 md:w-20"
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={client.w}
                    height={client.h}
                    className="h-auto w-auto object-contain"
                  />
                </div>
              )),
            )}
          </div>
        </div>

        {/* Logo marquee - Row 2 (right to left) */}
        <div ref={row2Ref} className="overflow-hidden py-4">
          <div
            className="flex w-max items-center"
            style={{ animation: "ticker-reverse 55s linear infinite" }}
          >
            {[...Array(4)].map((_, set) =>
              row2.map((client, i) => (
                <div
                  key={`r2-${set}-${i}`}
                  className="mx-8 flex h-12 w-16 shrink-0 items-center justify-center md:mx-12 md:w-22"
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={client.w}
                    height={client.h}
                    className="h-auto w-auto object-contain"
                  />
                </div>
              )),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
