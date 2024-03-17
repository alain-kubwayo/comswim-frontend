<template>
  <ul
    v-if="errors.value && errors.value[field] && errors.value[field].length"
    class="text-red-600"
  >
    <li v-for="message in errors.value[field]" :key="message">{{ message }}</li>
  </ul>
</template>

<script setup>
import { ref, defineProps } from "vue";

const props = defineProps(["errors", "field"]);
const errors = ref(props.errors);
</script>
