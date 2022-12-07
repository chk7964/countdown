/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://tools.fontbasket.com',
  generateRobotsTxt: true, // (optional)
  changefreq: 'weekly',
  priority: 0.5,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  exclude: ['/test'],


  transform: async (config, path) => {
    return {
      loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    }
  },
  additionalPaths: async (config) => [
    await config.transform(config, 'kruti-dev/kruti-dev-to-unicode'),
    await config.transform(config, 'kruti-dev/unicode-to-kruti-dev')
  ],

  
  // ...other options
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "SemrushBot",
        disallow: "/",
      }
    ]
  }


  
}
