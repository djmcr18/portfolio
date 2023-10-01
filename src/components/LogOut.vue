<template>
    <div class="admin-dashboard">
        <h2>Hi {{ username }}!</h2>
        <h5>You are currently logged in as the admin.</h5>
        <button v-if="!loggingOut" @click="prepareLogout">Log out</button>
        <p v-if="loggingOut" class="logging-out">Logging out...</p>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const username = ref(localStorage.getItem('adminUsername'));
const loggingOut = ref(false);

const prepareLogout = () => {
    loggingOut.value = true;
    setTimeout(() => {
        handleLogout();
    }, 1500);
}

const handleLogout = () => {
    localStorage.setItem('isLoggedIn', 'false');
    window.location.reload();
};
</script>

<style scoped>
.admin-dashboard {
    font-family: 'Arial', sans-serif;
    background-color: #fff;
    text-align: center;
}

button {
    background-color: #ff4d4d; /* Making it reddish to signify logout */
}

button:hover {
    background-color: #cc0000;
}

.logging-out {
    color: #ff4d4d;
    margin-top: 20px;
}
</style>
