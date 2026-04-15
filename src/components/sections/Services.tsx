"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionSubtitle from "../ui/SectionSubtitle";
import SectionTitle from "../ui/SectionTitle";
import PrimaryButton from "../ui/PrimaryButton";
import { useLocale } from "@/i18n/LocaleContext";

gsap.registerPlugin(ScrollTrigger);

const serviceImages = [
  { image: "/images/service1.webp", alt: "Custom software development services", bg: "bg-alice-blue" },
  { image: "/images/service2.webp", alt: "Data analytics and business intelligence dashboards", bg: "bg-primary/10" },
  { image: "/images/service3.webp", alt: "Secure cloud architecture and migration services", bg: "bg-diamond" },
  { image: "/images/service4.webp", alt: "AI and machine learning solutions", bg: "bg-primary/10" },
  { image: "/images/service5.webp", alt: "Digital transformation consulting", bg: "bg-alice-blue" },
];

export default function Services() {
  const { dict } = useLocale();
  const t = dict.services;

  const [active, setActive] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const isMobileRef = useRef(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    isMobileRef.current = !isDesktop;
    if (!isDesktop) return;

    const onScroll = () => {
      const rect = wrapper.getBoundingClientRect();
      const wrapperHeight = wrapper.offsetHeight;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / (wrapperHeight - window.innerHeight)));
      const idx = Math.min(Math.floor(progress * t.items.length), t.items.length - 1);
      setActive(idx);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [t.items.length]);

  useEffect(() => {
    if (imageRef.current) {
      gsap.fromTo(imageRef.current, { clipPath: "inset(0% 100% 0% 0%)", opacity: 0 }, { clipPath: "inset(0% 0% 0% 0%)", opacity: 1, duration: 0.6, ease: "power3.out" });
    }
    if (textRef.current) {
      gsap.fromTo(textRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power3.out", delay: 0.15 });
    }
  }, [active]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; }, []);
  const handleTouchMove = useCallback((e: React.TouchEvent) => { touchEndX.current = e.touches[0].clientX; }, []);
  const handleTouchEnd = useCallback(() => {
    if (!isMobileRef.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0 && active < t.items.length - 1) setActive((prev) => prev + 1);
      else if (diff < 0 && active > 0) setActive((prev) => prev - 1);
    }
  }, [active, t.items.length]);

  const s = t.items[active];
  const img = serviceImages[active];

  return (
    <section id="services" className="bg-white py-6 md:py-0">
      <div ref={wrapperRef} className="md:h-[250vh]">
        <div className="md:sticky md:top-5">
          <div className="mx-auto max-w-[83rem] px-5 md:px-[3.75rem]">
            <div className="mb-12 text-center">
              <div className="flex justify-center"><SectionSubtitle text={t.subtitle} /></div>
              <div className="mt-6"><SectionTitle text={t.title} highlight={t.titleHighlight} /></div>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-independence">{t.description}</p>
            </div>

            <div className="mb-8 hidden justify-center md:flex">
              <div className="flex flex-wrap justify-center gap-3">
                {t.items.map((svc, i) => (
                  <button key={i} onClick={() => setActive(i)} className={`rounded-full border px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${active === i ? "border-primary bg-primary text-white" : "border-azureish-white bg-white text-eerie-black hover:border-primary/30"}`}>
                    {svc.name}
                  </button>
                ))}
              </div>
            </div>

            <div ref={cardRef} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd} className={`overflow-hidden rounded-3xl transition-colors duration-500 touch-pan-y md:touch-auto ${img.bg}`}>
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2">
                  <div ref={imageRef} className="h-72 overflow-hidden md:h-[28rem]">
                    <Image src={img.image} alt={img.alt} width={700} height={500} className="h-full w-full object-cover" />
                  </div>
                </div>
                <div className="flex flex-col justify-center md:w-1/2">
                  <div ref={textRef} className="p-8 md:p-12 lg:p-16">
                    <h3 className="font-instrument text-2xl font-semibold text-eerie-black md:text-3xl lg:text-4xl">{s.name}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-independence md:text-base">{s.description}</p>
                    <div className="mt-10"><PrimaryButton text={t.cta} href="#contact" /></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-center gap-2 md:hidden">
              {t.items.map((_, i) => (
                <button key={i} onClick={() => setActive(i)} className={`h-2 rounded-full transition-all duration-300 ${active === i ? "w-6 bg-primary" : "w-2 bg-azureish-white hover:bg-primary/30"}`} aria-label={`Service ${i + 1}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
