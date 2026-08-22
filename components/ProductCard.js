// components/ProductCard.js
"use client";

import Link from "next/link";
import Image from "next/image";
import PropTypes from "prop-types";

export default function ProductCard({ product, priority = false }) {
  return (
    <div className="card card-sm bg-white shadow-md ring-1 ring-black/5 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group">
      <figure className="relative h-48 w-full overflow-hidden">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={priority}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </figure>
      <div className="card-body text-center">
        <h2 className="card-title justify-center tracking-tight">{product.name}</h2>
        {product.description && (
          <p className="text-sm text-gray-600 line-clamp-3">
            {product.description}
          </p>
        )}
        <div className="card-actions justify-center mt-4">
          <Link href={'/contact'} className="btn btn-outline rounded-full px-6 border-[#0d4b81] text-[#0d4b81] hover:bg-[#0d4b81] hover:border-[#0d4b81] hover:text-white transition-colors">Demander un devis</Link>
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    imageUrl: PropTypes.string.isRequired,
    categoryId: PropTypes.shape({ name: PropTypes.string }),
  }).isRequired,
  priority: PropTypes.bool,
};
