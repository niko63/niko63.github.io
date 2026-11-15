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

/** Un voyage. */
const voyages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/voyages' }),
  schema: z.object({
    title: z.string(),
    title_en: z.string().optional(),
    country: z.string(),
    country_en: z.string().optional(),
    flag: z.string().default('🌍'),
    cities: z.array(z.string()).default([]),
    start: z.coerce.date(),
    end: z.coerce.date().optional(),
    summary: z.string(),
    summary_en: z.string().optional(),
    // Image de couverture placée dans public/voyages/<nom>/ (ex. « /voyages/islande/cover.jpg »).
    cover: z.string().optional(),
    gallery: z
      .array(z.object({ src: z.string(), alt: z.string(), alt_en: z.string().optional() }))
      .default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { matieres, ressources, recherche, voyages };
