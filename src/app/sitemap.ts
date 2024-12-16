import { MetadataRoute } from "next";

const baseUrl = "https://creolepro.com";

export default async function sitemap() {
  const routes = ["", "/careers", "/login"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes];
}
