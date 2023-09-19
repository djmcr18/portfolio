<template>
  <section class="portfolio-home">
    <header class="portfolio-header">
      <h1>John Doe</h1>
      <p>Web Developer & Designer</p>
    </header>

    <section class="portfolio-intro">
      <p>
        Hello! I'm John, a passionate web developer with over 5 years of experience. I love creating responsive and user-friendly websites. Check out my projects below!
      </p>
    </section>

    <section class="portfolio-projects">
      <h2>My Projects</h2>
      <div class="projects-grid">
        <div class="project-card" v-for="project in projects" :key="project.id">
          <img :src="project.image" :alt="project.name" />
          <h3>{{ project.name }}</h3>
          <p>{{ project.description }}</p>
        </div>
      </div>
    </section>

    <footer class="portfolio-footer">
      <p>Thank you for visiting! Let's <a href="mailto:john@example.com">connect</a>.</p>
    </footer>
  </section>
</template>

<script setup>
import { ref } from 'vue';

import projectImage1 from '../assets/images/diego-ph-fIq0tET6llw-unsplash.jpg';


const projects = ref([
  {
    id: 1,
    name: 'Project One',
    description: 'A description of project one.',
    image: projectImage1
  },
  {
    id: 2,
    name: 'Project Two',
    description: 'A description of project two.',
    image: projectImage1
  },
  // ... add more projects as needed
]);
</script>

<style scoped>
.portfolio-home {
  font-family: 'Arial', sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.portfolio-header {
  text-align: center;
  margin-bottom: 50px;
}

.portfolio-header h1 {
  font-size: 2.5em;
  margin-bottom: 10px;
}

.portfolio-intro {
  text-align: center;
  margin-bottom: 50px;
}

.portfolio-projects {
  margin-bottom: 50px;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.project-card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
}

.project-card img {
  width: 100%;
  height: auto;
}

.project-card h3 {
  text-align: center;
  padding: 10px 0;
}

.portfolio-footer {
  text-align: center;
}
</style>