import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-[#F6F1E9] text-black py-10">
            <div className="container mx-auto px-4 flex flex-col items-center text-center">
                <h2 className="text-3xl font-bold mb-6">Dieu & Cie</h2>

                <div className="mb-8">
                    <p className="text-lg mb-2">100 rue Paul Vaillant Couturier
                        <br />93130 Noisy-le-Sec</p>
                    <p className="text-lg">Téléphone : <a href="tel:+33695222152" className="text-inherit no-underline hover:underline">06 95 22 21 52</a></p>
                    <p className="text-lg">Email : <a href="mailto:dieuetcie@orange.fr" className="text-inherit no-underline hover:underline">dieuetcie@orange.fr</a></p>
                </div>

                <nav className="mb-8 flex flex-col items-center justify-center text-center">
                    <ul className="flex flex-col md:flex-row gap-2 md:gap-8">
                        <li><Link href="/" className="hover:text-[#0d4b81] transition-colors">Accueil</Link></li>
                        <li><Link href="/categories" className="hover:text-[#0d4b81] transition-colors">Nos produits</Link></li>
                        <li><Link href="/about" className="hover:text-[#0d4b81] transition-colors">Qui sommes-nous ?</Link></li>
                        <li><Link href="/reference" className="hover:text-[#0d4b81] transition-colors">Nos références</Link></li>
                        <li><Link href="/marquage" className="hover:text-[#0d4b81] transition-colors">Techniques de marquage</Link></li>
                        <li><Link href="/contact" className="hover:text-[#0d4b81] transition-colors">Contact</Link></li>
                    </ul>
                </nav>

                <div className="text-sm text-center">
                    <p>© {new Date().getFullYear()} Dieu & Cie. Tous droits réservés.</p>
                    <p><Link href="/mentions-legales" className="hover:text-[#0d4b81] underline transition-colors">Mentions légales</Link></p>
                    <p>Fait par TunisianPass</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
