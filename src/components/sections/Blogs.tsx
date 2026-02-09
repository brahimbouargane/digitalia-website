"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionSubtitle from "../ui/SectionSubtitle";
import SectionTitle from "../ui/SectionTitle";
import PrimaryButton from "../ui/PrimaryButton";
import MoreButton from "../ui/MoreButton";

gsap.registerPlugin(ScrollTrigger);

const blogs = [
  { title: "Designing for Emotion: The Secret to Memorable Brands.", img: "/images/Blog-Image-1.jpg", cat: "Advice", date: "Nov 14, 2025", href: "/blog-posts/designing-for-emotion" },
  { title: "The Power of Minimalism in Modern Web Design.", img: "/images/Blog-Image-2.jpg", cat: "Advice", date: "Nov 14, 2025", href: "/blog-posts/power-of-minimalism" },
  { title: "Building Digital Trust Through Strong Brand Identity.", img: "/images/Blog-Image-3.jpg", cat: "Advice", date: "Nov 14, 2025", href: "/blog-posts/building-digital-trust" },
];

export default function Blogs() {
  const ref = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);

  /* Parallax layers */
  const bgLayer = useRef<HTMLDivElement>(null);
  const leftParallax = useRef<HTMLDivElement>(null);
  const rightParallax = useRef<HTMLDivElement>(null);
  const floatRect = useRef<HTMLDivElement>(null);
  const floatDot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ═══ BG LAYER — slowest parallax ═══ */
      if (bgLayer.current) {
        gsap.fromTo(bgLayer.current, { y: 0 }, {
          y: -80, ease: "none",
          scrollTrigger: { trigger: ref.current, start: "top bottom", end: "bottom top", scrub: true },
        });
      }

      /* ═══ FLOATING SHAPES — mid speeds ═══ */
      if (floatRect.current) {
        gsap.fromTo(floatRect.current, { y: 100, rotate: 0, scale: 0.8 }, {
          y: -120, rotate: 90, scale: 1.1, ease: "none",
          scrollTrigger: { trigger: ref.current, start: "top bottom", end: "bottom top", scrub: 0.6 },
        });
      }
      if (floatDot.current) {
        gsap.fromTo(floatDot.current, { y: 60, x: -20 }, {
          y: -100, x: 40, ease: "none",
          scrollTrigger: { trigger: ref.current, start: "top bottom", end: "bottom top", scrub: 1.0 },
        });
      }

      /* ═══ LEFT COLUMN — rises SLOWER (closer to viewer) ═══ */
      if (leftParallax.current) {
        gsap.fromTo(leftParallax.current, { y: 80 }, {
          y: -60, ease: "none",
          scrollTrigger: { trigger: ref.current, start: "top bottom", end: "bottom top", scrub: 0.4 },
        });
      }

      /* ═══ RIGHT COLUMN — rises FASTER (further back) ═══ */
      if (rightParallax.current) {
        gsap.fromTo(rightParallax.current, { y: 40 }, {
          y: -100, ease: "none",
          scrollTrigger: { trigger: ref.current, start: "top bottom", end: "bottom top", scrub: 0.9 },
        });
      }

      /* ═══ ENTRANCE ANIMATIONS ═══ */
      if (leftRef.current) {
        const els = leftRef.current.querySelectorAll("[data-reveal]");
        gsap.fromTo(els,
          { y: 50, opacity: 0, filter: "blur(6px)" },
          {
            y: 0, opacity: 1, filter: "blur(0px)", duration: 1, stagger: 0.15, ease: "power3.out",
            scrollTrigger: { trigger: leftRef.current, start: "top 85%", toggleActions: "play none none none" },
          }
        );
      }

      /* Blog cards: clip-path unfold + individual image parallax */
      if (cardsRef.current) {
        const blogCards = cardsRef.current.querySelectorAll(".blog-card");
        blogCards.forEach((card, i) => {
          gsap.fromTo(card,
            { clipPath: "inset(0% 100% 0% 0%)", opacity: 0 },
            {
              clipPath: "inset(0% 0% 0% 0%)", opacity: 1, duration: 0.9, ease: "power3.out",
              delay: i * 0.18,
              scrollTrigger: { trigger: card, start: "top 88%", toggleActions: "play none none none" },
            }
          );
        });

        /* Each blog image: independent scroll-linked parallax */
        const imgs = cardsRef.current.querySelectorAll(".blog-card-img");
        imgs.forEach((img, i) => {
          gsap.fromTo(img.querySelector("img"),
            { yPercent: -6 },
            {
              yPercent: 6, ease: "none",
              scrollTrigger: { trigger: img, start: "top bottom", end: "bottom top", scrub: 0.4 + i * 0.2 },
            }
          );
        });
      }

      /* Divider */
      if (dividerRef.current) {
        gsap.fromTo(dividerRef.current, { scaleX: 0 }, {
          scaleX: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: dividerRef.current, start: "top 95%", toggleActions: "play none none none" },
        });
      }
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative overflow-hidden py-[7.5rem]">
      {/* BG gradient — slowest parallax */}
      <div ref={bgLayer} className="pointer-events-none absolute inset-0 will-change-transform"
        style={{ background: "radial-gradient(ellipse at 70% 30%, rgba(212,148,74,0.03), transparent 60%)" }} />

      {/* Floating shapes at different parallax speeds */}
      <div ref={floatRect} className="pointer-events-none absolute left-[8%] top-[30%] h-20 w-20 rounded-2xl border-2 border-primary/[0.05] will-change-transform" />
      <div ref={floatDot} className="pointer-events-none absolute right-[12%] top-[60%] h-4 w-4 rounded-full bg-primary/[0.08] will-change-transform" />

      <div className="relative mx-auto max-w-[83rem] px-5 md:px-[3.75rem]">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-20">
          {/* LEFT — own parallax layer (slower) */}
          <div className="lg:w-[38%]">
            <div ref={leftParallax} className="will-change-transform">
              <div ref={leftRef}>
                <div data-reveal><SectionSubtitle text="News & Articles" /></div>
                <div data-reveal className="mt-6"><SectionTitle text="Fresh Perspectives On" highlight="Strategy." className="mb-6" /></div>
                <p data-reveal className="mb-8 text-sm leading-relaxed text-independence">We combine strategy, creativity, and technology to help brands grow in the modern digital landscape.</p>
                <div data-reveal><PrimaryButton text="View All Articles" href="/blogs" /></div>
              </div>
            </div>
          </div>

          {/* RIGHT — different parallax layer (faster) */}
          <div className="lg:w-[62%]">
            <div ref={rightParallax} className="will-change-transform">
              <div ref={cardsRef} className="flex flex-col">
                {blogs.map((b, i) => (
                  <div key={i} className="blog-card group flex flex-col gap-6 border-b border-azureish-white py-8 first:pt-0 sm:flex-row">
                    <Link href={b.href} className="blog-card-img blog-img relative h-48 shrink-0 overflow-hidden rounded-2xl sm:h-40 sm:w-52">
                      <Image src={b.img} alt={b.title} fill className="scale-110 object-cover transition-transform duration-700 group-hover:scale-100 will-change-transform" />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-eerie-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    </Link>
                    <div className="flex flex-col justify-between">
                      <div>
                        <div className="mb-3 flex items-center gap-3">
                          <span className="rounded-full bg-alice-blue px-3 py-1 text-xs font-medium text-eerie-black">{b.cat}</span>
                          <span className="h-1 w-1 rounded-full bg-azureish-white" />
                          <span className="text-xs text-independence">{b.date}</span>
                        </div>
                        <Link href={b.href} className="font-instrument text-lg font-semibold leading-snug text-eerie-black transition-colors hover:text-primary">{b.title}</Link>
                      </div>
                      <div className="mt-4"><MoreButton text="Read More" href={b.href} /></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-[7.5rem] max-w-[83rem] px-5 md:px-[3.75rem]">
        <div ref={dividerRef} className="h-px origin-center" style={{ background: "linear-gradient(90deg, transparent, #d1e0ff 30%, #0040c1 50%, #d1e0ff 70%, transparent)" }} />
      </div>
    </section>
  );
}
