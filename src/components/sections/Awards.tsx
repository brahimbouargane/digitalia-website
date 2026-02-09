"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const awards = [
  { name: "Site Of The Day", info: "Product Design", logo: "/images/Award-Logo-1.svg" },
  { name: "Digital Excellence", info: "Product Design", logo: "/images/Award-Logo-2.svg" },
  { name: "Creative Agency", info: "Product Design", logo: "/images/Award-Logo-3.svg" },
  { name: "Innovative Design", info: "Product Design", logo: "/images/Award-Logo-4.svg" },
  { name: "Top Branding", info: "Product Design", logo: "/images/Award-Logo-5.svg" },
  { name: "Web Innovation", info: "Product Design", logo: "/images/Award-Logo-6.svg" },
];

export default function Awards() {
  const ref = useRef<HTMLElement>(null);
  const cards = useRef<(HTMLDivElement | null)[]>([]);
  const glints = useRef<(HTMLDivElement | null)[]>([]);
  const topBorder = useRef<HTMLDivElement>(null);
  const botBorder = useRef<HTMLDivElement>(null);
  const bgPattern = useRef<HTMLDivElement>(null);
  const gridWrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ═══ BG PATTERN — slowest parallax layer ═══ */
      if (bgPattern.current) {
        gsap.fromTo(bgPattern.current, { y: 30 }, {
          y: -60, ease: "none",
          scrollTrigger: { trigger: ref.current, start: "top bottom", end: "bottom top", scrub: true },
        });
      }

      /* ═══ GRID — mid parallax (entire grid drifts up slowly) ═══ */
      if (gridWrap.current) {
        gsap.fromTo(gridWrap.current, { y: 30 }, {
          y: -20, ease: "none",
          scrollTrigger: { trigger: ref.current, start: "top bottom", end: "bottom top", scrub: 0.6 },
        });
      }

      /* ═══ INDIVIDUAL CARDS — each row at different parallax depth ═══ */
      const els = cards.current.filter(Boolean) as HTMLDivElement[];
      els.forEach((el, i) => {
        const row = i < 3 ? 0 : 1;
        const yRange = row === 0 ? 15 : 30;
        gsap.fromTo(el, { y: yRange }, {
          y: -yRange, ease: "none",
          scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: 0.3 + row * 0.4 },
        });
      });

      /* Animated borders */
      [topBorder, botBorder].forEach((b) => {
        if (b.current) {
          gsap.fromTo(b.current, { scaleX: 0 }, {
            scaleX: 1, duration: 1, ease: "power3.out",
            scrollTrigger: { trigger: ref.current, start: "top 90%", toggleActions: "play none none none" },
          });
        }
      });

      /* Cards: 3D flip-in entrance */
      if (els.length) {
        gsap.fromTo(els,
          { rotateX: 60, y: 60, opacity: 0, transformPerspective: 800, transformOrigin: "bottom center" },
          {
            rotateX: 0, y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out",
            scrollTrigger: { trigger: ref.current, start: "top 80%", toggleActions: "play none none none" },
          }
        );
      }

      /* Diagonal glint sweep */
      const glintEls = glints.current.filter(Boolean) as HTMLDivElement[];
      glintEls.forEach((g, i) => {
        gsap.fromTo(g,
          { x: "-120%", opacity: 0.6 },
          {
            x: "120%", opacity: 0, duration: 0.8, ease: "power2.inOut",
            delay: 0.6 + i * 0.12,
            scrollTrigger: { trigger: ref.current, start: "top 80%", toggleActions: "play none none none" },
          }
        );
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* BG pattern — parallax layer */}
      <div ref={bgPattern} className="pointer-events-none absolute inset-0 will-change-transform"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(0,64,193,0.015) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div ref={topBorder} className="h-px origin-left bg-azureish-white" />

      <div className="mx-auto max-w-[83rem] px-5 md:px-[3.75rem]">
        <div ref={gridWrap} className="will-change-transform">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {awards.map((a, i) => (
              <div
                key={i}
                ref={(el) => { cards.current[i] = el; }}
                className={`group relative flex items-center justify-between overflow-hidden p-8 will-change-transform transition-all duration-300 hover:-translate-y-0.5 hover:bg-alice-blue/50 md:p-10
                  ${i < 3 ? "border-b border-azureish-white" : ""}
                  ${i % 3 !== 2 ? "lg:border-r lg:border-azureish-white" : ""}
                  ${i % 2 === 0 ? "sm:border-r sm:border-azureish-white lg:border-r-0" : ""}
                  ${i % 3 !== 2 ? "lg:border-r" : ""}`}
              >
                <div
                  ref={(el) => { glints.current[i] = el; }}
                  className="pointer-events-none absolute inset-y-0 w-16 -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                  style={{ transform: "translateX(-120%) skewX(-12deg)" }}
                />
                <div className="flex flex-col gap-1">
                  <h3 className="font-instrument text-lg font-semibold text-eerie-black transition-colors duration-300 group-hover:text-primary">{a.name}</h3>
                  <span className="text-xs text-independence">{a.info}</span>
                </div>
                <div className="transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <Image src={a.logo} alt={a.name} width={48} height={48} className="h-10 w-10" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div ref={botBorder} className="h-px origin-right bg-azureish-white" />
    </section>
  );
}
