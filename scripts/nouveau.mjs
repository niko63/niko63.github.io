#!/usr/bin/env node
// Crée une nouvelle fiche à partir d'un modèle.
//   npm run nouveau -- voyage "Islande 2027"
//   npm run nouveau -- matiere "Gestion de projet"
//   npm run nouveau -- ressource "Cours 2 : BPMN" --matiere=exemple --type=cours
//   npm run nouveau -- recherche "Mon projet"
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const targets = {
  matiere: 'src/content/matieres',
  ressource: 'src/content/ressources',
  recherche: 'src/content/recherche',
  voyage: 'src/content/voyages',
};

const [kind, title, ...rest] = process.argv.slice(2);
const flags = Object.fromEntries(rest.filter((a) => a.startsWith('--')).map((a) => a.slice(2).split('=')));

if (!kind || !title || !targets[kind]) {
  console.log('Usage : npm run nouveau -- <matiere|ressource|recherche|voyage> "Titre" [--matiere=slug --type=cours|td|tp]');
  process.exit(1);
}

const slug = (s) =>
  s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

if (kind === 'ressource') {
  flags.matiere ??= '';
  flags.type ??= 'cours';
  if (!flags.matiere) {
    console.log('Pour une ressource, précise la matière : --matiere=nom-du-fichier-de-la-matiere');
    process.exit(1);
  }
  if (!['cours', 'td', 'tp'].includes(flags.type)) {
    console.log('--type doit valoir cours, td ou tp');
    process.exit(1);
  }
}

const s = slug(title);
const file = join(root, targets[kind], `${kind === 'ressource' ? `${flags.matiere}-${s}` : s}.md`);
if (existsSync(file)) {
  console.log(`Existe déjà : ${file}`);
  process.exit(1);
}

const date = new Date().toISOString().slice(0, 10);
const out = readFileSync(join(root, 'templates', `${kind}.md`), 'utf8')
  .replaceAll('{{TITLE}}', title.replaceAll('"', '\\"'))
  .replaceAll('{{SLUG}}', s)
  .replaceAll('{{DATE}}', date)
  .replaceAll('{{MATIERE}}', flags.matiere ?? '')
  .replaceAll('{{TYPE}}', flags.type ?? '');

mkdirSync(dirname(file), { recursive: true });
writeFileSync(file, out);
if (kind === 'voyage') mkdirSync(join(root, 'public/voyages', s), { recursive: true });
if (kind === 'ressource') mkdirSync(join(root, 'public/files', flags.matiere), { recursive: true });
console.log(`Créé : ${file.replace(root + '/', '')}`);
