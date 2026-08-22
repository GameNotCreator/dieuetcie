import MarquageMatiereShowcase from "@/components/MarquageMatiereShowcase";

const description =
  "Incrustation couleur, dorure à chaud, thermovirant… nos techniques de marquage et nos matières pour personnaliser votre maroquinerie publicitaire.";

export const metadata = {
  title: "Techniques de marquage",
  description,
  openGraph: {
    title: "Techniques de marquage | Dieu & Cie",
    description,
    url: "/marquage",
    images: ["/og.png"],
  },
};

export default function Marquage() {
  return (
    <main>
      <MarquageMatiereShowcase />
    </main>
  );
}
