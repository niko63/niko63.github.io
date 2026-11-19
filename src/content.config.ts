import { defineCollection, reference } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

// Chaque collection = un dossier dans src/content/. Un fichier .md = une page / une fiche.
// Les champs terminés par _en sont les traductions anglaises (optionnelles : à défaut, le français est affiché).

/** Une matière enseignée (ex. « Modélisation des processus »). */
const matieres = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/matieres' }),
  schema: z.object({
    title: z.string(),
    title_en: z.string().optional(),
    description: z.string().optional(),
    description_en: z.string().optional(),
    level: z.string().optional(), // ex. « Master 1 »
    emoji: z.string().default('📘'),
    order: z.number().default(100),
    draft: z.boolean().default(false),
  }),
});

/** Un support rattaché à une matière : cours, TD ou TP (PDF et/ou dépôt Git). */
const ressources = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/ressources' }),
  schema: z.object({
    title: z.string(),
    title_en: z.string().optional(),
    matiere: reference('matieres'),
    type: z.enum(['cours', 'td', 'tp']),
    order: z.number().default(100),
    description: z.string().optional(),
    description_en: z.string().optional(),
    // Chemin d'un PDF placé dans public/files/ (ex. « /files/ma-matiere/cours-1.pdf ») ou URL complète.
    file: z.string().optional(),
    // Dépôt Git contenant les exécutables / sources utilisés (facultatif).
    repo: z.url().optional(),
    // Fichiers complémentaires affichés comme boutons (zip, texte, page HTML…), facultatif.
    extras: z
      .array(z.object({ label: z.string(), label_en: z.string().optional(), file: z.string() }))
      .default([]),
    // Date de dernière mise à jour (facultatif).
    updated: z.coerce.date().optional(),
    draft: z.boolean().default(false),
  }),
});

/** Un projet de recherche (ex. MSStudio) avec ses liens (HAL, site, dépôt). */
const recherche = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/recherche' }),
  schema: z.object({
    title: z.string(),
    title_en: z.string().optional(),
    summary: z.string(),
    summary_en: z.string().optional(),
    tags: z.array(z.string()).default([]),
    order: z.number().default(100),
    links: z
      .array(
        z.object({
          label: z.string(),
          label_en: z.string().optional(),
          url: z.url(),
        }),
      )
      .default([]),
    draft: z.boolean().default(false),
  }),
});

const photo = z.object({ src: z.string(), alt: z.string(), alt_en: z.string().optional() });
// [longitude, latitude] : ex. San Francisco = [-122.42, 37.77] (clic droit sur Google Maps > copier les coordonnées, puis inverser).
const coords = z.tuple([z.number(), z.number()]);

/** Un pays visité. Les séjours et circuits s'y rattachent. */
const pays = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pays' }),
  schema: z.object({
    title: z.string(),
    title_en: z.string().optional(),
    // Code ISO numérique du pays (sert à le colorer sur la carte) : 250 = France, 840 = États-Unis…
    iso: z.string(),
    flag: z.string().default('🌍'),
    continent: z.enum(['afrique', 'amerique-nord', 'amerique-sud', 'europe', 'asie', 'oceanie']),
    // Obligatoire seulement pour un très petit pays absent du fond de carte (ex. Liechtenstein) : un point est alors dessiné.
    coords: coords.optional(),
    when: z.string().optional(), // texte libre : « Été 2019 », « 2015 et 2022 »…
    // Fiche pays : tous ces champs sont facultatifs.
    capital: z.string().optional(),
    capital_en: z.string().optional(),
    location: z.string().optional(), // situation, en une phrase courte
    location_en: z.string().optional(),
    area: z.number().optional(), // superficie en km²
    population: z.number().optional(), // nombre d'habitants (arrondi)
    intro: z.string().optional(), // quelques lignes de présentation
    intro_en: z.string().optional(),
    fact: z.string().optional(), // « le saviez-vous ? »
    fact_en: z.string().optional(),
    story: z.string().optional(), // texte personnel (paragraphes séparés par une ligne vide)
    story_en: z.string().optional(),
    summary: z.string().optional(),
    summary_en: z.string().optional(),
    cover: z.string().optional(),
    gallery: z.array(photo).default([]),
    order: z.number().default(100),
    draft: z.boolean().default(false),
  }),
});

/** Un séjour dans une ville ou un lieu (sans boucle), ex. « 1 semaine à San Francisco ». */
const sejours = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/sejours' }),
  schema: z.object({
    title: z.string(),
    title_en: z.string().optional(),
    pays: reference('pays'),
    coords: coords.optional(), // pour poser une épingle sur la carte
    duration: z.string().optional(), // « 1 semaine »
    duration_en: z.string().optional(),
    when: z.string().optional(),
    summary: z.string().optional(),
    summary_en: z.string().optional(),
    cover: z.string().optional(),
    gallery: z.array(photo).default([]),
    order: z.number().default(100),
    draft: z.boolean().default(false),
  }),
});

/** Un circuit (boucle) passant par plusieurs villes ou lieux de visite, dans un ou plusieurs pays. */
const circuits = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/circuits' }),
  schema: z.object({
    title: z.string(),
    title_en: z.string().optional(),
    pays: z.array(reference('pays')).min(1),
    // Les étapes, dans l'ordre. `coords` est facultatif : s'il est donné pour toutes les étapes, le trajet est tracé sur la carte.
    steps: z.array(z.object({ name: z.string(), name_en: z.string().optional(), coords: coords.optional() })).default([]),
    duration: z.string().optional(),
    duration_en: z.string().optional(),
    when: z.string().optional(),
    summary: z.string().optional(),
    summary_en: z.string().optional(),
    cover: z.string().optional(),
    gallery: z.array(photo).default([]),
    order: z.number().default(100),
    draft: z.boolean().default(false),
  }),
});

export const collections = { matieres, ressources, recherche, pays, sejours, circuits };
