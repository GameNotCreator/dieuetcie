import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dieu & Cie",
  description: "MaroquineriDieu et Cie, fabricant français de maroquinerie publicitaire depuis plus de 40 ans. Spécialiste découpe et soudure haute fréquence PVC. Petites et grandes séries sur mesure.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <div className="min-h-screen">
          {children}
           <Footer />
        </div>
      </body>
    </html>
  );
}
