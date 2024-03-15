import { defineStore } from "pinia";
import { ref, reactive } from "vue";
import { useAuth } from "./auth";

export const useLogin = defineStore('login', () => {
    const auth = useAuth();
    const errors = reactive({});
    const loading = ref(false);
    const formData = reactive({
        email: '',
        password: ''
    });

    function resetForm() {
        formData.email = '';
        formData.password = '';
        errors.value = '';
    }

    async function handleSubmit() {
        if(loading.value) return;

        loading.value = true;
        errors.value = {};

        return window.axios
            .post('api/login', formData)
            .then(response => {
                auth.login(response.data.token)
            })
            .catch(error => {
                if(error.response.status === 422) {
                    console.log(error.response.data.errors)
                }
            })
            .finally(() => {
                formData.email = '';
                formData.password = '';
                loading.value = false;
            })
    }

    return { formData, errors, loading, resetForm, handleSubmit }

})