"use client";

import Link from "next/link";

export default function Error({ reset }) {
  return (
    <main className="bg-[#F6F1E9] text-black min-h-[60vh] flex flex-col items-center justify-center px-6 py-24 text-center">
      <h1 className="text-3xl font-bold">Une erreur est survenue</h1>
      <p className="mt-4 max-w-xl text-gray-700">
        Quelque chose s&apos;est mal passé lors du chargement de cette page.
        Vous pouvez réessayer ou revenir à l&apos;accueil.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-3">
        <button
          type="button"
          onClick={() => reset()}
          className="btn rounded-full px-6 border-none bg-[#0d4b81] text-white hover:bg-[#093457] transition-colors"
        >
          Réessayer
        </button>
        <Link
          href="/"
          className="btn btn-outline rounded-full px-6 border-[#0d4b81] text-[#0d4b81] hover:bg-[#0d4b81] hover:border-[#0d4b81] hover:text-white transition-colors"
        >
          Revenir à l&apos;accueil
        </Link>
      </div>
    </main>
  );
}
