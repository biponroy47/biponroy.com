<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const expRef = ref(null);
const expVisible = ref(false);
let expObserver;

const jobs = [
  {
    logo: new URL("../assets/logo_opg.jpg", import.meta.url).href,
    company: "Ontario Power Generation",
    role: "Software Engineer Intern",
    location: "Pickering, Ontario",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
  {
    logo: new URL("../assets/logo_jk.jpg", import.meta.url).href,
    company: "Jennifer Kominek Interior Design",
    role: "Front-End Developer Intern",
    location: "Toronto, Ontario",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
  {
    logo: new URL("../assets/logo_vex.jpg", import.meta.url).href,
    company: "VEX Danforth Robotics",
    role: "Software Engineer (Student)",
    location: "Toronto, Ontario",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
];

onMounted(() => {
  expObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          expVisible.value = true;
          expObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 },
  );

  if (expRef.value) expObserver.observe(expRef.value);
});

onUnmounted(() => {
  if (expObserver) expObserver.disconnect();
});
</script>

<template>
  <div class="py-10">
    <div class="mx-auto max-w-5xl px-6">
      <div
        ref="expRef"
        :class="[
          'flex flex-col items-center transition-all duration-1000 ease-out',
          expVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
        ]"
      >
        <h1
          class="roboto-condensed thick mb-10 pt-30 text-center text-5xl font-bold text-gray-800 lg:text-7xl"
        >
          EXPERIENCE
        </h1>
        <div class="relative flex w-full flex-col items-center">
          <!-- Vertical train line -->
          <div
            class="absolute top-0 bottom-0 left-6 w-1 bg-gray-300 sm:left-8"
          ></div>

          <div
            v-for="(job, index) in jobs"
            :key="index"
            class="relative flex w-full items-start gap-6 py-4 sm:gap-8"
          >
            <!-- Stop dot -->
            <div
              class="relative z-10 flex shrink-0 items-start justify-center pt-8"
            >
              <div
                class="h-5 w-5 rounded-full border-4 border-gray-400 bg-white sm:ml-2"
              ></div>
            </div>

            <!-- Job card -->
            <div
              class="roboto-condensed flex w-full flex-col rounded-lg bg-white p-8 shadow-2xl transition-transform duration-300 hover:scale-[1.02]"
            >
              <div class="flex flex-col sm:flex-row sm:items-center sm:gap-8">
                <img
                  :src="job.logo"
                  :alt="job.company + ' logo'"
                  class="mb-4 h-28 w-28 shrink-0 rounded-md object-contain sm:mb-0"
                />
                <div class="min-w-0 flex-1">
                  <h2 class="text-2xl font-bold text-gray-800 lg:text-3xl">
                    {{ job.company }}
                  </h2>
                  <p class="thin text-xl text-gray-600 lg:text-2xl">
                    {{ job.role }}
                  </p>
                </div>
                <p
                  class="thin mt-2 shrink-0 text-lg text-gray-500 sm:mt-0 sm:text-right"
                >
                  {{ job.location }}
                </p>
              </div>
              <p class="thin mt-4 text-base text-gray-700 lg:text-lg">
                {{ job.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
