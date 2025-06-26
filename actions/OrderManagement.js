"use server";

import connectMongo from "@/libs/mongoose"; // Adapte le chemin vers ta configuration Mongoose
import Order from "@/models/Order"; // Chemin vers le modèle Order
import OrderMail from "@/components/EmailComponent";
import { resend } from "@/libs/resend";
import { renderAsync } from "@react-email/render";
/**
 * Server Action pour créer une commande
 * @param {Object} data
 * @param {string} data.productId - ID du produit commandé
 * @param {string} data.fullName - Nom complet de l'utilisateur
 * @param {string} data.size - Taille choisie (XS, S, M, L, XL)
 * @param {string} data.phoneNumber - Numéro de téléphone
 * @param {string} data.email - Adresse email
 * @param {string} data.city - Ville
 * @param {string} data.governorate - Gouvernorat
 * @param {string} data.address - Adresse de livraison
 * @param {string} data.postalCode - Code postal
 * @param {boolean} data.payOnDelivery - Paiement à la livraison
 * @param {number} data.total - Montant total de la commande
 */
export async function createOrderAction(data) {
  try {
    await connectMongo();

    const html = await renderAsync(
      OrderMail({
        productId: data.productId,
        fullName: data.fullName,
        size: data.size,
        phoneNumber: data.phoneNumber,
        email: data.email,
        city: data.city,
        governorate: data.governorate,
        address: data.address,
        postalCode: data.postalCode,
        payOnDelivery: data.payOnDelivery,
        total: data.total,
        img: data.img,
      })
    );
    await resend.emails.send({
      from: `Sawarni <sawarni@tunisian-pass.tn>`,
      to: [`${data.email}`],
      subject: 'Confirmation de commande - Sawarni',
      html: html, // Remplace la propriété react par html
    });

    // Créer la commande dans la base de données
    const newOrder = await Order.create({
      productId: data.productId,
      fullName: data.fullName,
      size: data.size,
      phoneNumber: data.phoneNumber,
      email: data.email,
      city: data.city,
      governorate: data.governorate,
      address: data.address,
      postalCode: data.postalCode,
      payOnDelivery: data.payOnDelivery,
      total: data.total,
    });

    return { success: true, order: newOrder };
  } catch (error) {
    console.error("Erreur lors de la création de la commande :", error);
    throw new Error(
      error.message || "Erreur inconnue lors de la création de la commande"
    );
  }
}
