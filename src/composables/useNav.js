import { ref } from 'vue';

const isOpen = ref(false);

const toggleNav = () => {
    isOpen.value = !isOpen.value;
}

export { isOpen, toggleNav }; 