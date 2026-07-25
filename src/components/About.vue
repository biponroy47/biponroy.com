<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const h1Ref = ref(null);
const imgRef = ref(null);
const pRef = ref(null);
const iconsRef = ref(null);

const h1Visible = ref(false);
const imgVisible = ref(false);
const pVisible = ref(false);
const iconsVisible = ref(false);

let h1Observer, imgObserver, pObserver, iconsObserver;

onMounted(() => {
  // Create intersection observers for each element
  h1Observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          h1Visible.value = true;
          h1Observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 },
  );

  imgObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          imgVisible.value = true;
          imgObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 },
  );

  pObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          pVisible.value = true;
          pObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 },
  );

  iconsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          iconsVisible.value = true;
          iconsObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 },
  );

  // Start observing elements
  if (h1Ref.value) h1Observer.observe(h1Ref.value);
  if (imgRef.value) imgObserver.observe(imgRef.value);
  if (pRef.value) pObserver.observe(pRef.value);
  if (iconsRef.value) iconsObserver.observe(iconsRef.value);
});

onUnmounted(() => {
  // Clean up observers
  if (h1Observer) h1Observer.disconnect();
  if (imgObserver) imgObserver.disconnect();
  if (pObserver) pObserver.disconnect();
  if (iconsObserver) iconsObserver.disconnect();
});
</script>

<template>
  <section class="mx-auto max-w-6xl px-6 py-24">
    <h1
      ref="h1Ref"
      :class="[
        'roboto-condensed thick flex w-full flex-row justify-center pb-10 text-center text-5xl font-bold whitespace-nowrap text-slate-950 transition-all duration-1000 ease-out lg:text-7xl',
        h1Visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
      ]"
    >
      ABOUT
    </h1>
    <div class="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
      <img
        ref="imgRef"
        src="../assets/profile2-enhanced.JPG"
        alt="Profile"
        :class="[
          'mx-auto aspect-square w-full max-w-sm rounded-lg object-cover shadow-xl transition-all delay-300 duration-1000 ease-out',
          imgVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
        ]"
      />
      <div
        ref="pRef"
        :class="[
          'roboto-condensed thin rounded-lg border border-slate-200 bg-white p-7 text-lg leading-relaxed text-slate-700 shadow-xl transition-all delay-500 duration-1000 ease-out lg:p-9 lg:text-xl',
          pVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
        ]"
      >
        <p>
          Hey, I'm Bipon. I'm a fourth-year Computer Science student at Western
          University who likes to tinker, automate everything, and turn loose
          ideas into working products. I have been building across full-stack
          web apps, scripts, embedded systems, and AI experiments while growing
          through software engineering work at Ontario Power Generation.
        </p>
        <br />
        <p>
          I grew up with photography as one of my favorite ways to pay attention
          to the world. That creative side is still with me, and lately I have
          been pushing into content creation and filmmaking so I can learn how
          to tell better stories with motion, sound, pacing, and editing.
        </p>
        <br />
        <p>
          Right now, I am focused on getting as much hands-on software
          development experience as I can. I would love to join a fast-moving
          startup where I can take ownership and help ship real products, work
          at a major technology company with people building at huge scale, or
          eventually found my own tech company. I think AI is going to change
          how people work, learn, build, and solve problems, and I want to be
          close to that shift: testing the tools, asking better questions, and
          using them to build things that feel genuinely useful.
        </p>
        <div
          class="mt-6 flex flex-wrap gap-3 text-sm font-semibold text-slate-800"
        >
          <span class="rounded-md bg-teal-50 px-3 py-2 text-teal-800"
            >Western University CS</span
          >
          <span class="rounded-md bg-amber-50 px-3 py-2 text-amber-800"
            >Full-stack development</span
          >
          <span class="rounded-md bg-sky-50 px-3 py-2 text-sky-800"
            >AI and automation</span
          >
          <span class="rounded-md bg-rose-50 px-3 py-2 text-rose-800"
            >Photography and film</span
          >
        </div>
      </div>
    </div>

    <!-- Social Media Icons -->
    <div
      ref="iconsRef"
      :class="[
        'flex flex-col items-center pt-16 transition-all delay-700 duration-1000 ease-out',
        iconsVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
      ]"
    >
      <h1
        class="roboto-condensed thick text-center text-3xl font-bold text-slate-950 lg:text-4xl"
      >
        SOCIALS
      </h1>
      <div class="flex space-x-8 pt-5 lg:pt-10">
        <!-- LinkedIn -->
        <a
          href="https://www.linkedin.com/in/biponroy/"
          target="_blank"
          rel="noopener noreferrer"
          class="text-gray-700 transition-colors duration-300 hover:text-blue-600"
        >
          <svg class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
            />
          </svg>
        </a>

        <!-- GitHub -->
        <a
          href="https://github.com/biponroy47"
          target="_blank"
          rel="noopener noreferrer"
          class="text-gray-700 transition-colors duration-300 hover:text-gray-900"
        >
          <svg class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
            />
          </svg>
        </a>

        <!-- Instagram -->
        <a
          href="https://instagram.com/beepsvibes"
          target="_blank"
          rel="noopener noreferrer"
          class="text-gray-700 transition-colors duration-300 hover:text-pink-600"
        >
          <svg class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.49 0-.928-.175-1.297-.49-.368-.315-.49-.753-.49-1.243 0-.49.122-.928.49-1.243.369-.315.807-.49 1.297-.49s.928.175 1.297.49c.368.315.49.753.49 1.243 0 .49-.122.928-.49 1.243-.369.315-.807.49-1.297.49zm-7.83 1.418c-.807 0-1.47.263-1.988.789-.518.526-.789 1.189-.789 1.988s.263 1.47.789 1.988c.518.526 1.181.789 1.988.789s1.47-.263 1.988-.789c.518-.526.789-1.189.789-1.988s-.263-1.47-.789-1.988c-.518-.526-1.181-.789-1.988-.789z"
            />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>
