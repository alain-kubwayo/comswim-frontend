import { defineStore } from "pinia";
import { useAuth } from "./auth";
import { reactive, ref } from "vue";

export const useRegister = defineStore("register", () => {
  const auth = useAuth();
  const errors = reactive({});
  const loading = ref(false);
  const formData = reactive({
    guardian_first_name: "",
    guardian_last_name: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    date_of_birth: "",
    gender: "",
    telephone: "",
    residential_address: "",
    postal_address: "",
    chest_disorders: null,
    physical_injuries: null,
    ear_disorders: null,
    allergies: null,
    heart_disorders: null,
    lung_disorders: null,
    low_muscle_tones: null,
    wears_spectacles: null,
    takes_medication: null,
    past_swimming_lessons: null,
    past_swimming_instructor_duration: "",
    bad_experiences: null,
    medical_aid_membership: null,
    medical_aid_name: "",
    medical_aid_number: "",
    main_member_full_name: "",
  });

  function resetForm() {
    formData.guardian_first_name = "";
    formData.guardian_last_name = "";
    formData.first_name = "";
    formData.last_name = "";
    formData.email = "";
    formData.password = "";
    formData.date_of_birth = "";
    formData.gender = "";
    formData.telephone = "";
    formData.residential_address = "";
    formData.postal_address = "";
    formData.chest_disorders = null;
    formData.physical_injuries = null;
    formData.ear_disorders = null;
    formData.allergies = null;
    formData.heart_disorders = null;
    formData.lung_disorders = null;
    formData.low_muscle_tones = null;
    formData.wears_spectacles = null;
    formData.takes_medication = null;
    formData.past_swimming_lessons = null;
    formData.past_swimming_instructor_duration = "";
    formData.bad_experiences = null;
    formData.medical_aid_membership = null;
    formData.medical_aid_name = "";
    formData.medical_aid_number = "";
    formData.main_member_full_name = "";
  }

  async function handleSubmit(user_type) {
    if (loading.value) return;

    loading.value = true;
    errors.value = {};

    return window.axios
      .post("api/register", {...formData, user_type})
      .then((response) => {
        auth.login(response.data.token);
      })
      .catch((error) => {
        if (error.response.status === 422) {
          errors.value = error.response.data.errors;
        }
      })
      .finally(() => {
        formData.guardian_first_name = "";
        formData.guardian_last_name = "";
        formData.first_name = "";
        formData.last_name = "";
        formData.email = "";
        formData.password = "";
        formData.date_of_birth = "";
        formData.gender = "";
        formData.telephone = "";
        formData.residential_address = "";
        formData.postal_address = "";
        formData.chest_disorders = null;
        formData.physical_injuries = null;
        formData.ear_disorders = null;
        formData.allergies = null;
        formData.heart_disorders = null;
        formData.lung_disorders = null;
        formData.low_muscle_tones = null;
        formData.wears_spectacles = null;
        formData.takes_medication = null;
        formData.past_swimming_lessons = null;
        formData.past_swimming_instructor_duration = "";
        formData.bad_experiences = null;
        formData.medical_aid_membership = null;
        formData.medical_aid_name = "";
        formData.medical_aid_number = "";
        formData.main_member_full_name = "";

        loading.value = false;
      });
  }

  return { formData, errors, loading, resetForm, handleSubmit };
});
