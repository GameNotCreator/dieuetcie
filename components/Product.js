"use client";
import { useState } from "react";
import Footer from "./Footer";
import SimpleBanner from "./Banner";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { createOrderAction } from "@/actions/OrderManagement";
import { useRouter } from "next/navigation";

const Product = ({ product }) => {
  const router = useRouter();
  const [isOrdering, setIsOrdering] = useState(false); // Pour afficher/masquer le formulaire
  const [step, setStep] = useState(1); // Gestion des étapes du formulaire
  const [formData, setFormData] = useState({
    fullName: "",
    size: "",
    phoneNumber: "",
    email: "",
    city: "",
    governorate: "",
    address: "",
    postalCode: "",
    payOnDelivery: false,
    img: product.photoURL[0],
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateStep1 = () => {
    const { fullName, size, phoneNumber, email } = formData;
    if (!fullName || !size || !phoneNumber || !email) {
      toast.error(
        "Veuillez remplir tous les champs obligatoires de l'étape 1."
      );
      return false;
    }
    const phoneRegex = /^\d{8}$/;
    if (!phoneRegex.test(phoneNumber)) {
      toast.error("Le numéro de téléphone doit comporter 8 chiffres.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Veuillez entrer une adresse email valide.");
      return false;
    }
    return true;
  };

  const validateStep2 = () => {
    const { city, governorate, address, postalCode } = formData;
    if (!city || !governorate || !address || !postalCode) {
      toast.error(
        "Veuillez remplir tous les champs obligatoires de l'étape 2."
      );
      return false;
    }
    return true;
  };

  const handleNextStep = () => {
    if (step === 1 && !validateStep1()) return;
    if (step === 2 && !validateStep2()) return;
    setStep((prev) => prev + 1);
  };

  const handlePreviousStep = () => setStep((prev) => prev - 1);

  const handleSubmit = async () => {
    try {
      await createOrderAction({
        productId: product.id,
        ...formData,
        total: product.price,
      });
      toast.success("Commande confirmée avec succès !");
      setIsOrdering(false); // Réinitialiser le formulaire
      router.push("/");
    } catch (error) {
      console.error("Erreur lors de la confirmation de la commande :", error);
      toast.error("Erreur lors de la confirmation de la commande !");
    }
  };

  return (
    <div className="text-white">
      <header className="flex flex-col text-center items-center justify-center">
        <SimpleBanner />
      </header>

      <main className="flex flex-col h-screen items-center justify-center">
        {/* Informations du produit */}
        {isOrdering == false && (
          <>
            <div className="relative p-6 flex flex-col items-center">
              {product?.stock === 0 && (
                <div className="absolute top-2 left-2 bg-black text-red-600 px-2 py-1 text-sm">
                  SOLD OUT
                </div>
              )}
              <div className="flex flex-wrap gap-4 mt-4 flex-col items-center sm:items-start sm:flex-row">
                {product?.photoURL?.map((url, index) => (
                  <img
                    key={index}
                    src={url}
                    alt={product?.title}
                    className="h-[236px] w-[236px] object-cover rounded"
                  />
                ))}
              </div>
              <div className="text-center mt-4">
                <h2 className="text-lg text-black">{product?.title}</h2>
                <p className="text-black text-sm">
                  {product?.price + ",000 "}DT
                </p>
                <p className="text-black text-sm">{product?.description}</p>
              </div>
            </div>

            {/* Bouton JE COMMANDE */}
            {!isOrdering && (
              <button
                className="btn btn-primary"
                onClick={() => setIsOrdering(true)}
              >
                JE COMMANDE
              </button>
            )}
            {!isOrdering && (
              <Link href={"/"} className="btn btn-primary btn-outline mt-4">
                RETOUR AU SHOP
              </Link>
            )}
          </>
        )}

        {/* Formulaire étape par étape */}
        {isOrdering && (
          <div className="w-full max-w-xl bg-white p-6 text-black">
            {step === 1 && (
              <div>
                <h3 className="text-lg font-bold mb-4">
                  Étape 1 : Infos personnelles
                </h3>
                <div className="form-control">
                  <label className="label">Nom complet</label>
                  <input
                    type="text"
                    name="fullName"
                    className="input input-bordered"
                    value={formData.fullName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-control">
                  <label className="label">Taille du T-Shirt</label>
                  <select
                    name="size"
                    className="select select-bordered"
                    value={formData.size}
                    onChange={handleInputChange}
                  >
                    <option value="">Sélectionner</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                  </select>
                </div>
                <div className="form-control">
                  <label className="label">Numéro de téléphone tunisien</label>
                  <input
                    type="text"
                    name="phoneNumber"
                    className="input input-bordered"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-control">
                  <label className="label">Adresse Email </label>
                  <span className="font-sm font-italic italic">
                    vous recevrez votre bon de commande par email
                  </span>
                  <input
                    type="email"
                    name="email"
                    className="input input-bordered"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex justify-between mt-4">
                  <button
                    className="btn btn-secondary"
                    onClick={handlePreviousStep}
                    disabled
                  >
                    Précédent
                  </button>
                  <button className="btn btn-primary" onClick={handleNextStep}>
                    Suivant
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h3 className="text-lg font-bold mb-4">
                  Étape 2 : Adresse de livraison
                </h3>
                <div className="form-control">
                  <label className="label">Ville</label>
                  <input
                    type="text"
                    name="city"
                    className="input input-bordered"
                    value={formData.city}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-control">
                  <label className="label">Gouvernorat</label>
                  <input
                    type="text"
                    name="governorate"
                    className="input input-bordered"
                    value={formData.governorate}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-control">
                  <label className="label">Adresse</label>
                  <input
                    type="text"
                    name="address"
                    className="input input-bordered"
                    value={formData.address}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-control">
                  <label className="label">Code Postal</label>
                  <input
                    type="text"
                    name="postalCode"
                    className="input input-bordered"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex justify-between mt-4">
                  <button
                    className="btn btn-secondary"
                    onClick={handlePreviousStep}
                  >
                    Précédent
                  </button>
                  <button className="btn btn-primary" onClick={handleNextStep}>
                    Suivant
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h3 className="text-lg font-bold mb-4">
                  Étape 3 : Confirmation
                </h3>
                <div className="form-control">
                  <label className="cursor-pointer flex items-center">
                    <input
                      type="checkbox"
                      name="payOnDelivery"
                      className="checkbox"
                      checked={formData.payOnDelivery}
                      onChange={handleInputChange}
                    />
                    <span className="ml-2">
                      Je paye à la livraison (minimum 48h)
                    </span>
                  </label>
                </div>
                <p className="text-lg mt-4">
                  Total : {product?.price + ",000 "}DT
                </p>
                <div className="flex flex-col justify-between mt-4 items-center justify-center">
                  <button
                    className="btn btn-success btn-wide"
                    onClick={handleSubmit}
                  >
                    Je confirme ma commande
                  </button>
                </div>
              </div>
            )}
            <div className="flex flex-col mt-4 w-full items-center justify-center">
              {step === 3 && (
                <button
                  className="btn btn-secondary btn-wide"
                  onClick={handlePreviousStep}
                >
                  Précédent
                </button>
              )}
              <Link
                href={"/"}
                className="btn btn-primary btn-outline mt-4 items-center justify-center"
              >
                RETOUR AU SHOP
              </Link>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Product;
