<script setup>
</script>

<template>
    <div class="flex-col justify-between hidden text-white lg:flex bg-sky-800 lg:p-8 xl:p-12 lg:max-w-sm xl:max-w-lg">
      <div class="flex items-center justify-start space-x-3">
        <span class="w-8 h-8 bg-white rounded-full"></span>
        <router-link to="/" class="text-xl font-extrabold">ComSwim</router-link>
      </div>
      <div class="space-y-10">
        <h1 class="font-extrabold lg:text-2xl xl:text-4xl xl:leading-snug">
          We Shape Future Swimmers.
        </h1>
        <div class="space-y-3">
          <div class="w-1/6">
            <router-link :to="{ name: 'Login' }">Login</router-link>
          </div>
          <div class="w-1/6">
            <router-link :to="{ name: 'Register' }">Register</router-link>
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
