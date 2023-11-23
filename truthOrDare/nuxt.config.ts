// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },

  modules: ["@nuxtjs/tailwindcss"],
  imports: {
    presets: [
      {
        from: 'vitest',
        imports: ['describe', "expect", "it", "test", "beforeEach", "afterEach", "afterAll", "beforeAll"]
      },
    ]
  },

})