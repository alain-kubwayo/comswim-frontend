<template>
  <ul
    v-if="errors && errors[field] && errors[field].length"
    class="flex flex-col gap-1 text-red-600"
  >
    <li v-for="message in errors[field]" :key="message">{{ message }}</li>
  </ul>
</template>

<script setup>
import { ref, defineProps } from "vue";

const props = defineProps(["errors", "field"]);
const errors = ref(props.errors);
</script>
