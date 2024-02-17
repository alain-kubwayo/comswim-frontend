import { ref } from 'vue';
import api from '../services/api';

const user = ref(null);
const authError = ref(null);

const login = async (formData) => {
  try {
    await api.get('/sanctum/csrf-cookie');
    const response = await api.post('api/login', formData);
    user.value = response.data.user;
    authError.value = null;
  } catch (error) {
    authError.value = error.response.data;
  }
};

export { user, login, authError }; 
