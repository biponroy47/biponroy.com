<template>
  <div class="absolute inset-0 z-0 overflow-hidden shadow-xl">
    <!-- GRADIENT -->
    <div class="flex h-full w-full flex-row">
      <!-- BACKGROUND IMAGE -->
      <img
        src="../assets/background.png"
        alt=""
        class="absolute inset-0 z-0 h-screen w-full object-cover"
        style="position: absolute; left: 0; top: 0"
      />

      <!-- PARTICLES  -->
      <div
        v-for="i in 25"
        :key="i"
        class="circle-container z-10 flex max-w-[100vw] flex-row lg:max-w-[100vw]"
        :style="getCircleStyle(i)"
      >
        <div class="circle"></div>
      </div>
    </div>

    <!-- ABOUT PANEL -->
    <div
      class="absolute top-[25vh] left-1/2 z-20 flex w-full -translate-x-1/2 transform flex-col items-center justify-center"
    >
      <h1
        class="roboto-condensed m-10 flex w-0.75 flex-row justify-center bg-clip-text text-center text-8xl text-white text-shadow-lg lg:mt-10 lg:mb-20 lg:w-full lg:text-9xl"
      >
        BIPON ROY
      </h1>
    </div>
    <div
      class="absolute top-[60vh] left-1/2 z-20 flex w-[50vw] -translate-x-1/2 transform flex-col items-center justify-center gap-y-5 lg:w-full"
    >
      <h1
        class="roboto-condensed thin flex flex-row justify-center bg-clip-text text-center text-3xl text-wrap text-white text-shadow-lg lg:w-full lg:text-4xl"
      >
        SOFTWARE ENGINEER
      </h1>
      <h1
        class="roboto-condensed thin flex flex-row justify-center bg-clip-text text-center text-2xl text-wrap text-white text-shadow-lg lg:w-full lg:text-3xl"
      >
        FULL STACK DEVELOPER
      </h1>
    </div>
  </div>
</template>

<style scoped>
@layer utilities {
  @keyframes slide-track {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-400vw);
    }
  }

  .animate-slide-track {
    animation: slide-track 5s linear infinite;
  }
}
</style>

<!-- PARTICLE BUBBLES ANIMATION -->
<script>
export default {
  name: "FloatingParticles",
  methods: {
    getCircleStyle(i) {
      const left = Math.random() * 100;
      const top = Math.random() * 100; // Random vertical position
      const delay = i * 50;
      const duration = 10 + Math.random() * 5;
      const size = 5 + Math.random() * 10;

      return {
        left: `${left}%`,
        top: `${top}%`,
        animationDelay: `${delay}s`,
        "--circle-size": `${size}px`,
        "--float-duration": `${duration}s`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.circle-container {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;

  .circle {
    width: var(--circle-size, 20px);
    height: var(--circle-size, 20px);
    border-radius: 100%;
    filter: blur(5px);
    background: rgba(255, 255, 255);
    animation: float var(--float-duration, 15s) infinite ease-in-out;
    position: absolute;
    transform: translateY(-50%);
  }
}

@keyframes float {
  0% {
    opacity: 0;
    transform: translateY(100vh) translateX(-50%);
  }
  25% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }

  75% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(-50%) translateX(-50%);
  }
}
</style>
