export default {
  ssr: true,
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss"],
  content: {
    highlight: {
      preload: [
        'javascript',
        'typescript',
        'vue',
        'vue-html'
      ],
    },
  },
};
