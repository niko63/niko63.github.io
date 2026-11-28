import { DEFAULT_LANG, LANGS, type Lang } from '../config';

// Tous les textes fixes de l'interface (menus, titres de sections, boutons).
export const ui = {
  fr: {
    'nav.home': 'Accueil',
    'nav.about': 'Présentation',
    'nav.work': 'Travail',
    'nav.travel': 'Voyages',
    'nav.auvergne': 'Auvergne',
    'nav.fun': 'Fun',
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
    'home.card.travel': 'Pays, villes, circuits, carte interactive.',
    'home.card.auvergne': 'Mes racines, des lieux à voir et des photos.',
    'home.card.fun': 'Ce qui ne va nulle part ailleurs, et la liste s’allonge.',
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
    'res.soon': 'PDF à venir',
    'travel.title': 'Voyages',
    'travel.intro': 'Des pays, des séjours, des circuits, des souvenirs.',
    'travel.all': 'Tous',
    'travel.back': '← Tous les voyages',
    'travel.gallery': 'Photos',
    'travel.cities': 'Étapes',
    'travel.countries': 'Pays',
    'travel.continents': 'Continents',
    'travel.stays': 'Séjours',
    'travel.circuits': 'Circuits',
    'travel.staysIntro': 'Quelques jours ou semaines au même endroit.',
    'travel.circuitsIntro': 'Des boucles à travers plusieurs villes et lieux de visite.',
    'travel.byContinent': 'Par continent',
    'travel.map': 'Carte des voyages',
    'travel.mapHint': 'Clique sur un pays coloré pour ouvrir sa page. La liste complète est juste en dessous.',
    'travel.backCountry': '← Retour au pays',
    'travel.inCountry': 'Dans ce pays',
    'travel.countriesOf': 'Pays traversés',
    'travel.duration': 'Durée',
    'travel.empty': 'Rien ici pour le moment.',
    'country.capital': 'Capitale',
    'country.location': 'Situation',
    'country.area': 'Superficie',
    'country.population': 'Population',
    'country.didYouKnow': 'Un détail',
    'country.story': 'Mon expérience',
    'country.about': 'Le pays',
    'country.note': 'Chiffres arrondis (population : estimations récentes de l’ONU).',
    'country.noteFrance': 'Chiffres arrondis (population : estimations récentes de l’ONU) ; pour la France, métropole uniquement.',
    'map.world': 'Monde',
    'map.europe': 'Europe',
    'map.na': 'Amérique du Nord',
    'map.afme': 'Afrique & Moyen-Orient',
    'continent.afrique': 'Afrique',
    'continent.amerique-nord': 'Amérique du Nord',
    'continent.amerique-sud': 'Amérique du Sud',
    'continent.europe': 'Europe',
    'continent.asie': 'Asie',
    'continent.oceanie': 'Océanie',
    'fun.title': 'Fun',
    'search.title': 'Recherche',
    'search.hint': 'La recherche fonctionne sur le site publié (après « npm run build »).',
    'footer.rights': 'Site personnel',
    'footer.built': 'Construit avec Astro',
    'footer.privacy': 'Confidentialité',
    'notfound.title': 'Page introuvable',
    'notfound.text': "Cette page n'existe pas (ou plus).",
    'notfound.home': "Retour à l'accueil",
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.work': 'Work',
    'nav.travel': 'Travel',
    'nav.auvergne': 'Auvergne',
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
    'home.card.travel': 'Countries, cities, circuits, interactive map.',
    'home.card.auvergne': 'My roots, places to see and photos.',
    'home.card.fun': 'What fits nowhere else, and the list keeps growing.',
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
    'res.soon': 'PDF coming soon',
    'travel.title': 'Travel',
    'travel.intro': 'Countries, stays, circuits, memories.',
    'travel.all': 'All',
    'travel.back': '← All trips',
    'travel.gallery': 'Photos',
    'travel.cities': 'Stops',
    'travel.countries': 'Countries',
    'travel.continents': 'Continents',
    'travel.stays': 'Stays',
    'travel.circuits': 'Circuits',
    'travel.staysIntro': 'A few days or weeks in one place.',
    'travel.circuitsIntro': 'Loops through several cities and places to visit.',
    'travel.byContinent': 'By continent',
    'travel.map': 'Travel map',
    'travel.mapHint': 'Click a coloured country to open its page. The full list is just below.',
    'travel.backCountry': '← Back to the country',
    'travel.inCountry': 'In this country',
    'travel.countriesOf': 'Countries visited',
    'travel.duration': 'Duration',
    'travel.empty': 'Nothing here yet.',
    'country.capital': 'Capital',
    'country.location': 'Location',
    'country.area': 'Area',
    'country.population': 'Population',
    'country.didYouKnow': 'One detail',
    'country.story': 'My experience',
    'country.about': 'The country',
    'country.note': 'Rounded figures (population: recent UN estimates).',
    'country.noteFrance': 'Rounded figures (population: recent UN estimates); for France, mainland only.',
    'map.world': 'World',
    'map.europe': 'Europe',
    'map.na': 'North America',
    'map.afme': 'Africa & Middle East',
    'continent.afrique': 'Africa',
    'continent.amerique-nord': 'North America',
    'continent.amerique-sud': 'South America',
    'continent.europe': 'Europe',
    'continent.asie': 'Asia',
    'continent.oceanie': 'Oceania',
    'fun.title': 'Fun',
    'search.title': 'Search',
    'search.hint': 'Search works on the published site (after "npm run build").',
    'footer.rights': 'Personal website',
    'footer.built': 'Built with Astro',
    'footer.privacy': 'Privacy',
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
