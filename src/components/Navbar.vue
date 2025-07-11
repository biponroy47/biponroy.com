<script setup>
import { ref } from "vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
const menuOpen = ref(false);
function closeMenu() {
  menuOpen.value = false;
}

const navLinks = [
  { name: "Software", to: "/Software", delay: 0, reverseDelay: 300 },
  { name: "Photography", to: "/Photography", delay: 150, reverseDelay: 150 },
  { name: "Articles", to: "/Articles", delay: 300, reverseDelay: 0 },
];
</script>

<template>
  <nav
    class="fixed top-0 left-0 z-100 w-full border-b border-white/100 bg-white/90 p-5 shadow-xl backdrop-blur-md"
  >
    <div class="flex flex-col lg:flex-row lg:items-center">
      <div class="flex items-center justify-between">
        <div
          class="name-font transform pl-1 text-4xl text-gray-800 transition-transform duration-200 hover:scale-105"
        >
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
            'flex flex-col gap-y-5 overflow-hidden transition-all duration-1000 ease-in-out lg:flex-row lg:gap-5',
            menuOpen ? 'mt-5 max-h-screen' : 'max-h-0 lg:max-h-full',
          ]"
        >
          <router-link
            v-for="(link, index) in navLinks"
            :key="link.to"
            :to="link.to"
            class="transform rounded-sm p-3 text-lg font-medium text-gray-700 transition-all duration-500 hover:bg-gray-500 hover:text-white lg:translate-y-0 lg:opacity-100 lg:hover:delay-0 lg:hover:duration-100"
            :class="
              menuOpen
                ? `translate-y-0 opacity-100 delay-${link.delay}`
                : `translate-y-4 opacity-0 delay-${link.reverseDelay}`
            "
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

<style lang="css" scoped>
.name-font {
  font-family: "Noto Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
}
</style>
