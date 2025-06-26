"use client";
import React, { useState } from "react";
import ProductForm from "./ProductForm";
import ProductCard from "./ProductCard";
import { getCategories, getProducts } from "@/actions/ProductManagement";

function ProductManager({ categories, products }) {
  const [cats,  setCats]  = useState(
    typeof categories === "string" ? JSON.parse(categories) : categories
  );
  const [prods, setProds] = useState(
    typeof products === "string" ? JSON.parse(products) : products
  );

  const refresh = async () => {
    const catJson  = await getCategories();     // string
    const prodJson = await getProducts();       // string
    setCats(JSON.parse(catJson));
    setProds(JSON.parse(prodJson));
  };

  return (
    <div className="min-h-screen p-8 pb-24 max-w-6xl mx-auto space-y-8">
      <ProductForm categories={cats} onCreated={refresh} />

      <h2 className="text-2xl font-bold mt-8">Liste des produits</h2>
      <div className="flex flex-wrap">
        {prods?.length > 0 ? (
          prods?.map(prod => (
            <ProductCard
              key={prod._id}
              product={prod}
              categories={cats}
              onUpdated={refresh}
            />
          ))
        ) : (
          <p className="text-gray-500">Aucun produit trouvé.</p>
        )}
      </div>
    </div>
  );
}

export default ProductManager;
