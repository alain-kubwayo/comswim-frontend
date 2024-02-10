<script setup>
</script>

<template>
  <div id="nav">
    <h1>Comswim</h1>
    <router-link :to="{ name: 'Login' }">Login</router-link>
    <router-link :to="{ name: 'Register' }">Register</router-link>
  </div>
  <router-view />
</template>

<style scoped>
  
</style>
