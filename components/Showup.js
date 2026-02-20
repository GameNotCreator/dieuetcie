'use client'
import Image from "next/image";
import img1 from "../public/bg1.jpg";
import img2 from "../public/bg2.jpg";
import img3 from "../public/bg3.jpg";
import img4 from "../public/bg4.jpg";
import img5 from "../public/bg5.jpg";
import img6 from "../public/bg6.jpg";
import { useState } from "react";

const images = [
  { src: img1, alt: "Slide 1" },
  { src: img2, alt: "Slide 2" },
  { src: img3, alt: "Slide 3" },
  { src: img4, alt: "Slide 4" },
];

export default function Showup() {
  const [i, setI] = useState(0);
  const prev = () => setI((x) => (x - 1 + images.length) % images.length);
  const next = () => setI((x) => (x + 1) % images.length);

  return (
    <div className="w-full h-full flex flex-col gap-2">
      <div className="relative w-full flex-1 overflow-hidden rounded-lg shadow-lg min-h-0">
        <Image
          src={images[i].src}
          alt={images[i].alt}
          className="w-full h-full object-cover"
          priority
        />

        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
          <button type="button" className="btn btn-circle" onClick={prev}>❮</button>
          <button type="button" className="btn btn-circle" onClick={next}>❯</button>
        </div>
      </div>

      <div className="flex flex-1 w-full min-h-0">
        <button type="button" className="w-full h-full relative" onClick={() => setI(0)}>
          <Image src={img5} alt="Thumb 5" className="w-full h-full object-cover rounded" />
        </button>
      </div>
    </div>
  );
}
