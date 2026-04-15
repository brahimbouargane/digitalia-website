"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PrimaryButton from "./ui/PrimaryButton";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLocale } from "@/i18n/LocaleContext";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const { dict } = useLocale();
  const t = dict.nav;

  const links = [
    { name: t.about, href: "#about" },
    { name: t.services, href: "#services" },
    { name: t.process, href: "#process" },
    { name: t.contact, href: "#contact" },
  ];

  const mobileLinks = [
    { name: t.home, href: "#hero", n: "01" },
    { name: t.about, href: "#about", n: "02" },
    { name: t.services, href: "#services", n: "03" },
    { name: t.process, href: "#process", n: "04" },
    { name: t.contact, href: "#contact", n: "05" },
  ];

  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const ctaRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  /* ── Desktop entrance + scroll shrink ── */
  useEffect(() => {
    const nav = navRef.current;
    const pill = pillRef.current;
    if (!nav || !pill) return;

    const ctx = gsap.context(() => {
      gsap.set(nav, { yPercent: -100, opacity: 0 });
      gsap.set(logoRef.current, { opacity: 0, x: -20 });
      gsap.set(linkRefs.current.filter(Boolean), { opacity: 0, y: -10 });
      gsap.set(ctaRef.current, { opacity: 0, scale: 0.9 });
      gsap.set(langRef.current, { opacity: 0, scale: 0.9 });
      gsap.set(burgerRef.current, { opacity: 0, scale: 0.9 });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" }, paused: true });
      tl.to(nav, { yPercent: 0, opacity: 1, duration: 0.8 })
        .to(logoRef.current, { opacity: 1, x: 0, duration: 0.5 }, "-=0.3")
        .to(linkRefs.current.filter(Boolean), { opacity: 1, y: 0, duration: 0.4, stagger: 0.08 }, "-=0.3")
        .to(langRef.current, { opacity: 1, scale: 1, duration: 0.4 }, "-=0.2")
        .to(ctaRef.current, { opacity: 1, scale: 1, duration: 0.4 }, "-=0.3")
        .to(burgerRef.current, { opacity: 1, scale: 1, duration: 0.4 }, "<");

      window.addEventListener("introDone", () => tl.play(), { once: true });

      ScrollTrigger.create({
        start: "100px top",
        onEnter: () => {
          gsap.to(pill, { paddingTop: "0.5rem", paddingBottom: "0.5rem", duration: 0.3, ease: "power2.out" });
          pill.style.backdropFilter = "blur(12px)";
          pill.style.backgroundColor = "rgba(249,249,249,.85)";
          pill.style.boxShadow = "0 1px 3px rgba(0,0,0,.06)";
        },
        onLeaveBack: () => {
          gsap.to(pill, { paddingTop: "0.75rem", paddingBottom: "0.75rem", duration: 0.3, ease: "power2.out" });
          pill.style.backdropFilter = "";
          pill.style.backgroundColor = "";
          pill.style.boxShadow = "";
        },
      });
    }, nav);
    return () => ctx.revert();
  }, []);

  /* ── Mobile menu GSAP ── */
  useEffect(() => {
    if (!menuRef.current) return;
    const menu = menuRef.current;
    const menuLinks = menu.querySelectorAll(".menu-link");
    const menuBottom = menu.querySelector(".menu-bottom");

    if (open) {
      setIsVisible(true);
      setIsAnimating(true);
      gsap.set(menu, { autoAlpha: 0, y: -10, scale: 0.95 });
      gsap.set(menuLinks, { opacity: 0, x: -20 });
      gsap.set(menuBottom, { opacity: 0, y: 10 });

      const ctx = gsap.context(() => {
        const tl = gsap.timeline({ onComplete: () => setIsAnimating(false) });
        tl.to(menu, { autoAlpha: 1, y: 0, scale: 1, duration: 0.3, ease: "power3.out" });
        tl.to(menuLinks, { opacity: 1, x: 0, duration: 0.3, stagger: 0.05, ease: "power3.out" }, "-=0.2");
        tl.to(menuBottom, { opacity: 1, y: 0, duration: 0.3, ease: "power3.out" }, "-=0.15");
      }, menu);
      return () => ctx.revert();
    } else if (isVisible) {
      setIsAnimating(true);
      gsap.to(menu, {
        autoAlpha: 0, y: -10, scale: 0.95, duration: 0.25, ease: "power2.in",
        onComplete: () => { setIsVisible(false); setIsAnimating(false); },
      });
    }
  }, [open, isVisible]);

  /* ── Click outside ── */
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node) && burgerRef.current && !burgerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [open]);

  const closeMenu = useCallback(() => setOpen(false), []);

  return (
    <nav ref={navRef} className="fixed left-0 top-0 z-50 w-full opacity-0">
      <div className="mx-auto max-w-[83rem] px-5 pt-4 md:px-[3.75rem]">
        <div
          ref={pillRef}
          className="flex items-center justify-between rounded-full bg-ghost-white px-3 py-3 transition-all duration-300"
        >
          {/* Left: Logo + Links */}
          <div className="flex items-center gap-10">
            <Link href="#hero" ref={logoRef} className="shrink-0 pl-4">
              <Image
                src="/logos/DIGITALIA-DARK.svg"
                alt="Digitalia"
                width={100}
                height={28}
                className="h-12 w-auto md:h-16"
              />
            </Link>

            {/* Desktop nav links with underline animation */}
            <div className="hidden items-center gap-0.5 lg:flex">
              {links.map((l, i) => (
                <Link
                  key={l.name}
                  href={l.href}
                  ref={(el) => { linkRefs.current[i] = el; }}
                  className="nav-link group relative rounded-full px-5 py-2.5 text-sm font-medium text-eerie-black transition-colors hover:text-primary"
                >
                  {l.name}
                  {/* Animated underline */}
                  <span className="absolute bottom-1.5 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-primary transition-all duration-300 group-hover:w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Right: Language + CTA + Burger */}
          <div className="flex items-center gap-2">
            <div ref={langRef} className="hidden sm:block">
              <LanguageSwitcher />
            </div>

            {/* Divider - desktop only */}
            <div className="mx-1 hidden h-6 w-px bg-azureish-white md:block" />

            <div ref={ctaRef} className="hidden md:block">
              <PrimaryButton text={t.viewServices} href="#services" />
            </div>

            {/* Burger */}
            <button
              ref={burgerRef}
              onClick={() => !isAnimating && setOpen(!open)}
              className="relative z-[60] flex h-10 w-10 items-center justify-center rounded-full bg-primary transition-all duration-300 hover:bg-primary-dark lg:hidden"
              aria-label="Menu"
            >
              {isVisible ? (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 1l12 12M13 1L1 13" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
              ) : (
                <div className="flex flex-col items-center justify-center gap-1.5">
                  <div className="h-0.5 w-5 rounded-full bg-white" />
                  <div className="h-0.5 w-3.5 rounded-full bg-white" />
                  <div className="h-0.5 w-5 rounded-full bg-white" />
                </div>
              )}
            </button>
          </div>
        </div>

        {/* ── Mobile Menu ── */}
        <div
          ref={menuRef}
          className="invisible absolute left-5 right-5 top-full z-50 mt-2 overflow-hidden rounded-3xl border border-azureish-white bg-white/95 shadow-xl shadow-primary/5 backdrop-blur-xl md:left-[3.75rem] md:right-[3.75rem] lg:hidden"
        >
          {/* Links */}
          <div className="p-2 pt-3">
            {mobileLinks.map((l) => (
              <Link
                key={l.name}
                href={l.href}
                onClick={closeMenu}
                className="menu-link group flex items-center justify-between rounded-2xl px-5 py-3.5 transition-colors hover:bg-alice-blue"
              >
                <div className="flex items-center gap-4">
                  <span className="font-instrument text-[10px] font-semibold text-primary/40">
                    {l.n}
                  </span>
                  <span className="font-instrument text-lg font-medium text-eerie-black transition-colors group-hover:text-primary">
                    {l.name}
                  </span>
                </div>
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-alice-blue transition-all duration-300 group-hover:bg-primary">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 12 12"
                    fill="none"
                    className="text-primary transition-all duration-300 group-hover:-rotate-45 group-hover:text-white"
                  >
                    <path
                      d="M2 6h8M6 2l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom: Language + CTA */}
          <div className="menu-bottom border-t border-azureish-white p-3">
            {/* Language switcher - mobile version */}
            <div className="mb-3 flex justify-center sm:hidden">
              <LanguageSwitcher variant="mobile" />
            </div>
            <Link
              href="#contact"
              onClick={closeMenu}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-primary py-3.5 text-sm font-semibold text-white transition-colors hover:bg-eerie-black"
            >
              {t.getInTouch}
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M2 6h8M6 2l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
