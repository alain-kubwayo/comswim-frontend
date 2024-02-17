<template>
    <div class="flex flex-1 flex-col items-center justify-center px-10 relative">
        <div class="flex lg:hidden justify-between items-center w-full py-4">
            <div class="flex items-center justify-start space-x-3">
            <span class="bg-black rounded-full w-6 h-6"></span>
            <a href="#" class="font-medium text-lg">ComSwim</a>
            </div>
            <div class="flex items-center space-x-2">
            <span>Not a member? </span>
            <a href="#" class="underline font-medium text-[#070eff]">Sign up now</a>
            </div>
        </div>
        <div class="flex flex-1 flex-col  justify-center space-y-5 max-w-md">
            <div class="flex flex-col space-y-2 text-center">
            <h2 class="text-3xl md:text-4xl font-bold">Sign in to account</h2>
            <p class="text-md">Log in to your space to start or resume the swimming lessons!</p>
            </div>
            <form 
                @submit.prevent="handleLogin" 
                class="flex flex-col max-w-md space-y-5"
            >
                <input 
                    type="email" 
                    placeholder="Email"
                    v-model="formData.email"
                    class="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal" 
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    v-model="formData.password"
                    class="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal" 
                />
                <div v-if="authError" class="text-red-500">
                    {{ authError.message }}
                </div>
                <button 
                    type="submit"
                    class="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white"
                >Sign in</button>
            </form>
        </div>
        <div v-if="user">
        <p>Welcome, {{ user.name }}!</p>
        </div>
        <div class="flex justify-center flex-col m-auto mb-16 text-center text-xs text-gray-600">
            <p class="font-bold">Built by <a href="/" class="underline font-extrabold">ComSwim</a></p>  
        </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { user, login, authError } from '../composables/useAuth';

  
  export default {
      setup() {
        const formData = ref({
            email: '',
            password: '',
        });

        const handleLogin = () => {
            login(formData.value);
        }
    
        return {
            user,
            authError,
            formData,
            handleLogin
        };
    },
  };
  </script>
