<template>
    <div>
        <h2>To Do List</h2>
        <input type="text" v-model="newTask" @keyup.enter="addTask">
        <ul>
            <li v-for="(task, index) in task" :key="index">
                {{ task }}
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const task = ref([]);
const newTask = ref('');
const addTask = () => {
    task.value.push(newTask.value);
    newTask.value = '';
}

</script>

<style></style>