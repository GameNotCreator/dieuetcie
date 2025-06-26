// app/category/[id]/page.js
import {
  getCategoryById,
  getProductsByCategory,
} from "@/actions/ProductManagement";
import ProductCard from "@/components/ProductCard";

export const metadata = {
  title: "Catégorie",
};

const CategoryPage = async ({ params }) => {
  const { id } = params;

  // Charge catégorie + produits en SSR
  const category = await getCategoryById(id);
  const products = await getProductsByCategory(id);

  return (
    <div className="min-h-screen bg-white">
      <header className="py-12 px-6 bg-gray-100 text-center">
        <h1 className="text-4xl font-bold">{category.name}</h1>
        {category.description && (
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            {category.description}
          </p>
        )}
        <br/>
        <a href="/" className="btn btn-primary">
          REVENIR A L'ACCUEIL
        </a>
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
