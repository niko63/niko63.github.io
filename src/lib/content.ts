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

const byOrder = <T extends { data: { order: number; title: string } }>(a: T, b: T) =>
  a.data.order - b.data.order || a.data.title.localeCompare(b.data.title);

export async function getPays() {
  return (await getCollection('pays', published)).sort(byOrder);
}

export async function getSejours() {
  return (await getCollection('sejours', published)).sort(byOrder);
}

export async function getCircuits() {
  return (await getCollection('circuits', published)).sort(byOrder);
}
