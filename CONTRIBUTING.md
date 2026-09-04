# Contributing Guide

Thank you for contributing to the AI Centre of Excellence publications site.
This document explains how to propose, review, and merge changes to the
Eleventy site and its bilingual content.

## Ways to contribute

- **New publication**: add a report, guide, or research summary.
- **Content update**: correct or refresh an existing publication.
- **Site/template change**: improve layouts, styles, search, or CI/CD.

## Before you start

1. Open an issue (or comment on an existing one) describing the change.
2. For new publications, confirm the English and French versions are both
   ready, or file a translation request if French is pending.
3. Review the [Publishing Guide](PUBLISHING_GUIDE.md) and
   [Style Guide](STYLE_GUIDE.md).

## Local setup

```bash
npm install
npm run serve   # local dev server with live reload at http://localhost:8080
npm run build   # production build to _site/
```

## Branching and pull requests

1. Create a branch from `main`: `git checkout -b feature/short-description`.
2. Make your changes and run `npm run build` to confirm the site builds
   without errors.
3. Open a pull request using the provided template.
4. At least one reviewer from [CODEOWNERS](../.github/CODEOWNERS) must
   approve before merging.
5. Squash-merge once approved; CI will deploy `main` automatically.

## Bilingual requirement

Every publication must exist in both English and French before it is
merged, linked via a shared `translationKey` in the front matter. Site
templates and navigation must never be English- or French-only.

## Questions

Open an issue or contact the AI Centre of Excellence team listed in
[CODEOWNERS](../.github/CODEOWNERS).

---

# Guide de contribution

Merci de contribuer au site de publications du Centre d'excellence en IA.
Ce document explique comment proposer, réviser et fusionner des changements
apportés au site Eleventy et à son contenu bilingue.

## Façons de contribuer

- **Nouvelle publication** : ajouter un rapport, un guide ou un résumé de recherche.
- **Mise à jour du contenu** : corriger ou actualiser une publication existante.
- **Modification du site ou des modèles** : améliorer les mises en page, les styles, la recherche ou la CI/CD.

## Avant de commencer

1. Ouvrir une demande ou commenter une demande existante pour décrire le changement.
2. Pour une nouvelle publication, confirmer que les versions anglaise et française sont toutes deux prêtes, ou demander une traduction si la version française est en attente.
3. Consulter le [Guide de publication](PUBLISHING_GUIDE.md) et le
   [Guide de style](STYLE_GUIDE.md).

## Configuration locale

```bash
npm install
npm run serve   # serveur de développement local avec rechargement automatique à http://localhost:8080
npm run build   # compilation de production vers _site/
```

## Branches et demandes de tirage

1. Créer une branche à partir de `main` : `git checkout -b feature/description-courte`.
2. Effectuer les changements et lancer `npm run build` pour confirmer que le site se compile sans erreur.
3. Ouvrir une demande de tirage à l'aide du modèle fourni.
4. Au moins un responsable indiqué dans [CODEOWNERS](../.github/CODEOWNERS) doit approuver les changements avant la fusion.
5. Effectuer une fusion avec écrasement après l'approbation; la CI déploiera automatiquement `main`.

## Exigence de bilinguisme

Chaque publication doit exister en anglais et en français avant sa fusion,
les deux versions étant liées par une même propriété `translationKey` dans le
front matter. Les modèles et la navigation du site ne doivent jamais être
offerts uniquement en anglais ou uniquement en français.

## Questions

Ouvrir une demande ou communiquer avec l'équipe du Centre d'excellence en IA
indiquée dans [CODEOWNERS](../.github/CODEOWNERS).
