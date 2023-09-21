<template>
    <footer class="amazing-footer">
      <div class="footer-content">
        <div class="footer-section">
          <h4>About Me</h4>
          <p>Diego Miranda Ciudad Real, a student of Bachelor of Information Technology (Major in Cybersecurity) at Deakin University.</p>
        </div>
        <div class="footer-section">
          <h4>Navigation</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="https://github.com/djmcr18/space_game" target="_blank">My Game Project</a></li>
            <li><a href="https://github.com/djmcr18" target="_blank">My GitHub</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>Contact Info</h4>
          <p><i class="fas fa-map-marker-alt"></i>Deakin University</p>
          <p><i class="fas fa-envelope"></i>s223341273@deakin.edu.au</p>
          <!-- You can add more personal contact information if you wish, such as LinkedIn or other social media profiles -->
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2023 Diego Miranda Ciudad Real. All rights reserved.</p>
      </div>
    </footer>
</template>
  
  <script setup>
  // You can add any reactive properties or methods if needed.
  </script>
  
  <style scoped>
.amazing-footer {
    background-color: #fff; /* White Background */
    color: #333; /* Darker Text */
    padding: 40px 0;
    border-top: 1px solid #ddd; /* Lighter Border */
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
  }
  
  .footer-section:last-child {
    margin-right: 0;
  }
  
  .footer-section h4 {
    border-bottom: 2px solid #007BFF;
    padding-bottom: 10px;
    margin-bottom: 20px;
  }
  
  .footer-section p, .footer-section li {
    margin-bottom: 10px;
  }
  
  .footer-section a {
    color: #000;
    text-decoration: none;
    transition: color 0.3s;
  }
  
  .footer-section a:hover {
    color: #007BFF;
  }
  
  .footer-bottom {
    text-align: center;
    margin-top: 40px;
    border-top: 1px solid #34495e;
    padding-top: 20px;
  }
  
  /* If you're using Font Awesome for icons */
  .fas {
    margin-right: 10px;
  }
  </style>
  