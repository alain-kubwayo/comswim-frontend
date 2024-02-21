<template>
  <div
    class="relative flex flex-col items-center flex-1 h-full px-10 overflow-y-scroll"
  >
    <div
      class="flex flex-col justify-start flex-1 w-full h-full max-w-md py-12 space-y-5"
    >
      <div class="flex flex-col space-y-2 text-center">
        <h2 class="text-3xl font-bold md:text-4xl">
          Hello, learner! welcome :)
        </h2>
        <h3 class="text-xl font-bold md:text-2xl">
          Let's get you an account ASAP. 🚀
        </h3>
        <p class="text-md">
          Just few information and you're on your way to becoming a world-class
          swimmer!
        </p>
      </div>
      <form
        @submit.prevent="handleRegister"
        class="flex flex-col max-w-md space-y-5"
      >
        <input
          type="text"
          placeholder="First Name"
          class="flex px-3 py-2 font-medium border-2 border-black rounded-lg md:px-4 md:py-3 placeholder:font-normal"
        />
        <input
          type="text"
          placeholder="Middle Name"
          class="flex px-3 py-2 font-medium border-2 border-black rounded-lg md:px-4 md:py-3 placeholder:font-normal"
        />
        <input
          type="text"
          placeholder="Last Name"
          class="flex px-3 py-2 font-medium border-2 border-black rounded-lg md:px-4 md:py-3 placeholder:font-normal"
        />
        <input
          type="date"
          placeholder="Date of Birth"
          class="flex px-3 py-2 font-medium border-2 border-black rounded-lg md:px-4 md:py-3 placeholder:font-normal"
        />
        <input
          type="text"
          placeholder="Residential Address"
          class="flex px-3 py-2 font-medium border-2 border-black rounded-lg md:px-4 md:py-3 placeholder:font-normal"
        />
        <input
          type="text"
          placeholder="Postal Address"
          class="flex px-3 py-2 font-medium border-2 border-black rounded-lg md:px-4 md:py-3 placeholder:font-normal"
        />
        <input
          type="text"
          placeholder="Telephone"
          class="flex px-3 py-2 font-medium border-2 border-black rounded-lg md:px-4 md:py-3 placeholder:font-normal"
        />
        <input
          type="email"
          placeholder="Email"
          class="flex px-3 py-2 font-medium border-2 border-black rounded-lg md:px-4 md:py-3 placeholder:font-normal"
        />
        <input
          type="password"
          placeholder="Password"
          class="flex px-3 py-2 font-medium border-2 border-black rounded-lg md:px-4 md:py-3 placeholder:font-normal"
        />
        <div class="grid grid-cols-2 gap-x-2">
          <div class="mb-2">
            <label
              for="entry"
              class="block mb-2 text-sm font-semibold text-gray-700 lg:text-base"
            >
              Chest disorders?
            </label>
            <div class="w-full">
              <div class="">
                <div class="inline-block radio">
                  <input
                    name="chest-disorders"
                    type="radio"
                    id="yes-chest-disorders"
                    hidden="hidden"
                    value="Yes"
                  />
                  <label
                    for="yes-chest-disorders"
                    class="flex items-center justify-center w-6 h-6 px-2 py-1 text-xl font-bold rounded-lg lg:text-lg lg:w-10 lg:h-10"
                  >
                    Yes
                  </label>
                </div>
                <div class="inline-block radio">
                  <input
                    name="chest-disorders"
                    type="radio"
                    id="no-chest-disorders"
                    hidden="hidden"
                    value="No"
                  />
                  <label
                    for="no-chest-disorders"
                    class="flex items-center justify-center w-6 h-6 px-2 py-1 text-xl font-bold rounded-lg lg:text-lg lg:w-10 lg:h-10"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="mb-2">
            <label
              for="entry"
              class="block mb-2 text-sm font-semibold text-gray-700 lg:text-base"
            >
              Physical injuries?
            </label>
            <div class="w-full">
              <div class="">
                <div class="inline-block radio">
                  <input
                    name="physical-injuries"
                    type="radio"
                    id="yes-physical-injuries"
                    hidden="hidden"
                    value="Yes"
                  />
                  <label
                    for="yes-physical-injuries"
                    class="flex items-center justify-center w-6 h-6 px-2 py-1 text-xl font-bold rounded-lg lg:text-lg lg:w-10 lg:h-10"
                  >
                    Yes
                  </label>
                </div>
                <div class="inline-block radio">
                  <input
                    name="physical-injuries"
                    type="radio"
                    id="no-physical-injuries"
                    hidden="hidden"
                    value="No"
                  />
                  <label
                    for="no-physical-injuries"
                    class="flex items-center justify-center w-6 h-6 px-2 py-1 text-xl font-bold rounded-lg lg:text-lg lg:w-10 lg:h-10"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-x-2">
          <div class="mb-2">
            <label
              for="entry"
              class="block mb-2 text-sm font-semibold text-gray-700 lg:text-base"
            >
              Ear disorders?
            </label>
            <div class="w-full">
              <div class="">
                <div class="inline-block radio">
                  <input
                    name="ear-disorders"
                    type="radio"
                    id="yes-ear-disorders"
                    hidden="hidden"
                    value="Yes"
                  />
                  <label
                    for="yes-ear-disorders"
                    class="flex items-center justify-center w-6 h-6 px-2 py-1 text-xl font-bold rounded-lg lg:text-lg lg:w-10 lg:h-10"
                  >
                    Yes
                  </label>
                </div>
                <div class="inline-block radio">
                  <input
                    name="ear-disorders"
                    type="radio"
                    id="no-ear-disorders"
                    hidden="hidden"
                    value="No"
                  />
                  <label
                    for="no-ear-disorders"
                    class="flex items-center justify-center w-6 h-6 px-2 py-1 text-xl font-bold rounded-lg lg:text-lg lg:w-10 lg:h-10"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="mb-2">
            <label
              for="entry"
              class="block mb-2 text-sm font-semibold text-gray-700 lg:text-base"
            >
              Allergies?
            </label>
            <div class="w-full">
              <div class="">
                <div class="inline-block radio">
                  <input
                    name="allergies"
                    type="radio"
                    id="yes-allergies"
                    hidden="hidden"
                    value="Yes"
                  />
                  <label
                    for="yes-allergies"
                    class="flex items-center justify-center w-6 h-6 px-2 py-1 text-xl font-bold rounded-lg lg:text-lg lg:w-10 lg:h-10"
                  >
                    Yes
                  </label>
                </div>
                <div class="inline-block radio">
                  <input
                    name="allergies"
                    type="radio"
                    id="no-allergies"
                    hidden="hidden"
                    value="No"
                  />
                  <label
                    for="no-allergies"
                    class="flex items-center justify-center w-6 h-6 px-2 py-1 text-xl font-bold rounded-lg lg:text-lg lg:w-10 lg:h-10"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-x-2">
          <div class="mb-2">
            <label
              for="entry"
              class="block mb-2 text-sm font-semibold text-gray-700 lg:text-base"
            >
              Heart disorders?
            </label>
            <div class="w-full">
              <div class="">
                <div class="inline-block radio">
                  <input
                    name="heart-disorders"
                    type="radio"
                    id="yes-heart-disorders"
                    hidden="hidden"
                    value="Yes"
                  />
                  <label
                    for="yes-heart-disorders"
                    class="flex items-center justify-center w-6 h-6 px-2 py-1 text-xl font-bold rounded-lg lg:text-lg lg:w-10 lg:h-10"
                  >
                    Yes
                  </label>
                </div>
                <div class="inline-block radio">
                  <input
                    name="heart-disorders"
                    type="radio"
                    id="no-heart-disorders"
                    hidden="hidden"
                    value="No"
                  />
                  <label
                    for="no-heart-disorders"
                    class="flex items-center justify-center w-6 h-6 px-2 py-1 text-xl font-bold rounded-lg lg:text-lg lg:w-10 lg:h-10"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="mb-2">
            <label
              for="entry"
              class="block mb-2 text-sm font-semibold text-gray-700 lg:text-base"
            >
              Lung disorders?
            </label>
            <div class="w-full">
              <div class="">
                <div class="inline-block radio">
                  <input
                    name="lung-disorders"
                    type="radio"
                    id="yes-lung-disorders"
                    hidden="hidden"
                    value="Yes"
                  />
                  <label
                    for="yes-lung-disorders"
                    class="flex items-center justify-center w-6 h-6 px-2 py-1 text-xl font-bold rounded-lg lg:text-lg lg:w-10 lg:h-10"
                  >
                    Yes
                  </label>
                </div>
                <div class="inline-block radio">
                  <input
                    name="lung-disorders"
                    type="radio"
                    id="no-lung-disorders"
                    hidden="hidden"
                    value="No"
                  />
                  <label
                    for="no-lung-disorders"
                    class="flex items-center justify-center w-6 h-6 px-2 py-1 text-xl font-bold rounded-lg lg:text-lg lg:w-10 lg:h-10"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-x-2">
          <div class="mb-2">
            <label
              for="entry"
              class="block mb-2 text-sm font-semibold text-gray-700 lg:text-base"
            >
              Low muscle tones?
            </label>
            <div class="w-full">
              <div class="">
                <div class="inline-block radio">
                  <input
                    name="low-muscle-tones"
                    type="radio"
                    id="yes-low-muscle-tones"
                    hidden="hidden"
                    value="Yes"
                  />
                  <label
                    for="yes-low-muscle-tones"
                    class="flex items-center justify-center w-6 h-6 px-2 py-1 text-xl font-bold rounded-lg lg:text-lg lg:w-10 lg:h-10"
                  >
                    Yes
                  </label>
                </div>
                <div class="inline-block radio">
                  <input
                    name="low-muscle-tones"
                    type="radio"
                    id="no-low-muscle-tones"
                    hidden="hidden"
                    value="No"
                  />
                  <label
                    for="no-low-muscle-tones"
                    class="flex items-center justify-center w-6 h-6 px-2 py-1 text-xl font-bold rounded-lg lg:text-lg lg:w-10 lg:h-10"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="mb-2">
            <label
              for="entry"
              class="block mb-2 text-sm font-semibold text-gray-700 lg:text-base"
            >
              Does learner wear spectacles?
            </label>
            <div class="w-full">
              <div class="">
                <div class="inline-block radio">
                  <input
                    name="spectacles"
                    type="radio"
                    id="yes-spectacles"
                    hidden="hidden"
                    value="Yes"
                  />
                  <label
                    for="yes-spectacles"
                    class="flex items-center justify-center w-6 h-6 px-2 py-1 text-xl font-bold rounded-lg lg:text-lg lg:w-10 lg:h-10"
                  >
                    Yes
                  </label>
                </div>
                <div class="inline-block radio">
                  <input
                    name="spectacles"
                    type="radio"
                    id="no-spectacles"
                    hidden="hidden"
                    value="No"
                  />
                  <label
                    for="no-spectacles"
                    class="flex items-center justify-center w-6 h-6 px-2 py-1 text-xl font-bold rounded-lg lg:text-lg lg:w-10 lg:h-10"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-x-2">
          <div class="mb-2">
            <label
              for="entry"
              class="block mb-2 text-sm font-semibold text-gray-700 lg:text-base"
            >
              Does the learner take any medication?
            </label>
            <div class="w-full">
              <div class="">
                <div class="inline-block radio">
                  <input
                    name="medication"
                    type="radio"
                    id="yes-medication"
                    hidden="hidden"
                    value="Yes"
                  />
                  <label
                    for="yes-medication"
                    class="flex items-center justify-center w-6 h-6 px-2 py-1 text-xl font-bold rounded-lg lg:text-lg lg:w-10 lg:h-10"
                  >
                    Yes
                  </label>
                </div>
                <div class="inline-block radio">
                  <input
                    name="medication"
                    type="radio"
                    id="no-medication"
                    hidden="hidden"
                    value="No"
                  />
                  <label
                    for="no-medication"
                    class="flex items-center justify-center w-6 h-6 px-2 py-1 text-xl font-bold rounded-lg lg:text-lg lg:w-10 lg:h-10"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="mb-2">
            <label
              for="entry"
              class="block mb-2 text-sm font-semibold text-gray-700 lg:text-base"
            >
              Any swimming lessons in the past?
            </label>
            <div class="w-full">
              <div class="">
                <div class="inline-block radio">
                  <input
                    name="past-swimming-lessons"
                    type="radio"
                    id="yes-past-swimming-lessons"
                    hidden="hidden"
                    value="Yes"
                  />
                  <label
                    for="yes-past-swimming-lessons"
                    class="flex items-center justify-center w-6 h-6 px-2 py-1 text-xl font-bold rounded-lg lg:text-lg lg:w-10 lg:h-10"
                  >
                    Yes
                  </label>
                </div>
                <div class="inline-block radio">
                  <input
                    name="past-swimming-lessons"
                    type="radio"
                    id="no-past-swimming-lessons"
                    hidden="hidden"
                    value="No"
                  />
                  <label
                    for="no-past-swimming-lessons"
                    class="flex items-center justify-center w-6 h-6 px-2 py-1 text-xl font-bold rounded-lg lg:text-lg lg:w-10 lg:h-10"
                  >
                    No
                  </label>
                </div>
              </div>
              <input
                type="text"
                placeholder="If so, instructor/duration"
                class="flex px-3 py-2 font-medium border-2 border-black rounded-lg md:px-4 md:py-3 placeholder:font-normal"
              />
            </div>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-x-2">
          <div class="mb-2">
            <label
              for="entry"
              class="block mb-2 text-sm font-semibold text-gray-700 lg:text-base"
            >
              Any bad experiences with swimming and water?
            </label>
            <div class="w-full">
              <div class="">
                <div class="inline-block radio">
                  <input
                    name="bad-experiences"
                    type="radio"
                    id="yes-bad-experiences"
                    hidden="hidden"
                    value="Yes"
                  />
                  <label
                    for="yes-bad-experiences"
                    class="flex items-center justify-center w-6 h-6 px-2 py-1 text-xl font-bold rounded-lg lg:text-lg lg:w-10 lg:h-10"
                  >
                    Yes
                  </label>
                </div>
                <div class="inline-block radio">
                  <input
                    name="bad-experiences"
                    type="radio"
                    id="no-bad-experiences"
                    hidden="hidden"
                    value="No"
                  />
                  <label
                    for="no-bad-experiences"
                    class="flex items-center justify-center w-6 h-6 px-2 py-1 text-xl font-bold rounded-lg lg:text-lg lg:w-10 lg:h-10"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="mb-2">
            <label
              for="entry"
              class="block mb-2 text-sm font-semibold text-gray-700 lg:text-base"
            >
              Sex:
            </label>
            <div class="w-full">
              <div>
                <div class="inline-block radio">
                  <input
                    name="gender"
                    type="radio"
                    id="m-gender"
                    hidden="hidden"
                    value="Yes"
                  />
                  <label
                    for="m-gender"
                    class="flex items-center justify-center w-6 h-6 px-2 py-1 text-xl font-bold rounded-lg lg:text-lg lg:w-10 lg:h-10"
                  >
                    M
                  </label>
                </div>
                <div class="inline-block radio">
                  <input
                    name="gender"
                    type="radio"
                    id="f-gender"
                    hidden="hidden"
                    value="No"
                  />
                  <label
                    for="f-gender"
                    class="flex items-center justify-center w-6 h-6 px-2 py-1 text-xl font-bold rounded-lg lg:text-lg lg:w-10 lg:h-10"
                  >
                    F
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-x-2">
          <div class="mb-2">
            <label
              for="entry"
              class="block mb-2 text-sm font-semibold text-gray-700 lg:text-base"
            >
              Member of a medical aid?
            </label>
            <div class="w-full">
              <div class="">
                <div class="inline-block radio">
                  <input
                    name="medical-aid-membership"
                    type="radio"
                    id="yes-medical-aid"
                    hidden="hidden"
                    value="Yes"
                  />
                  <label
                    for="yes-medical-aid"
                    class="flex items-center justify-center w-6 h-6 px-2 py-1 text-xl font-bold rounded-lg lg:text-lg lg:w-10 lg:h-10"
                  >
                    Yes
                  </label>
                </div>
                <div class="inline-block radio">
                  <input
                    name="medical-aid-membership"
                    type="radio"
                    id="no-medical-aid"
                    hidden="hidden"
                    value="No"
                  />
                  <label
                    for="no-medical-aid"
                    class="flex items-center justify-center w-6 h-6 px-2 py-1 text-xl font-bold rounded-lg lg:text-lg lg:w-10 lg:h-10"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="mb-2">
            <input
              type="text"
              placeholder="If so, name of medical aid"
              class="flex px-3 py-2 font-medium border-2 border-black rounded-lg md:px-4 md:py-3 placeholder:font-normal"
            />
          </div>
        </div>

        <div class="grid grid-cols-2 gap-x-2">
          <div class="mb-2">
            <input
              type="text"
              placeholder="Medical aid number"
              class="flex px-3 py-2 font-medium border-2 border-black rounded-lg md:px-4 md:py-3 placeholder:font-normal"
            />
          </div>
          <div class="mb-2">
            <input
              type="text"
              placeholder="Main member - full name"
              class="flex px-3 py-2 font-medium border-2 border-black rounded-lg md:px-4 md:py-3 placeholder:font-normal"
            />
          </div>
        </div>

        <fieldset class="mb-5">
          <div class="flex items-center mb-4">
            <input
              id="checkbox-1"
              aria-describedby="checkbox-1"
              type="checkbox"
              class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
            />
            <label
              for="checkbox-1"
              class="ml-3 text-sm font-medium text-gray-900"
              >I hereby undertake to pay all the fees</label
            >
          </div>

          <div class="flex items-center mb-4">
            <input
              id="checkbox-2"
              aria-describedby="checkbox-2"
              type="checkbox"
              class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
            />
            <label
              for="checkbox-2"
              class="ml-3 text-sm font-medium text-gray-900"
              >I certify that all the information contained herein is true and
              correct</label
            >
          </div>
        </fieldset>
        <button
          type="submit"
          class="flex items-center justify-center flex-none px-3 py-2 font-medium text-white bg-black border-2 border-black rounded-lg md:px-4 md:py-3"
        >
          Apply
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
.radio input ~ label {
  background-color: rgb(233, 225, 225);
  color: rgb(158, 146, 146);
}
.radio input:checked ~ label {
  background-color: #2596be;
  color: white;
}
</style>
