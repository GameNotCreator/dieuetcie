// components/ProductCard.js
"use client";

import Link from "next/link";
import PropTypes from "prop-types";

export default function ProductCard({ product }) {
  return (
    <div className="card card-compact bg-white shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1">
      <figure>
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      </figure>
      <div className="card-body text-center">
        <h3 className="card-title justify-center">{product.name}</h3>
        {product.description && (
          <p className="text-sm text-gray-600 line-clamp-3">
            {product.description}
          </p>
        )}
        <div className="card-actions justify-center mt-4">
          <Link href={'/contact'} className="btn btn-outline btn-[#0d4b81]">Demander un devis</Link>
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
    price: PropTypes.number,
    categoryId: PropTypes.shape({ name: PropTypes.string }),
  }).isRequired,
};
