/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  // Redirige les URL devinées ou héritées de l'ancien site vers les vraies
  // pages : un visiteur ne doit jamais tomber sur un 404 pour ces chemins.
  async redirects() {
    return [
      // Anciens domaines → domaine canonique www.dieu-et-cie.fr
      // (dieuetcie.vercel.app sert sinon tout le site en 200 : contenu
      // dupliqué indexable qui ne transmet aucun signal SEO au vrai domaine).
      {
        source: "/:path*",
        has: [{ type: "host", value: "dieuetcie.vercel.app" }],
        destination: "https://www.dieu-et-cie.fr/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "dieu-et-cie.fr" }],
        destination: "https://www.dieu-et-cie.fr/:path*",
        permanent: true,
      },
      // Produits / catalogue → page des catégories
      { source: "/products", destination: "/categories", permanent: true },
      { source: "/products/:path*", destination: "/categories", permanent: true },
      { source: "/produits", destination: "/categories", permanent: true },
      { source: "/produits/:path*", destination: "/categories", permanent: true },
      { source: "/product/:path*", destination: "/categories", permanent: true },
      { source: "/produit/:path*", destination: "/categories", permanent: true },
      { source: "/shop", destination: "/categories", permanent: true },
      { source: "/boutique", destination: "/categories", permanent: true },
      { source: "/catalogue", destination: "/categories", permanent: true },
      { source: "/nos-produits", destination: "/categories", permanent: true },
      { source: "/category/:path*", destination: "/categories", permanent: true },
      { source: "/categorie/:path*", destination: "/categories", permanent: true },
      // Pages institutionnelles
      { source: "/a-propos", destination: "/about", permanent: true },
      { source: "/apropos", destination: "/about", permanent: true },
      { source: "/qui-sommes-nous", destination: "/about", permanent: true },
      { source: "/references", destination: "/reference", permanent: true },
      { source: "/nos-references", destination: "/reference", permanent: true },
      { source: "/marquages", destination: "/marquage", permanent: true },
      { source: "/techniques-de-marquage", destination: "/marquage", permanent: true },
      { source: "/contactez-nous", destination: "/contact", permanent: true },
      { source: "/nous-contacter", destination: "/contact", permanent: true },
      { source: "/devis", destination: "/contact", permanent: true },
      // Pages légales
      { source: "/mentions", destination: "/mentions-legales", permanent: true },
      { source: "/legal", destination: "/mentions-legales", permanent: true },
      // Anciennes URL d'index
      { source: "/home", destination: "/", permanent: true },
      { source: "/accueil", destination: "/", permanent: true },
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/index.php", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
