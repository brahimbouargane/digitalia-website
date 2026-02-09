"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const LETTERS = [
  { char: "D" },
  { char: "I" },
  { char: "G" },
  { char: "I" },
  { char: "T" },
  { char: "A" },
  { char: "L" },
  { char: "I", accent: true },
  { char: "A", accent: true },
];

export default function Preloader() {
  const containerRef = useRef<HTMLDivElement>(null);
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let ctx: gsap.Context;

    document.fonts.ready.then(() => {
      ctx = gsap.context(() => {
        const letters = letterRefs.current.filter(Boolean) as HTMLSpanElement[];

        // Initial states
        gsap.set(letters, { opacity: 0, y: 60, scale: 0.8 });

        // Intro timeline
        const introTl = gsap.timeline({
          defaults: { ease: "power3.out" },
          onStart: () => {
            document.body.style.overflow = "hidden";
          },
          onComplete: () => {
            document.body.style.overflow = "";
            // Hide preloader after animation
            gsap.set(container, { display: "none" });
          },
        });

        introTl
          // Phase 1: Letters stagger in
          .to(letters, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.06,
            ease: "back.out(1.4)",
          })
          // Phase 2: Brief hold
          .to({}, { duration: 0.5 })
          // Phase 3: Dispatch introDone event for navbar
          .call(() => {
            window.dispatchEvent(new CustomEvent("introDone"));
          })
          // Phase 4: Letters fade out + scale down
          .to(letters, {
            opacity: 0,
            scale: 0.6,
            filter: "blur(6px)",
            duration: 0.6,
            stagger: 0.02,
          })
          // Phase 5: Fade out the entire preloader
          .to(container, {
            opacity: 0,
            duration: 0.4,
            ease: "power2.inOut",
          });
      }, container);
    });

    return () => {
      if (ctx) ctx.revert();
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none"
    >
      {/* Gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #0040c1 0%, #2d6ae0 20%, #7ba4f0 45%, #c5d9f8 65%, #f0f5ff 82%, #ffffff 96%)",
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "20% 25%",
        }}
      />

      {/* DIGITALIA letters */}
      <div
        className="relative z-10 text-center font-instrument font-bold leading-none text-primary select-none"
        style={{ fontSize: "clamp(2.5rem, 14vw, 16rem)" }}
      >
        {LETTERS.map((l, i) => (
          <span
            key={i}
            ref={(el) => {
              letterRefs.current[i] = el;
            }}
            className={`inline-block opacity-0 will-change-transform ${l.accent ? "text-accent" : ""}`}
          >
            {l.char}
          </span>
        ))}
      </div>
    </div>
  );
}
