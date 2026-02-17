"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionSubtitle from "../ui/SectionSubtitle";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    img: "https://cdn.prod.website-files.com/690a3d4b70be67fbdfcdc08a/690bdc0f2ee4b12eb394e7fd_testimonial-01.avif",
    quote:
      "Digitalia helped us modernize our internal systems and streamline production tracking. The team was responsive, professional, and really understood our operational challenges.",
    name: "Karim Benslimane",
    role: "IT Manager at Sotherma",
  },
  {
    img: "https://cdn.prod.website-files.com/690a3d4b70be67fbdfcdc08a/690bd925b25e4977e16716b4_testimonial-01.avif",
    quote:
      "We needed a reliable partner to build our data platform from scratch. Digitalia delivered on time and the dashboards they created have become essential to how we monitor energy efficiency across the country.",
    name: "Nadia El Alaoui",
    role: "Head of Digital Projects at AMEE",
  },
  {
    img: "https://cdn.prod.website-files.com/690a3d4b70be67fbdfcdc08a/690bdc0fb904580e2cfb6384_testimonial-03.avif",
    quote:
      "Working with Digitalia on our cloud migration was a smooth experience. They handled the complexity well and kept us informed at every stage. Solid team, solid results.",
    name: "Youssef Tazi",
    role: "Operations Director at Samsung Cheil",
  },
  {
    img: "https://cdn.prod.website-files.com/690a3d4b70be67fbdfcdc08a/690bdc0f66c58365048232f1_f42ccc803ca6a5b200d46bd9e59441de_testimonial-04.avif",
    quote:
      "Digitalia built a custom reporting tool that saves our team hours every week. Their approach was practical, and they took the time to understand our specific needs in the insurance sector.",
    name: "Hind Berrada",
    role: "Digital Transformation Lead at Sanlam Maroc",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Background blob parallax via ScrollTrigger (Lenis feeds it) */
      if (bgRef.current) {
        gsap.fromTo(
          bgRef.current,
          { y: 80 },
          {
            y: -80,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      }

      /* Header entrance */
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.children,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          },
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  /* Triple the array so the marquee loops seamlessly */
  const tripled = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative overflow-hidden py-8"
    >
      {/* Background parallax blob */}
      <div
        ref={bgRef}
        className="pointer-events-none absolute -right-20 top-0 h-96 w-96 rounded-full bg-alice-blue opacity-60 blur-[80px]"
      />

      {/* Header */}
      <div
        ref={headerRef}
        className="relative z-10 mx-auto mb-16 max-w-[83rem] px-5 text-center md:px-[3.75rem]"
      >
        <div>
          <SectionSubtitle text="Testimonials" />
        </div>
        <h2 className="mt-6 font-instrument text-3xl font-bold leading-tight text-eerie-black lg:text-5xl">
          What our <span className="italic text-primary">clients</span> are
          saying
        </h2>
        <p className="mt-4 text-lg text-independence">
          Hear from the businesses we have helped transform through innovative IT
          solutions and technology.
        </p>
      </div>

      {/* Marquee */}
      <div className="relative z-10 w-full">
        {/* Edge fades */}
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-32 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-32 bg-gradient-to-l from-white to-transparent" />

        <div
          className="flex w-max space-x-8"
          style={{ animation: "ticker 40s linear infinite" }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLDivElement).style.animationPlayState =
              "paused";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLDivElement).style.animationPlayState =
              "running";
          }}
        >
          {tripled.map((t, i) => (
            <div
              key={i}
              className="w-[350px] flex-shrink-0 rounded-3xl border border-azureish-white bg-alice-blue p-8 md:w-[400px]"
            >
              <div className="mb-6 flex items-start justify-between">
                <Image
                  src={t.img}
                  alt={t.name}
                  width={64}
                  height={64}
                  className="h-16 w-16 rounded-full border-4 border-white object-cover shadow-sm"
                  unoptimized
                />
                <Image
                  src="/images/Testimonial-Quote.svg"
                  alt=""
                  width={40}
                  height={40}
                  className="opacity-20"
                />
              </div>
              <p className="mb-6 text-lg italic leading-relaxed text-independence">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <h4 className="font-instrument font-bold text-eerie-black">
                  {t.name}
                </h4>
                <p className="text-sm text-independence">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
