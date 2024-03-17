<template>
  <div
    class="relative flex flex-col items-center flex-1 h-full overflow-y-scroll bg-gray-100"
  >
    <div class="flex-1 w-full space-y-5">
      <div class="container px-5 mx-auto my-5">
        <div class="w-full">
          <div class="flex flex-row items-center justify-between">
            <h2
              class="text-lg font-semibold tracking-widest uppercase rounded-lg focus:outline-none focus:shadow-outline"
            >
              my profile
            </h2>
            <div class="flex items-center justify-center space-x-1">
              <router-link :to="{ name: 'EditProfile' }">
                <svg
                  class="h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z"
                    stroke="#000000"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13"
                    stroke="#000000"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </router-link>
            </div>
          </div>
        </div>
        <div class="md:flex no-wrap md:-mx-2">
          <div class="w-full md:w-3/12 md:mx-2">
            <div class="p-3 bg-white border-t-4 border-sky-800">
              <div class="overflow-hidden image">
                <img
                  class="w-full h-auto mx-auto"
                  src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                  alt=""
                />
              </div>
              <h1 class="my-1 text-xl font-bold leading-8 text-gray-900">
                {{ user?.first_name }} {{ user?.last_name }}
              </h1>
              <ul
                class="px-3 py-2 mt-3 text-gray-600 bg-gray-100 divide-y rounded shadow-sm hover:text-gray-700 hover:shadow"
              >
                <li class="flex items-center py-3">
                  <span>Application Status</span>
                  <span class="ml-auto"
                    ><span
                      class="px-2 py-1 text-sm text-white rounded bg-sky-800"
                      >Pending</span
                    ></span
                  >
                </li>
                <li class="flex items-center py-3">
                  <span>Applied on</span>
                  <span class="ml-auto"
                    >{{ user?.created_at }} Feb 5, 2024</span
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="w-full mx-2 md:w-9/12">
            <div class="p-3 bg-white rounded-sm shadow-sm">
              <div
                class="flex items-center space-x-2 font-semibold leading-8 text-gray-900"
              >
                <span clas="text-green-500">
                  <svg
                    class="h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_15_82)">
                      <rect width="24" height="24" fill="white" />
                      <g filter="url(#filter0_d_15_82)">
                        <path
                          d="M14.3365 12.3466L14.0765 11.9195C13.9082 12.022 13.8158 12.2137 13.8405 12.4092C13.8651 12.6046 14.0022 12.7674 14.1907 12.8249L14.3365 12.3466ZM9.6634 12.3466L9.80923 12.8249C9.99769 12.7674 10.1348 12.6046 10.1595 12.4092C10.1841 12.2137 10.0917 12.022 9.92339 11.9195L9.6634 12.3466ZM4.06161 19.002L3.56544 18.9402L4.06161 19.002ZM19.9383 19.002L20.4345 18.9402L19.9383 19.002ZM16 8.5C16 9.94799 15.2309 11.2168 14.0765 11.9195L14.5965 12.7737C16.0365 11.8971 17 10.3113 17 8.5H16ZM12 4.5C14.2091 4.5 16 6.29086 16 8.5H17C17 5.73858 14.7614 3.5 12 3.5V4.5ZM7.99996 8.5C7.99996 6.29086 9.79082 4.5 12 4.5V3.5C9.23854 3.5 6.99996 5.73858 6.99996 8.5H7.99996ZM9.92339 11.9195C8.76904 11.2168 7.99996 9.948 7.99996 8.5H6.99996C6.99996 10.3113 7.96342 11.8971 9.40342 12.7737L9.92339 11.9195ZM9.51758 11.8683C6.36083 12.8309 3.98356 15.5804 3.56544 18.9402L4.55778 19.0637C4.92638 16.1018 7.02381 13.6742 9.80923 12.8249L9.51758 11.8683ZM3.56544 18.9402C3.45493 19.8282 4.19055 20.5 4.99996 20.5V19.5C4.70481 19.5 4.53188 19.2719 4.55778 19.0637L3.56544 18.9402ZM4.99996 20.5H19V19.5H4.99996V20.5ZM19 20.5C19.8094 20.5 20.545 19.8282 20.4345 18.9402L19.4421 19.0637C19.468 19.2719 19.2951 19.5 19 19.5V20.5ZM20.4345 18.9402C20.0164 15.5804 17.6391 12.8309 14.4823 11.8683L14.1907 12.8249C16.9761 13.6742 19.0735 16.1018 19.4421 19.0637L20.4345 18.9402Z"
                          fill="#000000"
                        />
                      </g>
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_15_82"
                        x="2.55444"
                        y="3.5"
                        width="18.8911"
                        height="19"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="1" />
                        <feGaussianBlur stdDeviation="0.5" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_15_82"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_15_82"
                          result="shape"
                        />
                      </filter>
                      <clipPath id="clip0_15_82">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span class="tracking-wide">About</span>
              </div>
              <div class="text-gray-700">
                <div class="grid text-sm md:grid-cols-2">
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">First Name</div>
                    <div class="px-4 py-2">{{ user?.first_name }}</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Last Name</div>
                    <div class="px-4 py-2">{{ user?.last_name }}</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Gender</div>
                    <div class="px-4 py-2">{{ user?.user_profile.gender }}</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Telephone</div>
                    <div class="px-4 py-2">
                      {{ user?.user_profile.telephone }}
                    </div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Current Address</div>
                    <div class="px-4 py-2">
                      {{ user?.address.postal_address }}
                      {{ user?.address.residential_address }}
                    </div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Email</div>
                    <div class="px-4 py-2">{{ user?.email }}</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Birthday</div>
                    <div class="px-4 py-2">
                      {{
                        new Date(
                          user?.user_profile.date_of_birth
                        ).toLocaleDateString("en-US", {
                          month: "long",
                          day: "2-digit",
                          year: "numeric",
                        })
                      }}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="p-3 mt-10 bg-white rounded-sm shadow-sm">
              <div
                class="flex items-center mb-4 space-x-2 font-semibold leading-8 text-gray-900"
              >
                <span clas="text-green-500">
                  <svg
                    class="h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M8.96997 22H14.97C19.97 22 21.97 20 21.97 15V9C21.97 4 19.97 2 14.97 2H8.96997C3.96997 2 1.96997 4 1.96997 9V15C1.96997 20 3.96997 22 8.96997 22Z"
                      stroke="#292D32"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M1.96997 12.7001L7.96997 12.6801C8.71997 12.6801 9.55997 13.2501 9.83997 13.9501L10.98 16.8301C11.24 17.4801 11.65 17.4801 11.91 16.8301L14.2 11.0201C14.42 10.4601 14.83 10.4401 15.11 10.9701L16.15 12.9401C16.46 13.5301 17.26 14.0101 17.92 14.0101H21.98"
                      stroke="#292D32"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <span class="tracking-wide">Health Information</span>
              </div>
              <div class="grid w-full grid-cols-2 gap-4 px-2">
                <div
                  class="flex flex-col items-start justify-center rounded-2xl bg-gray-100 bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none"
                >
                  <p class="text-sm text-gray-600">Chest Disorders</p>
                  <p class="text-base font-medium text-navy-700">
                    {{ user?.health_info.chest_disorders ? "Yes" : "No" }}
                  </p>
                </div>

                <div
                  class="flex flex-col justify-center rounded-2xl bg-gray-100 bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none"
                >
                  <p class="text-sm text-gray-600">Physical Injuries</p>
                  <p class="text-base font-medium text-navy-700">
                    {{ user?.health_info.physical_injuries ? "Yes" : "No" }}
                  </p>
                </div>

                <div
                  class="flex flex-col items-start justify-center rounded-2xl bg-gray-100 bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none"
                >
                  <p class="text-sm text-gray-600">Ear Disorders</p>
                  <p class="text-base font-medium text-navy-700">
                    {{ user?.health_info.ear_disorders ? "Yes" : "No" }}
                  </p>
                </div>

                <div
                  class="flex flex-col justify-center rounded-2xl bg-gray-100 bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none"
                >
                  <p class="text-sm text-gray-600">Allergies</p>
                  <p class="text-base font-medium text-navy-700">
                    {{ user?.health_info.allergies ? "Yes" : "No" }}
                  </p>
                </div>

                <div
                  class="flex flex-col items-start justify-center rounded-2xl bg-gray-100 bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none"
                >
                  <p class="text-sm text-gray-600">Heart Disorders</p>
                  <p class="text-base font-medium text-navy-700">
                    {{ user?.health_info.heart_disorders ? "Yes" : "No" }}
                  </p>
                </div>

                <div
                  class="flex flex-col justify-center rounded-2xl bg-gray-100 bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none"
                >
                  <p class="text-sm text-gray-600">Lung Disorders</p>
                  <p class="text-base font-medium text-navy-700">
                    {{ user?.health_info.heart_disorders ? "Yes" : "No" }}
                  </p>
                </div>

                <div
                  class="flex flex-col justify-center rounded-2xl bg-gray-100 bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none"
                >
                  <p class="text-sm text-gray-600">Low Muscle Tones</p>
                  <p class="text-base font-medium text-navy-700">
                    {{ user?.health_info.low_muscle_tones ? "Yes" : "No" }}
                  </p>
                </div>

                <div
                  class="flex flex-col justify-center rounded-2xl bg-gray-100 bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none"
                >
                  <p class="text-sm text-gray-600">Wears Spectacles</p>
                  <p class="text-base font-medium text-navy-700">
                    {{ user?.health_info.wears_spectacles ? "Yes" : "No" }}
                  </p>
                </div>

                <div
                  class="flex flex-col justify-center rounded-2xl bg-gray-100 bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none"
                >
                  <p class="text-sm text-gray-600">Takes Medication</p>
                  <p class="text-base font-medium text-navy-700">
                    {{ user?.health_info.takes_medication ? "Yes" : "No" }}
                  </p>
                </div>

                <div
                  class="flex flex-col justify-center rounded-2xl bg-gray-100 bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none"
                >
                  <p class="text-sm text-gray-600">Past Swimming Lessons</p>
                  <p class="text-base font-medium text-navy-700">
                    {{ user?.health_info.past_swimming_lessons ? "Yes" : "No" }}
                  </p>
                </div>

                <div
                  v-if="user?.health_info.past_swimming_lessons"
                  class="flex flex-col justify-center rounded-2xl bg-gray-100 bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none"
                >
                  <p class="text-sm text-gray-600">
                    Past Swimming Instructor/Duration
                  </p>
                  <p class="text-base font-medium text-navy-700">
                    {{ user?.health_info.past_swimming_instructor_duration }}
                  </p>
                </div>

                <div
                  class="flex flex-col justify-center rounded-2xl bg-gray-100 bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none"
                >
                  <p class="text-sm text-gray-600">Bad Experiences</p>
                  <p class="text-base font-medium text-navy-700">
                    {{ user?.health_info.bad_experiences ? "Yes" : "No" }}
                  </p>
                </div>

                <div
                  class="flex flex-col justify-center rounded-2xl bg-gray-100 bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none"
                >
                  <p class="text-sm text-gray-600">Medical Aid Membership</p>
                  <p class="text-base font-medium text-navy-700">
                    {{
                      user?.health_info.medical_aid_membership ? "Yes" : "No"
                    }}
                  </p>
                </div>

                <div
                  v-if="user?.health_info.medical_aid_membership"
                  class="flex flex-col justify-center rounded-2xl bg-gray-100 bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none"
                >
                  <p class="text-sm text-gray-600">Medical Aid Name</p>
                  <p class="text-base font-medium text-navy-700">
                    Medical Aid Name
                  </p>
                </div>

                <div
                  v-if="user?.health_info.medical_aid_membership"
                  class="flex flex-col justify-center rounded-2xl bg-gray-100 bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none"
                >
                  <p class="text-sm text-gray-600">Medical Aid Number</p>
                  <p class="text-base font-medium text-navy-700">
                    Medical Aid Number
                  </p>
                </div>

                <div
                  v-if="user?.health_info.medical_aid_membership"
                  class="flex flex-col justify-center rounded-2xl bg-gray-100 bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none"
                >
                  <p class="text-sm text-gray-600">Medical Aid Main Member</p>
                  <p class="text-base font-medium text-navy-700">
                    Medical Aid Main Member
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <p>{{ JSON.stringify(user && user) }}</p> -->
    <div
      class="flex flex-col justify-center m-auto mb-16 text-xs text-center text-gray-600"
    >
      <p class="font-bold">
        Built by <a href="/" class="font-extrabold underline">ComSwim</a>
      </p>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";

export default {
  setup() {
    const user = ref();

    onMounted(async () => {
      try {
        const token = await api.get("/sanctum/csrf-cookie");
        const response = await api.get('api/user-profile',
          {
            withCredentials: true,
            headers: {
              Authorization: `Bearer 63|nFArMXNDCTbfQh6xA9AZSLKtpLWWQ4OPAalWoqkUdca886bb`,
            },
          }
        );
        user.value = response.data.data;
        // console.log(user.value);
      } catch (err) {
        console.error("Error fetching user profile:", err);
      }
    });

    return { user };
  },
};
</script>
