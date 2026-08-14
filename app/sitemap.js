import { getCategories } from "@/actions/categories";

const BASE_URL = "https://dieuetcie.vercel.app";

export default async function sitemap() {
  const staticRoutes = ["", "/about", "/reference", "/marquage", "/contact"].map(
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
