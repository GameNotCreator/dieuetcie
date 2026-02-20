import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-[#F6F1E9] text-black  py-10">
            <div className="container mx-auto px-4 flex flex-col items-center text-center">
                <h2 className="text-3xl font-bold mb-6">Dieu & Cie</h2>

                <div className="mb-8">
                    <p className="text-lg mb-2">100, rue Paul Vaillant Couturier, 93130 Noisy le Sec</p>
                    <p className="text-lg">Telephone: 01.48.44.87.38 | Portable: +336.16.34.39.21</p>
                </div>

                <nav className="mb-8 flex flex-col items-center   justify-center text-center  ">
                    <ul className=" gap-6 md:gap-8">
                        <li><Link href="/" className="hover:text-gray-300 transition-colors">Accueil</Link></li>
                        <li><Link href="/products" className="hover:text-gray-300 transition-colors">Nos produits</Link></li>
                        <li><Link href="/marquage" className="hover:text-gray-300 transition-colors">Nos marquages</Link></li>
                        <li><Link href="/matieres" className="hover:text-gray-300 transition-colors">Nos matieres</Link></li>
                        <li><Link href="/contact" className="hover:text-gray-300 transition-colors">Contact</Link></li>
                    </ul>
                </nav>

                {/* <div className="mb-8">
                    <div className="border-2 border-white rounded-lg p-2 inline-block">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram">
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                        </svg>
                    </div>
                </div> */}

                <div className="text-sm text-center">
                    <p>© 2026 Dieu & Cie. All rights reserved.</p>
                    <p>Fait par TunisianPass</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
