<script setup>
import { RouterLink, RouterView } from 'vue-router'
import FooterComponent from './components/FooterComponent.vue';
</script>

<template>
  <div class="nav-container">
    <input type="checkbox" id="menu-toggle" class="menu-toggle">
    <label for="menu-toggle" class="dropdown-btn">Menu</label>
    <div class="links-container">
      <RouterLink class="nav-link" to="/">Home</RouterLink>
      <RouterLink class="nav-link" to="/about">About</RouterLink>
      <RouterLink class="nav-link" to="/contact">Contact Us</RouterLink>
    </div>
  </div>

  <div class="page-container">
    <div class="content-wrapper">
      <!-- Your main content goes here -->
      <RouterView />
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
  }

  .menu-toggle:checked + .dropdown-btn + .links-container {
    display: flex;
  }
}
</style>
