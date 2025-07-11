<template>
  <div class="absolute z-10 h-full w-full overflow-hidden">
    <div
      v-for="i in 25"
      :key="i"
      class="circle-container"
      :style="getCircleStyle(i)"
    >
      <div class="circle"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FloatingParticles",
  methods: {
    getCircleStyle(i) {
      const left = Math.random() * 100;
      const top = Math.random() * 100; // Random vertical position
      const delay = i * 50;
      const duration = 5 + Math.random() * 10;
      const size = 5 + Math.random() * 1;

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
    width: var(--circle-size, 10px);
    height: var(--circle-size, 10px);
    border-radius: 100%;
    filter: blur(0.5px);
    background: rgba(255, 255, 255);
    animation: float var(--float-duration, 5s) infinite ease-in-out;
    position: absolute;
    transform: translateX(-50%);
  }
}

@keyframes float {
  0% {
    transform: translateX(-50%) translateY(0);
    opacity: 0;
  }
  10% {
    opacity: 0.25;
  }
  20% {
    opacity: 0.5;
  }
  30% {
    opacity: 1;
  }
  40% {
    opacity: 0.5;
  }
  50% {
    opacity: 0;
  }
  60% {
    opacity: 0.5;
  }
  70% {
    opacity: 1;
  }
  80% {
    opacity: 0.5;
  }
  90% {
    opacity: 0.25;
  }
  100% {
    transform: translateX(-50%) translateY(-100vh);
    opacity: 0;
  }
}
</style>
