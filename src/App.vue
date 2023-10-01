<script setup>
import { ref } from 'vue';  // Import 'ref' for reactivity
import { RouterLink, RouterView } from 'vue-router'
import FooterComponent from './components/FooterComponent.vue';
import TopBanner from './components/TopBanner.vue';

const menuToggle = ref(false);  // To control the checkbox

// Function to close the menu
const closeMenu = () => {
    menuToggle.value = false;
};
</script>

<template>
<div id="app">
    <TopBanner />  
  <div class="nav-container">
    <input type="checkbox" v-model="menuToggle" id="menu-toggle" class="menu-toggle">
    <label for="menu-toggle" class="dropdown-btn">Menu</label>
    <div class="links-container">
      <RouterLink class="nav-link" to="/" @click="closeMenu">Home</RouterLink>
      <RouterLink class="nav-link" to="/about" @click="closeMenu">About</RouterLink>
      <RouterLink class="nav-link" to="/blogs" @click="closeMenu">Blog</RouterLink>
      <RouterLink class="nav-link" to="/CV" @click="closeMenu">CV</RouterLink>
      <RouterLink class="nav-link" to="/admin-auth" @click="closeMenu">Admin Registration</RouterLink>
    </div>
  </div>
</div>  

  <div class="page-container">
    <div class="content-wrapper">
      <!-- Your main content goes here -->
      <transition name="fade" mode="out-in">
        <RouterView />
      </transition>
    </div>
    <footer class="amazing-footer">
      <!-- Your footer content as provided -->

  <FooterComponent/>
    </footer>
  </div>



</template>

<style scoped>

body {
    font-family: 'Roboto', sans-serif;
    background-color: #f4f4f4; /* Lighter Background */
    color: #333; /* Darker Text */
}

.page-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.content-wrapper {
    flex: 1;
    padding: 40px 10%; /* More Padding */
}

.nav-container {
    display: flex;
    justify-content: center;
    background-color: #fff; /* White Background */
    padding: 20px 0;
    position: relative;
    flex-wrap: wrap;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1); /* Subtle Shadow */
    z-index: 1000;  /* Add a high z-index value to ensure it's on top */
}

.nav-link {
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
    color: #555;
    padding: 10px 20px;
    margin: 0 10px;
    font-size: 1.1em;
    transition: background-color 0.3s, color 0.3s;
    border-radius: 4px;
}

.nav-link:hover {
    background-color: #f8f8f8;
    color: #333;
}

.router-link-active {
    color: #007BFF; /* Vibrant blue for active link */
}

/* Mobile styles */
.menu-toggle {
  display: none; /* hide the checkbox */
}

.dropdown-btn {
  font-family: 'Roboto', sans-serif;
  display: none;
  background-color: #f8f8f8;
  color: #333;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
}
.dropdown-btn:hover {
  background-color: #e8e8e8;
}

.links-container {
  display: flex;
}

/* Media query for small screens */
@media (max-width: 768px) {
  .dropdown-btn {
    display: block;
  }

  .links-container {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: #fff;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1); /* Added subtle shadow */
    z-index: 1001;  /* Slightly higher than its parent to ensure it's on top */
  }

  .menu-toggle:checked + .dropdown-btn + .links-container {
    display: flex;
  }
}
</style>
