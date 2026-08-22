import { notFound } from "next/navigation";
import Link from "next/link";
import {
    getCategoryById,
    getProductsByCategory,
} from "@/actions/categories";
import ProductCard from "@/components/ProductCard";

const BASE_URL = "https://www.dieu-et-cie.fr";

export async function generateMetadata(props) {
    const params = await props.params;
    const category = await getCategoryById(params.id);
    if (!category) {
        return { title: "Catégorie" };
    }
    const description = category.description
        ? category.description
        : `${category.name} : maroquinerie publicitaire fabriquée en France par Dieu & Cie, personnalisée à votre image. Demandez un devis.`;
    return {
        title: category.name,
        description,
        alternates: { canonical: `/categories/${params.id}` },
        openGraph: {
            type: "website",
            locale: "fr_FR",
            siteName: "Dieu & Cie",
            title: `${category.name} | Dieu & Cie`,
            description,
            url: `/categories/${params.id}`,
            images: category.imageUrl ? [{ url: category.imageUrl, alt: category.name }] : undefined,
        },
    };
}

const CategoryPage = async (props) => {
    const params = await props.params;
    const { id } = params;

    // Charge catégorie + produits en SSR
    const category = await getCategoryById(id);
    if (!category) {
        notFound();
    }
    const products = await getProductsByCategory(id);

    // Fil d'Ariane + liste des produits pour les moteurs de recherche
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Accueil", item: BASE_URL },
                    { "@type": "ListItem", position: 2, name: "Nos catégories", item: `${BASE_URL}/categories` },
                    { "@type": "ListItem", position: 3, name: category.name, item: `${BASE_URL}/categories/${id}` },
                ],
            },
            // ListItem simples (pas de @type Product : sans offers/review, Google
            // le compterait en erreur dans Search Console, sans aucun gain).
            {
                "@type": "ItemList",
                name: category.name,
                numberOfItems: products.length,
                itemListElement: products.map((prod, index) => ({
                    "@type": "ListItem",
                    position: index + 1,
                    name: prod.name,
                })),
            },
        ],
    };

    return (
        <div className="min-h-screen bg-[#F6F1E9]">
            <script
                type="application/ld+json"
                // Échappe "<" : les noms/descriptions viennent du back-office,
                // un "</script>" dans le texte casserait sinon toute la page.
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
                }}
            />
            <header className="py-12 px-6 text-center animate-fade-up">
                <h1 className="text-4xl font-bold tracking-tight heading-accent">{category.name}</h1>
                {category.description && (
                    <p className="mt-5 text-gray-700 max-w-2xl mx-auto leading-relaxed">
                        {category.description}
                    </p>
                )}
                <div className="mt-8">
                    <Link href="/" className="btn btn-outline rounded-full px-6 border-[#0d4b81] text-[#0d4b81] hover:bg-[#0d4b81] hover:border-[#0d4b81] hover:text-white transition-colors">
                        ‹ Revenir à l&apos;accueil
                    </Link>
                </div>
            </header>

            <main className="px-6 pb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto">
                {products.length > 0 ? (
                    products.map((prod, index) => (
                        <ProductCard key={prod._id} product={prod} priority={index < 3} />
                    ))
                ) : (
                    <p className="text-center col-span-full text-gray-500">
                        Aucun produit disponible pour cette catégorie.
                    </p>
                )}
            </main>
        </div>
    );
};

export default CategoryPage;
