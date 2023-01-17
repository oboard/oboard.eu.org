<template>
  <div class="">
    <div class="drawer">
      <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col">
        <!-- Navbar -->
        <div
          class="w-full navbar fixed bg-base-100 bg-opacity-80 backdrop-blur-md shadow shadow-gray-200 dark:shadow-gray-900"
        >
          <div class="flex-none lg:hidden">
            <label for="my-drawer-3" class="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-6 h-6 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div class="flex-1 px-2 mx-2">
            <a class="btn btn-ghost normal-case text-xl gap-2">
              <div class="avatar">
                <div class="w-10 mask mask-squircle">
                  <img
                    src="https://upload.jianshu.io/users/upload_avatars/8761709/3101d25e-1917-47dd-bdee-58bbda3352ac.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/300/format/webp"
                  />
                </div>
              </div>
              一块小板子
            </a>
          </div>
          <!-- <div class="flex-none hidden lg:block">
            <ul class="menu menu-horizontal rounded-box">
              <li v-for="item in items">
                <NuxtLink :to="item.url">{{ item.name }}</NuxtLink>
              </li>
            </ul>
          </div> -->
        </div>
        <!-- Page content here -->
        <!-- 路由出口 -->
        <div class="flex flex-row items-start">
          <!-- <ul
            class="menu px-4 pt-24 w-64 min-h-screen bg-base-200 hidden lg:block overflow-y-scroll"
          >
            <li v-for="item in items">
              <NuxtLink :to="item.url">{{ item.name }}</NuxtLink>
            </li>
          </ul> -->

          <ul
            class="navigation menu px-4 pt-24 w-64 min-h-screen bg-base-200 hidden lg:block overflow-y-scroll"
          >
            <AppNavigation :navigation-tree="navigation" />
          </ul>
          <NuxtPage class="flex-1 px-4 pt-24 overflow-y-scroll" />
        </div>
      </div>
      <div class="drawer-side">
        <label for="my-drawer-3" class="drawer-overlay"></label>
        <ul class="menu p-4 w-80 bg-base-100">
          <AppNavigation :navigation-tree="navigation" />
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup>
// @ts-nocheck

const { data: navigation } = await useAsyncData("navigation", () => {
  return fetchContentNavigation();
});
</script>
