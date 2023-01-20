// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss"],
  plugins: ["plugins/echarts"],
  app: {
    head: {
      title: "一块小板子",
      meta: [
        { name: "description", content: "一块小板子的主页" },
        { name: "keyword", content: "一块小板子" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "favicon.ico" }],
    },
  },
});
