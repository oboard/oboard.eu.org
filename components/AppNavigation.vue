<script setup>
// @ts-nocheck

defineProps({
  navigationTree: {
    type: Array,
    default: () => [],
  },
});
let closeDrawer = () => {
  let checkedBox = document.getElementById("my-drawer-3");
  if (checkedBox.checked) checkedBox.click();
};
</script>

<template>
  <li
    :class="$route.path === item._path ? 'btn-primary rounded-lg mb-1' : 'mb-1'"
    v-for="(item, index) in navigationTree"
    :key="index"
  >
    <NuxtLink :to="item._path" @click="closeDrawer()">
      {{ item.title }}
    </NuxtLink>
    <AppNavigation
      v-if="item.children"
      :navigation-tree="item.children"
      class="sub-navigation"
    />
  </li>
</template>

<style scoped>
.navigation li {
  list-style-type: "_ ";
}

.navigation ul {
  margin-left: 0.8rem;
}
</style>
