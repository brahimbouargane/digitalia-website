"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionSubtitle from "../ui/SectionSubtitle";
import SectionTitle from "../ui/SectionTitle";

gsap.registerPlugin(ScrollTrigger);

const projectTypes = ["Software Development", "Cloud & Infrastructure", "Data & AI", "IT Consulting"];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const toggleType = (type: string) => {
    setSelected((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type],
    );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          projectTypes: selected,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setFormData({ name: "", phone: "", email: "", message: "" });
      setSelected([]);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Failed to send message",
      );
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headerRef.current) {
        const els = headerRef.current.querySelectorAll("[data-reveal]");
        gsap.fromTo(
          els,
          { y: 40, opacity: 0, filter: "blur(6px)" },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
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

      if (cardRef.current) {
        gsap.fromTo(
          cardRef.current,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardRef.current,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          },
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative overflow-hidden bg-white pb-24 pt-10"
    >
      {/* Header */}
      <div ref={headerRef} className="mb-16 text-center">
        <div data-reveal className="flex justify-center">
          <SectionSubtitle text="Get In Touch" />
        </div>
        <div data-reveal className="mt-6">
          <SectionTitle text="Contact" highlight="Us." />
        </div>
        <p
          data-reveal
          className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-independence"
        >
          At Digitalia, we offer a full range of IT solutions and services
          designed to help businesses innovate and succeed in a fast-evolving
          digital landscape.
        </p>
      </div>

      {/* Form card */}
      <div className="mx-auto max-w-[83rem] px-5 md:px-[3.75rem]">
        <div
          ref={cardRef}
          className="overflow-hidden rounded-3xl bg-primary p-8 md:p-12 lg:p-16"
        >
          <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
            {/* Left column */}
            <div className="flex flex-col justify-between lg:w-[40%]">
              <div>
                <div className="flex items-center gap-3">
                  <Image
                    src="/logos/DIGITALIA-BLANC.svg"
                    alt="Digitalia"
                    width={200}
                    height={100}
                    // className="h-32 w-auto"
                  />
                </div>
                <h3 className="mt-6 font-instrument text-3xl font-bold leading-tight text-white md:text-4xl">
                  Fill This Form.
                </h3>
              </div>

              <div className="mt-8 overflow-hidden rounded-2xl">
                <Image
                  src="/images/contactus.jpg"
                  alt="Our team"
                  width={500}
                  height={350}
                  className="h-56 w-full object-cover sm:h-64 md:h-72"
                />
              </div>
            </div>

            {/* Right column — form */}
            <div className="flex-1">
              <label className="mb-4 block text-base font-semibold text-white">
                Tell us about your project
                <span className="text-accent">*</span>
              </label>

              {/* Project type pills */}
              <div className="mb-8 flex flex-wrap gap-3">
                {projectTypes.map((type) => {
                  const isActive = selected.includes(type);
                  return (
                    <button
                      key={type}
                      type="button"
                      onClick={() => toggleType(type)}
                      className={`rounded-full border px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                        isActive
                          ? "border-white bg-white text-primary"
                          : "border-white/30 bg-transparent text-white hover:border-white/60"
                      }`}
                    >
                      {type}
                    </button>
                  );
                })}
              </div>

              {/* Form fields */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name *"
                    required
                    disabled={status === "loading"}
                    className="w-full border-b border-white/30 bg-transparent py-3 text-sm text-white outline-none placeholder:text-white/60 transition-colors focus:border-white disabled:opacity-50"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number *"
                    required
                    disabled={status === "loading"}
                    className="w-full border-b border-white/30 bg-transparent py-3 text-sm text-white outline-none placeholder:text-white/60 transition-colors focus:border-white disabled:opacity-50"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email *"
                    required
                    disabled={status === "loading"}
                    className="w-full border-b border-white/30 bg-transparent py-3 text-sm text-white outline-none placeholder:text-white/60 transition-colors focus:border-white disabled:opacity-50"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message *"
                    required
                    rows={4}
                    disabled={status === "loading"}
                    className="w-full resize-y border-b border-white/30 bg-transparent py-3 text-sm text-white outline-none placeholder:text-white/60 transition-colors focus:border-white disabled:opacity-50"
                  />
                </div>

                {/* Status messages */}
                {status === "success" && (
                  <div className="rounded-lg bg-green-500/20 px-4 py-3 text-sm text-white">
                    Thank you! Your message has been sent successfully.
                    We&apos;ll get back to you soon.
                  </div>
                )}
                {status === "error" && (
                  <div className="rounded-lg bg-red-500/20 px-4 py-3 text-sm text-white">
                    {errorMessage}
                  </div>
                )}

                <div className="mt-4">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-primary transition-all duration-300 hover:bg-accent hover:text-white hover:shadow-lg hover:shadow-accent/30 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {status === "loading" ? (
                      <>
                        <svg
                          className="h-4 w-4 animate-spin"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Get In Touch
                        <Image
                          src="/images/Button-Arrow-Blue.svg"
                          alt=""
                          width={14}
                          height={14}
                        />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
