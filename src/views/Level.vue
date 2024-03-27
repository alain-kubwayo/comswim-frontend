<template>
  <div
    class="relative flex flex-col items-center flex-1 h-full overflow-y-scroll bg-gray-100"
  >
    <div class="flex-1 w-full space-y-5">
      <Navbar
        @toggle-menu="toggleNav"
        :isOpen="isOpen"
        :firstName="store.profileData.value?.first_name"
        :lastName="store.profileData.value?.last_name"
        title="Class Content"
      ></Navbar>
      <div class="container px-5 mx-auto mt-2 mb-5">
        <h2 class="my-4 font-bold text-gray-700">Videos</h2>
        <Medias :medias="videos" mediaType="video" />
        <h2 class="my-4 mt-20 font-bold text-gray-700">Pictures</h2>
        <Medias :medias="photos" mediaType="photo" />
      </div>
    </div>
    <div
      class="flex flex-col justify-center m-auto my-8 text-xs text-center text-gray-600"
    >
      <p class="font-bold">
        Built by <a href="/" class="font-extrabold underline">ComSwim</a>
      </p>
    </div>
  </div>
</template>
<script>
import Medias from "@/components/Medias.vue";
import { isOpen, toggleNav } from "@/composables/useNav";
import { useProfile } from "@/stores/profile";
import { onMounted } from "vue";

export default {
  components: {
    Medias,
  },
  setup() {
    const store = useProfile();

    onMounted(() => {
      store.getProfile();
    });
    const photos = ["img1.jpeg", "img1.jpeg", "img1.jpeg", "img1.jpeg"];
    const videos = [
      "img1.jpeg",
      "img1.jpeg",
      "img1.jpeg",
      "img1.jpeg",
      "img1.jpeg",
    ];
    return { isOpen, toggleNav, store, photos, videos };
  },
};
</script>
