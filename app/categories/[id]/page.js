import { notFound } from "next/navigation";
import Link from "next/link";
import {
    getCategoryById,
    getProductsByCategory,
} from "@/actions/categories";
import ProductCard from "@/components/ProductCard";

export async function generateMetadata(props) {
    const params = await props.params;
    const category = await getCategoryById(params.id);
    return { title: category ? category.name : "Catégorie" };
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

    return (
        <div className="min-h-screen bg-[#F6F1E9]">
            <header className="py-12 px-6 text-center">
                <h1 className="text-4xl font-bold">{category.name}</h1>
                {category.description && (
                    <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
                        {category.description}
                    </p>
                )}
                <br />
                <Link href="/" className="btn border-[#0d4b81] text-[#0d4b81] hover:bg-[#0d4b81] hover:text-white">
                    REVENIR À L&apos;ACCUEIL
                </Link>
            </header>

            <main className="px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.length > 0 ? (
                    products.map((prod) => <ProductCard key={prod._id} product={prod} />)
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
