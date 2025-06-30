<template>
  <nav class="fixed top-0 left-0 z-50 w-full bg-white shadow-md">
    <div class="flex h-16 items-center justify-center gap-8">
      <router-link to="/" class="nav-link" exact active-class="nav-link-active">
        Home
      </router-link>
      <router-link
        to="/Software"
        class="nav-link"
        active-class="nav-link-active"
      >
        Software
      </router-link>
      <router-link
        to="/Photography"
        class="nav-link"
        active-class="nav-link-active"
      >
        Photography
      </router-link>
      <router-link
        to="/Articles"
        class="nav-link"
        active-class="nav-link-active"
      >
        Articles
      </router-link>
    </div>
  </nav>
  <div class="pt-16">
    <router-view />
  </div>
</template>

<style scoped></style>
