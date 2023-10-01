<template>
    <div class="auth-container">
        <!-- Registration Form -->
        <section v-if="!isRegistered">
            <h2>Admin Registration</h2>
            <form @submit.prevent="handleRegistration">
                <input type="text" v-model="adminCredentials.username" placeholder="Username" required>
                <input type="password" v-model="adminCredentials.password" placeholder="Password" required>
                <button type="submit">Register</button>
                <p v-if="registerMessage" :class="{'success-message': registerSuccess, 'error-message': !registerSuccess}">{{ registerMessage }}</p>
            </form>
        </section>
        
        <!-- Login Form -->
        <section v-else-if="!isLoggedIn">
            <h2>Admin Login</h2>
            <h5 style="text-align:center;">An Admin is already registered</h5>
            <form @submit.prevent="handleLogin">
                <input type="text" v-model="loginCredentials.username" placeholder="Username" required>
                <input type="password" v-model="loginCredentials.password" placeholder="Password" required>
                <button type="submit">Login</button>
                <p v-if="loginMessage" :class="{'success-message': loginSuccess, 'error-message': !loginSuccess}">{{ loginMessage }}</p>
            </form>
        </section>

        <!-- LogOut Component -->
        <LogOut v-if="isRegistered && isLoggedIn" @logout="handleLogout"/>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import LogOut from '@/components/LogOut.vue';

const adminCredentials = ref({
    username: '',
    password: ''
});

const loginCredentials = ref({
    username: '',
    password: ''
});

const isRegistered = ref(!!localStorage.getItem('adminUsername'));
const isLoggedIn = ref(localStorage.getItem('isLoggedIn') === 'true');

const registerSuccess = ref(false);
const registerMessage = ref("");
const loginSuccess = ref(false);
const loginMessage = ref("");

const handleRegistration = () => {
    localStorage.setItem('adminUsername', adminCredentials.value.username);
    localStorage.setItem('adminPassword', adminCredentials.value.password);
    registerSuccess.value = true;
    registerMessage.value = "Registration Successful!";
    setTimeout(() => {
        isRegistered.value = true;
        registerMessage.value = "";
    }, 1500);
};

const handleLogin = () => {
    const storedUsername = localStorage.getItem('adminUsername');
    const storedPassword = localStorage.getItem('adminPassword');

    if (loginCredentials.value.username === storedUsername && loginCredentials.value.password === storedPassword) {
        loginSuccess.value = true;
        loginMessage.value = "Login Successful!";
        setTimeout(() => {
            localStorage.setItem('isLoggedIn', 'true');
            isLoggedIn.value = true;
            loginMessage.value = "";
        }, 1500);
    } else {
        loginSuccess.value = false;
        loginMessage.value = "Incorrect Credentials!";
    }
};

const handleLogout = () => {
    localStorage.setItem('isLoggedIn', 'false');
    isLoggedIn.value = false;
};
</script>




<style scoped>
.auth-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 40px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    font-family: 'Arial', sans-serif;
    background-color: #fff;
    border-radius: 8px;
}

.auth-container h2 {
    text-align: center;
    margin-bottom: 20px;
}

.form-group {
    margin-bottom: 25px; /* Increased spacing between input boxes */
    text-align: center; /* Centering input boxes */
}

label {
    display: block;
    margin-bottom: 10px;
}

input[type="text"], input[type="password"], textarea {
    width: 75%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin: 0 auto; /* Centering input boxes */
    margin-top: 10px; /* Adding spacing between buttons */
    display: block; /* Making sure they take the full line */
}

button {
    width: 50%;
    padding: 10px 15px;
    background-color: #007BFF;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
    margin-top: 10px; /* Adding spacing between buttons */
    display: block; /* Making sure they take the full line */
    margin-left: auto; /* Centering buttons */
    margin-right: auto; /* Centering buttons */
}

button:hover {
    background-color: #0056b3;
}

button:active {
    transform: scale(0.95);
}

.success-message {
    color: green;
    text-align: center;
    margin-top: 10px;
}

.error-message {
    color: red;
    text-align: center;
    margin-top: 10px;
}

</style>
