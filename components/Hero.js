import Link from "next/link";
import Showup from "./Showup";

export default function Hero({ categories }) {
  categories = JSON.parse(categories);
  return (
    <div className="hero w-full overflow-hidden">
      <div className="hero-content flex-col lg:flex-row items-stretch max-w-full w-full px-4 gap-6">

        <nav className="bg-gradient-to-b from-[#0d4b81] to-[#093457] text-white p-4 rounded-xl flex flex-col justify-center w-full lg:w-1/4 shadow-xl">
          <h2 className="text-2xl font-bold text-center mb-4">Catégories</h2>
          {categories.map((c) => (
            <Link
              href={`/categories/${c._id}`}
              key={c._id}
              className="group flex items-center justify-between gap-2 p-2 rounded-lg hover:bg-white/10 transition-all duration-200 hover:translate-x-1"
            >
              <b className="text-sm block">{c.name}</b>
              <span
                aria-hidden="true"
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white/80"
              >
                ›
              </span>
            </Link>
          ))}
        </nav>
        <div className="flex-1 relative w-full flex flex-col">
          <div className="w-full lg:absolute lg:inset-0 h-64 lg:h-full">
            <Showup />
          </div>
        </div>
      </div>
    </div>
  );
}
