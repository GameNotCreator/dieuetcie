// components/ProductCard.js
"use client";

import Link from "next/link";
import Image from "next/image";
import PropTypes from "prop-types";

export default function ProductCard({ product, priority = false }) {
  return (
    <div className="card card-sm bg-white shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1">
      <figure className="relative h-48 w-full overflow-hidden rounded-t-lg">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={priority}
          className="object-cover"
        />
      </figure>
      <div className="card-body text-center">
        <h2 className="card-title justify-center">{product.name}</h2>
        {product.description && (
          <p className="text-sm text-gray-600 line-clamp-3">
            {product.description}
          </p>
        )}
        <div className="card-actions justify-center mt-4">
          <Link href={'/contact'} className="btn btn-outline border-[#0d4b81] text-[#0d4b81] hover:bg-[#0d4b81] hover:border-[#0d4b81] hover:text-white">Demander un devis</Link>
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
