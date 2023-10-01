<template>
  <section class="about-me-page">
    <div class="profile-image">
      <img src="src/assets/images/CoachingPhoto.jpg" alt="Diego Miranda Ciudad Real" class="hover-effect">
    </div>
    <div class="about-content">
      <h1 style="text-align:center;">About Me</h1>
      <p>
        Hi! I'm Diego, a dedicated student currently undertaking a Bachelor of Information Technology with a major in Cybersecurity at Deakin University. My enthusiasm for technology drives my aspirations in software development and cybersecurity.
      </p>
      <p>
        Beyond the world of IT, I have another passion – football. I'm proud to play as a semi-professional footballer for Werribee City FC in NPL Victoria. Balancing both my academic pursuits and athletic commitments has instilled in me discipline, teamwork, and a relentless drive to excel.
      </p>
      <p>
        When I'm not on the field or behind the computer, I enjoy spending time with family and friends, usually eating a lot of food :).
      </p>
      <router-link to="/CV">
        <button>View My Resume</button>
      </router-link>  
      <p>
        Thank you for visiting my portfolio. If you'd like to collaborate or chat about football, tech, or anything in between, feel free to <a href="mailto:s223341726@deakin.edu.au">reach out</a>!
      </p>
    </div>
  </section>
</template>

<script setup>
// You can add any reactive properties or methods if needed.
</script>

<style scoped>
.about-me-page {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: px 4%;
  font-family: 'Arial', sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #f4f4f4;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.profile-image {
  flex: 1;
  padding-right: 25px;
  padding-left: 25px;
}

.profile-image img.hover-effect {
  max-width: 100%;
  border-radius: 50%;
  transition: transform 0.3s, box-shadow 0.3s;
}

.profile-image img.hover-effect:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.about-content {
  flex: 2;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
}

.about-content h1 {
  font-size: 2.5em;
  margin-bottom: 20px;
}

.about-content p {
  margin-bottom: 20px;
  line-height: 1.6;
}

.about-content a {
  color: #007BFF;
  text-decoration: none;
  transition: color 0.3s;
}

.about-content a:hover {
  color: #007BFF;
}

.download-btn:hover {
  background-color: #007BFF;
}
</style>