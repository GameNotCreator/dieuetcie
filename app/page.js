import { getCategories } from "@/actions/categories";
import Hero from "@/components/Hero";
import MainProducts from "@/components/MainProducts";

// Régénère la page au plus toutes les 60 s : les produits et catégories
// ajoutés via le back-office apparaissent sans redéploiement.
export const revalidate = 60;

export const metadata = {
  // Titre complet : le title.template du layout ne s'applique pas à la page
  // du même segment, il faut inclure la marque ici.
  title: "Fabricant français de maroquinerie publicitaire | Dieu & Cie",
  description:
    "Conférenciers, étuis, classeurs et pochettes personnalisés : Dieu & Cie fabrique en France votre maroquinerie publicitaire, découpe et soudure haute fréquence PVC.",
};

export default async function Home() {
  const categories = await getCategories();

  return (
    <main style={{ padding: 20 }} className="bg-[#F6F1E9] text-black">
      <section className="text-center px-4 pt-2 pb-6 animate-fade-up">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#0d4b81]">
          Depuis 1964 — fabrication française
        </p>
        <h1 className="mt-2 text-3xl lg:text-4xl font-bold tracking-tight">
          Fabricant français de maroquinerie publicitaire
        </h1>
        <p className="mt-3 text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Dieu &amp; Cie conçoit et fabrique à Noisy-le-Sec vos objets
          publicitaires en maroquinerie : conférenciers, étuis, classeurs,
          pochettes… en petites et grandes séries, personnalisés à votre image.
        </p>
      </section>
      <Hero categories={JSON.stringify(categories)} />
      <MainProducts />
    </main>
  );
}
