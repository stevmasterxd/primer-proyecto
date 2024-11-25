<template>
    <div class="SideBar">
        <h2>Welcom</h2>
        <h3>Name:{{ registerStore.name }}</h3>
        <h3>Email:{{ registerStore.email }}</h3>
        <ul>
            <li> <router-link to="/Counter">Counter</router-link></li>
            <li><router-link to="/ToDoList">To Do List</router-link></li>
            <li><router-link to="/register">Register</router-link></li>
        </ul>
    </div>
</template>

<script setup>
import { useRegisterStore } from '@/Modules/register/stores/registerStore';

const registerStore = useRegisterStore();
</script>

<style>
.SideBar {
    width: 200px;
    background-color: #f0f0f0;
    padding: 20px;
}
</style>