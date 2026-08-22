const description =
    "Banques, industries, grands groupes : découvrez les entreprises qui font confiance à Dieu & Cie pour leur maroquinerie publicitaire fabriquée en France.";

export const metadata = {
    title: "Nos références",
    description,
    openGraph: {
        title: "Nos références | Dieu & Cie",
        description,
        url: "/reference",
        images: ["/og.png"],
    },
};

export default function Reference() {
    const references = [
        "Banque Populaire", "Société Générale", "Air France", "L'Oréal",
        "TotalEnergies", "Orange", "Renault", "Sanofi",
        "Carrefour", "AXA", "BNP Paribas", "Capgemini"
    ];

    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold mb-12 text-center tracking-tight heading-accent animate-fade-up">Nos références</h1>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {references.map((ref, index) => (
                    <div key={index} style={{ animationDelay: `${(index % 8) * 60}ms` }} className="flex items-center justify-center h-32 bg-white rounded-xl shadow-md ring-1 ring-black/5 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 p-4 animate-fade-up">
                        <span className="text-xl font-semibold text-gray-700 text-center">{ref}</span>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <p className="text-gray-500">Et bien d'autres clients qui nous font confiance...</p>
            </div>
        </div>
    );
}
