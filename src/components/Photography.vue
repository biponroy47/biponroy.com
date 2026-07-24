<script setup>
import { computed, ref, onMounted, onUnmounted } from "vue";

const gridRef = ref(null);
const gridVisible = ref(false);
const selectedPhotoIndex = ref(null);
let gridObserver;

const photoModules = import.meta.glob("../assets/photography/*.jpg", {
  eager: true,
  import: "default",
});

const photoRatios = {
  0: 3237 / 4856,
  1: 3858 / 2170,
  2: 3700 / 5550,
  3: 3937 / 5905,
  4: 5731 / 3821,
  5: 3692 / 5538,
  6: 2385 / 3577,
  7: 3761 / 5641,
  8: 6000 / 4000,
  9: 4000 / 6000,
  10: 4000 / 6000,
  11: 3681 / 5521,
  12: 6000 / 4000,
  13: 3825 / 5737,
  14: 3701 / 5551,
  16: 3858 / 2167,
  17: 3492 / 5238,
  18: 3812 / 5718,
  19: 3518 / 5277,
  20: 3839 / 5759,
  22: 3297 / 4945,
  23: 3519 / 5278,
  24: 3475 / 5212,
};

const photos = Object.entries(photoModules)
  .sort(([firstPath], [secondPath]) => {
    const firstNumber = Number(firstPath.match(/(\d+)\.jpg$/)?.[1] ?? 0);
    const secondNumber = Number(secondPath.match(/(\d+)\.jpg$/)?.[1] ?? 0);

    return firstNumber - secondNumber;
  })
  .map(([path, src]) => {
    const photoNumber = path.match(/(\d+)\.jpg$/)?.[1];
    const ratio = photoRatios[photoNumber] ?? 1;

    return {
      src,
      alt: photoNumber ? `Photography ${photoNumber}` : "Photography",
      ratio,
    };
  });

const selectedPhoto = computed(() =>
  selectedPhotoIndex.value === null ? null : photos[selectedPhotoIndex.value],
);

const openPhoto = (index) => {
  selectedPhotoIndex.value = index;
  document.body.style.overflow = "hidden";
};

const closePhoto = () => {
  selectedPhotoIndex.value = null;
  document.body.style.overflow = "";
};

const showPreviousPhoto = () => {
  if (selectedPhotoIndex.value === null) return;
  selectedPhotoIndex.value =
    (selectedPhotoIndex.value - 1 + photos.length) % photos.length;
};

const showNextPhoto = () => {
  if (selectedPhotoIndex.value === null) return;
  selectedPhotoIndex.value = (selectedPhotoIndex.value + 1) % photos.length;
};

const handleKeydown = (event) => {
  if (!selectedPhoto.value) return;

  if (event.key === "Escape") {
    closePhoto();
  } else if (event.key === "ArrowLeft") {
    showPreviousPhoto();
  } else if (event.key === "ArrowRight") {
    showNextPhoto();
  }
};

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
  window.addEventListener("keydown", handleKeydown);
});

onUnmounted(() => {
  if (gridObserver) gridObserver.disconnect();
  window.removeEventListener("keydown", handleKeydown);
  document.body.style.overflow = "";
});
</script>

<template>
  <section class="bg-[#f7f8f5] px-4 py-24">
    <p
      class="roboto-condensed thick text-center text-sm tracking-[0.18em] text-teal-700 uppercase"
    >
      Visual archive
    </p>
    <h1
      class="roboto-condensed thick flex w-full flex-row justify-center pt-3 pb-5 text-center text-5xl font-bold text-slate-950 lg:text-7xl"
    >
      PHOTOGRAPHY
    </h1>
    <p
      class="mx-auto mb-12 max-w-3xl text-center text-lg leading-8 text-slate-600"
    >
      Photography was one of my first creative outlets. It trained the same
      instincts I use in software: patience, iteration, attention to detail, and
      knowing when something finally feels right.
    </p>
    <div
      ref="gridRef"
      :class="[
        'flex flex-wrap gap-2 transition-all duration-1000 ease-out',
        gridVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
      ]"
    >
      <button
        v-for="(photo, index) in photos"
        :key="photo.src"
        type="button"
        class="group relative cursor-pointer overflow-hidden rounded-sm shadow-[0_8px_18px_rgba(5,27,38,0.16)] focus:outline-none"
        :style="{
          aspectRatio: photo.ratio,
          flex: `${photo.ratio} 1 ${photo.ratio * 14}rem`,
        }"
        @click="openPhoto(index)"
      >
        <img
          :src="photo.src"
          :alt="photo.alt"
          :loading="index < 6 ? 'eager' : 'lazy'"
          :fetchpriority="index < 3 ? 'high' : 'auto'"
          decoding="async"
          class="h-full w-full object-cover"
        />
        <span
          class="photo-vignette pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 group-focus-visible:opacity-100"
          aria-hidden="true"
        ></span>
      </button>
    </div>

    <Teleport to="body">
      <div
        v-if="selectedPhoto"
        class="fixed inset-0 z-[200] flex items-center justify-center bg-black/55 p-4 backdrop-blur-md"
        role="dialog"
        aria-modal="true"
        @click="closePhoto"
      >
        <button
          type="button"
          class="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-xl leading-none font-semibold text-gray-900 shadow-lg transition-colors hover:bg-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black focus:outline-none"
          aria-label="Close image viewer"
          @click.stop="closePhoto"
        >
          X
        </button>

        <button
          type="button"
          class="absolute top-1/2 left-4 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-3xl leading-none font-semibold text-gray-900 shadow-lg transition-colors hover:bg-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black focus:outline-none"
          aria-label="Show previous photo"
          @click.stop="showPreviousPhoto"
        >
          &lt;
        </button>

        <button
          type="button"
          class="absolute top-1/2 right-4 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-3xl leading-none font-semibold text-gray-900 shadow-lg transition-colors hover:bg-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black focus:outline-none"
          aria-label="Show next photo"
          @click.stop="showNextPhoto"
        >
          &gt;
        </button>

        <img
          :src="selectedPhoto.src"
          :alt="selectedPhoto.alt"
          class="max-h-[88vh] max-w-[92vw] object-contain shadow-2xl"
          @click.stop
        />
      </div>
    </Teleport>
  </section>
</template>

<style scoped>
.photo-vignette {
  background:
    radial-gradient(
      circle at center,
      transparent 38%,
      rgba(0, 0, 0, 0.52) 100%
    ),
    linear-gradient(rgba(0, 0, 0, 0.14), rgba(0, 0, 0, 0.14));
}
</style>
