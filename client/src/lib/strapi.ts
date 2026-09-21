import type { Property, PropertyType } from "../data/properties";

export const STRAPI_URL =
  (import.meta as unknown as { env?: Record<string, string | undefined> }).env
    ?.VITE_STRAPI_URL || "http://localhost:1337";

interface StrapiMedia {
  id: number;
  url?: string | null;
}

interface StrapiPropertyAttributes {
  PropertyName?: string | null;
  PropertyType?: string | null;
  Price?: string | number | null;
  Location?: string | null;
  Bedrooms?: number | null;
  Bathrooms?: number | null;
  AreaSize?: string | number | null;
  YearBuilt?: string | number | null;
  Description?: string | null;
  Amenities?: unknown;
  Gallery?: StrapiMedia[] | null;
  Thumbanil?: StrapiMedia | null;
  NeighborhoodTitle?: string | null;
  NeighborhoodTagline?: string | null;
  NeighborhoodDescription?: string | null;
  DiningAndCafes?: string | null;
  Shopping?: string | null;
  Schools?: string | null;
  Outdoors?: string | null;
  WalkScore?: number | null;
  UCLATravelTime?: string | null;
  GettyTravelTime?: string | null;
  AgentName?: string | null;
}

interface StrapiItem {
  id: number;
  documentId?: string;
  [key: string]: unknown;
}

function resolveUrl(url?: string | null): string | null {
  if (!url) return null;
  if (url.startsWith("http")) return url;
  return `${STRAPI_URL}${url}`;
}

function toNumber(v: string | number | null | undefined): number {
  if (v === null || v === undefined) return 0;
  const n = typeof v === "number" ? v : Number(v);
  return Number.isFinite(n) ? n : 0;
}

export function mapStrapiProperty(item: StrapiItem & StrapiPropertyAttributes): Property {
  const rawLocation = (item.Location ?? "").trim();
  const parts = rawLocation
    .split(",")
    .map((p) => p.trim())
    .filter(Boolean);
  const location = parts[0] ?? rawLocation;
  const city = parts.slice(1).join(", ");

  const rawType = (item.PropertyType ?? "").toLowerCase() as PropertyType;

  const amenities = Array.isArray(item.Amenities)
    ? (item.Amenities as unknown[]).filter((a): a is string => typeof a === "string")
    : [];

  const seen = new Map<string, string>();
  const pushMedia = (m?: StrapiMedia | null) => {
    const resolved = resolveUrl(m?.url);
    if (resolved && !seen.has(resolved)) seen.set(resolved, resolved);
  };
  pushMedia(item.Thumbanil);
  if (Array.isArray(item.Gallery)) item.Gallery.forEach(pushMedia);

  return {
    id: item.id,
    documentId: item.documentId,
    title: item.PropertyName?.trim() || "Untitled residence",
    price: toNumber(item.Price),
    location,
    city,
    type: rawType || "villa",
    beds: item.Bedrooms ?? 0,
    baths: item.Bathrooms ?? 0,
    sqft: toNumber(item.AreaSize),
    yearBuilt: toNumber(item.YearBuilt),
    amenities,
    featured: true,
    description: item.Description ?? "",
    images: [...seen.values()],
    coordinates: "",
    neighborhoodTitle: item.NeighborhoodTitle ?? undefined,
    neighborhoodTagline: item.NeighborhoodTagline ?? undefined,
    neighborhoodDescription: item.NeighborhoodDescription ?? undefined,
    dining: item.DiningAndCafes ?? undefined,
    shopping: item.Shopping ?? undefined,
    schools: item.Schools ?? undefined,
    outdoors: item.Outdoors ?? undefined,
    walkScore: item.WalkScore ?? undefined,
    uclaTime: item.UCLATravelTime ?? undefined,
    gettyTime: item.GettyTravelTime ?? undefined,
    agentName: item.AgentName ?? undefined,
  };
}

export async function fetchProperties(): Promise<Property[]> {
  const res = await fetch(
    `${STRAPI_URL}/api/properties?populate=*&pagination[pageSize]=100&sort=publishedAt:desc`,
  );
  if (!res.ok) throw new Error(`Strapi responded with ${res.status}`);
  const json = await res.json();
  const data = (json?.data ?? []) as (StrapiItem & StrapiPropertyAttributes)[];
  return data.map(mapStrapiProperty);
}
