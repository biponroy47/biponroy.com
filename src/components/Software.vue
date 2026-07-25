<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import {
  BanknotesIcon,
  BeakerIcon,
  BoltIcon,
  CodeBracketSquareIcon,
  CommandLineIcon,
  CpuChipIcon,
  PhotoIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/vue/24/outline";

const gridRef = ref(null);
const gridVisible = ref(false);
let gridObserver;

const projects = [
  {
    name: "Finance Tracker",
    icon: BanknotesIcon,
    tech: "HTML, PWA, Google Cloud Functions",
    repo: "https://github.com/biponroy47/finance_tracker",
    description:
      "A personal expense-tracking PWA that automates logging transactions into Google Sheets.",
  },
  {
    name: "FiHo",
    icon: BoltIcon,
    tech: "TypeScript, AI, financial dashboard",
    repo: "https://github.com/biponroy47/techto_hackathon",
    description:
      "An AI-powered financial assistant and dashboard built for Tangerine's financial AI track, helping users track net worth, manage budgets, plan expenses, and get goal-based guidance.",
  },
  {
    name: "Invoice Automator",
    icon: WrenchScrewdriverIcon,
    tech: "Python, CSV, PDF processing",
    repo: "https://github.com/biponroy47/invoice_automator",
    description:
      "A utility that turns monthly invoice documents into a clean summary CSV.",
  },
  {
    name: "Image Finder",
    icon: PhotoIcon,
    tech: "Python, file automation",
    repo: "https://github.com/biponroy47/image_finder_and_copier",
    description:
      "A script for finding and extracting images from messy folders when manual sorting gets painful.",
  },
  {
    name: "Arduino Car",
    icon: CpuChipIcon,
    tech: "C++, Arduino, embedded systems",
    repo: "https://github.com/biponroy47/arduino_car",
    description:
      "A custom 4WD electronic car using Arduino, motor driver chips, and IR controls.",
  },
  {
    name: "TensorFlow Teachable Machine",
    icon: BeakerIcon,
    tech: "JavaScript, TensorFlow, MobileNet",
    repo: "https://github.com/biponroy47/tensorflow_teachable_machine",
    description:
      "An object-detection experiment using TensorFlow and MobileNet as a practical AI learning project.",
  },
  {
    name: "Full Stack Open",
    icon: CommandLineIcon,
    tech: "React, Node, Express, MongoDB",
    repo: "https://github.com/biponroy47/full_stack_open",
    description:
      "Course projects from the University of Helsinki's full-stack web development curriculum.",
  },
  {
    name: "Cipher Encryption",
    icon: CodeBracketSquareIcon,
    tech: "Java, SWT, algorithms",
    repo: "https://github.com/biponroy47/cipher_encryption",
    description:
      "A desktop encryption/decryption tool for substitution and Caesar cipher algorithms.",
  },
];

const tools = [
  {
    name: "ChatGPT",
    icon: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
  },
  {
    name: "Codex",
    icon: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
  },
  {
    name: "Claude Code",
    icon: "https://cdn.simpleicons.org/anthropic/111827",
  },
  {
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "C++",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "TensorFlow",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  },
  {
    name: "OpenCV",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "Supabase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "VS Code",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  {
    name: "NPM",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
  },
  {
    name: "Bash",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
  },
  {
    name: "ESLint",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg",
  },
  {
    name: "Postman",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  },
  {
    name: "Three.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg",
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
  <section class="bg-tiber/5 w-full py-24">
    <div class="mx-auto max-w-7xl px-6">
      <p
        class="roboto-condensed thick text-center text-sm tracking-[0.18em] text-teal-700 uppercase"
      >
        Public GitHub work
      </p>
      <h1
        class="roboto-condensed thick flex w-full flex-row justify-center pt-3 pb-6 text-center text-5xl font-bold text-slate-950 lg:text-7xl"
      >
        SOFTWARE
      </h1>
      <p
        class="mx-auto mb-12 max-w-3xl text-center text-lg leading-8 text-slate-600"
      >
        I like projects that remove friction: personal automations, full-stack
        apps, embedded experiments, and early AI prototypes. These are selected
        from my public repositories.
      </p>
      <div
        ref="gridRef"
        :class="[
          'grid grid-cols-1 gap-5 transition-all duration-1000 ease-out sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5',
          gridVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
        ]"
      >
        <a
          v-for="(project, index) in projects"
          :key="index"
          :href="project.repo"
          target="_blank"
          rel="noopener noreferrer"
          class="roboto-condensed group flex min-h-80 flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-teal-300 hover:shadow-2xl"
        >
          <div
            class="mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-slate-950 text-teal-100 shadow-md transition group-hover:bg-teal-700"
          >
            <component :is="project.icon" class="h-8 w-8" aria-hidden="true" />
          </div>
          <h2 class="thick mb-2 text-xl font-bold text-slate-950">
            {{ project.name }}
          </h2>
          <p class="thin mb-3 text-sm text-teal-700">
            {{ project.tech }}
          </p>
          <p class="thin text-base leading-relaxed text-slate-600">
            {{ project.description }}
          </p>
          <span class="mt-auto pt-5 text-sm font-semibold text-slate-950">
            View repository
          </span>
        </a>
      </div>

      <div
        class="mt-16 rounded-lg border border-slate-200 bg-white p-6 shadow-lg"
      >
        <div class="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p
              class="roboto-condensed thick text-sm tracking-[0.18em] text-teal-700 uppercase"
            >
              Technical toolkit
            </p>
            <h2
              class="roboto-condensed thick mt-2 text-4xl font-bold text-slate-950"
            >
              TOOLS I USE
            </h2>
          </div>
        </div>

        <div class="mt-8 flex flex-wrap items-center gap-5">
          <span
            v-for="tool in tools"
            :key="tool.name"
            :aria-label="tool.name"
            :title="tool.name"
            class="group relative flex h-12 w-12 items-center justify-center transition hover:-translate-y-0.5"
          >
            <img
              :src="tool.icon"
              :alt="tool.name"
              loading="lazy"
              decoding="async"
              class="max-h-10 max-w-10 object-contain transition drop-shadow-sm group-hover:scale-110"
            />
            <span
              class="pointer-events-none absolute bottom-full left-1/2 mb-3 -translate-x-1/2 translate-y-1 rounded-md bg-slate-950 px-2.5 py-1.5 text-xs font-semibold whitespace-nowrap text-white opacity-0 shadow-lg transition group-hover:translate-y-0 group-hover:opacity-100"
            >
              {{ tool.name }}
            </span>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
