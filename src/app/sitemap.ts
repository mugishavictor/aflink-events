import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/mdx";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://aflinkevents.com";

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/work",
    "/clients",
    "/insights",
    "/request-quote",
    "/contact",
  ].map((r) => ({ url: `${base}${r}`, lastModified: new Date() }));

  const insights = getAllSlugs("insights").map((slug) => ({
    url: `${base}/insights/${slug}`,
    lastModified: new Date(),
  }));

  const work = getAllSlugs("work").map((slug) => ({
    url: `${base}/work/${slug}`,
    lastModified: new Date(),
  }));

  const services = getAllSlugs("services").map((slug) => ({
    url: `${base}/services/${slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...insights, ...work, ...services];
}
