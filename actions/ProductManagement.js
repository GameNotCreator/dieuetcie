"use server";

import connectMongo from "@/libs/mongoose"; // Adapte le chemin vers ta config Mongoose
import Product from "@/models/Product"; // Adapte le chemin vers ton model
import Category from "@/models/Category"; // Adapte le chemin vers ton model
import mongoose from "mongoose";

// Récupération de toutes les catégories
export const getCategories = async () => {
  try {
    await connectMongo();
    const cats = await Category.find({}).lean();
    return  cats
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};

// Récupérer tous les produits (avec nom de catégorie)
export const getProducts = async () => {
  try {
    await connectMongo();
    const prods = await Product.find({})
      .populate("categoryId", "name")
      .lean();
    return JSON.stringify(prods);
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

// Récupérer une catégorie par son ID
export const getCategoryById = async (id) => {
  await connectMongo();
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error("ID de catégorie invalide.");
  }
  const cat = await Category.findById(id).lean();
  if (!cat) {
    throw new Error("Catégorie non trouvée.");
  }
  return cat;
};

// Récupérer tous les produits d’une catégorie
export const getProductsByCategory = async (categoryId) => {
  await connectMongo();
  if (!mongoose.Types.ObjectId.isValid(categoryId)) {
    throw new Error("ID de catégorie invalide.");
  }
  const prods = await Product.find({ categoryId })
    .populate("categoryId", "name")
    .lean();
  return prods;
};
