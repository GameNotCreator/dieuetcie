"use client";

// Repli de dernier niveau : rendu si le layout racine lui-même plante.
// globals.css n'est pas garanti ici, d'où les styles inline.
export default function GlobalError({ reset }) {
  return (
    <html lang="fr">
      <body
        style={{
          margin: 0,
          background: "#F6F1E9",
          color: "#171717",
          fontFamily: "Arial, Helvetica, sans-serif",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "24px",
        }}
      >
        <h1 style={{ fontSize: "28px", fontWeight: 700 }}>
          Une erreur est survenue
        </h1>
        <p style={{ maxWidth: "560px", color: "#374151", marginTop: "12px" }}>
          Le site a rencontré un problème inattendu. Vous pouvez réessayer ou
          revenir à l&apos;accueil.
        </p>
        <div style={{ display: "flex", gap: "12px", marginTop: "24px" }}>
          <button
            type="button"
            onClick={() => reset()}
            style={{
              background: "#0d4b81",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              padding: "12px 20px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Réessayer
          </button>
          <a
            href="/"
            style={{
              color: "#0d4b81",
              border: "1px solid #0d4b81",
              borderRadius: "8px",
              padding: "12px 20px",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Revenir à l&apos;accueil
          </a>
        </div>
      </body>
    </html>
  );
}
