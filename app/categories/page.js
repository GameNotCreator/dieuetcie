import Link from "next/link";
import Image from "next/image";
import { getCategories } from "@/actions/categories";

// Régénère la page au plus toutes les 60 s, comme l'accueil.
export const revalidate = 60;

const pageDescription =
  "Toutes nos gammes de maroquinerie publicitaire fabriquées en France : découvrez les catégories de produits Dieu & Cie et demandez un devis sur mesure.";

export const metadata = {
  title: "Nos catégories de produits",
  description: pageDescription,
  openGraph: {
    title: "Nos catégories de produits | Dieu & Cie",
    description: pageDescription,
    url: "/categories",
    images: ["/og.png"],
  },
};

const BASE_URL = "https://www.dieu-et-cie.fr";

const CategoriesPage = async () => {
  const categories = await getCategories();

  // Fil d'Ariane + liste des catégories pour les moteurs de recherche
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: BASE_URL },
          { "@type": "ListItem", position: 2, name: "Nos catégories", item: `${BASE_URL}/categories` },
        ],
      },
      {
        "@type": "ItemList",
        name: "Catégories de maroquinerie publicitaire",
        numberOfItems: categories.length,
        itemListElement: categories.map((cat, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: cat.name,
          url: `${BASE_URL}/categories/${cat._id}`,
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#F6F1E9]">
      <script
        type="application/ld+json"
        // Échappe "<" : les noms de catégories viennent du back-office.
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <header className="py-12 px-6 text-center animate-fade-up">
        <h1 className="text-4xl font-bold tracking-tight heading-accent">Nos catégories</h1>
        <p className="mt-5 text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Découvrez l&apos;ensemble de nos gammes de maroquinerie publicitaire,
          fabriquées en France et personnalisables sur mesure.
        </p>
      </header>

      <main className="px-6 pb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto">
        {categories.length > 0 ? (
          categories.map((cat, index) => (
            <Link
              key={cat._id}
              href={`/categories/${cat._id}`}
              style={{ animationDelay: `${(index % 6) * 70}ms` }}
              className="card bg-white shadow-md ring-1 ring-black/5 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden animate-fade-up group"
            >
              <figure className="relative h-48 overflow-hidden">
                <Image
                  src={cat.imageUrl}
                  alt={cat.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  // La première rangée est visible au chargement : candidate
                  // LCP, à ne pas lazy-loader.
                  priority={index < 3}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </figure>
              <div className="card-body text-center">
                <h2 className="card-title justify-center tracking-tight">{cat.name}</h2>
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
              className="btn mt-4 btn-outline rounded-full px-6 border-[#0d4b81] text-[#0d4b81] hover:bg-[#0d4b81] hover:border-[#0d4b81] hover:text-white transition-colors"
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
