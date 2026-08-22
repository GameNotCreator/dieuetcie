'use client'
import Image from "next/image";
import img1 from "../public/bg1.jpg";
import img2 from "../public/bg2.jpg";
import img3 from "../public/bg3.jpg";
import img4 from "../public/bg4.jpg";
import img5 from "../public/bg5.jpg";
import { useEffect, useState } from "react";

const images = [
  { src: img1, alt: "Maroquinerie publicitaire Dieu & Cie — visuel 1" },
  { src: img2, alt: "Maroquinerie publicitaire Dieu & Cie — visuel 2" },
  { src: img3, alt: "Maroquinerie publicitaire Dieu & Cie — visuel 3" },
  { src: img4, alt: "Maroquinerie publicitaire Dieu & Cie — visuel 4" },
  { src: img5, alt: "Atelier Dieu & Cie" },
];

const DELAY = 5000;

export default function Showup() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const prev = () => setI((x) => (x - 1 + images.length) % images.length);
  const next = () => setI((x) => (x + 1) % images.length);

  // Défilement automatique — en pause au survol ET au focus clavier
  // (WCAG 2.2.2), désactivé si l'utilisateur préfère réduire les animations.
  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(next, DELAY);
    return () => clearInterval(timer);
  }, [paused]);

  return (
    <div
      className="w-full h-full flex flex-col gap-2"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="relative w-full flex-1 overflow-hidden rounded-xl shadow-lg min-h-0">
        {/* Toutes les images empilées : transition en fondu enchaîné.
            aria-hidden sur les diapositives masquées (opacité seule ne les
            retire pas de l'arbre d'accessibilité). */}
        {images.map((img, idx) => (
          <Image
            key={idx}
            src={img.src}
            alt={img.alt}
            priority={idx === 0}
            aria-hidden={idx !== i}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
              idx === i ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
          <button
            type="button"
            className="btn btn-circle btn-sm sm:btn-md border-none bg-white/70 text-[#0d4b81] shadow hover:bg-white transition-colors"
            aria-label="Image précédente"
            onClick={prev}
          >
            ❮
          </button>
          <button
            type="button"
            className="btn btn-circle btn-sm sm:btn-md border-none bg-white/70 text-[#0d4b81] shadow hover:bg-white transition-colors"
            aria-label="Image suivante"
            onClick={next}
          >
            ❯
          </button>
        </div>

        {/* Points de navigation : pilule sombre pour le contraste sur photos
            claires, boutons de 24 px minimum pour la cible tactile. */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center rounded-full bg-black/25 px-1.5 py-0.5 backdrop-blur-sm">
          {images.map((_, idx) => (
            <button
              key={idx}
              type="button"
              aria-label={`Aller à l'image ${idx + 1}`}
              aria-current={idx === i}
              onClick={() => setI(idx)}
              className="flex h-6 min-w-6 items-center justify-center"
            >
              <span
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === i ? "w-5 bg-white" : "w-2 bg-white/70 hover:bg-white"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-1 w-full min-h-0">
        <button
          type="button"
          className="w-full h-full relative overflow-hidden rounded-xl group"
          aria-label="Voir la photo de l'atelier"
          onClick={() => setI(4)}
        >
          <Image
            src={img5}
            alt="Atelier Dieu & Cie"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </button>
      </div>
    </div>
  );
}
