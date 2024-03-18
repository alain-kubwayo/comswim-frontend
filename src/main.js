import "@/boostrap.js";
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import './style.css'
import App from './App.vue'
import ValidationError from './components/ValidationError.vue';
import IconSpinner from './components/IconSpinner.vue';
import Navbar from "./components/Navbar.vue";

import "@fontsource/poppins/100.css"; 
import "@fontsource/poppins/200.css"; 
import "@fontsource/poppins/300.css"; 
import "@fontsource/poppins/400.css"; 
import "@fontsource/poppins/500.css"; 
import "@fontsource/poppins/600.css"; 
import "@fontsource/poppins/700.css"; 
import "@fontsource/poppins/800.css"; 
import "@fontsource/poppins/900.css";
import "@fontsource/poppins/100.css"; 


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component("ValidationError", ValidationError)
app.component("IconSpinner", IconSpinner)
app.component("Navbar", Navbar)
app.mount('#app')
