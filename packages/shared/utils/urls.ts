/**
 * URL Generation Utilities
 * 
 * Functions to generate canonical URLs from facet combinations,
 * respecting the canonical facet order and synonym mapping.
 */

import { facets, FACET_ORDER, hubs, synonyms, indexedCombos, type FacetKey, type HubId } from '../data/taxonomy';

/**
 * Normalize a slug using the synonym mapping.
 * Converts human-readable strings to canonical slugs.
 */
export function normalizeSlug(input: string): string {
  const lower = input.toLowerCase().trim();
  if (synonyms[lower]) {
    return synonyms[lower];
  }
  // Already a slug
  return lower.replace(/\s+/g, '-');
}

/**
 * Find which facet type a value belongs to.
 * Returns the FacetKey or undefined if not found.
 */
export function findFacetType(value: string): FacetKey | undefined {
  const normalized = normalizeSlug(value);
  for (const [key, facet] of Object.entries(facets)) {
    if ((facet.values as readonly string[]).includes(normalized)) {
      return key as FacetKey;
    }
  }
  return undefined;
}

/**
 * Generate a canonical URL for a facet combination.
 * Respects the canonical facet order: meal > method > diet > goal > constraint > ingredient > persona > store > chain
 * 
 * @param hubId - The hub ('meal-prep' or 'high-protein')
 * @param facetPairs - Array of [facetType, facetValue] pairs
 * @returns The canonical URL path
 */
export function generateCanonicalUrl(
  hubId: HubId,
  facetPairs: [FacetKey, string][]
): string {
  const hub = hubs[hubId];
  
  if (facetPairs.length === 0) {
    return hub.path;
  }

  if (facetPairs.length === 1) {
    const [type, value] = facetPairs[0];
    return `${hub.path}${type}/${normalizeSlug(value)}/`;
  }

  // For two-facet combos, sort by canonical order
  const sorted = [...facetPairs].sort((a, b) => {
    const indexA = FACET_ORDER.indexOf(a[0]);
    const indexB = FACET_ORDER.indexOf(b[0]);
    return indexA - indexB;
  });

  // Build URL: /hub/facetA-type/facetA-value/facetB-type/facetB-value/
  const segments = sorted
    .map(([type, value]) => `${type}/${normalizeSlug(value)}`)
    .join('/');

  return `${hub.path}${segments}/`;
}

/**
 * Generate all single-facet paths for a given hub.
 * Used for getStaticPaths() in dynamic routes.
 */
export function generateSingleFacetPaths(hubId: HubId): {
  facetType: string;
  facetValue: string;
}[] {
  const paths: { facetType: string; facetValue: string }[] = [];

  for (const [key, facet] of Object.entries(facets)) {
    for (const value of facet.values) {
      paths.push({
        facetType: key,
        facetValue: value,
      });
    }
  }

  return paths;
}

/**
 * Generate all indexed two-facet combo paths for a hub.
 * Based on the indexedCombos configuration.
 */
export function generateTwoFacetPaths(hubId: HubId): {
  slug: string[];
  facetA: { type: FacetKey; value: string };
  facetB: { type: FacetKey; value: string };
}[] {
  const combos = indexedCombos[hubId];
  if (!combos) return [];

  const paths: {
    slug: string[];
    facetA: { type: FacetKey; value: string };
    facetB: { type: FacetKey; value: string };
  }[] = [];

  for (const [typeA, typeB] of combos) {
    const facetA = facets[typeA as FacetKey];
    const facetB = facets[typeB as FacetKey];

    if (!facetA || !facetB) continue;

    for (const valA of facetA.values) {
      for (const valB of facetB.values) {
        // Ensure canonical order
        const aIndex = FACET_ORDER.indexOf(typeA as FacetKey);
        const bIndex = FACET_ORDER.indexOf(typeB as FacetKey);

        let first: [string, string], second: [string, string];
        if (aIndex <= bIndex) {
          first = [typeA, valA as string];
          second = [typeB, valB as string];
        } else {
          first = [typeB, valB as string];
          second = [typeA, valA as string];
        }

        paths.push({
          slug: [first[0], first[1], second[0], second[1]],
          facetA: { type: first[0] as FacetKey, value: first[1] },
          facetB: { type: second[0] as FacetKey, value: second[1] },
        });
      }
    }
  }

  return paths;
}

/**
 * Convert a facet value slug to display text.
 */
export function slugToDisplay(slug: string): string {
  return slug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

/**
 * Get the site URL for a hub.
 */
export function getSiteUrl(hubId: HubId): string {
  return hubId === 'meal-prep'
    ? 'https://mealprepideas.co'
    : 'https://proteinmeals.co';
}
