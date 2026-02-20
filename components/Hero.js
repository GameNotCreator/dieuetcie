import Link from "next/link";
import Showup from "./Showup";

export default function Hero({ categories }) {
  categories = JSON.parse(categories);
  return (
    <div className="hero w-full overflow-hidden">
      <div className="hero-content flex-col lg:flex-row items-stretch max-w-full w-full px-4 gap-6">

        <ul className="bg-[#0d4b81] text-white p-4ck rounded-lg flex flex-col justify-center w-full lg:w-1/4  shadow-xl">
          <h1 className="text-2xl font-bold text-center mb-4">Catégories</h1>
          {categories.map((c) => (
            <Link href={`/categories/${c._id}`} key={c._id} className="hover:bg-blue-900 p-2 rounded transition-colors block">
              <b className="text-sm w-full block">{c.name}</b>
            </Link>
          ))}
        </ul>
        <div className="flex-1 relative w-full flex flex-col">
          <div className="w-full lg:absolute lg:inset-0 h-64 lg:h-full">
            <Showup />
          </div>
        </div>
      </div>
    </div>
  );
}
