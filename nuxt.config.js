export default {
  ssr: false,
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
