## Plateforme de dons – Sourire Pour Tous

Ce dépôt contient le site web de collecte de dons de l’association **Sourire Pour Tous** (créée en 2022), dont la mission est d’aider les personnes dans le besoin et de redonner le sourire à ceux qui l’ont perdu.

Le site est développé avec [Next.js](https://nextjs.org) (App Router) et [Tailwind CSS], et permet de :

- présenter l’association et ses actions (distributions alimentaires, orphelinats, daaras, création de puits) ;
- mettre en avant les projets spéciaux (par exemple l’orphelinat de Kounoune – 7 mars 2026) ;
- préparer un parcours de don en ligne (Wave, Orange Money, autres moyens) avec transparence sur les objectifs financiers.

## Démarrage du projet

Depuis le dossier `souris-web`, installez les dépendances (si ce n’est pas déjà fait) puis lancez le serveur de développement :

```bash
npm install
npm run dev
```

Ouvrez ensuite `http://localhost:3000` dans votre navigateur pour voir le site.

Les pages principales sont :

- `/` : page d’accueil, présentation de l’association, compteur dynamique d’objectifs (ex. objectif Ramadan) et mise en avant du projet du **7 mars 2026 à Kounoune** ;
- `/actions` : page **Nos actions** (distributions alimentaires, orphelinats, daaras, puits, galerie) ;
- `/projets/kounoune-7-mars-2026` : page **Projet spécial – Orphelinat de Kounoune** avec objectif financier, barre de progression et liste des besoins (lait, couches, biberons, riz, huile, sucre) ;
- `/don` : page **Faire un don** avec formulaire (montant, coordonnées, moyen de paiement : Wave, Orange Money, autres).

Les montants et numéros de Mobile Money renseignés dans le code sont des exemples et doivent être remplacés par les coordonnées officielles de l’association.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Intégration des moyens de paiement (prochaine étape)

La version actuelle prépare le parcours de don et la structure d’intégration. Pour encaisser automatiquement les paiements, il faudra connecter le site aux APIs suivantes (ou à un agrégateur local) :

- **Wave Checkout API** : création de sessions de paiement et réception de paiements en XOF (Franc CFA) ;
- **Orange Money Web Payment** : acceptation de paiements web depuis les comptes Orange Money ;
- mise en place de **webhooks** pour marquer automatiquement les dons comme « réussis » dans un futur tableau de bord.

Ces intégrations nécessitent l’obtention de clés API via les portails officiels de Wave et Orange Money, ainsi qu’une configuration côté serveur (sécurité, stockage des transactions, etc.).

## Déploiement

Le projet peut être déployé facilement sur une plateforme compatible Next.js (par exemple Vercel, Netlify ou un hébergement Node.js).  
Pensez à configurer les variables d’environnement (clés API Wave/Orange Money, base de données, etc.) avant d’activer les paiements en production.

