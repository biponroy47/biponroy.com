<template>
  <div>
    <Main />

    <About id="about" class="mt-[100vh]" />

    <Experience id="experience" class="mt-40" />

    <Software id="software" class="mt-40" />

    <Photography id="photography" class="mt-40" />

    <Filmmaking id="filmmaking" class="mt-40" />

    <section id="blog" class="mt-40">
      <h1
        class="roboto-condensed thick flex w-full flex-row justify-center pt-30 pb-10 text-center text-5xl font-bold text-gray-800 lg:text-7xl"
      >
        BLOG
      </h1>
    </section>
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
