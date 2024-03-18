<script setup>
  import Sidebar from './components/Sidebar.vue'
</script>

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

<style scoped>
  
</style>
