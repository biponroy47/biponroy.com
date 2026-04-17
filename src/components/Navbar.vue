<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
const menuOpen = ref(false);

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function scrollTo(id: string) {
  menuOpen.value = false;
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

const navLinks = [
  { name: "ABOUT ME", id: "about" },
  { name: "EXPERIENCE", id: "experience" },
  { name: "SOFTWARE", id: "software" },
  { name: "PHOTOGRAPHY", id: "photography" },
  { name: "FILMMAKING", id: "filmmaking" },
  { name: "BLOG", id: "blog" },
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
          class="roboto-condensed transform cursor-pointer text-4xl text-white transition-transform duration-200 hover:scale-110"
          @click="scrollToTop"
        >
          BIPON
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
          <a
            v-for="link in navLinks"
            :key="link.id"
            href="javascript:void(0)"
            class="roboto-condensed my-5 inline-block transform cursor-pointer rounded-sm bg-transparent text-lg font-medium text-white transition-all duration-200 hover:scale-110 lg:my-0 lg:mt-0 lg:p-2"
            @click="scrollTo(link.id)"
          >
            {{ link.name }}
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>
