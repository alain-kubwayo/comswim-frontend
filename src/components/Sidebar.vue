<template>
  <div
    class="w-full max-w-[20rem] flex-col bg-sky-800 bg-clip-border p-4 text-white hidden lg:flex"
  >
    <div class="p-4 mb-2">
      <div class="flex items-center justify-start space-x-3">
        <NavigationLink to="Welcome">
          <template #icon
            ><span class="w-8 h-8 bg-white rounded-full"></span
          ></template>
          <p class="-ml-2 text-xl font-extrabold">Comswim</p>
        </NavigationLink>
      </div>
    </div>
    <nav
      class="flex min-w-[240px] flex-col gap-1 p-2 text-base font-normal text-blue-gray-700"
      v-if="store.check"
    >
      <NavigationLink to="Profile">
        <template #icon><UserIcon /></template>
        Profile
      </NavigationLink>
      <div class="relative block w-full">
        <div
          class="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
        >
          <NavButton>
            <template #icon><BookIcon /></template>
            Classes
          </NavButton>
        </div>
        <div class="overflow-hidden">
          <div
            class="block w-full py-1 text-sm antialiased font-light leading-normal"
          >
            <nav
              class="flex min-w-[240px] flex-col gap-1 p-0 text-base font-normal text-blue-gray-700"
            >
              <NavigationLink to="Level">
                <template #icon><ArrowIcon /></template>
                Level 1
              </NavigationLink>
              <NavigationLink to="Level">
                <template #icon><ArrowIcon /></template>
                Level 2
              </NavigationLink>
            </nav>
          </div>
        </div>
      </div>
      <hr class="my-2 border-sky-800" />
      <NavButton @click="store.logout">
        <template #icon><PlayIcon /></template>
        Log Out
      </NavButton>
    </nav>
    <nav
      class="flex min-w-[240px] flex-col gap-1 p-2 text-base font-normal text-blue-gray-700"
      v-if="!store.check"
    >
      <NavigationLink to="Login">
        <template #icon><UserIcon /></template>
        Login
      </NavigationLink>
      <NavigationLink to="Register">
        <template #icon><UserIcon /></template>
        Register
      </NavigationLink>
    </nav>
  </div>
</template>

<script>
import { useAuth } from "@/stores/auth";
import UserIcon from "@/components/svgs/UserIcon.vue";
import BookIcon from "@/components/svgs/BookIcon.vue";
import ArrowIcon from "@/components/svgs/ArrowIcon.vue";
import PlayIcon from "@/components/svgs/PlayIcon.vue";
import NavigationLink from "@/components/NavigationLink.vue";
import NavButton from "@/components/NavButton.vue";

export default {
  components: {
    UserIcon,
    BookIcon,
    ArrowIcon,
    PlayIcon,
    NavigationLink,
    NavButton,
  },
  setup() {
    const store = useAuth();
    return { store };
  },
};
</script>
