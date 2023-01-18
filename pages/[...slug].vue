<template>
  <main class="prose text-left w-full">
    <ContentRenderer v-if="data" :value="data" />
  </main>
</template>

<script setup>// @ts-nocheck

// @ts-ignore
const { path } = useRoute()

// @ts-ignore
const { data } = await useAsyncData(`content-${path}`, () => {
  // @ts-ignore
  return queryContent().where({ _path: path }).findOne()
})
</script>