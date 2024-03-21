<template>
  <ul
    v-if="errors.value && errors.value[field] && errors.value[field].length"
    class="text-red-600"
  >
    <li v-for="message in errors.value[field]" :key="message">{{ message }}</li>
  </ul>
</template>

<script>
export default {
  props: {
    field: {
      type: String,
      required: true,
    },
    errors: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const { field, errors } = props;
    return { field, errors };
  },
};
</script>
