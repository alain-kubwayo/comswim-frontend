<template>
    <div class="flex-col justify-between hidden text-white lg:flex bg-sky-800 lg:p-8 xl:p-12 lg:max-w-sm xl:max-w-lg">
      <div class="flex items-center justify-start space-x-3">
        <span class="w-8 h-8 bg-white rounded-full"></span>
        <router-link to="/" class="text-xl font-extrabold logo">ComSwim</router-link>
      </div>
      <div class="space-y-10">
        <div class="space-y-3">
          <div class="w-1/6" v-if="!store.check">
            <router-link :to="{ name: 'Login' }">Login</router-link>
          </div>
          <div class="w-1/6" v-if="!store.check">
            <router-link :to="{ name: 'Register' }">Register</router-link>
          </div>
          <div class="w-1/6" v-if="store.check">
            <router-link :to="{ name: 'Profile' }">Profile</router-link>
          </div>
        </div>
      </div>
      <div></div>
      <p class="text-sm font-medium">&copy;{{ (new Date()).getFullYear() }} ComSwim</p>
    </div>
</template>
<script>
import { useAuth } from "@/stores/auth";

export default {
  setup() {
    const store = useAuth();
    return { store };
  }
}
</script>
<style scoped>
.router-link-active {
  @apply text-white border-b-2 border-white; 
} 
.logo {
  @apply border-none no-underline;
}
</style>
