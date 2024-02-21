import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import LearnerRegister from '../views/LearnerRegister.vue';

const routes = [
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
