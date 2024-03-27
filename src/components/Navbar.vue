<template>
  <div class="container flex items-center w-full px-5 mx-auto bg-gray-200">
    <div class="flex flex-row items-center justify-between py-2">
      <h2
        class="text-lg font-semibold tracking-widest uppercase rounded-lg focus:outline-none focus:shadow-outline"
      >
        {{ title }}
      </h2>
    </div>
    <nav class="flex flex-row justify-end flex-grow pb-4 md:pb-0">
      <div class="relative">
        <button
          class="flex flex-row items-center w-full px-4 py-2 mt-2 space-x-2 text-sm font-semibold text-left bg-transparent md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none focus:shadow-outline"
          @click="toggleDropdown"
        >
          <span>{{ firstName }} {{ lastName }}</span>
          <img
            class="inline w-6 h-6 rounded-full"
            src="/src/assets/images/img1.jpeg"
          />
          <ArrowDownIcon />
        </button>
        <div
          :class="{ visible: isOpen, hidden: !isOpen }"
          class="absolute right-0 z-10 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48"
        >
          <div
            class="py-2 text-sm text-blue-800 bg-white border rounded-sm shadow-sm border-main-color"
          >
            <router-link
              class="inline-flex justify-center w-full px-4 py-2 mt-2 text-sm bg-white md:mt-0 focus:text-gray-900 hover:bg-indigo-100 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              :to="{ name: 'EditProfile' }"
              >Edit Profile</router-link
            >
            <div class="border-b"></div>
            <form @submit.prevent="store.logout">
              <button
                type="submit"
                class="inline-flex justify-center w-full px-4 py-2 mt-2 text-sm bg-white md:mt-0 focus:text-gray-900 hover:bg-indigo-100 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              >
                Logout
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { toRefs } from "vue";
import { useAuth } from "@/stores/auth";
import ArrowDownIcon from "@/components/svgs/ArrowDownIcon.vue";

export default {
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    }
  },
  components: {
    ArrowDownIcon
  },
  setup(props, context) {
    const store = useAuth();
    const { isOpen, title, firstName, lastName } = toRefs(props);
    const toggleDropdown = () => {
      context.emit("toggleMenu");
    };

    return { store, isOpen, title, firstName, lastName, toggleDropdown };
  },
};
</script>
