// Fond de carte généré à la construction du site (aucune requête externe au chargement).
import { geoNaturalEarth1, geoPath } from 'd3-geo';
import { feature } from 'topojson-client';
import world from 'world-atlas/countries-110m.json';

export const W = 960;
export const H = 500;
// Zone visible du monde (sans l'Antarctique, supprimé) : on rogne le vide en bas.
const VH = 410;

const projection = geoNaturalEarth1().fitExtent(
  [
    [6, 6],
    [W - 6, H - 6],
  ],
  { type: 'Sphere' },
);
const path = geoPath(projection).digits(1);

const features = (feature(world as any, (world as any).objects.countries) as any).features as {
  id?: string | number;
  geometry: any;
}[];

/** Tous les pays du fond de carte : identifiant ISO numérique (3 chiffres) + tracé SVG. */
export const countryPaths = features
  .filter((f) => f.id !== undefined && f.id !== '010') // sans l'Antarctique
  .map((f) => ({ id: String(f.id).padStart(3, '0'), d: path(f as any) ?? '' }))
  .filter((c) => c.d);

export const spherePath = path({ type: 'Sphere' } as any) ?? '';

/** Longitude/latitude → coordonnées du dessin. */
export function project(lonLat: [number, number]): [number, number] {
  const p = projection(lonLat);
  return p ? [Math.round(p[0] * 10) / 10, Math.round(p[1] * 10) / 10] : [0, 0];
}

/** viewBox centré sur un rectangle géographique, au même rapport largeur/hauteur que le monde. */
function box(lon0: number, lat0: number, lon1: number, lat1: number) {
  const pts: [number, number][] = [];
  for (let i = 0; i <= 4; i++)
    for (let j = 0; j <= 4; j++) pts.push(project([lon0 + ((lon1 - lon0) * i) / 4, lat0 + ((lat1 - lat0) * j) / 4]));
  const xs = pts.map((p) => p[0]);
  const ys = pts.map((p) => p[1]);
  let w = Math.max(...xs) - Math.min(...xs);
  let h = Math.max(...ys) - Math.min(...ys);
  const cx = (Math.max(...xs) + Math.min(...xs)) / 2;
  const cy = (Math.max(...ys) + Math.min(...ys)) / 2;
  const ratio = W / VH;
  if (w / h < ratio) w = h * ratio;
  else h = w / ratio;
  w *= 1.08;
  h *= 1.08;
  return [cx - w / 2, cy - h / 2, w, h].map((n) => Math.round(n * 10) / 10);
}

export const regions = [
  { key: 'map.world', view: [0, 14, W, VH] },
  { key: 'map.europe', view: box(-12, 34, 30, 58) },
  { key: 'map.na', view: box(-128, 14, -64, 50) },
  { key: 'map.afme', view: box(-12, 8, 50, 42) },
] as const;
