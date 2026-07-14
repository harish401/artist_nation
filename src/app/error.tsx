"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Artist Nation route error", {
      message: error.message,
      digest: error.digest,
    });
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
      <div className="max-w-lg text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-gold">Something paused</p>
        <h1 className="heading-display text-4xl">We could not load this experience.</h1>
        <p className="mt-5 text-white/60">
          Please try again. If it keeps happening, contact Artist Nation and we will help you continue.
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-8 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-gold"
        >
          Try again
        </button>
      </div>
    </main>
  );
}
