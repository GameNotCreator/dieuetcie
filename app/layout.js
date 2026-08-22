import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  metadataBase: new URL("https://www.dieu-et-cie.fr"),
  title: {
    default: "Dieu & Cie — Maroquinerie publicitaire",
    template: "%s | Dieu & Cie",
  },
  description:
    "Dieu et Cie, fabricant français de maroquinerie publicitaire depuis 1964. Spécialiste découpe et soudure haute fréquence PVC. Petites et grandes séries sur mesure.",
  alternates: {
    canonical: "./",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Dieu & Cie",
    title: "Dieu & Cie — Maroquinerie publicitaire",
    description:
      "Fabricant français de maroquinerie publicitaire depuis 1964 : conférenciers, étuis, classeurs, pochettes et cadeaux d'affaires personnalisés, en petites et grandes séries.",
    url: "./",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Dieu & Cie — Fabricant français de maroquinerie publicitaire depuis 1964",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

// Données structurées schema.org : fiche entreprise (données du RCS + géocodage
// officiel de l'adresse). Aide Google à afficher la fiche locale et le logo.
const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.dieu-et-cie.fr/#entreprise",
  name: "Dieu & Cie",
  legalName: "Établissements Dieu et Compagnie",
  description:
    "Fabricant français de maroquinerie publicitaire depuis 1964 : découpe et soudure haute fréquence PVC, petites et grandes séries personnalisées.",
  url: "https://www.dieu-et-cie.fr",
  logo: "https://www.dieu-et-cie.fr/logo.png",
  image: "https://www.dieu-et-cie.fr/og.png",
  telephone: "+33695222152",
  email: "dieuetcie@orange.fr",
  vatID: "FR15648203859",
  foundingDate: "1964",
  priceRange: "Sur devis",
  address: {
    "@type": "PostalAddress",
    streetAddress: "100 rue Paul Vaillant Couturier",
    postalCode: "93130",
    addressLocality: "Noisy-le-Sec",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 48.892238,
    longitude: 2.443378,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Navbar />
        <div className="min-h-screen">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
