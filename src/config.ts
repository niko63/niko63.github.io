// Réglages généraux du site : modifie ce fichier pour personnaliser.
export const SITE = {
  name: 'Nicolas',
  // Petite phrase affichée sur l'accueil (une version par langue).
  tagline: {
    fr: 'Enseignant-chercheur. Modèles, simulation, voyages et un peu de folie.',
    en: 'Teacher & researcher. Models, simulation, travel and a bit of madness.',
  },
  // Liens externes affichés dans le pied de page (supprime ceux dont tu ne veux pas).
  links: {
    github: 'https://github.com/niko63',
    hal: 'https://hal.science/',
    email: '', // ex. 'prenom@exemple.fr' ; laisse vide pour ne rien afficher
  },
} as const;

export const LANGS = ['fr', 'en'] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = 'fr';
