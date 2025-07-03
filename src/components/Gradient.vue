<template>
  <div class="relative h-screen w-screen overflow-hidden">
    <div class="animate-gradient absolute inset-0 z-0 bg-gradient-to-t"></div>
    <div id="tsparticles" class="absolute inset-0 z-10"></div>
  </div>
</template>

<script>
import { tsParticles } from "tsparticles-engine";
import { loadFull } from "tsparticles";

export default {
  name: "FullScreenGradient",
  async mounted() {
    await loadFull(tsParticles);
    await tsParticles.load("tsparticles", {
      fullScreen: { enable: false },
      background: { color: "transparent" },
      particles: {
        number: { value: 60 },
        size: { value: 3 },
        move: { enable: true, speed: 1 },
        opacity: { value: 0.5 },
        color: { value: "#ffffff" },
        links: { enable: true, color: "#ffffff", distance: 100 },
      },
    });
  },
};
</script>

<style scoped>
@keyframes gradient-flow {
  0% {
    background-position: 50% 0%;
  }
  100% {
    background-position: 50% 200%;
  }
}

.animate-gradient {
  background-image: linear-gradient(
    to top,
    #e0f2fe,
    /* sky-100 */ #cfeafe,
    #bfe2fd,
    #aeddfe,
    #9dd5fc,
    #88cdfb,
    #53c0f9,
    #38bdf8,
    /* sky-400 */ #38bdf8,
    #53c0f9,
    #88cdfb,
    #9dd5fc,
    #aeddfe,
    #bfe2fd,
    #cfeafe,
    #e0f2fe /* sky-100 again */
  );
  background-size: 100% 300%;
  background-repeat: repeat;
  animation: gradient-flow 12s linear infinite;
}
</style>
