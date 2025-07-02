<script setup>
import { ref } from "vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
const menuOpen = ref(false);
function closeMenu() {
  menuOpen.value = false;
}
</script>

<template>
  <nav
    class="z-50 flex h-20 w-full items-center justify-between bg-white shadow-lg"
  >
    <div class="name-font items-center justify-start pl-5 text-4xl lg:text-4xl">
      <a>Bipon Roy</a>
    </div>

    <button
      class="block p-4 focus:outline-none lg:hidden"
      @click="menuOpen = !menuOpen"
      aria-label="Toggle menu"
    >
      <component
        :is="menuOpen ? XMarkIcon : Bars3Icon"
        class="h-7 w-7 text-gray-800"
      />
    </button>

    <div
      :class="[
        'absolute top-20 left-0 w-full origin-top transform flex-col bg-white shadow-lg transition-all duration-750 ease-in-out',
        menuOpen ? 'flex scale-y-100 opacity-100' : 'flex scale-y-0 opacity-0',
        'lg:static lg:flex lg:w-auto lg:scale-y-100 lg:flex-row lg:items-center lg:bg-transparent lg:opacity-100 lg:shadow-none lg:transition-none lg:duration-0',
      ]"
      style="transform-origin: top"
    >
      <router-link
        to="/"
        class="mx-4 my-3 rounded-sm px-2 py-2 text-lg font-medium text-gray-700 transition duration-300 hover:bg-gray-500 hover:text-white"
        exact
        active-class="bg-gray-500 text-white"
        @click="closeMenu"
      >
        Home
      </router-link>
      <router-link
        to="/Software"
        class="mx-4 my-3 rounded-sm px-2 py-2 text-lg font-medium text-gray-700 transition duration-300 hover:bg-gray-500 hover:text-white"
        active-class="bg-gray-500 text-white"
        @click="closeMenu"
      >
        Software
      </router-link>
      <router-link
        to="/Photography"
        class="mx-4 my-3 rounded-sm px-2 py-2 text-lg font-medium text-gray-700 transition duration-300 hover:bg-gray-500 hover:text-white"
        active-class="bg-gray-500 text-white"
        @click="closeMenu"
      >
        Photography
      </router-link>
      <router-link
        to="/Articles"
        class="mx-4 my-3 rounded-sm px-2 py-2 text-lg font-medium text-gray-700 transition duration-300 hover:bg-gray-500 hover:text-white"
        active-class="bg-gray-500 text-white"
        @click="closeMenu"
      >
        Articles
      </router-link>
    </div>
  </nav>
</template>
