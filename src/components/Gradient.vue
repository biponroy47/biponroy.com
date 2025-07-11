<template>
  <div class="absolute h-screen w-screen overflow-hidden">
    <!-- Sliding track with 4 panels (2 original + 2 copies) -->
    <div class="animate-slide-track flex h-full w-[800vw]">
      <!-- First set -->
      <div class="flex w-[400vw]">
        <div
          class="h-full w-[200vw] bg-gradient-to-l from-cyan-400 from-10% via-blue-400 via-50% to-indigo-400 to-100%"
        ></div>
        <div
          class="h-full w-[200vw] bg-gradient-to-l from-indigo-400 from-0% via-blue-400 via-50% to-cyan-400 to-90%"
        ></div>
      </div>

      <!-- Second set (copies or variations) -->
      <div class="flex w-[400vw]">
        <div
          class="h-full w-[200vw] bg-gradient-to-l from-cyan-400 from-10% via-blue-400 via-50% to-indigo-400 to-100%"
        ></div>
        <div
          class="h-full w-[200vw] bg-gradient-to-l from-indigo-400 from-0% via-blue-400 via-50% to-cyan-400 to-90%"
        ></div>
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
    animation: slide-track 8s linear infinite;
  }
}
</style>
