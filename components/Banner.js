const navigation = {
  main: [{name: "Accueil", href: "#"}, {name: "Nos produits",  href: "#market"}, {name: "Nos marquages", href: "#marquage"}, {name: "Nos matieres", href: "#matiere"},{ name: "Contact", href: "#contact" }],
};

const SimpleBanner = () => {
  return (
    <>
      <div
        // replace `absolute` with `fixed` if you want the banner to be fixed on the page Also Animation will not work if you use `absolute`
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ease-in-out`}
      >
        <div className="flex w-full items-center justify-center gap-x-6 bg-black px-6 py-3 sm:px-3.5">
          <div className="flex items-center text-sm font-medium leading-6 text-white">
            <nav className="flex flex-wrap justify-center">
              {navigation.main.map((item) => (
                <div key={item.name} className="px-5 py-2">
                  <a href={item.href} className="text-sm text-white">
                    {item.name}
                  </a>
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default SimpleBanner;
