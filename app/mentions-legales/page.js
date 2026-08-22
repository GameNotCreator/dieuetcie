import Link from "next/link";

const description =
  "Mentions légales du site Dieu & Cie : éditeur, hébergeur, propriété intellectuelle et données personnelles.";

export const metadata = {
  title: "Mentions légales",
  description,
  openGraph: {
    title: "Mentions légales | Dieu & Cie",
    description,
    url: "/mentions-legales",
    images: ["/og.png"],
  },
};

// Informations issues du registre officiel (Sirene / RCS Bobigny).
const MentionsLegalesPage = () => {
  return (
    <div className="min-h-screen bg-[#F6F1E9]">
      <header className="py-12 px-6 text-center">
        <h1 className="text-4xl font-bold">Mentions légales</h1>
      </header>

      <main className="px-6 pb-16 max-w-3xl mx-auto flex flex-col gap-10 text-gray-800">
        <section>
          <h2 className="text-2xl font-bold mb-4 text-[#0d4b81]">
            Éditeur du site
          </h2>
          <p>
            <strong>Établissements Dieu et Compagnie</strong> (Dieu &amp; Cie)
            <br />
            Société par actions simplifiée au capital de 16 769,39 €
            <br />
            RCS Bobigny 648 203 859 — SIRET 648 203 859 00067
            <br />
            TVA intracommunautaire : FR 15 648 203 859
            <br />
            Siège social : 100 rue Paul Vaillant Couturier, 93130 Noisy-le-Sec,
            France
            <br />
            Téléphone :{" "}
            <a
              href="tel:+33695222152"
              className="text-[#0d4b81] hover:underline"
            >
              06 95 22 21 52
            </a>
            <br />
            Email :{" "}
            <a
              href="mailto:dieuetcie@orange.fr"
              className="text-[#0d4b81] hover:underline"
            >
              dieuetcie@orange.fr
            </a>
          </p>
          <p className="mt-4">
            Directeur de la publication : Thierry Collet, Directeur Général.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-[#0d4b81]">
            Hébergement
          </h2>
          <p>
            Ce site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut,
            CA 91789, États-Unis —{" "}
            <a
              href="https://vercel.com"
              className="text-[#0d4b81] hover:underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              vercel.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-[#0d4b81]">
            Propriété intellectuelle
          </h2>
          <p>
            L&apos;ensemble des contenus de ce site (textes, images, logos,
            photographies de produits) est la propriété d&apos;Établissements
            Dieu et Compagnie ou de ses partenaires. Toute reproduction ou
            représentation, totale ou partielle, sans autorisation préalable
            est interdite.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-[#0d4b81]">
            Données personnelles
          </h2>
          <p>
            Ce site ne comporte ni création de compte, ni formulaire de
            collecte de données, et n&apos;utilise pas de cookies de suivi ni
            d&apos;outil de mesure d&apos;audience. Les échanges se font
            directement par téléphone ou par email. Conformément au Règlement
            général sur la protection des données (RGPD) et à la loi
            Informatique et Libertés, vous pouvez exercer vos droits
            d&apos;accès, de rectification et de suppression sur les données
            que vous nous auriez transmises en écrivant à{" "}
            <a
              href="mailto:dieuetcie@orange.fr"
              className="text-[#0d4b81] hover:underline"
            >
              dieuetcie@orange.fr
            </a>
            .
          </p>
        </section>

        <div className="text-center">
          <Link
            href="/"
            className="btn btn-outline border-[#0d4b81] text-[#0d4b81] hover:bg-[#0d4b81] hover:border-[#0d4b81] hover:text-white"
          >
            Revenir à l&apos;accueil
          </Link>
        </div>
      </main>
    </div>
  );
};

export default MentionsLegalesPage;
