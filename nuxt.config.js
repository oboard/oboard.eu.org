export default {
  ssr: true,
  modules: ["@nuxtjs/tailwindcss"],
  buildModules: ["@nuxtjs/pwa"],
  pwa: {
    icon: false, // disables the icon module
    manifest: {
      name: "My Awesome App",
      lang: "zh",
      // useWebmanifestExtension: false,
      short_name: 'Nuxt.js PWA',
      display: 'standalone',
    },
    meta: {
      mobileAppIOS: true,
    },
  },
};
