import { defineStore } from "pinia";
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";

export const useProfile = defineStore('profile', () => {
    const loading = ref(false);
    const profileData = reactive({});
    const router = useRouter();

    const formData = reactive({
        first_name: '',
        last_name: '',
        guardian_first_name: '',
        guardian_last_name: '',
        telephone: '',
        residential_address: '',
        postal_address: ''
    });

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

    async function getProfileEditables() {
        if(loading.value) return;

        loading.value = true;

        return window.axios
            .get('api/edit-profile')
            .then(response => {
                profileData.value = response.data.data;
                formData.first_name = profileData.value.first_name;
                formData.last_name = profileData.value.last_name;
                formData.guardian_first_name = profileData.value.guardian && profileData.value.guardian.guardian_first_name;
                formData.guardian_last_name = profileData.value.guardian && profileData.value.guardian.guardian_last_name;
                formData.telephone = profileData.value.user_profile && profileData.value.user_profile.telephone;
                formData.residential_address = profileData.value.address && profileData.value.address.residential_address;
                formData.postal_address = profileData.value.address && profileData.value.address.postal_address;
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                loading.value = false;
            })
    }

    async function handleSubmit(user_type) {
        if (loading.value) return;
    
        loading.value = true;
    
        return window.axios
          .put("api/edit-profile", {...formData, user_type})
          .then((response) => {
            router.push({ name: "Profile" });
            console.log(response.data.message);
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            formData.first_name = '',
            formData.last_name = '',
            formData.guardian_first_name = '',
            formData.guardian_last_name = '',
            formData.telephone = '',
            formData.residential_address = '',
            formData.postal_address = ''
    
            loading.value = false;
          });
      }
    return { loading, profileData, formData, getProfile, getProfileEditables, handleSubmit };
})