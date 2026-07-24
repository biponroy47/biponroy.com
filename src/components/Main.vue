<template>
  <section class="relative min-h-screen overflow-hidden bg-slate-950 shadow-xl">
    <div class="absolute inset-0">
      <img
        src="../assets/background.png"
        alt="Abstract dark portfolio background"
        class="h-full w-full object-cover opacity-75"
      />
      <div
        class="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,27,38,0.92),rgba(5,27,38,0.58),rgba(15,23,42,0.78))]"
      ></div>
    </div>

    <div
      v-for="i in 18"
      :key="i"
      class="circle-container z-10"
      :style="getCircleStyle(i)"
    >
      <div class="circle"></div>
    </div>

    <div
      class="relative z-20 mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-6 pt-32 pb-16 sm:justify-center lg:px-10"
    >
      <p
        class="roboto-condensed thick text-sm tracking-[0.28em] text-teal-200 uppercase"
      >
        CS student · builder · visual storyteller
      </p>
      <h1
        class="roboto-condensed thick mt-5 max-w-5xl text-7xl leading-[0.9] text-white text-shadow-lg sm:text-8xl lg:text-9xl"
      >
        BIPON ROY
      </h1>
      <p class="mt-6 max-w-3xl text-xl leading-8 text-slate-100 lg:text-2xl">
        I build software, automate the boring stuff, and tell stories through
        photos and film. I am studying computer science at Western University
        and chasing the kind of career where curiosity turns into useful
        products.
      </p>
      <div class="mt-9 flex flex-col gap-3 sm:flex-row">
        <button
          class="roboto-condensed thick text-tiber inline-flex cursor-pointer items-center justify-center rounded-lg bg-white px-6 py-4 text-lg font-semibold shadow-lg transition hover:-translate-y-0.5 hover:bg-teal-50"
          @click="scrollPastHero"
        >
          EXPLORE MY WORK
        </button>
        <a
          href="https://github.com/biponroy47"
          target="_blank"
          rel="noopener noreferrer"
          class="roboto-condensed thick inline-flex items-center justify-center rounded-lg border border-white/35 px-6 py-4 text-lg font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
        >
          GITHUB PROJECTS
        </a>
      </div>
    </div>
  </section>
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
      const delay = i * 0.4;
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
    scrollPastHero() {
      const el = document.getElementById("about");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
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
