<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const gridRef = ref(null);
const gridVisible = ref(false);
let gridObserver;

const projects = [
  {
    name: "Project Name",
    icon: "https://placehold.co/80x80?text=P1",
    tech: "Python, Flask, PostgreSQL",
    repo: "https://github.com/biponroy47",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Project Name",
    icon: "https://placehold.co/80x80?text=P2",
    tech: "React, TypeScript, Node.js",
    repo: "https://github.com/biponroy47",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Project Name",
    icon: "https://placehold.co/80x80?text=P3",
    tech: "Vue.js, Tailwind CSS, Vite",
    repo: "https://github.com/biponroy47",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Project Name",
    icon: "https://placehold.co/80x80?text=P4",
    tech: "C++, Arduino, Embedded Systems",
    repo: "https://github.com/biponroy47",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Project Name",
    icon: "https://placehold.co/80x80?text=P5",
    tech: "Java, Spring Boot, MySQL",
    repo: "https://github.com/biponroy47",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Project Name",
    icon: "https://placehold.co/80x80?text=P6",
    tech: "Swift, SwiftUI, CoreData",
    repo: "https://github.com/biponroy47",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Project Name",
    icon: "https://placehold.co/80x80?text=P7",
    tech: "Kotlin, Jetpack Compose, Firebase",
    repo: "https://github.com/biponroy47",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Project Name",
    icon: "https://placehold.co/80x80?text=P8",
    tech: "Rust, WebAssembly, WASM",
    repo: "https://github.com/biponroy47",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
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
  <div class="bg-tiber/5 min-h-screen w-screen py-10">
    <div class="mx-auto max-w-7xl px-6">
      <h1
        class="roboto-condensed thick flex w-full flex-row justify-center pt-30 pb-10 text-center text-5xl font-bold text-gray-800 lg:text-7xl"
      >
        SOFTWARE
      </h1>
      <div
        ref="gridRef"
        :class="[
          'grid grid-cols-1 gap-12 transition-all duration-1000 ease-out sm:grid-cols-2 lg:grid-cols-4',
          gridVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
        ]"
      >
        <a
          v-for="(project, index) in projects"
          :key="index"
          :href="project.repo"
          target="_blank"
          rel="noopener noreferrer"
          class="roboto-condensed flex flex-col items-center rounded-xl bg-white p-6 shadow-2xl transition-transform duration-300 hover:scale-105"
        >
          <img
            :src="project.icon"
            :alt="project.name"
            class="mb-4 h-28 w-28 rounded-2xl object-contain shadow-md"
          />
          <h2 class="thick mb-2 text-xl font-bold text-gray-800">
            {{ project.name }}
          </h2>
          <p class="thin mb-3 text-center text-sm text-gray-500">
            {{ project.tech }}
          </p>
          <p class="thin text-center text-base leading-relaxed text-gray-700">
            {{ project.description }}
          </p>
        </a>
      </div>
    </div>
  </div>
</template>
