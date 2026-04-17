<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const gridRef = ref(null);
const gridVisible = ref(false);
let gridObserver;

const photos = [
  { src: "https://placehold.co/600x400?text=Photo+1", alt: "Photo 1" },
  { src: "https://placehold.co/400x600?text=Photo+2", alt: "Photo 2" },
  { src: "https://placehold.co/600x600?text=Photo+3", alt: "Photo 3" },
  { src: "https://placehold.co/400x400?text=Photo+4", alt: "Photo 4" },
  { src: "https://placehold.co/600x400?text=Photo+5", alt: "Photo 5" },
  { src: "https://placehold.co/400x600?text=Photo+6", alt: "Photo 6" },
  { src: "https://placehold.co/600x600?text=Photo+7", alt: "Photo 7" },
  { src: "https://placehold.co/400x400?text=Photo+8", alt: "Photo 8" },
  { src: "https://placehold.co/600x400?text=Photo+9", alt: "Photo 9" },
  { src: "https://placehold.co/400x600?text=Photo+10", alt: "Photo 10" },
  { src: "https://placehold.co/600x600?text=Photo+11", alt: "Photo 11" },
  { src: "https://placehold.co/400x400?text=Photo+12", alt: "Photo 12" },
  { src: "https://placehold.co/600x400?text=Photo+13", alt: "Photo 13" },
  { src: "https://placehold.co/400x600?text=Photo+14", alt: "Photo 14" },
  { src: "https://placehold.co/600x600?text=Photo+15", alt: "Photo 15" },
  { src: "https://placehold.co/400x400?text=Photo+16", alt: "Photo 16" },
  { src: "https://placehold.co/600x400?text=Photo+17", alt: "Photo 17" },
  { src: "https://placehold.co/400x600?text=Photo+18", alt: "Photo 18" },
];

onMounted(() => {
  gridObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gridVisible.value = true;
          gridObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 },
  );

  if (gridRef.value) gridObserver.observe(gridRef.value);
});

onUnmounted(() => {
  if (gridObserver) gridObserver.disconnect();
});
</script>

<template>
  <div class="px-4">
    <h1
      class="roboto-condensed thick flex w-full flex-row justify-center pt-30 pb-10 text-center text-5xl font-bold text-gray-800 lg:text-7xl"
    >
      PHOTOGRAPHY
    </h1>
    <div
      ref="gridRef"
      :class="[
        'columns-2 gap-4 space-y-4 transition-all duration-1000 ease-out sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6',
        gridVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
      ]"
    >
      <img
        v-for="(photo, index) in photos"
        :key="index"
        :src="photo.src"
        :alt="photo.alt"
        class="w-full rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
      />
    </div>
  </div>
</template>
