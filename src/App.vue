<template>
  <div>
    <div class="flex h-screen">
      <div class="flex flex-row w-full">
        <Sidebar />
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
export default {
  components: {
    Sidebar
  },
};
</script>
