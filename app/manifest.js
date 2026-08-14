export default function manifest() {
  return {
    name: "Dieu & Cie",
    short_name: "Dieu & Cie",
    description:
      "Fabricant français de maroquinerie publicitaire depuis plus de 40 ans.",
    start_url: "/",
    display: "standalone",
    background_color: "#F6F1E9",
    theme_color: "#0d4b81",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
