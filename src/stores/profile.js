import { defineStore } from "pinia";
import { ref, reactive } from "vue";

export const useProfile = defineStore('profile', () => {
    const loading = ref(false);
    const profileData = reactive({});

    async function getProfile() {
        if(loading.value) return;

        loading.value = true;

        return window.axios
            .get('api/user-profile')
            .then(response => {
                profileData.value = response.data.data;
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                loading.value = false;
            })
    }
    return { loading, profileData, getProfile };
})