"use client";

import Image from "next/image";
import Link from "next/link";

export default function MoreButton({ text, href }: { text: string; href: string }) {
  return (
    <Link
      href={href}
      className="more-btn group text-sm text-eerie-black transition-colors hover:text-primary"
    >
      <span>{text}</span>
      <div className="relative flex h-4 w-4 items-center justify-center overflow-hidden">
        <Image src="/images/More-Button-Arrow.svg" alt="" width={14} height={14} className="transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
