<template>
  <div class="">
    <div class="drawer">
      <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col">
        <!-- Navbar -->
        <div class="w-full navbar bg-base-300">
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
            <a class="btn btn-ghost normal-case text-xl">一块小板子</a>
          </div>
          <div class="flex-none hidden lg:block">
            <ul class="menu menu-horizontal rounded-box">
              <!-- Navbar menu content here -->
              <li v-for="item in items">
                <NuxtLink :to="item.url">{{ item.name }}</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
        <!-- Page content here -->
        <!-- 路由出口 -->
        <NuxtPage />
      </div>
      <div class="drawer-side">
        <label for="my-drawer-3" class="drawer-overlay"></label>
        <ul class="menu p-4 w-80 bg-base-100">
          <!-- Sidebar content here -->
          <li v-for="item in items">
            <a>{{ item.name }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup>
let items = [
  { name: "主页", url: "/" },
  { name: "关于", url: "/about" },
];
</script>
