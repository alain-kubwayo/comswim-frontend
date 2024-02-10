<script setup>
</script>

<template>
    <div class="hidden lg:flex flex-col justify-between bg-sky-800 lg:p-8 xl:p-12 lg:max-w-sm xl:max-w-lg text-white">
      <div class="flex items-center justify-start space-x-3">
        <span class="bg-white rounded-full w-8 h-8"></span>
        <a href="/" class="text-xl font-extrabold">ComSwim</a>
      </div>
      <div class="space-y-10">
        <h1 class="lg:text-2xl xl:text-4xl xl:leading-snug font-extrabold">
          We Shape Future Swimmers.
        </h1>
        <div class="space-y-3">
          <div class="w-1/6">
            <router-link :to="{ name: 'Login' }">Login</router-link>
          </div>
        </div>
      </div>
      <div></div>
      <p class="font-medium">&copy;{{ (new Date()).getFullYear() }} ComSwim</p>
    </div>
</template>

<style scoped>
.router-link-active {
  @apply text-white border-b-2 border-white; 
} 
</style>
