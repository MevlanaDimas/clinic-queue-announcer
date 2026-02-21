module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_PRODUCTION_URL || 'https://queue-app.id',
    generateRobotsTxt: true,
    sitemapSize: 7000,
    exclude: ['/server-sitemap.xml', '/api/:path*'],
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
                disallow: '/api/:path*'
            }
        ]
    }
}