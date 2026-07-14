import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
      <div className="max-w-lg text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-gold">404</p>
        <h1 className="heading-display text-4xl">This event page is not live.</h1>
        <p className="mt-5 text-white/60">
          Return to the Artist Nation early-access demo to explore services, gallery, and booking options.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-gold"
        >
          Back to demo
        </Link>
      </div>
    </main>
  );
}
