// app/product/[id]/page.js
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getProductById, getRelatedProducts } from "@/actions/products";
import ProductCard from "@/components/ProductCard";

// Optionnel : title dynamique par produit (mieux que metadata fixe)
export async function generateMetadata({ params }) {
  try {
    const product = await getProductById(params.id);
    return { title: product?.name ? `${product.name} | Produit` : "Produit" };
  } catch {
    return { title: "Produit" };
  }
}

const ProductPage = async ({ params }) => {
  const { id } = params;

  let product;
  try {
    product = await getProductById(id);
  } catch (e) {
    return notFound();
  }

  const category = product?.categoryId; // populated => { _id, name, description }
  const relatedProducts = category?._id
    ? await getRelatedProducts(product._id, category._id, 6)
    : [];

  return (
    <div className="min-h-screen bg-[#F6F1E9]">
      <header className="py-10 px-6 text-center">
        <h1 className="text-4xl font-bold">{product.name}</h1>

        {category?.name && (
          <p className="mt-2 text-gray-700">
            Catégorie : <span className="font-semibold">{category.name}</span>
          </p>
        )}

        <div className="mt-6 flex items-center justify-center gap-3 flex-wrap">
          <Link
            href="/"
            className="btn bg-[#0d4b81] text-white hover:bg-[#0b3f6d] border-none"
          >
            REVENIR À L&apos;ACCUEIL
          </Link>

          {category?._id && (
            <Link
              href={`/category/${category._id}`}
              className="btn btn-outline border-[#0d4b81] text-[#0d4b81] hover:bg-[#0d4b81] hover:text-white"
            >
              VOIR LA CATÉGORIE
            </Link>
          )}
        </div>
      </header>

      <main className="px-6 pb-16">
        {/* Bloc produit */}
        <section className="max-w-5xl mx-auto bg-white rounded-2xl shadow p-6 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Image */}
            <div className="relative w-full aspect-square bg-gray-50 rounded-xl overflow-hidden">
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Infos */}
            <div>
              <h2 className="text-2xl font-semibold">Détails</h2>

              {product.description ? (
                <p className="mt-4 text-gray-700 leading-relaxed">
                  {product.description}
                </p>
              ) : (
                <p className="mt-4 text-gray-500">
                  Aucune description pour ce produit.
                </p>
              )}

              {/* Exemple CTA (à adapter : WhatsApp, panier, etc.) */}
              <div className="mt-8 flex gap-3 flex-wrap">
                <button className="btn bg-black text-white border-none hover:bg-gray-900">
                  AJOUTER AU PANIER
                </button>

                <button className="btn btn-outline">
                  PARTAGER
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Produits liés */}
        {relatedProducts.length > 0 && (
          <section className="max-w-6xl mx-auto mt-14">
            <h3 className="text-2xl font-bold mb-6">
              Produits similaires
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((p) => (
                <ProductCard key={p._id} product={p} />
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default ProductPage;
