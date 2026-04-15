"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PrimaryButton from "../ui/PrimaryButton";
import SectionSubtitle from "../ui/SectionSubtitle";
import { useLocale } from "@/i18n/LocaleContext";

gsap.registerPlugin(ScrollTrigger);

const partnerLogos = [
  "/images/vibe.png",
  "/images/onoffice.png",
  "/images/nord-sud.png",
  "/images/codingtech.png",
];

export default function About() {
  const { dict } = useLocale();
  const t = dict.about;
  const stats = t.stats;
  const partners = t.partners;

  const sectionRef = useRef<HTMLElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const numRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const brandsRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [stats.length]);

  useEffect(() => {
    if (numRef.current) {
      gsap.fromTo(numRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" });
    }
    if (labelRef.current) {
      gsap.fromTo(labelRef.current, { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power3.out", delay: 0.1 });
    }
  }, [activeIdx]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headingRef.current) {
        const els = headingRef.current.querySelectorAll("[data-reveal]");
        gsap.fromTo(els, { y: 40, opacity: 0, filter: "blur(6px)" }, {
          y: 0, opacity: 1, filter: "blur(0px)", duration: 0.9, stagger: 0.15, ease: "power3.out",
          scrollTrigger: { trigger: headingRef.current, start: "top 85%", toggleActions: "play none none none" },
        });
      }
      if (barRef.current) {
        gsap.fromTo(barRef.current, { scaleX: 0 }, {
          scaleX: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: barRef.current, start: "top 90%", toggleActions: "play none none none" },
        });
      }
      if (brandsRef.current) {
        const cards = brandsRef.current.querySelectorAll(".brand-card");
        gsap.fromTo(cards, { y: 30, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: brandsRef.current, start: "top 88%", toggleActions: "play none none none" },
        });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const current = stats[activeIdx];

  return (
    <section ref={sectionRef} id="about" className="py-14 md:py-[7.5rem]">
      <div className="mx-auto max-w-[83rem] px-5 md:px-[3.75rem]">
        <div className="mb-12">
          <SectionSubtitle text={t.subtitle} />
        </div>

        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-20">
          <div className="lg:w-[28%]">
            <div className="overflow-hidden">
              <div ref={numRef} className="font-instrument text-7xl font-bold text-primary md:text-8xl">
                {current.value}
              </div>
            </div>
            <div className="overflow-hidden">
              <div ref={labelRef} className="mt-2 text-sm font-medium text-independence">
                {current.label}
              </div>
            </div>
            <div ref={barRef} className="mt-6 flex origin-left items-center gap-1.5">
              {stats.map((_, i) => (
                <div key={i} className={`h-[3px] rounded-full transition-all duration-500 ${i === activeIdx ? "w-8 bg-primary" : "w-4 bg-azureish-white"}`} />
              ))}
            </div>
          </div>

          <div ref={headingRef} className="lg:w-[72%]">
            <h2 data-reveal className="font-instrument text-2xl font-semibold leading-snug text-eerie-black md:text-3xl lg:text-[2.75rem] lg:leading-[1.3]">
              {t.heading}{" "}
              <span className="text-primary">{t.headingHighlight}</span>
            </h2>
            <div data-reveal className="mt-10">
              <PrimaryButton text={t.cta} href="#contact" />
            </div>
          </div>
        </div>

        <div className="my-16 h-px bg-azureish-white" />

        <div>
          <div className="mb-8 text-xs font-semibold uppercase tracking-[0.15em] text-eerie-black">
            {t.ecosystem}
          </div>
          <div ref={brandsRef} className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {partners.map((p, i) => (
              <div key={i} className="brand-card group flex flex-col items-center gap-4 rounded-2xl bg-alice-blue p-8 text-center transition-colors duration-300 hover:bg-azureish-white/50">
                <Image src={partnerLogos[i]} alt={p.name} width={120} height={48} className="h-28 w-auto object-contain opacity-70 transition-all duration-300 group-hover:opacity-100" />
                <div>
                  <div className="font-instrument text-sm font-semibold text-eerie-black">{p.name}</div>
                  <p className="mt-1 text-xs leading-relaxed text-independence">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
