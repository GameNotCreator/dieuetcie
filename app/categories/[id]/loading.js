// Squelette d'une page catégorie (rendue à la demande : le squelette
// s'affiche pendant la requête base de données).
export default function Loading() {
  return (
    <div className="min-h-screen bg-[#F6F1E9]">
      <header className="py-12 px-6 text-center">
        <div className="skeleton h-10 w-72 mx-auto"></div>
        <div className="skeleton h-4 w-2/3 max-w-xl mx-auto mt-5"></div>
        <div className="skeleton h-12 w-56 mx-auto mt-8 rounded-full"></div>
      </header>

      <main className="px-6 pb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="card card-sm bg-white shadow-md ring-1 ring-black/5 overflow-hidden">
            <div className="skeleton h-48 w-full rounded-none"></div>
            <div className="card-body items-center">
              <div className="skeleton h-6 w-40"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-10 w-44 mt-4 rounded-full"></div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
