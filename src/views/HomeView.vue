<template>
  <section class="portfolio-home">
    <header class="portfolio-header">
      <h1>Diego Miranda</h1>
      <h4>Deakin University - Bachelor of Information Technology (Major in Cybersecurity)</h4>
    </header>

    <section class="portfolio-intro">
      <p>
        Hello! I'm Diego Miranda Ciudad Real. Currently, I am pursuing my Bachelor's degree in Information Technology with a major in Cybersecurity at Deakin University. With a deep-rooted passion for technology, I aspire to build a career in either software development or cybersecurity.
      </p>
    </section>

    <section class="portfolio-projects">
      <h2>My Projects</h2>
      <p>
        Below are some links to some of my creations
      </p>
      <div class="projects-grid">
        <div class="project-card" v-for="project in projects" :key="project.id">
          <img :src="project.image" :alt="project.name" />
          <h3>{{ project.name }}</h3>
          <p>{{ project.description }}</p>
          <a v-if="project.name === 'My GitHub Portfolio'" href="https://github.com/djmcr18" target="_blank" rel="noopener noreferrer">View on GitHub</a>
          <a v-else :href="'https://github.com/djmcr18/space_game'" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>

      </div>
    </section>

    <footer class="portfolio-footer">
      <p>Thank you for visiting! If you're interested in collaboration or have any inquiries, feel free to <a href="mailto:s223341726@deakin.edu.au">reach out</a>.</p>
    </footer>
  </section>
</template>

<script setup>
import { ref } from 'vue';

import projectImage1 from '../assets/images/gameproject.png';
import projectImage2 from '../assets/images/github.png'


const projects = ref([
  {
    id: 1,
    name: 'SPACE GAME',
    description: 'A game I developed using C++ during my time in SIT102 - Introduction to Programming. Dive into an interstellar adventure with SPACE GAME!',
    image: projectImage1
  },
  {
    id: 2,
    name: 'My GitHub Portfolio',
    description: 'A collection of my projects, contributions, and coding journey. Explore my GitHub portfolio to get a deeper insight into my skills and experiences.',
    image: projectImage2
  }
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
  margin: 50px auto; /* Centered the section with auto margins */
  max-width: 600px;  /* Set a max-width to prevent it from stretching too wide */
  text-align: center;
}

.projects-grid {
  display: flex; /* Changed to flex for better centering */
  justify-content: center; /* Center the items horizontally */
  align-items: center; /* Center the items vertically */
  gap: 20px;
}

.project-card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  padding-bottom: 20px; /* Added padding to the bottom of the card */
}

.project-card img {
  width: 100%;      /* This ensures the image takes up the full width of its container */
  height: 250px;    /* This sets a fixed height for the images */
  object-fit: cover; /* This makes sure the image covers the set dimensions without distorting */
  display: block;   /* This ensures there's no extra space below the image */
}

.project-card h3 {
  text-align: center;
  padding: 10px 0;
}

.project-card p {
  text-align: center;
  padding: 0px 10%;
}

.portfolio-footer {
  text-align: center;
}
</style>