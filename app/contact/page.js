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
        <div className="container bg-[#F6F1E9] mx-auto px-4 py-16 text-center animate-fade-up">
            <h1 className="text-4xl font-bold mb-4 tracking-tight heading-accent">Contactez-nous pour un devis personnalisé</h1>
            <p className="text-xl text-gray-600 mt-5 mb-10 max-w-2xl mx-auto leading-relaxed">
                Nous sommes à votre disposition pour répondre à vos besoins en maroquinerie publicitaire.
            </p>

            <div className="mb-16">
                <a href="mailto:dieuetcie@orange.fr" className="btn btn-lg rounded-full px-10 border-none bg-[#0d4b81] text-white shadow-lg hover:bg-[#093457] hover:shadow-xl transition-all">
                    Demander un devis
                </a>
                <p className="mt-4 text-gray-600">
                    ou par téléphone : <a href="tel:+33695222152" className="font-semibold text-[#0d4b81] hover:underline">06 95 22 21 52</a>
                </p>
            </div>

            <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl border border-gray-200">
                <iframe
                    src="https://maps.google.com/maps?q=100%20rue%20Paul%20Vaillant%20Couturier%2C%2093130%20Noisy-le-Sec%2C%20France&z=16&output=embed&hl=fr"
                    title="Plan d'accès — Dieu & Cie, 100 rue Paul Vaillant Couturier, 93130 Noisy-le-Sec"
                    className="w-full h-96"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
}
