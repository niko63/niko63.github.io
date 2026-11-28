// Réglages généraux du site : modifie ce fichier pour personnaliser.
export const SITE = {
  name: 'Nicolas',
  // Petite phrase affichée sur l'accueil (une version par langue).
  tagline: {
    fr: 'Enseignant-chercheur. Modèles, simulation, voyages et n’importe quoi.',
    en: 'Lecturer & researcher. Models, simulation, travel and random nonsense.',
  },
  // Mesure d'audience (GoatCounter, sans cookie). Colle ici le « code » choisi à l'inscription sur goatcounter.com
  // (ex. 'niko63' pour https://niko63.goatcounter.com). Laisse vide pour désactiver tout suivi.
  analytics: { goatcounter: 'niko63' },
  // Liens externes affichés dans le pied de page (supprime ceux dont tu ne veux pas).
  links: {
    github: 'https://github.com/niko63',
    hal: 'https://cv.hal.science/nicolas-daclin',
    orcid: 'https://orcid.org/0000-0002-8610-1886',
    email: '', // ex. 'prenom@exemple.fr' ; laisse vide pour ne rien afficher
  },
} as const;

export const LANGS = ['fr', 'en'] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = 'fr';
