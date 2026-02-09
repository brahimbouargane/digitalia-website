"use client";

import Image from "next/image";
import Link from "next/link";

export default function PrimaryButton({
  text,
  href,
}: {
  text: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="primary-btn group pl-6 pr-[.375rem] py-[.375rem] bg-primary"
    >
      <div className="relative z-10 flex items-center gap-3">
        <div className="relative h-5 overflow-hidden">
          <div className="primary-btn-label text-sm font-medium leading-5 text-white">
            {text}
          </div>
          <div className="primary-btn-label-hover text-sm font-medium leading-5 text-white">
            {text}
          </div>
        </div>

        <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-white">
          <div className="arrow-wrap">
            <Image src="/images/Button-Arrow-Blue.svg" alt="" width={14} height={14} className="arrow-default" />
            <Image src="/images/Button-Arrow-Blue.svg" alt="" width={14} height={14} className="arrow-hover" />
          </div>
        </div>
      </div>

      <div className="primary-btn-bg bg-accent" />
    </Link>
  );
}
