<template>
  <div
    class="relative flex flex-col items-center flex-1 h-full px-10 overflow-y-scroll bg-gray-100"
  >
    <div
      class="flex flex-col justify-start flex-1 w-full h-full max-w-md py-12 space-y-5"
    >
      <div class="flex flex-col space-y-2 text-center">
        <h2 class="text-2xl font-bold md:text-3xl">
          Update Account Information
        </h2>
        <h3 class="text-lg font-bold md:text-xl">
          You can update your basic account information here. 🚀
        </h3>
      </div>
      <form
        @submit.prevent="store.handleSubmit(store.formData.guardian_first_name && store.formData.guardian_last_name ? 'guardian' : 'learner')"
        class="flex flex-col max-w-md space-y-5"
        v-if="!store.loading.value && store.formData"
      >
        <input
          type="text"
          placeholder="First Name"
          v-model="store.formData.first_name"
          class="flex px-3 py-2 font-medium border-2 border-black rounded-lg outline-none md:px-4 md:py-3 placeholder:font-normal"
        />
        <input
          type="text"
          placeholder="Last Name"
          v-model="store.formData.last_name"
          class="flex px-3 py-2 font-medium border-2 border-black rounded-lg outline-none md:px-4 md:py-3 placeholder:font-normal"
        />
        <input
          type="text"
          placeholder="Guardian First Name (optional)"
          v-if="store.formData.guardian_first_name"
          v-model="store.formData.guardian_first_name"
          class="flex px-3 py-2 font-medium border-2 border-black rounded-lg outline-none md:px-4 md:py-3 placeholder:font-normal"
        />
        <input
          type="text"
          v-if="store.formData.guardian_last_name"
          v-model="store.formData.guardian_last_name"
          placeholder="Guardian Last Name (optional)"
          class="flex px-3 py-2 font-medium border-2 border-black rounded-lg outline-none md:px-4 md:py-3 placeholder:font-normal"
        />
        <input
          type="text"
          placeholder="Telephone"
          v-model="store.formData.telephone"
          class="flex px-3 py-2 font-medium border-2 border-black rounded-lg outline-none md:px-4 md:py-3 placeholder:font-normal"
        />
        <input
          type="text"
          placeholder="Residential Address"
          v-model="store.formData.residential_address"
          class="flex px-3 py-2 font-medium border-2 border-black rounded-lg outline-none md:px-4 md:py-3 placeholder:font-normal"
        />
        <input
          type="text"
          placeholder="Postal Address"
          v-model="store.formData.postal_address"
          class="flex px-3 py-2 font-medium border-2 border-black rounded-lg outline-none md:px-4 md:py-3 placeholder:font-normal"
        />
        <button
          type="submit"
          :disabled="store.loading"
          class="flex items-center justify-center flex-none px-3 py-2 font-medium text-white border-2 rounded-lg border-sky-800 hover:border-black bg-sky-800 hover:bg-white hover:text-black md:px-4 md:py-3"
        >
          <IconSpinner class="animate-spin" v-show="store.loading" />
          Save Changes
        </button>
      </form>
      <div
        class="flex flex-col justify-center pb-8 m-auto text-xs text-center text-gray-600"
      >
        <p class="font-bold">
          Built by <a href="/" class="font-extrabold underline">ComSwim</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import { useProfile } from '../stores/profile';

export default {
  setup() {
    const store = useProfile();
    
    onMounted(() => {
      store.getProfileEditables();
    });
    
    return { store };
  },
};
</script>
<style>
  
</style>
