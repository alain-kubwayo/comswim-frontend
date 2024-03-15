<template>
    <div class="relative flex flex-col items-center justify-center flex-1 px-10 bg-gray-100">
        <div class="flex flex-col items-center w-full py-4 space-y-4 sm:space-y-0 sm:flex-row sm:justify-between lg:hidden">
            <div class="flex items-center justify-start space-x-3">
                <span class="w-6 h-6 bg-black rounded-full"></span>
                <router-link :to="{ name: 'Welcome' }" class="text-lg font-medium">ComSwim</router-link>
            </div>
            <div class="flex items-center space-x-2">
            <span>Already a member? </span>
            <router-link :to="{ name: 'Login'}" class="underline font-medium text-[#070eff]">Login</router-link>
            </div>
        </div>
        <div class="flex flex-col justify-center flex-1 max-w-md space-y-5">
            <div class="flex flex-col space-y-2 text-center">
            <h2 class="text-3xl font-bold md:text-4xl">Let's get you started!</h2>
            <p class="text-md">Choose the category to proceed with registration and start bringing your swimming dream to life already.</p>
            </div>
                <router-link 
                    :to="{ name: 'LearnerRegister' }" 
                    class="flex items-center justify-center flex-none px-3 py-2 font-medium text-white border-2 rounded-lg bg-sky-800 md:px-4 md:py-3 border-sky-800 hover:border-black hover:bg-white hover:text-black"
                >Learner</router-link>
                <router-link 
                    :to="{ name: 'ParentRegister' }" 
                    class="flex items-center justify-center flex-none px-3 py-2 font-medium text-white border-2 rounded-lg bg-sky-800 border-sky-800 md:px-4 md:py-3 hover:bg-white hover:text-black hover:border-black"
                >Parent/Guardian</router-link>
        </div>
        <div class="flex flex-col justify-center m-auto mb-16 text-xs text-center text-gray-600">
            <p class="font-bold">Built by <a href="/" class="font-extrabold underline">ComSwim</a></p>  
        </div>
    </div>
  </template>
  
  <script>  
  export default {
    setup() {
        
    },
  };
  </script>