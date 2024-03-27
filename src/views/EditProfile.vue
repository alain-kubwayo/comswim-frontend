<template>
  <div
    class="relative flex flex-col items-center flex-1 h-full overflow-y-scroll bg-gray-100"
  >
    <div class="flex-1 w-full space-y-5">
      <Navbar
        @toggle-menu="toggleNav"
        :isOpen="isOpen"
        :firstName="store.profileData.value?.first_name"
        :lastName="store.profileData.value?.last_name"
        title="Edit Profile"
      ></Navbar>
      <div class="container px-5 mx-auto mt-2 mb-5">
        <form
          @submit.prevent="
            store.handleSubmit(
              store.formData.guardian_first_name &&
                store.formData.guardian_last_name
                ? 'guardian'
                : 'learner'
            )
          "
          class="flex flex-col max-w-md mx-auto space-y-5"
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
            <SpinnerIcon class="animate-spin" v-show="store.loading" />
            Save Changes
          </button>
        </form>
      </div>
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
import { onMounted } from "vue";
import { useProfile } from "@/stores/profile";
import Navbar from "@/components/Navbar.vue";
import { isOpen, toggleNav } from "@/composables/useNav";

export default {
  components: {
    Navbar,
  },
  setup() {
    const store = useProfile();

    onMounted(() => {
      store.getProfileEditables();
    });

    return { store, isOpen, toggleNav };
  },
};
</script>
