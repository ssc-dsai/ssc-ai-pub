# AI Centre of Excellence — Publications Site

Bilingual (EN/FR) Eleventy site for publishing reports, guidance, and
research from Shared Services Canada's AI Centre of Excellence.

🔗 publications.dsai-sdia.ssc-spc.cloud-nuage.canada.ca

## Quick start

```bash
npm install
npm run serve   # http://localhost:8080
```

## Repository guide

| Resource | Purpose |
|---|---|
| [`CONTRIBUTING.md`](CONTRIBUTING.md) | How to propose and submit changes |
| [`docs/PUBLISHING_GUIDE.md`](docs/PUBLISHING_GUIDE.md) | How to add a new publication |
| [`docs/STYLE_GUIDE.md`](docs/STYLE_GUIDE.md) | Writing and formatting conventions |
| [`docs/HANDOVER.md`](docs/HANDOVER.md) | Architecture and operational handover notes |
| [`docs/TRAINING_SESSION_OUTLINE.md`](docs/TRAINING_SESSION_OUTLINE.md) | 1-hour maintainer training outline |
| [`.github/CODEOWNERS`](.github/CODEOWNERS) | Review ownership by path |
| [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) | CI/CD to GitHub Pages |

## Project structure

```
src/
  _data/site.js         site metadata (titles, description, org)
  _includes/layouts/     base + publication layouts
  _includes/partials/    header, footer
  en/, fr/               bilingual pages and publications
  assets/                CSS, JS (client-side search)
  search-index.njk       builds /search-index.json at build time
.github/                 PR template, CODEOWNERS, CI/CD workflow
docs/                    contribution/publishing/style/handover guides
```

## Build & deploy

Pushing to `main` triggers [`deploy.yml`](.github/workflows/deploy.yml),
which builds the site with Eleventy and publishes `_site/` to the
`gh-pages` branch, preserving the custom domain via `src/CNAME`.

---

# Centre d'excellence en IA — Site de publications

Site bilingue (EN/FR) propulsé par Eleventy pour publier les rapports, les
guides et les travaux de recherche du Centre d'excellence en IA de Services
partagés Canada.

🔗 publications.dsai-sdia.ssc-spc.cloud-nuage.canada.ca

## Démarrage rapide

```bash
npm install
npm run serve   # http://localhost:8080
```

## Guide du dépôt

| Ressource | Objet |
|---|---|
| [`CONTRIBUTING.md`](CONTRIBUTING.md) | Comment proposer et soumettre des changements |
| [`docs/PUBLISHING_GUIDE.md`](docs/PUBLISHING_GUIDE.md) | Comment ajouter une publication |
| [`docs/STYLE_GUIDE.md`](docs/STYLE_GUIDE.md) | Conventions de rédaction et de mise en forme |
| [`docs/HANDOVER.md`](docs/HANDOVER.md) | Notes de transfert sur l'architecture et l'exploitation |
| [`docs/TRAINING_SESSION_OUTLINE.md`](docs/TRAINING_SESSION_OUTLINE.md) | Plan d'une formation d'une heure pour les responsables de la maintenance |
| [`.github/CODEOWNERS`](.github/CODEOWNERS) | Responsabilités d'approbation par chemin |
| [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) | CI/CD vers GitHub Pages |

## Structure du projet

```
src/
  _data/site.js         métadonnées du site (titres, description, organisation)
  _includes/layouts/    mises en page de base et des publications
  _includes/partials/   en-tête et pied de page
  en/, fr/              pages et publications bilingues
  assets/               CSS, JS (recherche côté client)
  search-index.njk      génère /search-index.json lors de la compilation
.github/                modèle de demande de tirage, CODEOWNERS, CI/CD
docs/                   guides de contribution, de publication, de style et de transfert
```

## Compilation et déploiement

Une poussée vers `main` déclenche [`deploy.yml`](.github/workflows/deploy.yml),
qui compile le site avec Eleventy et publie `_site/` dans la branche
`gh-pages`, tout en conservant le domaine personnalisé grâce à `src/CNAME`.
