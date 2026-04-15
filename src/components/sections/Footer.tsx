"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocale } from "@/i18n/LocaleContext";

gsap.registerPlugin(ScrollTrigger);

const socials = [
  { name: "Facebook", href: "https://www.facebook.com/digitalia.agency", icon: "f" },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/digitalia-agency", icon: "in" },
  { name: "Instagram", href: "https://www.instagram.com/digitalia.agency", icon: "ig" },
];

export default function Footer() {
  const { locale, dict } = useLocale();
  const t = dict.footer;

  const mainPages = [
    { name: t.home, href: "#hero" },
    { name: t.aboutUs, href: "#about" },
    { name: t.services, href: "#services" },
    { name: t.process, href: "#process" },
    { name: t.faq, href: "#faq" },
    { name: t.contact, href: "#contact" },
  ];

  const ref = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (ctaRef.current) {
        gsap.fromTo(ctaRef.current, { y: 50, opacity: 0 }, {
          y: 0, opacity: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: ctaRef.current, start: "top 90%", toggleActions: "play none none none" },
        });
      }
      if (socialRef.current) {
        const items = socialRef.current.querySelectorAll(".social-item");
        gsap.fromTo(items, { y: 30, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: socialRef.current, start: "top 90%", toggleActions: "play none none none" },
        });
      }
      if (linksRef.current) {
        const cols = linksRef.current.querySelectorAll("[data-col]");
        gsap.fromTo(cols, { y: 40, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.7, stagger: 0.12, ease: "power3.out",
          scrollTrigger: { trigger: linksRef.current, start: "top 85%", toggleActions: "play none none none" },
        });
      }
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <footer ref={ref} className="relative overflow-hidden" style={{ background: "linear-gradient(180deg, #ffffff 0%, #c2e0ff 100%)" }}>
      {/* CTA */}
      <div className="border-t border-azureish-white py-6 md:py-8">
        <div className="mx-auto max-w-[83rem] px-5 md:px-[3.75rem]">
          <div ref={ctaRef} className="text-center">
            <Link href="#contact" className="group inline-block font-instrument text-5xl font-bold uppercase leading-none tracking-tight text-eerie-black md:text-7xl lg:text-[8rem]">
              {t.ctaPrefix}
              <span className="relative mx-1 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary align-middle transition-transform duration-500 group-hover:scale-110 md:mx-2 md:h-14 md:w-14 lg:h-[5.5rem] lg:w-[5.5rem]">
                <Image src="/images/CTA-Arrow.svg" alt="" width={24} height={24} className="h-4 w-4 brightness-0 invert transition-transform duration-500 group-hover:rotate-[-45deg] md:h-5 md:w-5 lg:h-7 lg:w-7" />
              </span>
              {t.ctaMiddle}<span className="italic text-primary">{t.cta}</span>
            </Link>
          </div>

          <div ref={socialRef} className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3 md:mt-12">
            {socials.map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className="social-item group relative overflow-hidden rounded-2xl border border-azureish-white bg-white py-4 text-center transition-all duration-300 hover:border-primary/30 hover:shadow-md">
                <span className="relative z-10 text-xs font-semibold uppercase tracking-[0.15em] text-eerie-black transition-colors duration-300 group-hover:text-white">{s.name}</span>
                <div className="absolute inset-0 origin-bottom scale-y-0 bg-primary transition-transform duration-300 group-hover:scale-y-100" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="border-t border-azureish-white py-8">
        <div ref={linksRef} className="mx-auto max-w-[83rem] px-5 md:px-[3.75rem]">
          <div className="flex flex-col gap-12 lg:flex-row lg:gap-20">
            <div data-col className="lg:w-[38%]">
              <Link href={`/${locale}`}>
                <Image src="/logos/DIGITALIA-DARK.svg" alt="Digitalia" width={100} height={28} className="h-24 w-auto" />
              </Link>
              <p className="mt-6 text-sm leading-relaxed text-independence">{t.description}</p>
              <div className="mt-8 flex overflow-hidden rounded-full border border-azureish-white bg-white transition-shadow duration-300 focus-within:border-primary/30 focus-within:shadow-md">
                <input type="email" placeholder={t.emailPlaceholder} className="flex-1 bg-transparent px-5 py-3 text-sm text-eerie-black outline-none placeholder:text-independence/50" />
                <button className="m-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-white transition-colors hover:bg-primary/90">
                  <Image src="/images/CTA-Arrow.svg" alt="" width={16} height={16} className="h-4 w-4 brightness-0 invert" />
                </button>
              </div>
            </div>

            <div className="flex flex-1 flex-col gap-10 sm:flex-row sm:gap-12 lg:gap-16">
              <div data-col className="flex-1">
                <h6 className="mb-5 font-instrument text-base font-semibold text-eerie-black">{t.mainPages}</h6>
                <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                  {mainPages.map((l) => (
                    <Link key={l.name} href={l.href} className="flex items-center gap-2 text-sm text-independence transition-colors hover:text-primary">
                      <span className="h-1 w-1 shrink-0 rounded-full bg-primary/40" />{l.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div data-col className="sm:w-[200px]">
                <h6 className="mb-5 font-instrument text-base font-semibold text-eerie-black">{t.location}</h6>
                <p className="whitespace-pre-line text-sm leading-relaxed text-independence">{t.locationText}</p>

                <h6 className="mb-5 mt-10 font-instrument text-base font-semibold text-eerie-black">{t.contactTitle}</h6>
                <div className="flex flex-col gap-2">
                  <a href="mailto:support@digitalia-solutions.com" className="text-sm text-independence transition-colors hover:text-primary">support@digitalia-solutions.com</a>
                  <a href="tel:+212661255458" className="text-sm text-independence transition-colors hover:text-primary">+212 661-255458</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-azureish-white py-6">
        <div className="mx-auto max-w-[83rem] px-5 text-center text-xs text-eerie-black/60 md:px-[3.75rem]">
          <div className="mb-2 flex items-center justify-center gap-3">
            <Link href={`/${locale}/privacy-policy`} className="text-eerie-black/60 transition-colors hover:text-primary">{t.privacyPolicy}</Link>
            <span className="text-eerie-black/30">|</span>
            <Link href={`/${locale}/terms`} className="text-eerie-black/60 transition-colors hover:text-primary">{t.termsOfUse}</Link>
          </div>
          &copy; 2026 {t.copyright} -{" "}
          <Link href={`/${locale}`} className="text-eerie-black hover:text-primary">Digitalia</Link>
        </div>
      </div>
    </footer>
  );
}
