/**
 * Generate Google Maps search URL for a school
 * Uses school name and optional address for better accuracy
 */
export function generateGoogleMapsUrl(school: { name: string; address?: string | null }): string {
  const query = school.address ? `${school.name} ${school.address}` : school.name;
  const encodedQuery = encodeURIComponent(query);
  return `https://www.google.com/maps/search/${encodedQuery}`;
}
