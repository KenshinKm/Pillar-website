import type { MetadataRoute } from "next";

const SITE_URL = "https://pillarwebagency.com";
const ROUTES = ["", "/services", "/process", "/results", "/work", "/privacy"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return ROUTES.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : path === "/privacy" ? 0.3 : 0.8,
  }));
}
