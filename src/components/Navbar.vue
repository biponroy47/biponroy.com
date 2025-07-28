<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
const menuOpen = ref(false);
function closeMenu() {
  menuOpen.value = false;
}

const navLinks = [
  { name: "SOFTWARE", to: "/Software" },
  { name: "PHOTOGRAPHY", to: "/Photography" },
  { name: "ARTICLES", to: "/Articles" },
];

// Track scroll position
const scrolled = ref(false);

function handleScroll() {
  scrolled.value = window.scrollY > 10;
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <nav
    :class="[
      'fixed top-0 left-0 z-100 w-[100vw] px-6 py-4 backdrop-blur-2xl transition-all duration-500 ease-in-out',
      scrolled
        ? 'bg-tiber/95 shadow-[0_1px_16px_1px_rgba(0,0,0,0.75)]'
        : 'shadow-[0_8px_32px_4px_rgba(0,0,0,0.75)]',
    ]"
  >
    <div class="flex flex-col lg:flex-row lg:items-center">
      <div class="flex items-center justify-between">
        <div
          class="roboto-condensed transform text-4xl text-white transition-transform duration-200 hover:scale-110"
        >
          <router-link to="/">BIPON</router-link>
        </div>
        <button
          class="lg:hidden"
          @click="menuOpen = !menuOpen"
          aria-label="Toggle menu"
        >
          <component
            :is="menuOpen ? XMarkIcon : Bars3Icon"
            class="h-8 w-8 text-white"
          />
        </button>
      </div>

      <div
        class="flex flex-col lg:mt-0 lg:ml-auto lg:flex-row lg:items-center lg:gap-5"
      >
        <div
          :class="[
            'mr-5 flex flex-col overflow-hidden transition-all duration-500 lg:flex-row lg:gap-4',
            menuOpen ? 'mt-5 max-h-screen' : 'max-h-0 lg:max-h-full',
          ]"
        >
          <router-link
            v-for="(link, index) in navLinks"
            :key="link.to"
            :to="link.to"
            class="roboto-condensed my-5 inline-block transform rounded-sm bg-transparent text-lg font-medium text-white transition-all duration-200 hover:scale-110 lg:my-0 lg:mt-0 lg:p-2"
            @click="closeMenu"
          >
            {{ link.name }}
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>
