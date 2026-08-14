import { getCategories } from "@/actions/categories";
import Hero from "@/components/Hero";
import MainProducts from "@/components/MainProducts";

// Régénère la page au plus toutes les 60 s : les produits et catégories
// ajoutés via le back-office apparaissent sans redéploiement.
export const revalidate = 60;

export default async function Home() {
  const categories = await getCategories();

  return (
    <main style={{ padding: 20 }} className="bg-[#F6F1E9] text-black">
      <Hero categories={JSON.stringify(categories)} />
      <MainProducts />
    </main>
  );
}
