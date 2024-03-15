import { ref } from 'vue';
import api from '../services/api';
// import { useUserStore } from '../stores/UserStore';

const user = ref(null);
const authError = ref(null);
// const authStore = useUserStore();

const login = async (formData) => {
  try {
    await api.get('/sanctum/csrf-cookie');
    const response = await api.post('api/login', formData);
    user.value = response.data.user;
    // authStore.setUser(response.data.user);
    authError.value = null;
    return user.value;
  } catch (error) {
    authError.value = error.response.data;
  }
};

const register = async (formData) => {
  try {
    await api.get('/sanctum/csrf-cookie');
    const response = await api.post('api/register', formData);
    user.value = response.data;
    authError.value = null;
  } catch (error) {
    authError.value = error.response.data;
  }
}

export { user, login, register, authError }; 
