<template>
  <div
    class="relative flex flex-col items-center flex-1 h-full px-10 overflow-y-scroll"
  >
    <div
      class="flex flex-col justify-start flex-1 w-full h-full max-w-md py-12 space-y-5"
    >
      <div class="flex flex-col space-y-2 text-center">
        <h2 class="text-2xl font-bold md:text-3xl">
          Hello, learner! welcome :)
        </h2>
        <h3 class="text-lg font-bold md:text-xl">
          Let's get you an account ASAP. 🚀
        </h3>
        <p class="text-md">
          Just few information and you're on your way to becoming a world-class
          swimmer!
        </p>
        <div v-if="authError" class="py-4 text-center text-red-500">
            {{ authError.message }}
        </div>
      </div>
      <form
        @submit.prevent="handleRegister"
        class="flex flex-col max-w-md space-y-5"
      >
        <div>
          <div class="flex">
            <h2 class="flex px-2 py-1 text-white uppercase bg-sky-800 rounded-t-xl">Section 1 of 4</h2>
          </div>
          <div class="border-l-8 border-sky-800">
            <div class="px-2 bg-gray-100 rounded-md">
              <h3 class="text-base font-semibold lg:text-xl">Account Information</h3>
              <p>Fill in the details to help us create the account for you.</p>
            </div>
          </div>
        </div>
        <input
          type="text"
          placeholder="First Name"
          v-model="formData.first_name"
          class="flex px-3 py-2 font-medium border-2 border-black rounded-lg outline-none md:px-4 md:py-3 placeholder:font-normal"
        />
        <input
          type="text"
          placeholder="Last Name"
          v-model="formData.last_name"
          class="flex px-3 py-2 font-medium border-2 border-black rounded-lg outline-none md:px-4 md:py-3 placeholder:font-normal"
        />
        <input
          type="email"
          placeholder="Email"
          v-model="formData.email"
          class="flex px-3 py-2 font-medium border-2 border-black rounded-lg outline-none md:px-4 md:py-3 placeholder:font-normal"
        />
        <input
          type="password"
          placeholder="Password"
          v-model="formData.password"
          class="flex px-3 py-2 font-medium border-2 border-black rounded-lg outline-none md:px-4 md:py-3 placeholder:font-normal"
        />
        <div>
          <div class="flex">
            <h2 class="flex px-2 py-1 text-white uppercase bg-sky-800 rounded-t-xl">Section 2 of 4</h2>
          </div>
          <div class="border-l-8 border-sky-800">
            <div class="px-2 bg-gray-100 rounded-md">
              <h3 class="text-base font-semibold lg:text-xl">Contact Information</h3>
              <p>Fill in the details to help us get in touch with you.</p>
            </div>
          </div>
        </div>
        <input
          type="text"
          placeholder="Telephone"
          v-model="formData.telephone"
          class="flex px-3 py-2 font-medium border-2 border-black rounded-lg outline-none md:px-4 md:py-3 placeholder:font-normal"
        />
        <input
          type="text"
          placeholder="Residential Address"
          v-model="formData.residential_address"
          class="flex px-3 py-2 font-medium border-2 border-black rounded-lg outline-none md:px-4 md:py-3 placeholder:font-normal"
        />
        <input
          type="text"
          placeholder="Postal Address"
          v-model="formData.postal_address"
          class="flex px-3 py-2 font-medium border-2 border-black rounded-lg outline-none md:px-4 md:py-3 placeholder:font-normal"
        />
        <div>
          <div class="flex">
            <h2 class="flex px-2 py-1 text-white uppercase bg-sky-800 rounded-t-xl">Section 3 of 4</h2>
          </div>
          <div class="border-l-8 border-sky-800">
            <div class="px-2 bg-gray-100 rounded-md">
              <h3 class="text-base font-semibold lg:text-xl">Other Personal Information</h3>
              <p>Fill in the details to help us get in touch with you.</p>
            </div>
          </div>
        </div>
        <input
          type="date"
          placeholder="Date of Birth"
          v-model="formData.date_of_birth"
          class="flex px-3 py-2 font-medium border-2 border-black rounded-lg outline-none md:px-4 md:py-3 placeholder:font-normal"
        />
        <div>
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
                  value="M"
                  v-model="formData.gender"
                />
                <label
                  for="m-gender"
                  class="flex items-center justify-center w-8 h-8 px-2 py-1 text-base font-bold rounded-lg lg:text-lg lg:w-10 lg:h-10"
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
                  value="F"
                  v-model="formData.gender"
                />
                <label
                  for="f-gender"
                  class="flex items-center justify-center w-8 h-8 px-2 py-1 text-base font-bold rounded-lg lg:text-lg lg:w-10 lg:h-10"
                >
                  F
                </label>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="flex">
            <h2 class="flex px-2 py-1 text-white uppercase bg-sky-800 rounded-t-xl">Section 4 of 4</h2>
          </div>
          <div class="border-l-8 border-sky-800">
            <div class="px-2 bg-gray-100 rounded-md">
              <h3 class="text-base font-semibold lg:text-xl">Health Information</h3>
              <p>Fill in the details to help us know your health condition.</p>
            </div>
          </div>
        </div>
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
                    v-model="formData.chest_disorders"
                  />
                  <label
                    for="yes-chest-disorders"
                    class="flex items-center justify-center w-8 h-8 px-2 py-1 text-base font-bold rounded-lg lg:text-lg lg:w-10 lg:h-10"
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
                    v-model="formData.chest_disorders"
                  />
                  <label
                    for="no-chest-disorders"
                    class="flex items-center justify-center w-8 h-8 px-2 py-1 text-base font-bold rounded-lg lg:text-lg lg:w-10 lg:h-10"
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
                    v-model="formData.physical_injuries"
                  />
                  <label
                    for="yes-physical-injuries"
                    class="flex items-center justify-center w-8 h-8 px-2 py-1 text-base font-bold rounded-lg lg:text-lg lg:w-10 lg:h-10"
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
                    v-model="formData.physical_injuries"
                  />
                  <label
                    for="no-physical-injuries"
                    class="flex items-center justify-center w-8 h-8 px-2 py-1 text-base font-bold rounded-lg lg:text-lg lg:w-10 lg:h-10"
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
                    v-model="formData.ear_disorders"
                  />
                  <label
                    for="yes-ear-disorders"
                    class="flex items-center justify-center w-8 h-8 px-2 py-1 text-base font-bold rounded-lg lg:text-lg lg:w-10 lg:h-10"
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
                    v-model="formData.ear_disorders"
                  />
                  <label
                    for="no-ear-disorders"
                    class="flex items-center justify-center w-8 h-8 px-2 py-1 text-base font-bold rounded-lg lg:text-lg lg:w-10 lg:h-10"
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
                    v-model="formData.allergies"
                  />
                  <label
                    for="yes-allergies"
                    class="flex items-center justify-center w-8 h-8 px-2 py-1 text-base font-bold rounded-lg lg:text-lg lg:w-10 lg:h-10"
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
                    v-model="formData.allergies"
                  />
                  <label
                    for="no-allergies"
                    class="flex items-center justify-center w-8 h-8 px-2 py-1 text-base font-bold rounded-lg lg:text-lg lg:w-10 lg:h-10"
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
                    v-model="formData.heart_disorders"
                  />
                  <label
                    for="yes-heart-disorders"
                    class="flex items-center justify-center w-8 h-8 px-2 py-1 text-base font-bold rounded-lg lg:text-lg lg:w-10 lg:h-10"
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
                    v-model="formData.heart_disorders"
                  />
                  <label
                    for="no-heart-disorders"
                    class="flex items-center justify-center w-8 h-8 px-2 py-1 text-base font-bold rounded-lg lg:text-lg lg:w-10 lg:h-10"
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
                    v-model="formData.lung_disorders"
                  />
                  <label
                    for="yes-lung-disorders"
                    class="flex items-center justify-center w-8 h-8 px-2 py-1 text-base font-bold rounded-lg lg:text-lg lg:w-10 lg:h-10"
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
                    v-model="formData.lung_disorders"
                  />
                  <label
                    for="no-lung-disorders"
                    class="flex items-center justify-center w-8 h-8 px-2 py-1 text-base font-bold rounded-lg lg:text-lg lg:w-10 lg:h-10"
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
                    v-model="formData.low_muscle_tones"
                  />
                  <label
                    for="yes-low-muscle-tones"
                    class="flex items-center justify-center w-8 h-8 px-2 py-1 text-base font-bold rounded-lg lg:text-lg lg:w-10 lg:h-10"
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
                    v-model="formData.low_muscle_tones"
                  />
                  <label
                    for="no-low-muscle-tones"
                    class="flex items-center justify-center w-8 h-8 px-2 py-1 text-base font-bold rounded-lg lg:text-lg lg:w-10 lg:h-10"
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
                    v-model="formData.wears_spectacles"
                  />
                  <label
                    for="yes-spectacles"
                    class="flex items-center justify-center w-8 h-8 px-2 py-1 text-base font-bold rounded-lg lg:text-lg lg:w-10 lg:h-10"
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
                    v-model="formData.wears_spectacles"
                  />
                  <label
                    for="no-spectacles"
                    class="flex items-center justify-center w-8 h-8 px-2 py-1 text-base font-bold rounded-lg lg:text-lg lg:w-10 lg:h-10"
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
                    v-model="formData.takes_medication"
                  />
                  <label
                    for="yes-medication"
                    class="flex items-center justify-center w-8 h-8 px-2 py-1 text-base font-bold rounded-lg lg:text-lg lg:w-10 lg:h-10"
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
                    v-model="formData.takes_medication"
                  />
                  <label
                    for="no-medication"
                    class="flex items-center justify-center w-8 h-8 px-2 py-1 text-base font-bold rounded-lg lg:text-lg lg:w-10 lg:h-10"
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
                    v-model="formData.past_swimming_lessons"
                  />
                  <label
                    for="yes-past-swimming-lessons"
                    class="flex items-center justify-center w-8 h-8 px-2 py-1 text-base font-bold rounded-lg lg:text-lg lg:w-10 lg:h-10"
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
                    v-model="formData.past_swimming_lessons"
                  />
                  <label
                    for="no-past-swimming-lessons"
                    class="flex items-center justify-center w-8 h-8 px-2 py-1 text-base font-bold rounded-lg lg:text-lg lg:w-10 lg:h-10"
                  >
                    No
                  </label>
                </div>
              </div>
              <input
                v-if="formData.past_swimming_lessons === 'Yes'"
                type="text"
                placeholder="If so, instructor/duration"
                v-model="formData.past_swimming_instructor_duration"
                class="flex px-3 py-2 font-medium border-2 border-black rounded-lg outline-none md:px-4 md:py-3 placeholder:font-normal"
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
                    v-model="formData.bad_experiences"
                  />
                  <label
                    for="yes-bad-experiences"
                    class="flex items-center justify-center w-8 h-8 px-2 py-1 text-base font-bold rounded-lg lg:text-lg lg:w-10 lg:h-10"
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
                    v-model="formData.bad_experiences"
                  />
                  <label
                    for="no-bad-experiences"
                    class="flex items-center justify-center w-8 h-8 px-2 py-1 text-base font-bold rounded-lg lg:text-lg lg:w-10 lg:h-10"
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
                    v-model="formData.medical_aid_membership"
                  />
                  <label
                    for="yes-medical-aid"
                    class="flex items-center justify-center w-8 h-8 px-2 py-1 text-base font-bold rounded-lg lg:text-lg lg:w-10 lg:h-10"
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
                    v-model="formData.medical_aid_membership"
                  />
                  <label
                    for="no-medical-aid"
                    class="flex items-center justify-center w-8 h-8 px-2 py-1 text-base font-bold rounded-lg lg:text-lg lg:w-10 lg:h-10"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="mb-2">
            <input
              v-if="formData.medical_aid_membership === 'Yes'"
              type="text"
              placeholder="If so, name of medical aid"
              v-model="formData.medical_aid_name"
              class="flex px-3 py-2 font-medium border-2 border-black rounded-lg outline-none md:px-4 md:py-3 placeholder:font-normal"
            />
          </div>
        </div>

        <div class="grid grid-cols-2 gap-x-2">
          <div class="mb-2">
            <input
              v-if="formData.medical_aid_membership === 'Yes'"
              type="text"
              placeholder="Medical aid number"
              v-model="formData.medical_aid_number"
              class="flex px-3 py-2 font-medium border-2 border-black rounded-lg outline-none md:px-4 md:py-3 placeholder:font-normal"
            />
          </div>
          <div class="mb-2">
            <input
              v-if="formData.medical_aid_membership === 'Yes'"
              type="text"
              placeholder="Main member - full name"
              v-model="formData.main_member_full_name"
              class="flex px-3 py-2 font-medium border-2 border-black rounded-lg outline-none md:px-4 md:py-3 placeholder:font-normal"
            />
          </div>
        </div>

        <fieldset class="mb-5">
          <div class="flex items-center mb-4">
            <input
              id="accept-fees"
              aria-describedby="accept-fees"
              type="checkbox"
              v-model="acceptFees"
              class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
            />
            <label
              for="accept-fees"
              class="ml-3 text-sm font-medium text-gray-900"
              >I hereby undertake to pay all the fees</label
            >
          </div>

          <div class="flex items-center mb-4">
            <input
              id="certify-information"
              aria-describedby="certify-information"
              type="checkbox"
              v-model="certifyInformation"
              class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
            />
            <label
              for="certify-information"
              class="ml-3 text-sm font-medium text-gray-900"
              >I certify that all the information contained herein is true and
              correct</label
            >
          </div>
        </fieldset>
        <button
          type="submit"
          :disabled="!acceptFees || !certifyInformation"
          :class="{ 'disabled-btn': !acceptFees || !certifyInformation }"
          class="flex items-center justify-center flex-none px-3 py-2 font-medium text-white bg-sky-800 hover:bg-white hover:text-black hover:border-2 border-2 border-sky-800 hover:border-black rounded-lg md:px-4 md:py-3 { 'disabled-btn': !acceptFees || !certifyInformation }"
        >
          Apply
        </button>
      </form>
      <div v-if="user" class="text-green-800">{{ user }}</div>
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

