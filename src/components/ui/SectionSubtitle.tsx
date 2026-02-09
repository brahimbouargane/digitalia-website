import Image from "next/image";

export default function SectionSubtitle({ text }: { text: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-azureish-white bg-alice-blue px-4 py-2">
      <Image src="/images/Subtitle-Icon.svg" alt="" width={14} height={14} />
      <span className="text-xs font-medium uppercase tracking-wider text-eerie-black">
        {text}
      </span>
    </div>
  );
}
