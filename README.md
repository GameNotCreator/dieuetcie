# Dieu & Cie — Site vitrine

Site vitrine de **Dieu et Cie**, fabricant français de maroquinerie publicitaire depuis plus de 40 ans (découpe et soudure haute fréquence PVC, petites et grandes séries sur mesure).

Production : [dieuetcie.vercel.app](https://dieuetcie.vercel.app)

## Stack

- [Next.js 16](https://nextjs.org) (App Router, React Compiler)
- React 19
- Tailwind CSS 4 + daisyUI 5
- MongoDB via Mongoose (catégories et produits gérés par le back-office `admindieuetcie`)

## Pages

| Route | Contenu |
|---|---|
| `/` | Accueil : carrousel, liste des catégories, sélection de produits |
| `/categories/[id]` | Produits d'une catégorie |
| `/about` | Qui sommes-nous ? |
| `/reference` | Références clients |
| `/marquage` | Techniques de marquage et matières (données : `public/data.json`, `public/matiere.json`) |
| `/contact` | Contact + plan d'accès |

## Développement

```bash
npm install
npm run dev
```

Créer un fichier `.env.local` à la racine :

```
MONGODB_URI=<chaîne de connexion MongoDB>
```

## Déploiement

Déployé sur Vercel. La branche de production est `main` du repo GitHub `GameNotCreator/dieuetcie` ; le travail se fait sur `new-main` puis est mergé dans `main`.

La page d'accueil est régénérée au plus toutes les 60 secondes (ISR) : les modifications faites dans le back-office apparaissent sans redéploiement.
