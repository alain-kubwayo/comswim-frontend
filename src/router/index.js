import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import LearnerRegister from '../views/LearnerRegister.vue';
import Welcome from '../views/Welcome.vue';

const routes = [
    {
        path: '/',
        name: 'Welcome',
        component: Welcome
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/learner-register',
        name: 'LearnerRegister',
        component: LearnerRegister
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
