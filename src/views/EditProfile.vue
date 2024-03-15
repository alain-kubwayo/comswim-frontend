<template>
  <div
    class="relative flex flex-col items-center flex-1 h-full px-10 overflow-y-scroll bg-gray-100"
  >
    <div
      class="flex flex-col justify-start flex-1 w-full h-full max-w-md py-12 space-y-5"
    >
      <div class="flex flex-col space-y-2 text-center">
        <h2 class="text-2xl font-bold md:text-3xl">
          Update Account Information
        </h2>
        <h3 class="text-lg font-bold md:text-xl">
          You can update your basic account information here. 🚀
        </h3>
      </div>
      <form
        class="flex flex-col max-w-md space-y-5"
      >
        <input
          type="text"
          placeholder="First Name"
          class="flex px-3 py-2 font-medium border-2 border-black rounded-lg outline-none md:px-4 md:py-3 placeholder:font-normal"
        />
        <input
          type="text"
          placeholder="Last Name"
          class="flex px-3 py-2 font-medium border-2 border-black rounded-lg outline-none md:px-4 md:py-3 placeholder:font-normal"
        />
        <input
          type="text"
          placeholder="Guardian First Name (optional)"
          class="flex px-3 py-2 font-medium border-2 border-black rounded-lg outline-none md:px-4 md:py-3 placeholder:font-normal"
        />
        <input
          type="text"
          placeholder="Guardian Last Name (optional)"
          class="flex px-3 py-2 font-medium border-2 border-black rounded-lg outline-none md:px-4 md:py-3 placeholder:font-normal"
        />
        <input
          type="text"
          placeholder="Telephone"
          class="flex px-3 py-2 font-medium border-2 border-black rounded-lg outline-none md:px-4 md:py-3 placeholder:font-normal"
        />
        <input
          type="text"
          placeholder="Residential Address"
          class="flex px-3 py-2 font-medium border-2 border-black rounded-lg outline-none md:px-4 md:py-3 placeholder:font-normal"
        />
        <input
          type="text"
          placeholder="Postal Address"
          class="flex px-3 py-2 font-medium border-2 border-black rounded-lg outline-none md:px-4 md:py-3 placeholder:font-normal"
        />
        <button
          type="submit"
          class="flex items-center justify-center flex-none px-3 py-2 font-medium text-white bg-sky-800 hover:bg-white hover:text-black hover:border-2 border-2 border-sky-800 hover:border-black rounded-lg md:px-4 md:py-3 { 'disabled-btn': !acceptFees || !certifyInformation }"
        >
          Save Changes
        </button>
      </form>
      <div
        class="flex flex-col justify-center pb-8 m-auto text-xs text-center text-gray-600"
      >
        <p class="font-bold">
          Built by <a href="/" class="font-extrabold underline">ComSwim</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  setup() {
    return {};
  },
};
</script>
<style>
  
</style>
