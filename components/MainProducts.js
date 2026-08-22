import { getProducts } from '@/actions/categories';
import Link from 'next/link';
import Image from 'next/image';

const MainProducts = async () => {
    const products = await getProducts();

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-center heading-accent">Notre sélection</h2>
            <p className="text-center text-gray-600 mt-4 mb-10 max-w-2xl mx-auto">
                Un aperçu de nos fabrications : chaque modèle est personnalisable
                à vos couleurs et à votre logo.
            </p>
            {products.length === 0 ? (
                <div className="text-center text-gray-500">
                    <p>Notre sélection est en cours de mise à jour.</p>
                    <Link
                        href="/categories"
                        className="btn mt-4 btn-outline rounded-full px-6 border-[#0d4b81] text-[#0d4b81] hover:bg-[#0d4b81] hover:border-[#0d4b81] hover:text-white transition-colors"
                    >
                        Parcourir nos catégories
                    </Link>
                </div>
            ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product, index) => (
                    <Link
                        href={`/contact`}
                        key={product._id}
                        style={{ animationDelay: `${(index % 6) * 70}ms` }}
                        className="card bg-white shadow-md ring-1 ring-black/5 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden animate-fade-up group"
                    >
                        <figure className="relative h-48 overflow-hidden">
                            <Image
                                src={product.imageUrl}
                                alt={product.name}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </figure>
                        <div className="card-body">
                            <div className="badge border-none bg-[#0d4b81]/10 text-[#0d4b81] font-semibold">{product.categoryId?.name || 'Sans catégorie'}</div>
                            <h2 className="card-title tracking-tight">
                                {product.name}
                            </h2>
                            <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>
                            <span className="mt-1 text-sm font-semibold text-[#0d4b81] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Demander un devis ›
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
            )}
        </div>
    );
};

export default MainProducts;
