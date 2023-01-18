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
  <div v-for="(item, index) in navigationTree">
    <div v-if="item.children" class="border-l border-l-primary pl-2 mt-4">
      {{ item.title }}
      <div class="ml-2 mt-2">
        <AppNavigation
          :navigation-tree="item.children"
        />
      </div>
    </div>
    <li
      v-else
      :class="
        $route.path === item._path ? 'btn-primary rounded-lg mb-1' : 'mb-1'
      "
      :key="index"
    >
      <NuxtLink :to="item._path" @click="closeDrawer()">
        {{ item.title }}
      </NuxtLink>
    </li>
  </div>
</template>