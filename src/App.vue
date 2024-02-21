<script setup>
import AuthSidebar from './components/AuthSidebar.vue'

</script>

<template>
  <div>

    <div class="flex h-screen">
      <div class="flex flex-row w-full">
        <AuthSidebar />
        <router-view />
      </div>
    </div>
  </div>
</template>

<style scoped>
  
</style>
