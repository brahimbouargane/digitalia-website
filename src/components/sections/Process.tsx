"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionSubtitle from "../ui/SectionSubtitle";
import SectionTitle from "../ui/SectionTitle";
import PrimaryButton from "../ui/PrimaryButton";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "Discovery & Planning",
    description:
      "We understand your business goals, audience, and requirements through research and strategic planning to build a clear roadmap.",
    image: "/images/process1.webp",
  },
  {
    number: "02",
    title: "Design & Architecture",
    description:
      "We craft intuitive experiences and stunning interfaces while building scalable, performant technical architecture.",
    image: "/images/process2.webp",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Our developers bring designs to life using modern technologies, agile methodologies, and regular progress check-ins.",
    image: "/images/process3.webp",
  },
  {
    number: "04",
    title: "Testing & Launch",
    description:
      "Rigorous QA across all devices ensures flawless functionality, followed by smooth zero-downtime deployment.",
    image: "/images/process4.webp",
  },
  {
    number: "05",
    title: "Support & Scaling",
    description:
      "Ongoing monitoring, support, and strategic scaling help your product grow with your business needs.",
    image: "/images/process5.webp",
  },
];

/*
 * S-curve paths alternate direction (left→right, right→left).
 * x: -50 → 1450 in a 1400-unit viewBox — extends off-screen on both edges.
 */
const linePaths = [
  "M -50,350 C 150,320 350,80 700,180 C 1050,280 1250,40 1450,120",
  "M 1450,350 C 1250,320 1050,80 700,180 C 350,280 150,40 -50,120",
  "M -50,330 C 150,300 400,60 700,160 C 1000,260 1200,50 1450,130",
  "M 1450,330 C 1200,300 1000,60 700,160 C 400,260 150,50 -50,130",
  "M -50,340 C 150,310 350,70 700,170 C 1050,270 1250,45 1450,125",
];

