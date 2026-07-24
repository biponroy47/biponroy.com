<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import {
  FilmIcon,
  PlayCircleIcon,
  ScissorsIcon,
  SparklesIcon,
} from "@heroicons/vue/24/outline";

const sectionRef = ref(null);
const sectionVisible = ref(false);
let sectionObserver;
const filmBackground = new URL("../assets/profile1.JPG", import.meta.url).href;

const focusAreas = [
  {
    icon: FilmIcon,
    title: "Filmmaking",
    text: "Learning how to shape moments with framing, pacing, music, and edits that feel intentional.",
  },
  {
    icon: PlayCircleIcon,
    title: "Content creation",
    text: "Experimenting with short-form and long-form ideas that connect technology, lifestyle, and creative work.",
  },
  {
    icon: ScissorsIcon,
    title: "Editing craft",
    text: "Practicing the invisible parts of storytelling: selecting the right shot, cutting at the right beat, and keeping the viewer with me.",
  },
  {
    icon: SparklesIcon,
    title: "AI-assisted creativity",
    text: "Exploring how AI can speed up research, planning, scripting, and post-production while keeping the final taste human.",
  },
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
  <section class="bg-slate-950 px-6 py-24 text-white">
    <div class="mx-auto max-w-7xl">
      <p
        class="roboto-condensed thick text-sm tracking-[0.18em] text-teal-200 uppercase"
      >
        Creative direction
      </p>
      <h1 class="roboto-condensed thick mt-3 text-5xl font-bold lg:text-7xl">
        FILMMAKING
      </h1>

      <div
        ref="sectionRef"
        :class="[
          'mt-10 grid gap-8 transition-all duration-1000 ease-out lg:grid-cols-[0.95fr_1.05fr]',
          sectionVisible
            ? 'translate-y-0 opacity-100'
            : 'translate-y-8 opacity-0',
        ]"
      >
        <div
          class="flex min-h-96 flex-col justify-end rounded-lg bg-cover bg-center p-8 shadow-2xl"
          :style="{
            backgroundImage: `linear-gradient(rgba(5,27,38,0.1), rgba(5,27,38,0.92)), url(${filmBackground})`,
          }"
        >
          <p class="max-w-xl text-2xl leading-9 font-semibold">
            Photography taught me to notice. Film is teaching me how to hold
            attention.
          </p>
          <p class="mt-4 max-w-xl text-slate-200">
            I am building the habit of creating, publishing, reviewing, and
            improving. The goal is not just better videos; it is becoming a
            stronger storyteller.
          </p>
        </div>

        <div class="grid gap-4 sm:grid-cols-2">
          <article
            v-for="area in focusAreas"
            :key="area.title"
            class="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:bg-white/10"
          >
            <component
              :is="area.icon"
              class="h-9 w-9 text-teal-200"
              aria-hidden="true"
            />
            <h2 class="mt-5 text-2xl font-bold">{{ area.title }}</h2>
            <p class="mt-3 leading-7 text-slate-300">{{ area.text }}</p>
          </article>
        </div>
      </div>

      <div class="mt-10 flex flex-col gap-3 sm:flex-row">
        <a
          href="https://www.youtube.com/@BiponRoy"
          target="_blank"
          rel="noopener noreferrer"
          class="roboto-condensed thick inline-flex items-center justify-center rounded-lg bg-white px-6 py-4 text-lg font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-teal-50"
        >
          YOUTUBE
        </a>
        <a
          href="https://beeps-photography.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          class="roboto-condensed thick inline-flex items-center justify-center rounded-lg border border-white/25 px-6 py-4 text-lg font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
        >
          PHOTO ARCHIVE
        </a>
      </div>
    </div>
  </section>
</template>
