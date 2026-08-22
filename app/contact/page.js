const description =
    "Demandez un devis personnalisé pour votre maroquinerie publicitaire : Dieu & Cie à Noisy-le-Sec — 06 95 22 21 52 — dieuetcie@orange.fr.";

export const metadata = {
    title: "Contactez-nous",
    description,
    openGraph: {
        title: "Contactez-nous | Dieu & Cie",
        description,
        url: "/contact",
        images: ["/og.png"],
    },
};

export default function Contact() {
    return (
        <div className="container bg-[#F6F1E9] mx-auto px-4 py-16 text-center">
            <h1 className="text-4xl font-bold mb-4 text-gray-900">Contactez-nous pour un devis personnalisé</h1>
            <p className="text-xl text-gray-600 mb-12">
                Nous sommes à votre disposition pour répondre à vos besoins en maroquinerie publicitaire de luxe.
            </p>

            <div className="mb-16">
                <a href="mailto:dieuetcie@orange.fr" className="btn btn-neutral btn-lg text-white px-8 rounded-none border-2 border-black hover:bg-white hover:text-black transition-colors">
                    DEMANDER UN DEVIS
                </a>
            </div>

            <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl border border-gray-200">
                <iframe
                    src="https://maps.google.com/maps?q=100%20rue%20Paul%20Vaillant%20Couturier%2C%2093130%20Noisy-le-Sec%2C%20France&z=16&output=embed&hl=fr"
                    title="Plan d'accès — Dieu & Cie, 100 rue Paul Vaillant Couturier, 93130 Noisy-le-Sec"
                    className="w-full h-96 rounded-lg shadow-lg border-black border-1"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
}
