"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import PrimaryButton from "../ui/PrimaryButton";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const textPanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const s = sectionRef.current;
    const content = contentRef.current;
    const textPanel = textPanelRef.current;
    if (!s || !content || !textPanel) return;

    const ctx = gsap.context(() => {
      const revealEls = textPanel.querySelectorAll("[data-reveal]");

      // Listen for preloader to finish
      const handleIntroDone = () => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        // Fade in the hero content
        tl.fromTo(
          content,
          { opacity: 0 },
          { opacity: 1, duration: 0.6 }
        )
          // Reveal text elements
          .fromTo(
            revealEls,
            { y: 50, opacity: 0, filter: "blur(8px)" },
            {
              y: 0,
              opacity: 1,
              filter: "blur(0px)",
              duration: 0.8,
              stagger: 0.12,
            },
            "-=0.3"
          );
      };

      window.addEventListener("introDone", handleIntroDone, { once: true });

      return () => {
        window.removeEventListener("introDone", handleIntroDone);
      };
    }, s);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative h-[75vh] md:min-h-screen"
    >
      {/* Hero content - starts hidden, revealed after preloader */}
      <div ref={contentRef} className="absolute inset-0 opacity-0">
        <Image
          src="/images/Banner-Image.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />

        {/* Overlay — vertical on mobile, horizontal on desktop */}
        <div
          className="absolute inset-0 md:hidden"
          style={{
            background:
              "linear-gradient(to bottom, transparent 20%, rgba(239,244,255,0.45) 42%, rgba(239,244,255,0.85) 58%, #eff4ff 72%)",
          }}
        />
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            background:
              "linear-gradient(to right, transparent 0%, rgba(0,64,193,0.08) 25%, rgba(0,64,193,0.15) 40%, rgba(219,232,255,0.85) 55%, rgba(239,244,255,0.95) 70%, #eff4ff 85%)",
          }}
        />

        <div
          ref={textPanelRef}
          className="absolute inset-0 flex items-end justify-center pb-28 md:items-center md:justify-end md:pb-0"
        >
          <div className="w-full px-6 md:max-w-[45%] md:px-0 md:pr-16 lg:pr-20">
            <h2
              data-reveal
              className="font-instrument text-4xl font-bold leading-tight text-eerie-black md:text-5xl lg:text-[3.5rem]"
            >
              Delivering Smart
            </h2>

            <div data-reveal className="mt-2 flex items-center gap-3 md:gap-4">
              <span className="inline-block h-px w-10 bg-eerie-black/30 sm:w-16" />
              <span className="font-instrument text-4xl font-bold leading-tight text-primary md:text-5xl lg:text-[3.5rem]">
                IT Solutions For
              </span>
            </div>

            <h2
              data-reveal
              className="mt-1 font-instrument text-4xl font-bold leading-tight text-eerie-black md:text-5xl lg:text-[3.5rem]"
            >
              Growing Businesses
            </h2>

            <p
              data-reveal
              className="mt-5 max-w-lg text-sm leading-relaxed text-independence sm:text-base md:mt-8"
            >
              We design and build tailored IT solutions that drive efficiency,
              accelerate growth, and empower businesses to thrive in a
              digital-first world.
            </p>

            <div data-reveal className="mt-5 md:mt-8">
              <PrimaryButton text="Get Started Now" href="#contact" />
            </div>
          </div>
        </div>

        {/* Infinity ticker at the bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden py-4">
          <div
            className="flex w-max whitespace-nowrap"
            style={{ animation: "ticker 60s linear infinite" }}
          >
            {[...Array(10)].map((_, i) => (
              <span
                key={i}
                className="px-4 font-instrument text-3xl font-bold italic uppercase sm:px-6 md:text-5xl"
              >
                <span className="text-primary">Smart Solutions</span>
                <span className="text-eerie-black"> * Real Results * </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
