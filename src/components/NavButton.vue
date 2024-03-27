<template>
    <button :class="buttonClass" @click="$emit('click')">
      <div class="grid mr-4 place-items-center">
        <slot name="icon"></slot>
      </div>
      <slot></slot>
    </button>
  </template>
  
  <script>
  export default {
    props: {
      buttonClass: {
        type: String,
        default: "flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
      }
    }
  };
  </script>
  