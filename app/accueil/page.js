// app/page.js
import Marketplace from "@/components/Marketplace";
import { getCategories } from "@/actions/ProductManagement";

export const metadata = {
  title: "Accueil – Votre Boutique",
};

const Home = async () => {
  // Récupère un tableau d'objets { _id, name, description, imageUrl, ... }
  const categories = await getCategories();

  return (
    <main className="bg-white min-h-screen">
      <Marketplace categories={categories} />
    </main>
  );
};

export default Home;
