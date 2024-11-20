<template>
    <div>
        <h2>To Do List</h2>
        <input type="text" v-model="newTask" @keyup.enter="addTask">
        <ul>
            <li v-for="(task, index) in task" :key="index">
                {{ task }}
                <button @click="deleteTask">Delete</button>
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
const deleteTask = (index) => {
    task.value.splice(index, 1);
}

</script>

<style></style>