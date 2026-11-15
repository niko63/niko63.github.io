import { DEFAULT_LANG, LANGS, type Lang } from '../config';

// Tous les textes fixes de l'interface (menus, titres de sections, boutons).
export const ui = {
  fr: {
    'nav.home': 'Accueil',
    'nav.about': 'Présentation',
    'nav.work': 'Travail',
    'nav.travel': 'Voyages',
    'nav.fun': 'Folie',
    'nav.search': 'Rechercher',
    'nav.menu': 'Menu',
    'skip': 'Aller au contenu',
    'theme.toggle': 'Changer de thème',
    'theme.auto': 'Thème : automatique',
    'theme.light': 'Thème : clair',
    'theme.dark': 'Thème : sombre',
    'lang.switch': 'English version',
    'lang.switchShort': 'EN',
    'home.latest': 'Dernières ressources',
    'home.latestTrip': 'Dernier voyage',
    'home.explore': 'Explorer',
    'home.card.about': 'Qui je suis, ce que je fais.',
    'home.card.work': 'Enseignement (cours, TD, TP) et recherche.',
    'home.card.travel': 'Pays, villes, carnets de route.',
    'home.card.fun': 'Tout ce qui ne rentre dans aucune case.',
    'about.title': 'Présentation',
    'work.title': 'Travail',
    'work.teaching': 'Enseignement',
    'work.teachingIntro': 'Supports de cours, travaux dirigés et travaux pratiques, classés par matière.',
    'work.research': 'Recherche',
    'work.researchIntro': 'Projets, outils et publications.',
    'work.back': '← Retour au travail',
    'work.empty': 'Rien ici pour le moment.',
    'type.cours': 'Cours',
    'type.td': 'TD',
    'type.tp': 'TP',
    'res.pdf': 'Télécharger le PDF',
    'res.repo': 'Voir le dépôt',
    'res.updated': 'Mis à jour le',
    'travel.title': 'Voyages',
    'travel.intro': 'Des pays, des villes, des souvenirs.',
    'travel.all': 'Tous',
    'travel.back': '← Tous les voyages',
    'travel.gallery': 'Photos',
    'travel.cities': 'Étapes',
    'fun.title': 'Folie',
    'search.title': 'Recherche',
    'search.hint': 'La recherche fonctionne sur le site publié (après « npm run build »).',
    'footer.rights': 'Site personnel',
    'footer.built': 'Construit avec Astro',
    'notfound.title': 'Page introuvable',
    'notfound.text': "Cette page n'existe pas (ou plus).",
    'notfound.home': "Retour à l'accueil",
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.work': 'Work',
    'nav.travel': 'Travel',
    'nav.fun': 'Fun',
    'nav.search': 'Search',
    'nav.menu': 'Menu',
    'skip': 'Skip to content',
    'theme.toggle': 'Toggle theme',
    'theme.auto': 'Theme: automatic',
    'theme.light': 'Theme: light',
    'theme.dark': 'Theme: dark',
    'lang.switch': 'Version française',
    'lang.switchShort': 'FR',
    'home.latest': 'Latest resources',
    'home.latestTrip': 'Latest trip',
    'home.explore': 'Explore',
    'home.card.about': 'Who I am, what I do.',
    'home.card.work': 'Teaching (lectures, tutorials, labs) and research.',
    'home.card.travel': 'Countries, cities, travel notes.',
    'home.card.fun': "Everything that doesn't fit anywhere else.",
    'about.title': 'About',
    'work.title': 'Work',
    'work.teaching': 'Teaching',
    'work.teachingIntro': 'Lecture notes, tutorials and lab sessions, organised by subject.',
    'work.research': 'Research',
    'work.researchIntro': 'Projects, tools and publications.',
    'work.back': '← Back to work',
    'work.empty': 'Nothing here yet.',
    'type.cours': 'Lectures',
    'type.td': 'Tutorials',
    'type.tp': 'Labs',
    'res.pdf': 'Download PDF',
    'res.repo': 'Open repository',
    'res.updated': 'Updated on',
    'travel.title': 'Travel',
    'travel.intro': 'Countries, cities, memories.',
    'travel.all': 'All',
    'travel.back': '← All trips',
    'travel.gallery': 'Photos',
    'travel.cities': 'Stops',
    'fun.title': 'Fun',
    'search.title': 'Search',
    'search.hint': 'Search works on the published site (after "npm run build").',
    'footer.rights': 'Personal website',
    'footer.built': 'Built with Astro',
    'notfound.title': 'Page not found',
    'notfound.text': "This page doesn't exist (anymore).",
    'notfound.home': 'Back to home',
  },
} as const satisfies Record<Lang, Record<string, string>>;

export type UiKey = keyof (typeof ui)['fr'];

export function t(lang: Lang, key: UiKey): string {
  return ui[lang][key];
}

/** Renvoie la version anglaise d'un champ (`title_en`) si elle existe, sinon la version française. */
export function pick<T extends Record<string, unknown>>(data: T, field: string, lang: Lang): string {
  const en = data[`${field}_en`];
  if (lang === 'en' && typeof en === 'string' && en.length > 0) return en;
  const base = data[field];
  return typeof base === 'string' ? base : '';
}

export function isLang(x: string | undefined): x is Lang {
  return !!x && (LANGS as readonly string[]).includes(x);
}

/** Génère l'URL d'une page en tenant compte de la langue et du dossier de base. */
export function href(lang: Lang, path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.replace(/^\/|\/$/g, '');
  return `${base}/${lang}/${clean ? clean + '/' : ''}`;
}

/** URL d'un fichier public (PDF, image) en tenant compte du dossier de base. */
export function asset(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}

export const localeTag: Record<Lang, string> = { fr: 'fr-FR', en: 'en-US' };

export function formatDate(d: Date, lang: Lang, opts: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }) {
  return new Intl.DateTimeFormat(localeTag[lang], opts).format(d);
}

export { DEFAULT_LANG };
