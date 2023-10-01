<template>
  <footer class="amazing-footer">
      <div class="footer-content">
          <div class="footer-section">
              <h4>Navigation</h4>
              <ul>
                <li><router-link to="/"><i class="fas fa-home"></i> Home</router-link></li>
                <li><router-link to="/about"><i class="fas fa-user"></i> About</router-link></li>
                <li><router-link to="/blogs"><i class="fas fa-blog"></i> Blog</router-link></li>
                <li><router-link to="/CV"><i class="fas fa-file-alt"></i> CV/Resume</router-link></li>
                <li><router-link to="/admin-auth"><i class="fas fa-user-shield"></i> Admin</router-link></li>
                <li><a href="https://github.com/djmcr18" target="_blank"><i class="fab fa-github"></i> My GitHub</a></li>
              </ul>
          </div>

          <div class="footer-section">
              <h4>Contact Info</h4>
              <div class="contact-item">
                  <a href="mailto:djmcr.18@gmail.com"><i class="fas fa-envelope"></i> djmcr.18@gmail.com</a>
              </div>
              <div class="contact-item">
                  <i class="fas fa-phone"></i> 04XX XXX XXX
              </div>
              <div class="contact-item">
                  <i class="fas fa-map-marker-alt"></i> Melbourne, Victoria
              </div>
          </div>

          <div class="footer-section">
              <h4>Connect with Me</h4>
              <ul>
                  <li><a href="https://www.linkedin.com/in/diego-miranda-22bb51269/" target="_blank"><i class="fab fa-linkedin"></i> LinkedIn</a></li>
                  <li><a href="https://www.instagram.com/diego_mcr/" target="_blank"><i class="fab fa-instagram"></i> Instagram</a></li>
                  <li><a href="https://www.facebook.com/hiteminthedinks/" target="_blank"><i class="fab fa-facebook"></i> Facebook</a></li>
              </ul>
          </div>
      </div>
      <div class="footer-bottom">
          <p>&copy; 2023 Diego Miranda Ciudad Real. All rights reserved.</p>
      </div>
  </footer>
</template>

<style scoped>
.amazing-footer {
  background-color: #fff;
  color: #333;
  padding: 40px 0;
  border-top: 1px solid #ddd;
  font-family: 'Arial', sans-serif;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 10%;
}

.footer-section {
  flex: 1;
  margin-right: 20px;
  margin-bottom: 30px;  /* Added for consistent spacing */
}

.footer-section:last-child {
  margin-right: 0;
}

.footer-section h4 {
  border-bottom: 2px solid #007BFF;
  padding-bottom: 10px;
  margin-bottom: 20px;
}

.footer-section ul {
  list-style-type: none;
  padding-left: 0;
}

.footer-section li {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.footer-section i {
  margin-right: 10px;
  transition: color 0.3s, transform 0.3s;
}

.footer-section a {
  color: #000;
  text-decoration: none;
  transition: color 0.3s, transform 0.3s;
}

.footer-section a:hover,
.footer-section a:hover i {
  color: #007BFF;
  transform: scale(1.1);
}

.footer-bottom {
  text-align: center;
  margin-top: 40px;
  border-top: 1px solid #34495e;
  padding-top: 20px;
}

.contact-item {
  margin-bottom: 15px;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: flex;
  align-items: center;
}

@media (max-width: 768px) {
  .footer-content {
      flex-direction: column;
  }

  .footer-section {
      margin-right: 0;
      margin-bottom: 20px;
  }

  .footer-section:last-child {
      margin-bottom: 0;
  }
}
</style>
