<template>
  <div class="absolute inset-0 z-0 overflow-hidden shadow-xl">
    <!-- GRADIENT -->
    <div class="animate-slide-track flex h-full w-[800vw] flex-row">
      <div
        class="h-full w-[200vw] bg-gradient-to-l from-cyan-400 from-10% via-blue-400 via-50% to-indigo-400 to-100%"
      ></div>
      <div
        class="h-full w-[200vw] bg-gradient-to-l from-indigo-400 from-0% via-blue-400 via-50% to-cyan-400 to-90%"
      ></div>

      <div
        class="h-full w-[200vw] bg-gradient-to-l from-cyan-400 from-10% via-blue-400 via-50% to-indigo-400 to-100%"
      ></div>
      <div
        class="h-full w-[200vw] bg-gradient-to-l from-indigo-400 from-0% via-blue-400 via-50% to-cyan-400 to-90%"
      ></div>
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
      class="absolute top-30 left-1/2 z-20 flex h-[80vh] w-[85vw] -translate-x-1/2 transform flex-col items-center justify-center lg:top-40 lg:h-[65vh] lg:w-[65vw]"
    >
      <h1
        class="m-10 flex w-full flex-row justify-center bg-clip-text text-center text-5xl font-bold whitespace-nowrap text-white lg:mt-10 lg:mb-20 lg:text-7xl"
      >
        Bipon Roy
      </h1>
      <div
        class="flex h-full w-full flex-col items-center justify-center lg:flex-row lg:items-center lg:justify-center"
      >
        <img
          src="../assets/profile.JPG"
          alt="Profile"
          class="mb-5 h-[50vw] w-[50vw] rounded-lg object-cover shadow-xl lg:mr-5 lg:mb-0 lg:ml-10 lg:h-80 lg:w-80"
        />
        <p
          class="text-md lg-h-100 mx-10 mb-10 w-[80vw] rounded-lg bg-white p-6 text-center leading-relaxed text-gray-800 shadow-2xl lg:mr-10 lg:mb-0 lg:ml-5 lg:w-120 lg:text-xl"
        >
          Hey, I’m Bipon! I’m a 4th year Computer Science student at Western
          University and currently a Software Engineer Intern at Ontario Power
          Generation. I’m passionate about AI, ML, and all things related to
          tech.
          <br /><br />
          Hobby-wise, I love playing tennis, the guitar, biking, and several
          more. Check out my websites below if you're curious!
        </p>
      </div>
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
    transform: translateX(0) translateY(-50%);
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
    transform: translateX(-100vw) translateY(-50%);
  }
}
</style>
