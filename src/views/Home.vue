<template>
  <div class="min-h-screen overflow-x-hidden bg-[#f7f8f5] text-slate-900">
    <Main />

    <About id="about" />

    <Experience id="experience" />

    <Software id="software" />

    <Photography id="photography" />

    <Filmmaking id="filmmaking" />
  </div>
</template>

<script setup>
import Main from "../components/Main.vue";
import About from "../components/About.vue";
import Experience from "../components/Experience.vue";
import Software from "../components/Software.vue";
import Photography from "../components/Photography.vue";
import Filmmaking from "../components/Filmmaking.vue";
</script>
