import { getCollection } from 'astro:content';

// Les fiches marquées « draft: true » sont ignorées sur le site publié.
const published = <T extends { data: { draft: boolean } }>(e: T) => !e.data.draft;

export async function getMatieres() {
  return (await getCollection('matieres', published)).sort((a, b) => a.data.order - b.data.order || a.data.title.localeCompare(b.data.title));
}

export async function getRessources() {
  return (await getCollection('ressources', published)).sort((a, b) => a.data.order - b.data.order);
}

export async function getRecherche() {
  return (await getCollection('recherche', published)).sort((a, b) => a.data.order - b.data.order);
}

export async function getVoyages() {
  return (await getCollection('voyages', published)).sort((a, b) => b.data.start.getTime() - a.data.start.getTime());
}
