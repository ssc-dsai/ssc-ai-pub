# Handover Documentation

This document summarizes the site architecture and operational knowledge
needed to maintain the AI Centre of Excellence publications site after
handover.

## Architecture summary

- **Static site generator**: [Eleventy (11ty)](https://www.11ty.dev/), config
  in [`.eleventy.js`](../.eleventy.js).
- **Source content**: `src/en/` and `src/fr/` mirror each other; each
  publication is a Markdown file with shared `translationKey` front matter
  linking the English and FR-CA versions.
- **Collections**: `publications`, `publicationsEn`, `publicationsFr` are
  defined in `.eleventy.js` and used across listing/home/search pages.
- **Search**: build-time JSON index (`src/search-index.njk` →
  `/search-index.json`) consumed client-side by `src/assets/js/search.js`;
  no server or external service required.
- **Styling**: plain CSS in `src/assets/css/style.css`, no build step.

## CI/CD

- Workflow: [`.github/workflows/deploy.yml`](../.github/workflows/deploy.yml).
- Trigger: push to `main`.
- Steps: `npm ci` → `npm run build` → deploy `_site/` to the `gh-pages`
  branch via `peaceiris/actions-gh-pages`.
- Custom domain: `src/CNAME` is passed through into the build output and
  becomes the GitHub Pages custom domain
  (`ai-publications.ssc-spc.gc.ca`). DNS is managed outside this repo;
  confirm the CNAME/ALIAS record with the departmental DNS team if the
  domain ever needs to change.
- GitHub Pages settings: repository Settings → Pages → source branch
  `gh-pages` / root.

## Governance

- Review ownership: [`.github/CODEOWNERS`](../.github/CODEOWNERS).
- Pull request process: [`CONTRIBUTING.md`](../CONTRIBUTING.md).
- Content standards: [`docs/PUBLISHING_GUIDE.md`](PUBLISHING_GUIDE.md) and
  [`docs/STYLE_GUIDE.md`](STYLE_GUIDE.md).

## Common maintenance tasks

| Task | Where |
|---|---|
| Add a publication | `src/en/publications/`, `src/fr/publications/` (see Publishing Guide) |
| Update navigation | `src/_includes/partials/header.njk` |
| Change site metadata (titles, org name) | `src/_data/site.js` |
| Update styling | `src/assets/css/style.css` |
| Change deploy behaviour | `.github/workflows/deploy.yml` |
| Change reviewers | `.github/CODEOWNERS` |

## Known limitations / follow-ups

- Search is a simple substring match, not full-text ranking; revisit if the
  catalogue grows significantly.
- No automated bilingual-parity check yet (a missing translation won't fail
  CI); consider adding a lint step that fails if a `translationKey` exists
  in only one language.
- No automated link checker or accessibility scan in CI yet.

## Training session

See [`docs/TRAINING_SESSION_OUTLINE.md`](TRAINING_SESSION_OUTLINE.md) for the
1-hour handover training outline and recording location (add link once
recorded).

---

# Documentation de transfert

Ce document résume l'architecture du site et les renseignements
opérationnels nécessaires à la maintenance du site de publications du Centre
d'excellence en IA après le transfert.

## Résumé de l'architecture

- **Générateur de site statique** : [Eleventy (11ty)](https://www.11ty.dev/),
  configuré dans [`.eleventy.js`](../.eleventy.js).
- **Contenu source** : `src/en/` et `src/fr/` se correspondent; chaque
  publication est un fichier Markdown dont les métadonnées `translationKey`
  communes relient les versions anglaise et FR-CA.
- **Collections** : `publications`, `publicationsEn` et `publicationsFr` sont
  définies dans `.eleventy.js` et utilisées dans les pages de listes,
  d'accueil et de recherche.
- **Recherche** : index JSON généré à la compilation (`src/search-index.njk`
  vers `/search-index.json`) utilisé côté client par
  `src/assets/js/search.js`; aucun serveur ni service externe n'est requis.
- **Styles** : CSS simple dans `src/assets/css/style.css`, sans étape de
  compilation.

## Localisation

La section française est l'expérience en français canadien (FR-CA). Elle est
accessible à `/fr/`, et les dates des publications françaises utilisent explicitement la langue `fr-CA`.

Le contenu FR trouve sous `src/fr/`, y compris les gabarits de pages et
les publications traduites. Les fichiers anglais et FR-CA doivent rester
alignés au moyen de leurs valeurs communes `translationKey`.

## CI/CD

- Flux de travail : [`.github/workflows/deploy.yml`](../.github/workflows/deploy.yml).
- Déclencheur : transmission de changements à `main`.
- Étapes : `npm ci` → `npm run build` → déploiement de `_site/` vers la
  branche `gh-pages` au moyen de `peaceiris/actions-gh-pages`.
- Domaine personnalisé : `src/CNAME` est copié dans le résultat de la
  compilation et devient le domaine personnalisé GitHub Pages
  (`ai-publications.ssc-spc.gc.ca`). Le DNS est géré à l'extérieur de ce
  dépôt; confirmer l'enregistrement CNAME/ALIAS avec l'équipe DNS ministérielle
  si le domaine doit changer.
- Paramètres GitHub Pages : Paramètres du dépôt → Pages → branche source
  `gh-pages` / racine.

## Gouvernance

- Responsabilité des révisions : [`.github/CODEOWNERS`](../.github/CODEOWNERS).
- Processus des demandes de tirage : [`CONTRIBUTING.md`](../CONTRIBUTING.md).
- Normes de contenu : [`docs/PUBLISHING_GUIDE.md`](PUBLISHING_GUIDE.md) et
  [`docs/STYLE_GUIDE.md`](STYLE_GUIDE.md).

## Tâches courantes de maintenance

| Tâche | Emplacement |
|---|---|
| Ajouter une publication | `src/en/publications/`, `src/fr/publications/` (voir le guide de publication) |
| Mettre à jour la navigation | `src/_includes/partials/header.njk` |
| Modifier les métadonnées du site | `src/_data/site.js` |
| Modifier les styles | `src/assets/css/style.css` |
| Modifier le déploiement | `.github/workflows/deploy.yml` |
| Modifier les réviseurs | `.github/CODEOWNERS` |

## Limites connues et suivis

- La recherche est une simple recherche par sous-chaîne et ne classe pas les
  résultats en texte intégral; revoir cette approche si le catalogue prend
  beaucoup d'ampleur.
- Il n'existe pas encore de vérification automatisée de la parité bilingue;
  envisager une étape CI qui échoue lorsqu'une `translationKey` n'existe que
  dans une seule langue.
- Aucun vérificateur automatisé des liens ni audit d'accessibilité n'est
  encore exécuté dans la CI.

## Séance de formation

Consulter le [plan de la séance de formation](TRAINING_SESSION_OUTLINE.md)
pour le plan de formation d'une heure sur le transfert et l'emplacement de
l'enregistrement (ajouter le lien une fois l'enregistrement disponible).
