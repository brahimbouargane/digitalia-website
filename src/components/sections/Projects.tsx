"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionSubtitle from "../ui/SectionSubtitle";
import SectionTitle from "../ui/SectionTitle";
import PrimaryButton from "../ui/PrimaryButton";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { name: "Pixel Forge", cat: "UI/UX Design", img: "/images/Project-Image-1.jpg", href: "/projects/pixel-forge", n: "01" },
  { name: "Studio Nova", cat: "UI/UX Design", img: "/images/Project-Image-2.jpg", href: "/projects/studio-nova", n: "02" },
  { name: "Brand Orbit", cat: "UI/UX Design", img: "/images/Project-Image-3.jpg", href: "/projects/brand-orbit", n: "03" },
  { name: "Vision Core", cat: "UI/UX Design", img: "/images/Project-Image-4.jpg", href: "/projects/vision-core", n: "04" },
  { name: "Design Flow", cat: "UI/UX Design", img: "/images/Project-Image-5.jpg", href: "/projects/design-flow", n: "05" },
];

function Card({ p, large = false }: { p: (typeof projects)[0]; large?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Image parallax inside card */
      if (imgRef.current && ref.current) {
        gsap.fromTo(imgRef.current, { yPercent: -10 }, {
          yPercent: 10, ease: "none",
          scrollTrigger: { trigger: ref.current, start: "top bottom", end: "bottom top", scrub: true },
        });
      }

      /* Gradient overlay builds as card scrolls */
      if (overlayRef.current && ref.current) {
        gsap.fromTo(overlayRef.current, { opacity: 0 }, {
          opacity: 1, ease: "none",
          scrollTrigger: { trigger: ref.current, start: "top 50%", end: "bottom 20%", scrub: true },
        });
      }

      /* Card rises up into view */
      if (ref.current) {
        gsap.fromTo(ref.current,
          { y: 100, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 1, ease: "power3.out",
            scrollTrigger: { trigger: ref.current, start: "top 95%", toggleActions: "play none none none" },
          }
        );
      }
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="will-change-transform">
      <div className="mb-3 flex items-center gap-2">
        <span className="inline-block h-px w-6 bg-primary" />
        <span className="text-xs font-medium text-primary">{p.n}</span>
      </div>
      <Link href={p.href} className={`project-card-img relative block overflow-hidden rounded-2xl ${large ? "h-72 md:h-[26rem]" : "h-56 md:h-72"}`}>
        <Image ref={imgRef} src={p.img} alt={p.name} fill className="scale-[1.15] object-cover will-change-transform" />
        <div ref={overlayRef} className="pointer-events-none absolute inset-0 bg-gradient-to-t from-eerie-black/40 via-transparent to-transparent opacity-0" />
        <div className="project-arrow absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-white">
          <Image src="/images/Project-Button-Arrow.svg" alt="" width={18} height={18} />
        </div>
      </Link>
      <div className="mt-4 flex items-center justify-between">
        <Link href={p.href} className="font-instrument text-lg font-semibold text-eerie-black transition-colors hover:text-primary">{p.name}</Link>
        <span className="text-xs text-independence">{p.cat}</span>
      </div>
    </div>
  );
}

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const dividerTopRef = useRef<HTMLDivElement>(null);
  const dividerBotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Header entrance */
      if (headerRef.current) {
        const els = headerRef.current.querySelectorAll("[data-reveal]");
        gsap.fromTo(els,
          { y: 40, opacity: 0, filter: "blur(6px)" },
          {
            y: 0, opacity: 1, filter: "blur(0px)", duration: 0.9, stagger: 0.15, ease: "power3.out",
            scrollTrigger: { trigger: headerRef.current, start: "top 85%", toggleActions: "play none none none" },
          }
        );
      }

      /* Animated border lines */
      [dividerTopRef, dividerBotRef].forEach((d) => {
        if (d.current) {
          gsap.fromTo(d.current, { scaleX: 0 }, {
            scaleX: 1, duration: 1.2, ease: "power3.out",
            scrollTrigger: { trigger: d.current, start: "top 95%", toggleActions: "play none none none" },
          });
        }
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative overflow-hidden py-[7.5rem]">
      {/* Top border */}
      <div ref={dividerTopRef} className="absolute inset-x-0 top-0 mx-auto max-w-[83rem] px-5 md:px-[3.75rem]">
        <div className="h-px origin-left" style={{ background: "linear-gradient(90deg, transparent, #d1e0ff 30%, #0040c1 50%, #d1e0ff 70%, transparent)" }} />
      </div>

      <div className="mx-auto max-w-[83rem] px-5 md:px-[3.75rem]">
        {/* Header — centered */}
        <div ref={headerRef} className="mb-16 text-center">
          <div data-reveal className="flex justify-center">
            <SectionSubtitle text="Our Projects" />
          </div>
          <div data-reveal className="mt-6">
            <SectionTitle text="Our Latest" highlight="Projects." />
          </div>
          <p data-reveal className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-independence">
            Explore our recent work and see how we bring ideas to life through
            design, development, and innovation.
          </p>
          <div data-reveal className="mt-8">
            <PrimaryButton text="View All Projects" href="/projects" />
          </div>
        </div>

        {/* Cards — rise up one by one on scroll */}
        <div className="flex flex-col gap-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Card p={projects[0]} />
            <Card p={projects[1]} />
          </div>
          <Card p={projects[2]} large />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Card p={projects[3]} />
            <Card p={projects[4]} />
          </div>
        </div>
      </div>

      {/* Bottom border */}
      <div ref={dividerBotRef} className="absolute inset-x-0 bottom-0 mx-auto max-w-[83rem] px-5 md:px-[3.75rem]">
        <div className="h-px origin-right" style={{ background: "linear-gradient(90deg, transparent, #d1e0ff 30%, #0040c1 50%, #d1e0ff 70%, transparent)" }} />
      </div>
    </section>
  );
}
