<script setup>
import { ref, onMounted, onUnmounted } from "vue";

import photoOne from "../assets/photography/4.jpg";
import photoTwo from "../assets/photography/12.jpg";
import photoThree from "../assets/photography/16.jpg";

const sectionRef = ref(null);
const sectionVisible = ref(false);
let sectionObserver;

const platforms = [
  {
    name: "YouTube",
    handle: "@BiponRoy",
    href: "https://www.youtube.com/@BiponRoy",
    icon: "youtube",
    image: photoOne,
  },
  {
    name: "Instagram",
    handle: "@lifeofbipon",
    href: "https://www.instagram.com/lifeofbipon/",
    icon: "instagram",
    image: photoTwo,
  },
  {
    name: "TikTok",
    handle: "@lifeofbipon",
    href: "https://www.tiktok.com/@lifeofbipon",
    icon: "tiktok",
    image: photoThree,
  },
];

const gearGroups = [
  {
    title: "Previous Setup",
    note: "The early kit I learned on before upgrading into a more video-focused setup.",
    items: [
      {
        name: "Nikon D3300",
        image:
          "https://img.fullpix.ma/img/nikon-d3300-dx-nikkor-18-55mm-dslr-camera-occasionnikon-d3300-dx-nikkor-18-55mm-dslr-camera-occasion-1.png.webp",
      },
      {
        name: "18-55mm Lens",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/5/5f/AF-S_DX_Nikkor_18-55mm_f_3.5-5.6G_VR.jpg",
      },
      {
        name: "Sony a6300",
        image:
          "https://freepngimg.com/save/21743-sony-digital-camera-transparent-image/700x485",
      },
      {
        name: "Sony 18-105mm",
        image:
          "https://d1ncau8tqf99kp.cloudfront.net/converted/77841_original_local_1200x1050_v3_converted.webp",
      },
      {
        name: "Sigma 35mm",
        image:
          "https://images-us-prod.cms.commerce.dynamics.com/cms/api/hbzzfqllpg/imageFileData/search?fileName=/Products%2FV010GET497_000_001.png",
      },
      {
        name: "Sony 16-55mm",
        image:
          "https://d1ncau8tqf99kp.cloudfront.net/converted/101583_original_local_1200x1050_v3_converted.webp",
      },
      {
        name: "DJI Mavic Pro",
        image:
          "https://www.pngall.com/wp-content/uploads/4/DJI-Mavic-Pro-Drone-PNG-Picture.png",
      },
      {
        name: "DJI Mavic Mini",
        image:
          "https://static3.nordic.pictures/29602148-product_big/dji-mavic-mini-droon-avatud.jpg",
      },
      {
        name: "Zhiyun Crane V2",
        image:
          "https://zhiyun.us/cdn/shop/products/Crane_V2_2a8243b4-e848-41a7-bf87-316e285b7cc8_grande.jpg?v=1553794097",
      },
    ],
  },
  {
    title: "Current Setup",
    note: "The lighter kit I use now for vlogging, travel, audio, and filming life as it happens.",
    items: [
      {
        name: "Sony ZV-E10",
        image:
          "https://d1ncau8tqf99kp.cloudfront.net/converted/101438_original_local_1200x1050_v3_converted.webp",
      },
      {
        name: "Sigma 16mm",
        image:
          "https://i5.walmartimages.ca/asr/390f100b-5863-49b5-a9f0-762b0da33c62.2cc1789eba61ab48ad06369ae525da5e.jpeg?odnBg=FFFFFF&odnHeight=640&odnWidth=640",
      },
      {
        name: "Shure VP83",
        image:
          "https://www.canford.co.uk/Images/ItemImages/600C/74-6496_01.jpg",
      },
      {
        name: "DJI Mic Mini",
        image:
          "https://www-cdn.djiits.com/cms/uploads/ccc4ffb9056d4089b73613bb2a1ae6ba@374*374.png",
      },
      {
        name: "DJI Osmo Action 4",
        image:
          "https://www-cdn.djiits.com/cms/uploads/c58213b847e85616ccfc9c7a5b57f94f@374*374.png",
      },
    ],
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
      <div class="mt-8 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
        <h2 class="max-w-2xl text-4xl leading-tight font-bold">
          A life worth building is worth remembering.
        </h2>
        <p class="text-lg leading-8 text-slate-300">
          I took a break from photography to focus on my career, but I realized
          the creative side of me is not separate from the software side. It is
          how I notice, reflect, and tell the story of who I am becoming. I am
          continuing it now to document my life as I grow as a software
          developer, chase my career goals, travel, learn new skills, and follow
          the sidequests that make life feel bigger.
        </p>
      </div>

      <div
        ref="sectionRef"
        :class="[
          'mt-10 transition-all duration-1000 ease-out',
          sectionVisible
            ? 'translate-y-0 opacity-100'
            : 'translate-y-8 opacity-0',
        ]"
      >
        <div class="grid gap-3 lg:grid-cols-3">
          <a
            v-for="platform in platforms"
            :key="platform.name"
            :href="platform.href"
            target="_blank"
            rel="noopener noreferrer"
            class="group grid overflow-hidden rounded-lg border border-white/10 bg-white/5 backdrop-blur transition hover:-translate-y-1 hover:bg-white/10 sm:grid-cols-[7rem_1fr]"
          >
            <div class="relative min-h-28 overflow-hidden bg-slate-900">
              <img
                :src="platform.image"
                :alt="`${platform.name} portfolio preview`"
                loading="lazy"
                decoding="async"
                class="h-full w-full object-cover opacity-85 transition duration-500 group-hover:scale-105"
              />
              <div
                class="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,27,38,0.04),rgba(5,27,38,0.62))]"
              ></div>
            </div>
            <div class="flex items-center justify-between gap-4 p-5">
              <div>
                <p class="text-sm font-semibold text-teal-200">
                  {{ platform.handle }}
                </p>
                <h2 class="mt-1 text-3xl font-bold">{{ platform.name }}</h2>
              </div>
              <svg
                v-if="platform.icon === 'youtube'"
                class="h-10 w-10 shrink-0 text-teal-200"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.6 12 3.6 12 3.6s-7.6 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.8.5 9.4.5 9.4.5s7.6 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z"
                />
              </svg>
              <svg
                v-else-if="platform.icon === 'instagram'"
                class="h-10 w-10 shrink-0 text-teal-200"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm8.4 18A3.8 3.8 0 0 0 20 16.2V7.8A3.8 3.8 0 0 0 16.2 4H7.8A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4zM12 7.1A4.9 4.9 0 1 1 12 17a4.9 4.9 0 0 1 0-9.9zm0 7.9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm5.1-8.1a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0z"
                />
              </svg>
              <svg
                v-else
                class="h-10 w-10 shrink-0 text-teal-200"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M16.6 5.8a5.3 5.3 0 0 0 3.1 1V10a8.6 8.6 0 0 1-3.1-.6v5.8A6.8 6.8 0 1 1 9.8 8.4c.4 0 .8 0 1.2.1v3.4a3.3 3.3 0 1 0 2.2 3.1V2h3.4v3.8z"
                />
              </svg>
            </div>
          </a>
        </div>
      </div>

      <div class="mt-16">
        <p
          class="roboto-condensed thick text-sm tracking-[0.18em] text-teal-200 uppercase"
        >
          Gear and workflow
        </p>
        <h2 class="roboto-condensed thick mt-3 text-4xl font-bold lg:text-5xl">
          CREATIVE TOOLS
        </h2>

        <div class="mt-8 grid gap-8">
          <section
            v-for="group in gearGroups"
            :key="group.title"
            class="rounded-lg border border-white/10 bg-white/5 p-5 backdrop-blur"
          >
            <div class="mb-5 grid gap-2 md:grid-cols-[16rem_1fr] md:items-end">
              <h3 class="roboto-condensed thick text-3xl font-bold">
                {{ group.title }}
              </h3>
              <p class="text-sm leading-6 text-slate-300">
                {{ group.note }}
              </p>
            </div>

            <div
              class="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6"
            >
              <article
                v-for="item in group.items"
                :key="item.name"
                class="group overflow-hidden rounded-lg border border-white/10 bg-slate-950/55 transition hover:-translate-y-1 hover:bg-slate-900"
              >
                <div class="flex aspect-[4/3] items-center justify-center bg-white p-4">
                  <img
                    :src="item.image"
                    :alt="item.name"
                    loading="lazy"
                    decoding="async"
                    class="max-h-full max-w-full object-contain mix-blend-multiply transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div class="p-3">
                  <p class="text-sm font-semibold text-white">
                    {{ item.name }}
                  </p>
                </div>
              </article>
            </div>
          </section>
        </div>
      </div>
    </div>
  </section>
</template>