export default function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const ctxRef = useRef<gsap.Context | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Wait one frame — Lenis + layout must be stable before measuring
    const raf = requestAnimationFrame(() => {
      const isDesktop = window.matchMedia("(min-width: 768px)").matches;

      ctxRef.current = gsap.context(() => {
        /* ─────────────────────────────────────
           HEADER — staggered entrance
           ───────────────────────────────────── */
        const header = section.querySelector(".process-header");
        if (header) {
          gsap.fromTo(
            header.children,
            { y: 40, opacity: 0, filter: "blur(6px)" },
            {
              y: 0,
              opacity: 1,
              filter: "blur(0px)",
              stagger: 0.12,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: {
                trigger: header,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            },
          );
        }

        /* ─────────────────────────────────────
           PER-STEP ANIMATIONS
           ───────────────────────────────────── */
        stepRefs.current.forEach((step, i) => {
          if (!step) return;
          const fromLeft = i % 2 === 0;

          /* ═══ S-CURVE LINE DRAWING + TRAVELING DOT (desktop only) ═══ */
          if (isDesktop) {
            const mainPath = step.querySelector(
              ".line-main",
            ) as SVGPathElement | null;
            const glowPath = step.querySelector(
              ".line-glow",
            ) as SVGPathElement | null;
            const trailPath = step.querySelector(
              ".line-trail",
            ) as SVGPathElement | null;
            const travelDot = step.querySelector(
              ".travel-dot",
            ) as HTMLDivElement | null;

            const allPaths = [mainPath, glowPath, trailPath].filter(
              Boolean,
            ) as SVGPathElement[];

            if (mainPath && allPaths.length) {
              const len = mainPath.getTotalLength();

              if (len > 0) {
                // Set initial state — fully hidden
                allPaths.forEach((p) => {
                  gsap.set(p, {
                    strokeDasharray: len,
                    strokeDashoffset: len,
                  });
                });

                // Position travel dot at path start
                if (travelDot) {
                  const startPt = mainPath.getPointAtLength(0);
                  gsap.set(travelDot, {
                    left: `${-30 + (startPt.x / 1400) * 160}%`,
                    top: `${-20 + (startPt.y / 500) * 140}%`,
                    xPercent: -50,
                    yPercent: -50,
                    scale: 0,
                  });
                }

                // Timeline scrubbed to scroll (scrub: 1 pairs with Lenis)
                const proxy = { t: 0 };
                const drawTl = gsap.timeline({
                  scrollTrigger: {
                    trigger: step,
                    start: "top 85%",
                    end: "center 40%",
                    scrub: 1,
                  },
                });

                // Draw all three line layers at once
                drawTl.to(
                  allPaths,
                  { strokeDashoffset: 0, ease: "none", duration: 1 },
                  0,
                );

                // Travel dot follows the drawing tip
                if (travelDot) {
                  drawTl.to(travelDot, { scale: 1, duration: 0.03 }, 0);
                  drawTl.to(
                    proxy,
                    {
                      t: 1,
                      ease: "none",
                      duration: 0.94,
                      onUpdate() {
                        const pt = mainPath.getPointAtLength(proxy.t * len);
                        gsap.set(travelDot, {
                          left: `${-30 + (pt.x / 1400) * 160}%`,
                          top: `${-20 + (pt.y / 500) * 140}%`,
                        });
                      },
                    },
                    0.03,
                  );
                  drawTl.to(travelDot, { scale: 0, duration: 0.03 }, 0.97);
                }
              }
            }
          }

          /* ═══ WAYPOINT DOT — elastic pop + ring ═══ */
          const dot = step.querySelector(".step-dot");
          const ring = step.querySelector(".step-ring");
          if (dot) {
            const dotTl = gsap.timeline({
              scrollTrigger: {
                trigger: step,
                start: "top 65%",
                toggleActions: "play none none reverse",
              },
            });
            dotTl.fromTo(
              dot,
              { scale: 0, opacity: 0 },
              {
                scale: 1,
                opacity: 1,
                duration: 0.6,
                ease: "back.out(2.5)",
              },
            );
            if (ring) {
              dotTl.fromTo(
                ring,
                { scale: 0.8, opacity: 0.5 },
                {
                  scale: 2.2,
                  opacity: 0,
                  duration: 0.8,
                  ease: "power2.out",
                },
                "-=0.3",
              );
            }
          }

          /* ═══ IMAGE — directional clip-path wipe ═══ */
          const imgWrap = step.querySelector(".step-img");
          if (imgWrap) {
            gsap.fromTo(
              imgWrap,
              {
                clipPath: fromLeft ? "inset(0 100% 0 0)" : "inset(0 0 0 100%)",
              },
              {
                clipPath: "inset(0 0% 0 0%)",
                duration: 1,
                ease: "power3.inOut",
                scrollTrigger: {
                  trigger: step,
                  start: "top 58%",
                  toggleActions: "play none none reverse",
                },
              },
            );
          }

          /* ═══ IMAGE — Ken Burns parallax zoom ═══ */
          const img = step.querySelector(".step-img img");
          if (img) {
            gsap.fromTo(
              img,
              { scale: 1.15 },
              {
                scale: 1,
                ease: "none",
                scrollTrigger: {
                  trigger: step,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: true,
                },
              },
            );
          }

          /* ═══ TEXT — staggered slide-up ═══ */
          const textEls = step.querySelectorAll(".step-text > *");
          if (textEls.length) {
            gsap.fromTo(
              textEls,
              { y: 30, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                stagger: 0.08,
                duration: 0.6,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: step,
                  start: "top 55%",
                  toggleActions: "play none none reverse",
                },
              },
            );
          }

          /* ═══ NUMBER — bounce + parallax drift ═══ */
          const num = step.querySelector(".step-num");
          if (num) {
            gsap.fromTo(
              num,
              { y: 60, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "back.out(1.5)",
                scrollTrigger: {
                  trigger: step,
                  start: "top 60%",
                  toggleActions: "play none none reverse",
                },
              },
            );
            gsap.to(num, {
              yPercent: -15,
              ease: "none",
              scrollTrigger: {
                trigger: step,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            });
          }
        });

        // Critical: recalculate positions after Lenis init
        ScrollTrigger.refresh();
      }, section);
    });

    return () => {
      cancelAnimationFrame(raf);
      ctxRef.current?.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="py-8 md:py-20 "
      style={{ overflowX: "clip" }}
    >
      {/* Header */}
      <div className="mx-auto max-w-[83rem] px-5 md:px-[3.75rem]">
        <div className="process-header mb-16 max-w-lg md:mb-24">
          <SectionSubtitle text="Our Process" />
          <div className="mt-5">
            <SectionTitle
              text="We have the best team and best"
              highlight="process."
            />
          </div>
          <p className="mt-4 text-sm leading-relaxed text-independence">
            Our proven five-step process ensures every project is delivered on
            time, within budget, and beyond expectations.
          </p>
          <div className="mt-6">
            <PrimaryButton text="Get Started" href="#contact" />
          </div>
        </div>
      </div>

      {/* Steps */}
      <div className="mx-auto max-w-[83rem] space-y-24 px-5 md:space-y-40 md:px-[3.75rem]">
        {steps.map((step, i) => {
          const fromLeft = i % 2 === 0;

          return (
            <div
              key={i}
              ref={(el) => {
                stepRefs.current[i] = el;
              }}
              className="relative"
            >
              {/* ── S-CURVE SVG (3 layers: trail + glow + main) ──
                  Uses opacity-0/100 instead of hidden/block so
                  getTotalLength() always works                    */}
              <svg
                className="pointer-events-none absolute inset-y-0 z-0 opacity-0 md:opacity-100"
                style={{
                  left: "-30%",
                  width: "160%",
                  top: "-20%",
                  height: "140%",
                }}
                viewBox="0 0 1400 500"
                preserveAspectRatio="none"
                fill="none"
                overflow="visible"
              >
                <path
                  className="line-trail"
                  d={linePaths[i]}
                  stroke="#3b82f6"
                  strokeWidth="28"
                  strokeOpacity="0.06"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                />
                <path
                  className="line-glow"
                  d={linePaths[i]}
                  stroke="#3b82f6"
                  strokeWidth="12"
                  strokeOpacity="0.15"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                />
                <path
                  className="line-main"
                  d={linePaths[i]}
                  stroke="#0040c1"
                  strokeWidth="3"
                  strokeOpacity="0.7"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>

              {/* ── TRAVELING GLOWING DOT ── */}
              <div className="travel-dot pointer-events-none absolute z-30 hidden md:block">
                <div className="h-5 w-5 rounded-full bg-primary shadow-[0_0_25px_10px_rgba(0,64,193,0.5)]">
                  <div className="absolute inset-0 animate-pulse rounded-full bg-white/30" />
                </div>
              </div>

              {/* ── WAYPOINT DOT (center) ── */}
              <div className="step-dot relative z-20 mx-auto mb-8 hidden md:flex md:justify-center">
                <div className="relative flex h-14 w-14 items-center justify-center">
                  <div className="step-ring absolute h-14 w-14 rounded-full border-2 border-primary/30" />
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary/25 bg-white shadow-lg shadow-primary/10">
                    <span className="font-instrument text-base font-bold text-primary">
                      {step.number}
                    </span>
                  </div>
                </div>
              </div>

              {/* ── Mobile dot ── */}
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-white shadow-md shadow-primary/25 md:hidden">
                {step.number}
              </div>

              {/* ── CONTENT ── */}
              <div
                className={`relative z-10 flex flex-col gap-6 md:gap-10 ${
                  fromLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Image */}
                <div className="md:w-1/2">
                  <div className="step-img h-56 overflow-hidden rounded-2xl shadow-lg shadow-black/5 sm:h-64 md:h-[24rem]">
                    <Image
                      src={step.image}
                      alt={step.title}
                      width={700}
                      height={500}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                {/* Text */}
                <div className="flex flex-col justify-center md:w-1/2">
                  <span className="step-num font-instrument text-7xl font-bold text-primary/[0.06] md:text-8xl lg:text-[10rem]">
                    {step.number}
                  </span>
                  <div className="step-text">
                    <h3 className="-mt-2 font-instrument text-2xl font-semibold text-eerie-black md:-mt-2 md:text-3xl lg:text-4xl">
                      {step.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-independence md:text-base">
                      {step.description}
                    </p>
                    <div className="mt-8 flex items-center gap-2">
                      {steps.map((_, j) => (
                        <div
                          key={j}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            j === i
                              ? "w-8 bg-primary"
                              : j < i
                                ? "w-2 bg-primary/30"
                                : "w-2 bg-azureish-white"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
