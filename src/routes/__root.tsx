import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { LINKS, SITE } from "@/lib/site";
import appCss from "../styles.css?url";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: SITE.name,
      url: SITE.url,
      description: SITE.description,
      publisher: { "@id": `${SITE.url}/#org` },
    },
    {
      "@type": "Organization",
      "@id": `${SITE.url}/#org`,
      name: SITE.org,
      url: SITE.url,
      founder: { "@id": `${SITE.url}/#author` },
    },
    {
      "@type": "Person",
      "@id": `${SITE.url}/#author`,
      name: SITE.author,
      jobTitle: "Architect of the Courage Economy",
      url: LINKS.nameSite,
      sameAs: [LINKS.linkedin, LINKS.youtube, LINKS.substack, LINKS.nameSite],
    },
    {
      "@type": "Book",
      name: SITE.fullTitle,
      author: { "@id": `${SITE.url}/#author` },
      url: `${SITE.url}/book`,
      datePublished: SITE.releaseIso,
      image: `${SITE.url}/brand/book-cover.jpg`,
      sameAs: LINKS.amazon,
    },
  ],
};

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `${SITE.fullTitle} | Thane Bellomo` },
      { name: "description", content: SITE.description },
      { name: "author", content: SITE.author },
      { name: "theme-color", content: "#0a1f3d" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: SITE.name },
      { property: "og:title", content: `${SITE.fullTitle} | Thane Bellomo` },
      { property: "og:description", content: SITE.description },
      { property: "og:url", content: SITE.url },
      { property: "og:image", content: `${SITE.url}/og.jpg` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: `${SITE.fullTitle} | Thane Bellomo` },
      { name: "twitter:description", content: SITE.description },
      { name: "twitter:image", content: `${SITE.url}/og.jpg` },
    ],
    links: [
      { rel: "canonical", href: SITE.url },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500;1,600&display=swap",
      },
    ],
  }),
  component: () => (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-navy font-sans text-paper">
        <PreviewHostBridge />
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
});
