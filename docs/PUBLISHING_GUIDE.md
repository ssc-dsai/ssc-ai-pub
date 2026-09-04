# Publishing Guide

This guide walks through adding a new publication to the site in English and
Canadian French (FR-CA).

## 1. Choose a translation key

Pick a short, kebab-case `translationKey` shared by the English and French
versions of the publication (e.g. `responsible-ai-adoption-guide`). This is
how the site links the two language versions together.

## 2. Create the English publication

Add an `index.md` file under `src/en/publications/<slug>/`:

```markdown
---
layout: layouts/publication.njk
title: "Your Publication Title"
summary: "One or two sentence summary shown in listings and search."
date: 2025-01-15
author: "AI Centre of Excellence"
translationKey: your-translation-key
tags:
  - publications
  - <topic-tag>
---
Publication body in Markdown...
```

The folder name becomes the publication URL, for example
`/en/publications/your-publication/`.

## 3. Add updates

Updates belong inside the publication folder:

```text
src/en/publications/your-publication/
   index.md
   updates/
      week-1.md
      week-2.md
```

An update should use the base layout, the same `publicationKey` as the
publication's `translationKey`, and the `updates` tag:

```markdown
---
layout: layouts/base.njk
title: "Week 1 Update"
date: 2025-01-22
publicationKey: your-translation-key
tags:
   - updates
---
Update body in Markdown...
```

Updates are available at `/en/publications/your-publication/updates/week-1/`
and are listed on the publication page. They do not appear in the main
publication listing or search index.

## 4. Create the French publication

Add the matching `index.md` under `src/fr/publications/<slug>/` with the same
`translationKey`, translated `title`, `summary`, and body.

> The English and French slugs do not need to match, but using the same
> slug keeps things easy to find.

## 5. Required front matter fields

| Field | Required | Notes |
|---|---|---|
| `layout` | Yes | Always `layouts/publication.njk` |
| `title` | Yes | Plain text, no Markdown |
| `summary` | Recommended | Used in listings, search index, and social previews |
| `date` | Yes | ISO format `YYYY-MM-DD`, used for sorting |
| `author` | Recommended | Team or individual name |
| `translationKey` | Yes | Shared between EN/FR versions |
| `tags` | Yes | Must include `publications`; add topic tags as needed |

## 6. Preview locally

```bash
npm run serve
```

Visit `http://localhost:8080/en/publications/` and
`http://localhost:8080/fr/publications/` to confirm both versions render,
the language switch link on the publication page works, and the item
appears in `/en/search/` and `/fr/search/`.

## 7. Submit for review

Open a pull request following [CONTRIBUTING.md](../CONTRIBUTING.md). Include
both language files in the same PR whenever possible.

## Migrating existing AICoE material

When migrating content from prior AICoE outputs (slide decks, Word docs,
internal wikis):

1. Convert to Markdown, keeping headings as `##`/`###` (page `<h1>` is the
   `title` field, so don't repeat it as a heading in the body).
2. Replace embedded images with files under `src/assets/images/` and
   reference them with relative paths.
3. Note the original source/date in a short line at the end of the
   publication if useful for provenance.
4. Have a bilingual reviewer confirm the FR-CA translation before merging.

---

# Guide de publication

Ce guide explique comment ajouter une nouvelle publication au site en anglais
et en français canadien (FR-CA).

## 1. Choisir une clé de traduction

Choisir une `translationKey` courte en casse kebab, commune aux versions
anglaise et FR-CA de la publication (par exemple,
`responsible-ai-adoption-guide`). Le site utilise cette clé pour relier les
deux versions linguistiques.

## 2. Créer la publication anglaise

Ajouter un fichier `index.md` sous `src/en/publications/<slug>/`, en utilisant
la structure présentée dans la version anglaise ci-dessus.

## 3. Ajouter des mises à jour

Les mises à jour se trouvent dans le dossier de la publication. Elles doivent
utiliser `layouts/base.njk`, la même `publicationKey` que la
`translationKey` de la publication et l'étiquette `updates`.

```text
src/fr/publications/votre-publication/
   index.md
   updates/
      semaine-1.md
```

Elles sont accessibles à `/fr/publications/votre-publication/updates/semaine-1/`
et apparaissent sur la page de la publication, sans être ajoutées à la liste
principale ni à l'index de recherche.

## 4. Créer la publication française

Ajouter le fichier `index.md` français canadien correspondant sous
`src/fr/publications/<slug>/`, avec la même `translationKey`, le `title`, le
`summary` et le corps du texte traduits.

> Les slugs anglais et FR-CA n'ont pas besoin d'être identiques, mais
> l'utilisation du même slug facilite la recherche des fichiers.

## 5. Champs obligatoires des métadonnées

| Champ | Obligatoire | Notes |
|---|---|---|
| `layout` | Oui | Toujours `layouts/publication.njk` |
| `title` | Oui | Texte brut, sans Markdown |
| `summary` | Recommandé | Utilisé dans les listes, l'index de recherche et les aperçus pour les réseaux sociaux |
| `date` | Oui | Format ISO `YYYY-MM-DD`, utilisé pour le tri |
| `author` | Recommandé | Équipe ou personne |
| `translationKey` | Oui | Commune aux versions EN et FR-CA |
| `tags` | Oui | Doit comprendre `publications`; ajouter les thèmes au besoin |

## 6. Prévisualiser localement

```bash
npm run serve
```

Visiter `http://localhost:8080/en/publications/` et
`http://localhost:8080/fr/publications/` pour confirmer que les deux versions
s'affichent, que le lien de changement de langue fonctionne sur la page de
publication et que l'élément apparaît dans `/en/search/` et `/fr/search/`.

## 7. Soumettre la modification pour révision

Ouvrir une demande de tirage en suivant le
[`CONTRIBUTING.md`](../CONTRIBUTING.md). Dans la mesure du possible, inclure
les deux fichiers linguistiques, EN et FR-CA, dans la même demande.

## Migrer du contenu AICoE existant

Lors de la migration de contenu provenant de productions antérieures de
l'AICoE (présentations, documents Word ou wikis internes) :

1. Convertir le contenu en Markdown en conservant les titres `##`/`###` (le
   `<h1>` de la page provient du champ `title`; ne pas répéter ce titre dans
   le corps du texte).
2. Remplacer les images intégrées par des fichiers sous
   `src/assets/images/` et les référencer avec des chemins relatifs.
3. Indiquer la source et la date d'origine dans une courte ligne à la fin de
   la publication, au besoin, pour assurer la provenance.
4. Faire confirmer la traduction FR-CA par une personne réviseure bilingue
   avant la fusion.
