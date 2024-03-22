import { createRouter, createWebHistory } from "vue-router";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import LearnerRegister from "@/views/LearnerRegister.vue";
import ParentRegister from "@/views/ParentRegister.vue";
import Welcome from "@/views/Welcome.vue";
import Profile from "@/views/Profile.vue";
import EditProfile from "@/views/EditProfile.vue";
import Level from "@/views/Level.vue";

function auth(to, from, next) {
  if (!localStorage.getItem("access_token")) {
    return next({ name: "Login" });
  }

  next();
}

function guest(to, from, next) {
  if (localStorage.getItem("access_token")) {
    return next({ name: "Profile" });
  }

  next();
}

const routes = [
  {
    path: "/",
    name: "Welcome",
    beforeEnter: guest,
    component: Welcome
  },
  {
    path: "/login",
    name: "Login",
    beforeEnter: guest,
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    beforeEnter: guest,
    component: Register,
  },
  {
    path: "/learner-register",
    name: "LearnerRegister",
    beforeEnter: guest,
    component: LearnerRegister
  },
  {
    path: "/parent-register",
    name: "ParentRegister",
    beforeEnter: guest,
    component: ParentRegister
  },
  {
    path: "/user-profile",
    name: "Profile",
    beforeEnter: auth,
    component: Profile,
  },
  {
    path: "/edit-profile",
    name: "EditProfile",
    component: EditProfile,
  },
  {
    path: "/level",
    name: "Level",
    component: Level,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
