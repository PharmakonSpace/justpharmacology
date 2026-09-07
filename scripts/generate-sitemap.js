import fs from 'fs';
import { allLessons } from '../src/data/pharmacology/module-registry.js';

const BASE_URL = 'https://justpharmacology.com';
const TODAY = new Date().toISOString().split('T')[0];

const staticRoutes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/learn', priority: '0.9', changefreq: 'weekly' },
  { path: '/animations', priority: '0.9', changefreq: 'weekly' },
  { path: '/videos', priority: '0.8', changefreq: 'weekly' },
  { path: '/quiz', priority: '0.8', changefreq: 'weekly' },
  { path: '/revision', priority: '0.8', changefreq: 'weekly' },
  { path: '/about', priority: '0.7', changefreq: 'monthly' },
  { path: '/search', priority: '0.6', changefreq: 'monthly' },
];

let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

for (const r of staticRoutes) {
  xml += `  <url>\n    <loc>${BASE_URL}${r.path}</loc>\n    <lastmod>${TODAY}</lastmod>\n    <changefreq>${r.changefreq}</changefreq>\n    <priority>${r.priority}</priority>\n  </url>\n`;
}

for (const lesson of allLessons) {
  const lastmod = lesson.dateAdded || TODAY;
  xml += `  <url>\n    <loc>${BASE_URL}/lesson/${lesson.id}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.85</priority>\n  </url>\n`;
}

xml += `</urlset>\n`;

fs.writeFileSync('./public/sitemap.xml', xml, 'utf-8');
console.log(`Successfully generated sitemap with ${staticRoutes.length + allLessons.length} URLs`);
