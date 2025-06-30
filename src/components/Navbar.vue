<script setup>
import { ref } from "vue";
const menuOpen = ref(false);
function closeMenu() {
  menuOpen.value = false;
}
</script>

<template>
  <nav class="navbar">
    <div class="nav-name">
      <a>Bipon Roy</a>
    </div>
    <button
      class="block p-4 focus:outline-none lg:hidden"
      @click="menuOpen = !menuOpen"
      aria-label="Toggle menu"
    >
      <svg
        v-if="!menuOpen"
        class="h-7 w-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
      <svg
        v-else
        class="h-7 w-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
    <!-- Nav links -->
    <div :class="['nav-links', menuOpen ? 'open' : '']">
      <router-link
        to="/"
        class="nav-link"
        exact
        active-class="nav-link-active"
        @click="closeMenu"
      >
        Home
      </router-link>
      <router-link
        to="/Software"
        class="nav-link"
        active-class="nav-link-active"
        @click="closeMenu"
      >
        Software
      </router-link>
      <router-link
        to="/Photography"
        class="nav-link"
        active-class="nav-link-active"
        @click="closeMenu"
      >
        Photography
      </router-link>
      <router-link
        to="/Articles"
        class="nav-link"
        active-class="nav-link-active"
        @click="closeMenu"
      >
        Articles
      </router-link>
    </div>
  </nav>
</template>
