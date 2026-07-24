<template>
  <div class="min-h-screen overflow-x-hidden bg-[#f7f8f5] text-slate-900">
    <Main />

    <About id="about" />

    <Experience id="experience" />

    <Software id="software" />

    <Photography id="photography" />

    <Filmmaking id="filmmaking" />

    <section id="blog" class="bg-white px-6 py-24">
      <div class="mx-auto max-w-5xl">
        <p
          class="roboto-condensed thick text-sm tracking-[0.18em] text-teal-700 uppercase"
        >
          Writing
        </p>
        <h1
          class="roboto-condensed thick mt-3 text-5xl font-bold text-slate-950 lg:text-7xl"
        >
          Notes in progress
        </h1>
        <div class="mt-8 grid gap-5 md:grid-cols-3">
          <article class="rounded-lg border border-slate-200 bg-[#f7f8f5] p-6">
            <p class="text-sm font-semibold text-teal-700">AI</p>
            <h2 class="mt-3 text-2xl font-bold">
              Building with the future in mind
            </h2>
            <p class="mt-3 text-slate-600">
              Thoughts on automation, useful AI tools, and the kind of developer
              I am working to become.
            </p>
          </article>
          <article class="rounded-lg border border-slate-200 bg-[#f7f8f5] p-6">
            <p class="text-sm font-semibold text-teal-700">Creative work</p>
            <h2 class="mt-3 text-2xl font-bold">From photography to film</h2>
            <p class="mt-3 text-slate-600">
              A place for the stories behind shoots, edits, experiments, and
              learning to make better videos.
            </p>
          </article>
          <article class="rounded-lg border border-slate-200 bg-[#f7f8f5] p-6">
            <p class="text-sm font-semibold text-teal-700">Software</p>
            <h2 class="mt-3 text-2xl font-bold">Small tools, real problems</h2>
            <p class="mt-3 text-slate-600">
              Lessons from personal automations, full-stack projects, embedded
              systems, and portfolio builds.
            </p>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import Main from "../components/Main.vue";
import About from "../components/About.vue";
import Experience from "../components/Experience.vue";
import Software from "../components/Software.vue";
import Photography from "../components/Photography.vue";
import Filmmaking from "../components/Filmmaking.vue";
</script>
