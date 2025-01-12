const fs = require('fs')
const path = require('path')

const baseUrl = 'https://rabiulsohel.xyz'
const staticRoutes = ['', 'about', 'contact', 'blog', 'courses']

const sitemap = `
<?xml version = "1.0" encoding = "UTF-8"?>
<urlset xmlns = "http://www.sitemap.org/schemas/sitemap/0.9">
${
    staticRoutes.map((route)=> `
    <url>
        <loc>${baseUrl}/${route}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
    </url>
    `)
    .join('')
}
</urlset>
`;
fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), sitemap)