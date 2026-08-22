// Squelette de l'accueil, affiché pendant le chargement des données.
export default function Loading() {
  return (
    <main style={{ padding: 20 }} className="bg-[#F6F1E9]">
      <section className="text-center px-4 pt-2 pb-6">
        <div className="skeleton h-10 w-3/4 max-w-xl mx-auto"></div>
        <div className="skeleton h-4 w-2/3 max-w-lg mx-auto mt-4"></div>
        <div className="skeleton h-4 w-1/2 max-w-md mx-auto mt-2"></div>
      </section>

      <div className="flex flex-col lg:flex-row items-stretch gap-6 px-4">
        <div className="skeleton w-full lg:w-1/4 h-80 lg:h-[42rem] rounded-xl"></div>
        <div className="skeleton flex-1 h-64 lg:h-[42rem] rounded-xl"></div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="skeleton h-9 w-56 mx-auto mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="card bg-white shadow-md ring-1 ring-black/5 overflow-hidden">
              <div className="skeleton h-48 w-full rounded-none"></div>
              <div className="card-body">
                <div className="skeleton h-5 w-24"></div>
                <div className="skeleton h-6 w-3/4"></div>
                <div className="skeleton h-4 w-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
