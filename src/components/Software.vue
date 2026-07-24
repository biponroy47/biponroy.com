<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import {
  BanknotesIcon,
  BeakerIcon,
  BoltIcon,
  CodeBracketSquareIcon,
  CommandLineIcon,
  CpuChipIcon,
  DocumentChartBarIcon,
  PhotoIcon,
  RectangleGroupIcon,
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
    name: "TechTO Hackathon",
    icon: BoltIcon,
    tech: "TypeScript, product prototyping",
    repo: "https://github.com/biponroy47/techto_hackathon",
    description:
      "A hackathon build focused on moving quickly from idea to working TypeScript prototype.",
  },
  {
    name: "biponroy.com",
    icon: RectangleGroupIcon,
    tech: "Vue, Tailwind CSS, Vite",
    repo: "https://github.com/biponroy47/biponroy.com",
    description:
      "This portfolio site, built to connect software work with photography, writing, and film.",
  },
  {
    name: "Resume",
    icon: DocumentChartBarIcon,
    tech: "LaTeX, career documentation",
    repo: "https://github.com/biponroy47/resume",
    description:
      "A version-controlled LaTeX resume workflow for keeping career materials tidy and repeatable.",
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
    </div>
  </section>
</template>
