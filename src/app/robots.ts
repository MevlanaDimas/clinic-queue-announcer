import { MetadataRoute } from "next";



export default function robots(): MetadataRoute.Robots {
    const productionUrl = process.env.NEXT_PUBLIC_PRODUCTION_URL || 'https://queue-app.id';

    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: '/api/:path*'
            }
        ],
        sitemap: `${productionUrl}/sitemap.xml`
    }
}