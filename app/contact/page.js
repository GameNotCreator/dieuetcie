export default function Contact() {
    return (
        <div className="container bg-[#F6F1E9] mx-auto px-4 py-16 text-center">
            <h1 className="text-4xl font-bold mb-4 text-gray-900">Contactez-nous pour un devis personnalisé</h1>
            <p className="text-xl text-gray-600 mb-12">
                Nous sommes à votre disposition pour répondre à vos besoins en maroquinerie publicitaire de luxe.
            </p>

            <div className="mb-16">
                <button className="btn btn-neutral btn-lg text-white px-8 rounded-none border-2 border-black hover:bg-white hover:text-black transition-colors">
                    DEMANDER UN DEVIS
                </button>
            </div>

            <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl border border-gray-200">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2620.5360492933137!2d2.248616!3d48.943278!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e666798dc920e9%3A0x9a7cd18afd598f39!2s100%20Rue%20Paul%20Vaillant%20Couturier%2C%2095100%20Argenteuil%2C%20France!5e0!3m2!1sen!2sus!4v1750712577248!5m2!1sen!2sus"
                    width="600"
                    height="450"
                    className="w-full h-96 rounded-lg shadow-lg items-center justify-center border-black border-1"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
}
