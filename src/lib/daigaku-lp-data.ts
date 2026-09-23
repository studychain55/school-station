import universitiesJson from "@/data/daigaku-lp/universities.generated.json";
import type { University } from "@/lib/daigaku-lp";

export const universities = universitiesJson as University[];

export function findUniversity(slug: string | string[] | undefined) {
  if (typeof slug !== "string") return undefined;
  return universities.find((university) => university.slug === slug);
}

export function findFaculty(university: University | undefined, slug: string | string[] | undefined) {
  if (!university || typeof slug !== "string") return undefined;
  return university.faculties.find((faculty) => faculty.slug === slug);
}
