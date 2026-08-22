import { getCategories } from "@/actions/categories";

const BASE_URL = "https://www.dieu-et-cie.fr";

// Sans revalidate, un sitemap est figé au build : les catégories créées via le
// back-office n'y entreraient jamais avant le prochain déploiement.
export const revalidate = 3600;

export default async function sitemap() {
  const staticRoutes = [
    "",
    "/about",
    "/reference",
    "/marquage",
    "/contact",
    "/categories",
    "/mentions-legales",
  ].map(
    (path) => ({
      url: `${BASE_URL}${path}`,
      lastModified: new Date(),
    })
  );

  const categories = await getCategories();
  const categoryRoutes = categories.map((c) => ({
    url: `${BASE_URL}/categories/${c._id}`,
    lastModified: c.updatedAt ? new Date(c.updatedAt) : new Date(),
  }));

  return [...staticRoutes, ...categoryRoutes];
}
