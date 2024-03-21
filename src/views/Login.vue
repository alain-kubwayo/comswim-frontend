<template>
  <div
    class="relative flex flex-col items-center justify-center flex-1 px-10 bg-gray-100"
  >
    <div
      class="flex flex-col items-center w-full py-4 space-y-4 sm:space-y-0 sm:flex-row sm:justify-between lg:hidden"
    >
      <div class="flex items-center justify-start space-x-3">
        <span class="w-6 h-6 bg-black rounded-full"></span>
        <router-link :to="{ name: 'Welcome' }" class="text-lg font-medium"
          >ComSwim</router-link
        >
      </div>
      <div class="flex items-center space-x-2">
        <span>Not a member? </span>
        <router-link
          :to="{ name: 'Register' }"
          class="underline font-medium text-[#070eff]"
          >Register</router-link
        >
      </div>
    </div>
    <div class="flex flex-col justify-center flex-1 max-w-md space-y-5">
      <div class="flex flex-col space-y-2 text-center">
        <h2 class="text-3xl font-bold md:text-4xl">Sign in to account</h2>
        <p class="text-md">
          Log in to your space to start or resume the swimming lessons!
        </p>
      </div>
      <form
        @submit.prevent="store.handleSubmit"
        class="flex flex-col max-w-md space-y-5"
      >
        <input
          type="email"
          placeholder="Email"
          v-model="store.formData.email"
       
          :disabled="store.loading"
          class="flex px-3 py-2 font-medium border-2 border-black rounded-lg outline-none md:px-4 md:py-3 placeholder:font-normal"
        />
        <ValidationError :errors="store.errors" field="email" />
        <input
          type="password"
          placeholder="Password"
          v-model="store.formData.password"
  
          :disabled="store.loading"
          class="flex px-3 py-2 font-medium border-2 border-black rounded-lg outline-none md:px-4 md:py-3 placeholder:font-normal"
        />
        <ValidationError :errors="store.errors" field="password" />
        <button
          type="submit"
          :disabled="store.loading"
          class="flex items-center justify-center flex-none px-3 py-2 font-medium text-white border-2 rounded-lg border-sky-800 hover:border-black bg-sky-800 hover:bg-white hover:text-black md:px-4 md:py-3"
        >
          <IconSpinner class="animate-spin" v-show="store.loading" />
          Sign in
        </button>
      </form>
    </div>
    <div
      class="flex flex-col justify-center m-auto my-8 text-xs text-center text-gray-600"
    >
      <p class="font-bold">
        Built by <a href="/" class="font-extrabold underline">ComSwim</a>
      </p>
    </div>
  </div>
</template>

<script>
import { onBeforeUnmount } from "vue";
import { useLogin } from "@/stores/login";

export default {
  setup() {
    const store = useLogin();
    onBeforeUnmount(store.resetForm);
    return { store };
  },
};
</script>
