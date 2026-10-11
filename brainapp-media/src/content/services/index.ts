import type { ServiceContent } from "@/content/types";
import { brandServices } from "./group-brand";
import { digitalServices } from "./group-digital";
import { paidServices } from "./group-paid";
import { webServices } from "./group-web";

const allServices: ServiceContent[] = [
  ...digitalServices,
  ...paidServices,
  ...webServices,
  ...brandServices,
];

export const servicesRecord: Record<string, ServiceContent> = Object.fromEntries(
  allServices.map((service) => [service.slug, service]),
);

export function getAllServices(): ServiceContent[] {
  return [...allServices];
}

export function getServiceBySlug(slug: string): ServiceContent | undefined {
  return servicesRecord[slug];
}
