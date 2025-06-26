'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
const SplashScreen = () => {
    const [showSplash, setShowSplash] = useState(true);
    const router = useRouter();

    // Simulation d'attente (3 secondes) pour le splash screen
    const hideSplashScreen = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000)); // Splash visible 3 secondes
      router.push("/accueil"); // Redirection vers la page d'accueil
    };
  
    // Démarrage du splash screen à la première exécution
    if (showSplash) {
      hideSplashScreen();
      return (
        <div className="flex items-center justify-center h-screen bg-black text-white">
          <h1 className="text-4xl font-bold animate-pulse">dieu&ciel</h1>
        </div>
      );
    }
};
  
  export default SplashScreen;
  