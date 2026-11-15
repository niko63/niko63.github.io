# Mon site personnel

Site statique, bilingue (français / anglais), avec thème clair/sombre automatique.
Technologies : **Astro** + **TypeScript** + **Tailwind CSS**. Pas de base de données, pas de serveur : le site est composé de fichiers simples, donc très difficile à pirater et gratuit à héberger.

## Ce qu'il y a dans le site

| Page | Adresse | Contenu |
|---|---|---|
| Accueil | `/fr/` · `/en/` | Présentation courte, accès aux sections, dernières ressources, dernier voyage |
| Présentation | `/fr/about/` | Texte libre, à écrire dans `src/pages/[lang]/about.astro` |
| Travail | `/fr/work/` | Enseignement (matières → cours / TD / TP) et recherche (MSStudio, liens HAL) |
| Voyages | `/fr/travel/` | Une fiche par voyage, filtre par pays, galerie photo |
| Folie | `/fr/fun/` | Jeux et surprises (essaie le code Konami !) |
| Recherche | `/fr/search/` | Recherche dans tout le site (disponible après `npm run build`) |

## Installer et lancer sur ton ordinateur

1. Installe **Node.js 22 ou plus** (https://nodejs.org, version « LTS ») et **Git** (https://git-scm.com).
2. Dans un terminal, place-toi dans ce dossier, puis :

```bash
npm install        # une seule fois : télécharge les outils
npm run dev        # lance le site sur http://localhost:4321 (se met à jour en direct)
```

Pour tester la version finale, avec la recherche :

```bash
npm run build      # vérifie et construit le site dans le dossier dist/
npm run preview    # l'affiche sur http://localhost:4321
```

## Ajouter du contenu (le quotidien)

Tout le contenu est dans `src/content/`. **Un fichier `.md` = une fiche.** Tu peux les créer à la main ou avec la commande `nouveau` qui remplit un modèle :

```bash
npm run nouveau -- matiere   "Gestion de projet"
npm run nouveau -- ressource "TD 2 : Cas pratique" --matiere=gestion-de-projet --type=td
npm run nouveau -- voyage    "Islande 2027"
npm run nouveau -- recherche "Nouveau projet"
```

Les modèles sont dans `templates/` : tu peux aussi les copier à la main.

### Ajouter un cours, un TD ou un TP
1. Crée la matière (une seule fois) : `src/content/matieres/ma-matiere.md`.
2. Copie ton PDF dans `public/files/ma-matiere/` (ex. `cours-2.pdf`).
3. Crée la fiche : `npm run nouveau -- ressource "Cours 2" --matiere=ma-matiere --type=cours`, puis vérifie la ligne `file:` pour qu'elle pointe vers ton PDF.
4. Un dépôt Git d'exécutables ? Ajoute `repo: "https://github.com/..."` : un bouton « Voir le dépôt » apparaît.

Pas de corrigés sur le site : tu ne publies que ce que tu mets dans `public/files/`. **Tout ce qui est dans `public/` est accessible à n'importe qui sur Internet.**

### Ajouter un voyage
1. `npm run nouveau -- voyage "Nom du voyage"` crée la fiche et le dossier `public/voyages/nom-du-voyage/`.
2. Mets tes photos dans ce dossier (idéalement réduites à ~1600 px de large, en .jpg ou .webp) et décommente les lignes `cover:` et `gallery:` de la fiche.
3. Écris le récit sous la ligne `---` du bas, en Markdown.

### Traductions
Les champs qui finissent par `_en` (`title_en`, `summary_en`…) sont les versions anglaises. S'ils sont vides, le français est affiché. Le texte libre (sous le deuxième `---`) est identique dans les deux langues : pour le bilingue, écris les deux versions l'une sous l'autre.
Les textes fixes de l'interface (menus, boutons) sont dans `src/i18n/ui.ts`.

### Masquer temporairement une fiche
Ajoute `draft: true` dans l'en-tête de la fiche : elle n'apparaît plus sur le site mais reste dans le dépôt.

## Personnaliser

- **Nom, phrase d'accueil, liens GitHub/HAL/e-mail** : `src/config.ts`
- **Couleurs** : `src/styles/global.css` (variables `--accent`, `--bg`… en haut du fichier, une série pour le clair, une pour le sombre)
- **Logo / icône** : remplace `public/favicon.svg` (le « N » actuel est provisoire) et le carré d'initiale dans `src/components/Header.astro`
- **Page Folie** : listes d'excuses et de résultats du dé en haut de `src/pages/[lang]/fun.astro`
- **Menu** : liste `items` dans `src/components/Header.astro`

## Mettre sur Git / GitHub

Une seule fois :

```bash
git init -b main
git add .
git commit -m "Premier jet du site"
```

Sur https://github.com/new, crée un dépôt vide nommé **`niko63.github.io`** (c'est ce nom précis qui donne l'adresse `https://niko63.github.io`), sans README. Puis :

```bash
git remote add origin https://github.com/niko63/niko63.github.io.git
git push -u origin main
```

Ensuite, à chaque évolution : modifie, puis `git add . && git commit -m "Ce que j'ai changé" && git push`.

## Mettre en ligne gratuitement (GitHub Pages)

1. Sur GitHub, dans ton dépôt : **Settings → Pages → Source : « GitHub Actions »**.
2. C'est tout : à chaque `git push`, le fichier `.github/workflows/deploy.yml` construit et publie le site. Suis l'avancement dans l'onglet **Actions**. Le site est en ligne en 1 à 2 minutes.

Pas de HTTPS à configurer, aucune ouverture de ta box : tout est géré par GitHub.

**Nom de domaine personnel (facultatif)** : après achat, **Settings → Pages → Custom domain**, puis suis les indications DNS de GitHub. Dans `.github/workflows/deploy.yml`, remplace la valeur de `SITE_URL` par ton domaine.

**Dépôt avec un autre nom** (ex. `mon-site`) : le site sera sur `https://niko63.github.io/mon-site/`. Ajoute alors `BASE_PATH: /mon-site` à côté de `SITE_URL` dans le workflow.

**Alternative** : Cloudflare Pages (gratuit aussi) : connecte le dépôt, commande de build `npm run build`, dossier de sortie `dist`. Le fichier `public/_headers` y ajoute des en-têtes de sécurité.

## Sécurité et accessibilité

- Site 100 % statique : aucune base de données, aucun formulaire, aucun cookie, aucun traceur.
- Accessibilité (principes du RGAA / WCAG, les règles françaises et internationales d'accessibilité web) : lien « aller au contenu », navigation au clavier avec focus visible, contrastes vérifiés dans les deux thèmes, textes alternatifs sur les images, langue de page déclarée, animations désactivées si l'appareil demande moins de mouvement.
- **À faire de ton côté** : décris toujours tes photos dans `alt:`, et garde des titres de PDF explicites.

## Structure du projet

```
src/
  config.ts               nom, phrase d'accueil, liens
  content.config.ts       règles des fiches (champs autorisés)
  content/                TON CONTENU : matieres/ ressources/ recherche/ voyages/
  pages/[lang]/           les pages (fr et en générées automatiquement)
  components/ layouts/    en-tête, pied de page, structure commune
  i18n/ui.ts              textes fixes FR/EN
  styles/global.css       couleurs et styles
public/                   fichiers servis tels quels : PDF (files/), photos (voyages/), icône
templates/                modèles de fiches
scripts/nouveau.mjs       commande « npm run nouveau »
.github/workflows/        publication automatique
```

## Problèmes fréquents

- **`npm run build` échoue avec une erreur sur une fiche** : l'erreur indique le fichier et le champ fautif (souvent un guillemet manquant ou une `matiere:` qui ne correspond à aucun fichier de `src/content/matieres/`).
- **La recherche ne trouve rien en `npm run dev`** : normal, elle n'est construite que par `npm run build`.
- **Un PDF n'apparaît pas** : vérifie que le chemin `file:` commence par `/files/` et que le fichier est bien dans `public/files/`.
