export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/*", "/admin/*"],
      },
    ],
    sitemap: "https://creolepro.com/sitemap.xml",
    host: "https://creolepro.com",
  };
}
