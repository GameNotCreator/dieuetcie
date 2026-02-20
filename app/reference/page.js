export default function Reference() {
    const references = [
        "Banque Populaire", "Société Générale", "Air France", "L'Oréal",
        "TotalEnergies", "Orange", "Renault", "Sanofi",
        "Carrefour", "AXA", "BNP Paribas", "Capgemini"
    ];

    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold mb-12 text-center text-gray-900">Nos références</h1>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {references.map((ref, index) => (
                    <div key={index} className="flex items-center justify-center h-32 bg-white rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow p-4">
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
