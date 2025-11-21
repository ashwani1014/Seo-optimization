import { serviceData } from '@/lib/serviceData';
import { blogs } from '@/lib/blogs';

export default async function sitemap() {
  const baseUrl = 'https://postiview.in';

  const staticRoutes = [
    '',
    '/about_us',
    '/portfolio',
    '/services',
    '/blog',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));

  const serviceRoutes = serviceData.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const blogRoutes = blogs.map((blog) => ({
    url: `${baseUrl}/blog-details/${blog.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
