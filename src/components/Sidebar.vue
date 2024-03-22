<template>
  <div
    class="w-full max-w-[20rem] flex-col bg-sky-800 bg-clip-border p-4 text-white hidden lg:flex"
  >
    <div class="p-4 mb-2">
      <div class="flex items-center justify-start space-x-3">
        <span class="w-8 h-8 bg-white rounded-full"></span>
        <router-link to="/" class="text-xl font-extrabold logo"
          >ComSwim</router-link
        >
      </div>
    </div>
    <nav
      class="flex min-w-[240px] flex-col gap-1 p-2 text-base font-normal text-blue-gray-700"
      v-if="store.check"
    >
      <router-link
        :to="{ name: 'Profile' }"
        class="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
      >
        <div class="grid mr-4 place-items-center">
          <UserIcon />
        </div>
        Profile
      </router-link>
      <div class="relative block w-full">
        <div
          role="button"
          class="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
        >
          <button
            type="button"
            class="flex items-center justify-between w-full p-3 text-xl antialiased font-semibold leading-snug text-left transition-colors border-b-0 select-none border-b-blue-gray-100 text-blue-gray-700 hover:text-blue-gray-900"
          >
            <div class="grid mr-4 place-items-center">
              <BookIcon />
            </div>
            <p
              class="block mr-auto text-base antialiased font-normal leading-relaxed text-blue-gray-900"
            >
              Classes
            </p>
          </button>
        </div>
        <div class="overflow-hidden">
          <div
            class="block w-full py-1 text-sm antialiased font-light leading-normal"
          >
            <nav
              class="flex min-w-[240px] flex-col gap-1 p-0 text-base font-normal text-blue-gray-700"
            >
              <router-link
                :to="{ name: 'Level' }"
                class="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
              >
                <div class="grid mr-4 place-items-center">
                  <ArrowIcon />
                </div>
                Level 1
              </router-link>
              <router-link
                :to="{ name: 'Level' }"
                class="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
              >
                <div class="grid mr-4 place-items-center">
                  <ArrowIcon />
                </div>
                Level 2
              </router-link>
            </nav>
          </div>
        </div>
      </div>
      <hr class="my-2 border-sky-800" />
      <form @submit.prevent="store.logout">
        <button
          role="button"
          class="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
        >
          <div class="grid mr-4 place-items-center">
            <PlayIcon />
          </div>
          Log Out
        </button>
      </form>
    </nav>
    <nav
      class="flex min-w-[240px] flex-col gap-1 p-2 text-base font-normal text-blue-gray-700"
      v-if="!store.check"
    >
      <router-link
        :to="{ name: 'Login' }"
        class="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
      >
        <div class="grid mr-4 place-items-center">
          <User />
        </div>
        Login
      </router-link>
      <router-link
        :to="{ name: 'Register' }"
        class="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
      >
        <div class="grid mr-4 place-items-center">
          <User />
        </div>
        Register
      </router-link>
    </nav>
  </div>
</template>

<script>
import { useAuth } from "@/stores/auth";
import UserIcon from "@/components/svgs/UserIcon.vue";
import BookIcon from "@/components/svgs/BookIcon.vue";
import ArrowIcon from "@/components/svgs/ArrowIcon.vue";
import PlayIcon from "@/components/svgs/PlayIcon.vue";

export default {
  components: {
    UserIcon,
    BookIcon,
    ArrowIcon,
    PlayIcon,
  },
  setup() {
    const store = useAuth();
    return { store };
  },
};
</script>
