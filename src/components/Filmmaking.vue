<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const sectionRef = ref(null);
const sectionVisible = ref(false);
let sectionObserver;

// Replace with your YouTube channel ID (starts with UC...)
// Your uploads playlist is the same ID but starts with UU instead of UC
const CHANNEL_HANDLE = "BiponRoy";
const UPLOADS_PLAYLIST_ID = "UU_REPLACE_WITH_YOUR_CHANNEL_ID";

// Placeholder video IDs — replace these with your actual YouTube video IDs
// Once you set the uploads playlist ID above, you can remove the individual videos
const videos = [
  "dQw4w9WgXcQ",
  "dQw4w9WgXcQ",
  "dQw4w9WgXcQ",
  "dQw4w9WgXcQ",
  "dQw4w9WgXcQ",
  "dQw4w9WgXcQ",
];

onMounted(() => {
  sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          sectionVisible.value = true;
          sectionObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 },
  );

  if (sectionRef.value) sectionObserver.observe(sectionRef.value);
});

onUnmounted(() => {
  if (sectionObserver) sectionObserver.disconnect();
});
</script>

<template>
  <div class="mx-auto max-w-7xl px-6">
    <h1
      class="roboto-condensed thick flex w-full flex-row justify-center pt-30 pb-10 text-center text-5xl font-bold text-gray-800 lg:text-7xl"
    >
      FILMMAKING
    </h1>

    <div
      ref="sectionRef"
      :class="[
        'transition-all duration-1000 ease-out',
        sectionVisible
          ? 'translate-y-0 opacity-100'
          : 'translate-y-8 opacity-0',
      ]"
    >
      <!-- Featured: Full channel uploads playlist embed -->
      <div class="mb-12 flex justify-center">
        <iframe
          class="aspect-video w-full max-w-4xl rounded-xl shadow-2xl"
          :src="`https://www.youtube.com/embed/videoseries?list=${UPLOADS_PLAYLIST_ID}`"
          title="YouTube Uploads Playlist"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <!-- Grid of individual video embeds -->
      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(videoId, index) in videos"
          :key="index"
          class="overflow-hidden rounded-xl shadow-2xl transition-transform duration-300 hover:scale-105"
        >
          <iframe
            class="aspect-video w-full"
            :src="`https://www.youtube.com/embed/${videoId}`"
            :title="`Video ${index + 1}`"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <!-- Subscribe button -->
      <div class="mt-12 flex justify-center">
        <a
          :href="`https://www.youtube.com/@${CHANNEL_HANDLE}?sub_confirmation=1`"
          target="_blank"
          rel="noopener noreferrer"
          class="roboto-condensed thick rounded-lg bg-red-600 px-8 py-4 text-xl font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-red-700"
        >
          SUBSCRIBE ON YOUTUBE
        </a>
      </div>
    </div>
  </div>
</template>
