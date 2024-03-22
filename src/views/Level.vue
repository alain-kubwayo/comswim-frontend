<template>
    <div
      class="relative flex flex-col items-center flex-1 h-full overflow-y-scroll bg-gray-100"
      v-if="!store.loading.value && store.profileData.value"
    >
      <div class="flex-1 w-full space-y-5">
        <Navbar @toggle-menu="toggleIsOpen" :isOpen="isOpen" title="Level Content"></Navbar>
        <div class="container px-5 mx-auto mt-2 mb-5 bg-green-800">
          
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
  import { onMounted, ref } from "vue";
  import { useProfile } from "@/stores/profile";
  
  export default {
    setup() {
      const store = useProfile();
      const isOpen = ref(false);
      onMounted(() => {
        store.getProfile();
      });
  
      const toggleIsOpen = () => {
        isOpen.value = !isOpen.value
      }
  
      return { store, isOpen, toggleIsOpen };
    },
  };
  </script>
  