"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "@/i18n/LocaleContext";
import Image from "next/image";

// 1. Imports
import GBFlag from "@/../public/uk.svg";
import FRFlag from "@/../public/fr.svg";

const languages = [
  { code: "en", label: "English", flag: GBFlag },
  { code: "fr", label: "Français", flag: FRFlag },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FlagIcon = ({ flagAsset, alt }: { flagAsset: any; alt: string }) => (
  <Image src={flagAsset} alt={alt} width={28} height={20} className="shrink-0" />
);

export default function LanguageSwitcher({
  variant = "default",
}: {
  variant?: "default" | "mobile";
}) {
  const { locale } = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const current = languages.find((l) => l.code === locale) || languages[0];

  const switchTo = (code: string) => {
    const segments = pathname.split("/");
    segments[1] = code;
    router.push(segments.join("/") || `/${code}`);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [isOpen]);

  // Mobile View
  if (variant === "mobile") {
    return (
      <div className="flex w-full gap-2">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => switchTo(lang.code)}
            className={`flex flex-1 items-center justify-center gap-2.5 rounded-2xl px-4 py-3 transition-all duration-200 ${
              locale === lang.code
                ? "bg-primary/5 border border-primary/20"
                : "bg-alice-blue border border-transparent"
            }`}
          >
            <FlagIcon flagAsset={lang.flag} alt={lang.label} />
            <span
              className={`text-sm font-medium ${locale === lang.code ? "text-primary" : "text-eerie-black"}`}
            >
              {lang.label}
            </span>
          </button>
        ))}
      </div>
    );
  }

  // Desktop View
  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex h-10 items-center gap-2 rounded-full border border-azureish-white bg-white pl-1.5 pr-3 transition-all duration-200 hover:border-primary/30"
      >
        <FlagIcon flagAsset={current.flag} alt={current.label} />
        <span className="text-xs font-semibold uppercase tracking-wider text-eerie-black">
          {current.code}
        </span>
        {/* ... Arrow SVG ... */}
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full z-50 mt-2 w-44 overflow-hidden rounded-2xl border border-azureish-white bg-white py-1 shadow-lg">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => switchTo(lang.code)}
              className={`flex w-full items-center gap-3 px-4 py-2.5 transition-colors ${
                locale === lang.code
                  ? "bg-alice-blue"
                  : "hover:bg-alice-blue/60"
              }`}
            >
              <div className="h-5 w-7 shrink-0 shadow-sm">
                <FlagIcon flagAsset={lang.flag} alt={lang.label} />
              </div>
              <span
                className={`text-sm font-medium ${locale === lang.code ? "text-primary" : "text-eerie-black"}`}
              >
                {lang.label}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
