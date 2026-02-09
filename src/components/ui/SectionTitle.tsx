export default function SectionTitle({
  text,
  highlight,
  className = "",
}: {
  text: string;
  highlight: string;
  className?: string;
}) {
  return (
    <h2
      className={`font-instrument text-3xl font-semibold leading-tight text-eerie-black sm:text-[2.5rem] md:text-[3.25rem] ${className}`}
    >
      {text} <span className="text-primary">{highlight}</span>
    </h2>
  );
}
