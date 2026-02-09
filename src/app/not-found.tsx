import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-eerie-black px-6 text-center">
      <p className="font-instrument text-[8rem] font-bold leading-none text-primary sm:text-[12rem]">
        404
      </p>
      <h1 className="mt-4 font-instrument text-3xl font-semibold text-white sm:text-4xl">
        Page Not Found
      </h1>
      <p className="mt-3 max-w-md text-independence text-base sm:text-lg">
        Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-pill bg-primary px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-dark"
      >
        Back to Home
      </Link>
    </main>
  );
}
