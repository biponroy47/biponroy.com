<template>
  <div class="relative min-h-screen">
    <!-- Floating Container -->
    <div
      class="absolute top-1/4 left-1/2 z-50 w-full max-w-4xl -translate-x-1/2 transform rounded-lg bg-white p-8 shadow-2xl"
    >
      <!-- Header Row -->
      <div class="mb-8 flex justify-center">
        <h1 class="text-center text-6xl font-bold text-gray-900 lg:text-7xl">
          Bipon Roy
        </h1>
      </div>

      <!-- Content Row -->
      <div
        class="flex flex-col items-center justify-center gap-8 lg:flex-row lg:items-center"
      >
        <!-- Left Column: Image -->
        <div class="flex justify-center">
          <img
            src="../assets/profile.JPG"
            alt="Profile"
            class="h-48 w-48 rounded-full object-cover shadow-md"
          />
        </div>

        <!-- Right Column: Text -->
        <div
          class="flex max-w-md flex-col justify-center text-lg leading-relaxed text-gray-800"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
