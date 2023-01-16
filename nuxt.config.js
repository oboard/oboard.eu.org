export default {
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/pwa"],
  pwa: {
    icon: {
      source: "/icon2.png", //路径为static中的icon2.png
      fileName: "icon2.png",
    },

    manifest: {
      name: "oboard",
      short_name: "oboard",
      lang: "zh-CN",
      theme_color: "#fff",
      description: "一块小板子",
    },
    // workbox: {        //开发环境取消注释,调试pwa, 打包时注释
    //   dev: true
    // }
  },
};
