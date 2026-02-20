import React from 'react';
import { getProducts } from '@/actions/categories';
import Link from 'next/link';

const MainProducts = async () => {
    const products = await getProducts();

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-center mb-8">Notre sélection</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <Link href={`/contact`} key={product._id} className="card shadow-xl hover:shadow-2xl transition-shadow duration-300">
                        <figure className="h-48 overflow-hidden">
                            <img
                                src={product.imageUrl}
                                alt={product.name}
                                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                            />
                        </figure>
                        <div className="card-body">
                            <div className="badge  bg-[#0d4b81]">{product.categoryId?.name || 'Uncategorized'}</div>
                            <h2 className="card-title">
                                {product.name}
                            </h2>
                            <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default MainProducts;
