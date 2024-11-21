<template>
    <div>
        <h2>Registration Form</h2>
        <Form :validation-schema="schema" @submit="onSubmit">
            <div class="form">
                <label for="name">Name:</label>
                <Field type="text" name="name" id="name" placeholder="Enter your name" />
                <ErrorMessage name="name"></ErrorMessage>
            </div>
            <div class="form">
                <label for="email">Email:</label>
                <Field type="email" name="email" id="email" placeholder="Enter your email" />
                <ErrorMessage name="email"></ErrorMessage>
            </div>
            <div class="form">
                <button type="submit">Register</button>
            </div>
        </Form>
    </div>

</template>

<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate';
import { schema } from '../schemas/validationSchemas';
const onSubmit = () => {
    console.log('The form has been sent');
}

</script>

<style scoped>
.form {
    margin-bottom: 10px;
}
</style>