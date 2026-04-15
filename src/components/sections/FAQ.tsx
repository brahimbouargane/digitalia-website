"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionSubtitle from "../ui/SectionSubtitle";
import SectionTitle from "../ui/SectionTitle";
import PrimaryButton from "../ui/PrimaryButton";
import { useLocale } from "@/i18n/LocaleContext";

gsap.registerPlugin(ScrollTrigger);

export default function FAQ() {
  const { dict } = useLocale();
  const t = dict.faq;

  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const ref = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headerRef.current) {
        const els = headerRef.current.querySelectorAll("[data-reveal]");
        gsap.fromTo(els, { y: 40, opacity: 0, filter: "blur(6px)" }, {
          y: 0, opacity: 1, filter: "blur(0px)", duration: 0.9, stagger: 0.12, ease: "power3.out",
          scrollTrigger: { trigger: headerRef.current, start: "top 85%", toggleActions: "play none none none" },
        });
      }
      if (containerRef.current) {
        const cards = containerRef.current.querySelectorAll(".faq-card");
        cards.forEach((card, i) => {
          gsap.fromTo(card, { y: 60, opacity: 0 }, {
            y: 0, opacity: 1, duration: 0.7, delay: i * 0.1, ease: "power3.out",
            scrollTrigger: { trigger: containerRef.current, start: "top 85%", toggleActions: "play none none none" },
          });
        });
      }
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="faq" className="relative overflow-hidden py-6 md:py-20">
      <div className="mx-auto max-w-[83rem] px-5 md:px-[3.75rem]">
        <div ref={headerRef} className="mb-16 text-center">
          <div data-reveal className="flex justify-center"><SectionSubtitle text={t.subtitle} /></div>
          <div data-reveal className="mt-6"><SectionTitle text={t.title} highlight={t.titleHighlight} /></div>
          <p data-reveal className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-independence">{t.description}</p>
        </div>

        <div ref={containerRef} className="flex flex-col gap-4 lg:flex-row lg:gap-3">
          {t.items.map((f, i) => {
            const isOpen = openIdx === i;
            return (
              <div key={i} className={`faq-card overflow-hidden rounded-3xl transition-all duration-500 ${isOpen ? "bg-primary lg:flex-[3]" : "bg-alice-blue lg:flex-1 hover:bg-azureish-white/50"}`}>
                <button onClick={() => setOpenIdx(isOpen ? null : i)} className="flex w-full flex-col justify-between p-7 text-left md:p-9 lg:min-h-[280px]">
                  <div className="flex w-full items-center justify-between">
                    <span className={`text-[10px] font-semibold uppercase tracking-[0.15em] transition-colors duration-300 ${isOpen ? "text-white/60" : "text-independence/50"}`}>{f.serial}</span>
                    <div className={`flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 ${isOpen ? "rotate-180 bg-white/20" : "bg-azureish-white"}`}>
                      <Image src={isOpen ? "/images/FAQ-Minus.svg" : "/images/FAQ-Plus.svg"} alt="" width={14} height={14} className={isOpen ? "brightness-0 invert" : ""} />
                    </div>
                  </div>
                  <h4 className={`mt-6 font-instrument text-xl font-semibold leading-snug transition-colors duration-300 md:text-[1.35rem] ${isOpen ? "text-white" : "text-eerie-black"}`}>{f.q}</h4>
                </button>
                <div className={`faq-answer ${isOpen ? "open" : ""}`}>
                  <div className="px-7 pb-9 md:px-9">
                    <div className="mb-5 h-px bg-white/20" />
                    <p className="text-[15px] leading-[1.8] text-white/80">{f.a}</p>
                    <div className="mt-8"><PrimaryButton text={t.cta} href="#about" /></div>
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
