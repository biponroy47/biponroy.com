<template>
  <div class="relative h-screen w-screen overflow-hidden">
    <div class="animate-gradient absolute inset-0"></div>
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
    background-position: 0% 0%;
  }
  100% {
    background-position: 0% 100%;
  }
}

.animate-gradient {
  background-image: -webkit-linear-gradient(
    to top,
    #148fff,
    #29adff,
    #3dcaff,
    #52e7ff,
    #60efff,
    #52e7ff,
    #3dcaff,
    #29adff,
    #148fff
  );
  background-image: linear-gradient(
    to top,
    #148fff,
    #29adff,
    #3dcaff,
    #52e7ff,
    #60efff,
    #52e7ff,
    #3dcaff,
    #29adff,
    #148fff
  );
  background-size: 100% 300%;
  background-repeat: repeat;
  animation: gradient-flow 8s linear infinite;
}
</style>
