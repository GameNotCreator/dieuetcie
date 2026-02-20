import { getCategories } from "@/actions/categories";
import Hero from "@/components/Hero";
import MainProducts from "@/components/MainProducts";

export default async function Home() {
  const categories = await getCategories();

  return (
    <main style={{ padding: 20 }} className="bg-[#F6F1E9] text-black">
      <Hero categories={JSON.stringify(categories)} />
      <MainProducts />
    </main>
  );
}
