// Squelette de la liste des catégories, affiché pendant le chargement.
export default function Loading() {
  return (
    <div className="min-h-screen bg-[#F6F1E9]">
      <header className="py-12 px-6 text-center">
        <div className="skeleton h-10 w-64 mx-auto"></div>
        <div className="skeleton h-4 w-2/3 max-w-xl mx-auto mt-5"></div>
      </header>

      <main className="px-6 pb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="card bg-white shadow-md ring-1 ring-black/5 overflow-hidden">
            <div className="skeleton h-48 w-full rounded-none"></div>
            <div className="card-body items-center">
              <div className="skeleton h-6 w-40"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-2/3"></div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
