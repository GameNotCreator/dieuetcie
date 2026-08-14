import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  metadataBase: new URL("https://dieuetcie.vercel.app"),
  title: {
    default: "Dieu & Cie — Maroquinerie publicitaire",
    template: "%s | Dieu & Cie",
  },
  description:
    "Dieu et Cie, fabricant français de maroquinerie publicitaire depuis plus de 40 ans. Spécialiste découpe et soudure haute fréquence PVC. Petites et grandes séries sur mesure.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="antialiased">
        <Navbar />
        <div className="min-h-screen">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
