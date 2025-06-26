"use client";
import React, { useState } from "react";
import CategoryForm from "./CategoryForm";
import CategoryCard from "./CategoryCard";
import { getCategories } from "@/actions/CategoryManagement";

function CategoryManager({ initialCategories = [] }) {
  const [categories, setCategories] = useState(initialCategories);

  const refresh = async () => {
    const catsJson = await getCategories();       // string
    setCategories(JSON.parse(catsJson));          // tableau
  };

  return (
    <div className="min-h-screen p-8 pb-24 max-w-5xl mx-auto space-y-8">
      <CategoryForm onCreated={refresh} />

      <h2 className="text-2xl font-bold mt-8">Liste des catégories</h2>
      <div className="flex flex-wrap">
        {categories?.length > 0 ? (
          categories?.map(cat => (
            <CategoryCard key={cat._id} category={cat} onUpdated={refresh} />
          ))
        ) : (
          <p className="text-gray-400">Aucune catégorie trouvée.</p>
        )}
      </div>
    </div>
  );
}

export default CategoryManager;
