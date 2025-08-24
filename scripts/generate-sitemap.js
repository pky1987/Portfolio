// scripts/generate-sitemap.js
const fs = require('fs');
const path = require('path');

// Your domain name
const DOMAIN = 'https://yourdomain.com';

// Pages to include in sitemap
const pages = [
  '',
  '/projects',
  '/skills',
  '/about',
  '/contact'
];

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map((page) => {
      return `
    <url>
      <loc>${DOMAIN}${page}</loc>
      <changefreq>daily</changefreq>
      <priority>0.7</priority>
    </url>`;
    })
    .join('')}
</urlset>`;

  fs.writeFileSync('public/sitemap.xml', sitemap);
  console.log('Sitemap generated successfully!');
};

generateSitemap();