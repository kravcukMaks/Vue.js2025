export default defineNuxtConfig({
  compatibilityDate: '2025-12-12',
  devtools: { enabled: true },

  modules: ['@nuxt/ui', '@nuxtjs/sitemap', '@nuxtjs/robots'],

  site: {
    url: 'http://localhost:3000',
    name: 'Nuxt Course Blog'
  },

  sitemap: {
    urls: ['/', '/blog', '/about']
  },

  robots: {
  groups: [
    {
      userAgent: '*',
      allow: ['/', '/blog', '/about'],
      disallow: ['/api']
    }
  ]
}
})
