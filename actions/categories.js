"use server";

import connectMongo from "@/lib/mongoose";
import Product from "@/models/Product";
import Category from "@/models/Category";
import mongoose from "mongoose";

// Récupération de toutes les catégories
export const getCategories = async () => {
  try {
    await connectMongo();
    const cats = await Category.find({}).lean();
    return JSON.parse(JSON.stringify(cats));
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
    return JSON.parse(JSON.stringify(prods));
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

// Récupérer une catégorie par son ID
export const getCategoryById = async (id) => {
  try {
    await connectMongo();
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error("ID de catégorie invalide.");
    }
    const cat = await Category.findById(id).lean();
    if (!cat) {
      throw new Error("Catégorie non trouvée.");
    }
    return JSON.parse(JSON.stringify(cat));
  } catch (error) {
    console.error("Error fetching category by ID:", error);
    throw error;
  }
};

// Récupérer tous les produits d'une catégorie
export const getProductsByCategory = async (categoryId) => {
  try {
    await connectMongo();
    if (!mongoose.Types.ObjectId.isValid(categoryId)) {
      throw new Error("ID de catégorie invalide.");
    }
    const prods = await Product.find({ categoryId })
      .populate("categoryId", "name")
      .lean();
    return JSON.parse(JSON.stringify(prods));
  } catch (error) {
    console.error("Error fetching products by category:", error);
    throw error;
  }
};
