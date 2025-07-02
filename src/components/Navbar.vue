<script setup>
import { ref } from "vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
const menuOpen = ref(false);
function closeMenu() {
  menuOpen.value = false;
}

const navLinks = [
  { name: "Software", to: "/Software", delay: 150 },
  { name: "Photography", to: "/Photography", delay: 200 },
  { name: "Articles", to: "/Articles", delay: 250 },
];
</script>

<template>
  <nav class="w-full bg-white p-5 shadow-lg">
    <div class="flex flex-col lg:flex-row lg:items-center">
      <div class="flex items-center justify-between">
        <div class="name-font text-4xl text-gray-800">
          <router-link to="/">Bipon Roy</router-link>
        </div>
        <button
          class="lg:hidden"
          @click="menuOpen = !menuOpen"
          aria-label="Toggle menu"
        >
          <component
            :is="menuOpen ? XMarkIcon : Bars3Icon"
            class="h-8 w-8 text-gray-800"
          />
        </button>
      </div>

      <div
        class="flex flex-col lg:mt-0 lg:ml-auto lg:flex-row lg:items-center lg:gap-5"
      >
        <div
          :class="[
            'flex flex-col overflow-hidden transition-all duration-300 ease-in-out lg:flex-row lg:gap-5',
            menuOpen ? 'my-4 max-h-screen gap-y-5' : 'max-h-0 lg:max-h-full',
          ]"
        >
          <router-link
            v-for="(link, index) in navLinks"
            :key="link.to"
            :to="link.to"
            class="rounded-sm px-4 py-2 text-lg font-medium text-gray-700 opacity-0 transition-all duration-125 ease-in-out hover:bg-gray-500 hover:text-white lg:opacity-100"
            :class="menuOpen ? `opacity-100 delay-${link.delay}` : ''"
            exact
            active-class="bg-gray-500 text-white"
            @click="closeMenu"
          >
              {{ link.name }}
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>
