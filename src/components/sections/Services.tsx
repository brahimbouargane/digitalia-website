"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionSubtitle from "../ui/SectionSubtitle";
import SectionTitle from "../ui/SectionTitle";
import PrimaryButton from "../ui/PrimaryButton";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    name: "Software Development",
    description:
      "Customized software solutions and applications tailored to your business needs. Mobile and web applications with modern, high-performance interfaces.",
    image: "/images/service1.webp",
    href: "#contact",
    bg: "bg-alice-blue",
  },
  {
    name: "Data Analytics",
    description:
      "Transform raw data into actionable insights for informed decision-making. Interactive dashboards for precise monitoring and efficient data management.",
    image: "/images/service2.webp",
    href: "#contact",
    bg: "bg-primary/10",
  },
  {
    name: "Cloud Solutions",
    description:
      "Scalable and secure infrastructure for optimal flexibility. Real-time scalability, advanced security standards, and hybrid cloud solutions.",
    image: "/images/service3.webp",
    href: "#contact",
    bg: "bg-diamond",
  },
  {
    name: "AI & Machine Learning",
    description:
      "Transform your business with AI-driven solutions and intelligent systems. Task automation, chatbot design, and adaptive AI for specific business needs.",
    image: "/images/service4.webp",
    href: "#contact",
    bg: "bg-primary/10",
  },
  {
    name: "Digital Consulting",
    description:
      "Strategic guidance for successful digital evolution. Comprehensive process auditing, transformation strategy, and continuous operational optimization.",
    image: "/images/service5.webp",
    href: "#contact",
    bg: "bg-alice-blue",
  },
];

export default function Services() {
  const [active, setActive] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const isMobileRef = useRef(false);

  // Touch/swipe state
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Desktop scroll-based switching (only on desktop)
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    // Check once on mount
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    isMobileRef.current = !isDesktop;

    if (!isDesktop) return;

    const onScroll = () => {
      const rect = wrapper.getBoundingClientRect();
      const wrapperHeight = wrapper.offsetHeight;
      const scrolled = -rect.top;
      const progress = Math.max(
        0,
        Math.min(1, scrolled / (wrapperHeight - window.innerHeight)),
      );
      const idx = Math.min(
        Math.floor(progress * services.length),
        services.length - 1,
      );
      setActive(idx);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Animate image + text on tab change
  useEffect(() => {
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { clipPath: "inset(0% 100% 0% 0%)", opacity: 0 },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
        },
      );
    }
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power3.out", delay: 0.15 },
      );
    }
  }, [active]);

  // Swipe handlers (mobile only)
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (!isMobileRef.current) return;

    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50; // minimum swipe distance

    if (Math.abs(diff) > threshold) {
      if (diff > 0 && active < services.length - 1) {
        // Swipe left - next
        setActive((prev) => prev + 1);
      } else if (diff < 0 && active > 0) {
        // Swipe right - previous
        setActive((prev) => prev - 1);
      }
    }
  }, [active]);

  const s = services[active];

  return (
    <section id="services" className="bg-white py-6 md:py-0">
      {/* Wrapper - auto height on mobile, reduced scroll height on desktop (250vh) */}
      <div ref={wrapperRef} className="md:h-[250vh]">
        {/* Sticky on desktop, normal on mobile */}
        <div className="md:sticky md:top-5">
          <div className="mx-auto max-w-[83rem] px-5 md:px-[3.75rem]">
            {/* Header */}
            <div className="mb-12 text-center">
              <div className="flex justify-center">
                <SectionSubtitle text="Our Services" />
              </div>
              <div className="mt-6">
                <SectionTitle text="Discover Our" highlight="Services." />
              </div>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-independence">
                At Digitalia, we deliver end-to-end IT solutions and services
                designed to streamline your operations, strengthen your
                infrastructure, and accelerate your growth.
              </p>
            </div>

            {/* Tab pills - desktop only */}
            <div className="mb-8 hidden justify-center md:flex">
              <div className="flex flex-wrap justify-center gap-3">
                {services.map((svc, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`rounded-full border px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                      active === i
                        ? "border-primary bg-primary text-white"
                        : "border-azureish-white bg-white text-eerie-black hover:border-primary/30"
                    }`}
                  >
                    {svc.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Content card - swipeable on mobile */}
            <div
              ref={cardRef}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              className={`overflow-hidden rounded-3xl transition-colors duration-500 touch-pan-y md:touch-auto ${s.bg}`}
            >
              <div className="flex flex-col md:flex-row">
                {/* Image */}
                <div className="md:w-1/2">
                  <div
                    ref={imageRef}
                    className="h-72 overflow-hidden md:h-[28rem]"
                  >
                    <Image
                      src={s.image}
                      alt={s.name}
                      width={700}
                      height={500}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                {/* Text */}
                <div className="flex flex-col justify-center md:w-1/2">
                  <div ref={textRef} className="p-8 md:p-12 lg:p-16">
                    <h3 className="font-instrument text-2xl font-semibold text-eerie-black md:text-3xl lg:text-4xl">
                      {s.name}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-independence md:text-base">
                      {s.description}
                    </p>
                    <div className="mt-10">
                      <PrimaryButton text="Get Started" href={s.href} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Swipe indicator dots - mobile only */}
            <div className="mt-6 flex justify-center gap-2 md:hidden">
              {services.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    active === i
                      ? "w-6 bg-primary"
                      : "w-2 bg-azureish-white hover:bg-primary/30"
                  }`}
                  aria-label={`Go to service ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
