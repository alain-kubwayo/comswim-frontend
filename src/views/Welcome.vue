<template>
  <div class="relative flex-1">
    <div
      class="relative flex flex-col items-center justify-center h-screen px-3 py-0 text-center text-white"
    >
      <div
        class="absolute top-0 left-0 w-full h-full overflow-hidden video-docker"
      >
        <video
          class="absolute object-cover min-w-full min-h-full"
          src="../../src/assets/hero-video.mp4"
          type="video/mp4"
          autoplay
          muted
          loop
        ></video>
      </div>
      <div class="space-y-2 video-content">
        <h1 class="text-6xl font-light">We Shape Future</h1>
        <h3 class="text-3xl font-light">Swimmers.</h3>
      </div>
      <div class="mt-4 hero-cta">
        <router-link
          :to="{ name: 'Register' }"
          class="flex items-center justify-center px-3 py-2 font-medium text-white border-2 border-white rounded-lg bg-sky-800 md:px-4 md:py-3 hover:bg-white hover:text-black"
          >Get Started</router-link
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.video-docker video {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.video-docker::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1;
}
.video-content,
.hero-cta {
  z-index: 2;
}
</style>
