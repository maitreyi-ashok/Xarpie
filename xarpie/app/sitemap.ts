import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://xarpie-labs.vercel.app';
  const routes = ['', '/about', '/team', '/operating-model', '/insights', '/industries', '/capabilities', '/contact'];
  return routes.map((r) => ({
    url: `${base}${r}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: r === '' ? 1 : 0.8,
  }));
}
