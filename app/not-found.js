import Link from "next/link";

export const metadata = {
  title: "Page introuvable",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="bg-[#F6F1E9] text-black min-h-[60vh] flex flex-col items-center justify-center px-6 py-24 text-center">
      <p className="text-7xl font-bold text-[#0d4b81]">404</p>
      <h1 className="mt-4 text-3xl font-bold">Cette page n&apos;existe pas</h1>
      <p className="mt-4 max-w-xl text-gray-700">
        La page que vous cherchez a peut-être été déplacée ou n&apos;existe
        plus. Retrouvez nos produits ou contactez-nous directement.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-3">
        <Link
          href="/"
          className="btn bg-[#0d4b81] text-white border-[#0d4b81] hover:bg-blue-900"
        >
          Revenir à l&apos;accueil
        </Link>
        <Link
          href="/categories"
          className="btn btn-outline border-[#0d4b81] text-[#0d4b81] hover:bg-[#0d4b81] hover:border-[#0d4b81] hover:text-white"
        >
          Voir nos catégories
        </Link>
        <Link
          href="/contact"
          className="btn btn-outline border-[#0d4b81] text-[#0d4b81] hover:bg-[#0d4b81] hover:border-[#0d4b81] hover:text-white"
        >
          Contactez-nous
        </Link>
      </div>
    </main>
  );
}
