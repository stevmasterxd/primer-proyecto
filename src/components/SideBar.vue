<template>
    <div class="SideBar">
        <h2>SideBar</h2>
        <ul>
            <li> <router-link to="/Counter">Counter</router-link></li>
            <li><router-link to="/ToDoList">To Do List</router-link></li>
            <li><router-link to="/register">Register</router-link></li>
        </ul>
    </div>
</template>

<script setup>

</script>

<style>
.SideBar {
    width: 200px;
    background-color: #f0f0f0;
    padding: 20px;
}
</style>