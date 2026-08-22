import Link from "next/link";
import { getCategories } from "@/actions/categories";

// Régénère la page au plus toutes les 60 s, comme l'accueil.
export const revalidate = 60;

export const metadata = {
  title: "Nos catégories de produits",
  description:
    "Toutes nos gammes de maroquinerie publicitaire fabriquées en France : découvrez les catégories de produits Dieu & Cie et demandez un devis sur mesure.",
};

const CategoriesPage = async () => {
  const categories = await getCategories();

  return (
    <div className="min-h-screen bg-[#F6F1E9]">
      <header className="py-12 px-6 text-center">
        <h1 className="text-4xl font-bold">Nos catégories</h1>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
          Découvrez l&apos;ensemble de nos gammes de maroquinerie publicitaire,
          fabriquées en France et personnalisables sur mesure.
        </p>
      </header>

      <main className="px-6 pb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto">
        {categories.length > 0 ? (
          categories.map((cat) => (
            <Link
              key={cat._id}
              href={`/categories/${cat._id}`}
              className="card bg-white shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1"
            >
              <figure className="h-48 overflow-hidden">
                <img
                  src={cat.imageUrl}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </figure>
              <div className="card-body text-center">
                <h2 className="card-title justify-center">{cat.name}</h2>
                {cat.description && (
                  <p className="text-sm text-gray-600 line-clamp-3">
                    {cat.description}
                  </p>
                )}
              </div>
            </Link>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">
            {/* Couvre aussi le cas d'une base indisponible (getCategories
                retourne [] sur erreur) : formulation neutre, pas de promesse. */}
            <p>Nos catégories ne peuvent pas être affichées pour le moment.</p>
            <Link
              href="/contact"
              className="btn mt-4 btn-outline border-[#0d4b81] text-[#0d4b81] hover:bg-[#0d4b81] hover:border-[#0d4b81] hover:text-white"
            >
              Contactez-nous pour découvrir nos produits
            </Link>
          </div>
        )}
      </main>
    </div>
  );
};

export default CategoriesPage;
