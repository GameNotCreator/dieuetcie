// components/Marketplace.js
import Footer from "./Footer";
import SimpleBanner from "./Banner";
import Link from "next/link";
import Marquage from "./Marquage";
import Matiere from "./Matiere";

const Marketplace = ({ categories }) => {
  return (
    <div className="text-black w-full">
      <SimpleBanner />

      <section
        className="hero h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(https://maisontrogler.com/wp-content/uploads/2023/05/3.-porte-cartes.jpg)`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-bold">Dieu & Cie</h1>
            <p className="mb-5">
              Entreprise spécialisée dans la maroquinerie publicitaire de
              prestige.
            </p>
            <a href="#market" className="btn btn-primary">
              Découvrir nos produits
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Qui sommes nous ?</h2>
          <p className="mb-6 text-gray-700">
            Depuis plus de quarante ans la société Dieu et Cie est spécialisée
            dans la grande et petite maroquinerie publicitaire. Notre maitrise
            des techniques de découpe et de soudure haute fréquence , nous
            permet de transformer une grande variété de feuilles PVC, de tissus
            enduits PVC ou polyuréthanes et ainsi de vous proposer une très
            large palette d'objets publicitaires allant du simple étui, en
            passant par un conférencier pour finir sur un classeur ou une
            pochette complexe. Notre qualité de fabricant vous offre les atouts
            suivants: Une souplesse qui nous permet de réaliser aussi bien de
            très petites séries que des très grandes séries. Un excellent
            rapport qualité/prix qui est le fruit d'un outil industriel complet
            et de 40 ans d’experience. Un fabricant et concepteur francais qui
            vous garantie qualité, réactivité et fiabilité des délais. Une
            écoute permanente de vos désirs afin de concrétiser vos idées en
            partenariat : création, adaptation ou exclusivité de modèles.
            N'hésitez pas à nous soumettre vos projets, nous vous conseillerons
            et vous proposerons des solutions adaptées à votre objectif
            marketing et publicitaire. Demandez sans plus tarder des
            échantillons.
          </p>
        </div>
      </section>
      <section id="market" className="py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Nos Catégories</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.isArray(categories) &&
            categories.map((cat) => (
              <Link href={`/category/${cat._id}`} key={cat._id}>
                <div className="w-54 card card-compact bg-base-100 shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 cursor-pointer">
                  <figure>
                    <img
                      src={cat.imageUrl}
                      alt={cat.name}
                      className="h-48 w-full object-cover rounded-t-lg"
                    />
                  </figure>
                  <div className="card-body text-center">
                    <h3 className="card-title justify-center text-xl">
                      {cat.name}
                    </h3>
                    {cat.description && (
                      <p className="text-sm text-gray-600">{cat.description}</p>
                    )}
                    <div className="card-actions justify-center mt-4">
                      <button className="btn btn-outline btn-primary">
                        Voir produits
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </section>
      <section className="py-12 px-6 bg-gray-100" id="marquage">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Nos marquages</h2>
          <p className="mb-6 text-gray-700">
            Le marquage permet de personnaliser toute votre communication par
            l’objet. Il existe différentes techniques selon la matière, la
            forme, ou encore la permanence du marquage. Nous avons développé
            notre propre atelier de marquage, ce qui nous permet d’être très
            réactif à vos demandes.
          </p>
          <Marquage />
        </div>
      </section>
      <section className="py-12 px-6 " id="matiere">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Nos matières</h2>
          <p className="mb-6 text-gray-700">
            Nous travaillons deux grandes familles de matière les tissus enduits
            pvc appelés également « similis » les coagulés polyuréthane appelés
            « PU ». Nous pouvons réaliser certaines fabrications spéciales en
            croute de cuir, cuir ou carton recyclé ainsi qu'en nylon (nous
            consulter) Toutes les références visibles dans la rubrique «
            produits » sont en simili. La quasi- totalité de celles-ci sont
            aussi réalisables en PU.
          </p>
          <Matiere />
        </div>
      </section>
      <section className="py-12 px-6 bg-gray-100" id="contact">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Contactez-nous pour un devis personnalisé
          </h2>
          <p className="mb-6 text-gray-700">
            Nous sommes à votre disposition pour répondre à vos besoins en
            maroquinerie publicitaire de luxe.
          </p>
          <Link href="mailto:dieuetcie@orange.fr" className="btn btn-primary">
            Demander un devis
          </Link>
          <br/>
          <br/>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2620.5360492933137!2d2.248616!3d48.943278!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e666798dc920e9%3A0x9a7cd18afd598f39!2s100%20Rue%20Paul%20Vaillant%20Couturier%2C%2095100%20Argenteuil%2C%20France!5e0!3m2!1sen!2sus!4v1750712577248!5m2!1sen!2sus"
            width="600"
            height="450"
            className="w-full h-96 rounded-lg shadow-lg items-center justify-center border-black border-1"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Marketplace;
