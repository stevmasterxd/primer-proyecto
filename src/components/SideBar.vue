<template>
    <div class="SideBar">
        <h2>Welcom</h2>
        <h3>Name:{{ name }}</h3>
        <h3>Email:{{ email }}</h3>
        <ul>
            <li> <router-link to="/Counter">Counter</router-link></li>
            <li><router-link to="/ToDoList">To Do List</router-link></li>
            <li><router-link to="/register">Register</router-link></li>
        </ul>
    </div>
</template>

<script setup>
import { useRegisterStore } from '@/Modules/register/stores/registerStore';
import { ref, watch } from 'vue';
const registerStore = useRegisterStore();
const name = ref(registerStore.name.value);
const email = ref(registerStore.email.value);
watch(() => registerStore.name, (newValue) => {
    name.value = newValue;
});
watch(() => registerStore.email, (newValue) =>{
    email.value = newValue;
})
</script>

<style>
.SideBar {
    width: 200px;
    background-color: #f0f0f0;
    padding: 20px;
}
</style>