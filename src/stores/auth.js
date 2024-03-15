import { useStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import { computed } from "vue";
import { useRouter } from "vue-router";

export const useAuth = defineStore("auth", () => {
  const accessToken = useStorage("access_token", "");
  const router = useRouter();
  const check = computed(() => !!accessToken.value);

  function setAccessToken(value) {
    accessToken.value = value;
    window.axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${accessToken.value}`;
  }

  function login(accessToken, origin = "login") {
    setAccessToken(accessToken);

    if (origin === "login") return router.push({ name: "Profile" });
    if (origin === "register") return router.push({ name: "Home" });
  }

  function destroyTokenAndRedirectTo(routeName = "Login") {
    setAccessToken(null);
    router.push({ name: routeName });
  }

  async function logout() {
    return window.axios.post("api/logout").finally(() => {
      destroyTokenAndRedirectTo();
    });
  }

  return { login, logout, check, destroyTokenAndRedirectTo };
});