import { ref } from 'vue';
import { user, authError, register } from '../composables/useAuth';

export default {
  setup() {
    const acceptFees = ref(false);
    const certifyInformation = ref(false);
    const formData = ref({
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      date_of_birth: '',
      gender: '',
      telephone: '',
      residential_address: '',
      postal_address: '',
      chest_disorders: '',
      physical_injuries: '',
      ear_disorders: '',
      allergies: '',
      heart_disorders: '',
      lung_disorders: '',
      low_muscle_tones: '',
      wears_spectacles: '',
      takes_medication: '',
      past_swimming_lessons: '',
      past_swimming_instructor_duration: '',
      bad_experiences: '',
      medical_aid_membership: '',
      medical_aid_membership: '',
      medical_aid_name: '',
      medical_aid_number: '',
      main_member_full_name: '',
      accept_fees: false,
      certify_information: false,
    });

    const handleRegister = () => {
      register(formData.value)
        .then(() => {
          formData.value.first_name = '';
          formData.value.last_name = '';
          formData.value.email = '';
          formData.value.password = '';
          formData.value.residential_address = '';
          formData.value.postal_address = '';
          formData.value.ear_disorders = '',
          formData.value.allergies = '',
          formData.value.heart_disorders = '',
          formData.value.lung_disorders = '',
          formData.value.low_muscle_tones = '',
          formData.value.wears_spectacles = '',
          formData.value.takes_medication = '',
          formData.value.past_swimming_lessons = '',
          formData.value.past_swimming_instructor_duration = '',
          formData.value.bad_experiences = '',
          formData.value.medical_aid_membership = '',
          formData.value.medical_aid_membership = '',
          formData.value.medical_aid_name = '',
          formData.value.medical_aid_number = '',
          formData.value.main_member_full_name = ''
        })
        .catch( err => {
          console.error('Error while submitting the form', err);
        });
    }

    return {
      user,
      authError,
      formData,
      acceptFees,
      certifyInformation,
      handleRegister
    };
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
.disabled-btn {
  @apply cursor-not-allowed bg-gray-300 border-none text-gray-700;
}
</style>
