<template>
    <div class="title-container">
      <h1 class="title">Diego Miranda Ciudad Real - Digital Portfolio</h1>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TopBanner'
  }
  </script>
  
  <style scoped>

  @keyframes moveBackground {
      0% {
          transform: rotate(45deg) translateY(-10%) scale(1);
      }
      50% {
          transform: rotate(45deg) translateY(-30%) scale(1);
      }
      100% {
          transform: rotate(45deg) translateY(-10%) scale(1);
      }
  }
  .title-container {
      background: linear-gradient(120deg, var(--primary-color), var(--secondary-color));
      padding: 30px 0;
      box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      overflow: hidden;
      transition: background 1s ease;  /* Transition property to ensure smooth background change */
  }
  
  .title {
      font-size: 34px;
      color: #fff;
      font-weight: bold;
      position: relative;
      z-index: 1;
  }
  
  .title-container::before {
      content: '';
      position: absolute;
      width: 120%;
      height: 200%;
      background: rgba(255, 255, 255, 0.1);
      z-index: 0;
      transform: rotate(45deg) translateY(-10%); 
      opacity: 0.7;
      pointer-events: none;
      transition: transform 1s ease, opacity 1s ease;
      animation: moveBackground 10s infinite;
  }
  
  .title-container:hover {
      background: linear-gradient(120deg, #4CAF50, #2E7D32);  /* Smooth transition to green gradient on hover */
  }
  
  .title-container:hover::before {
      transform: rotate(45deg) translateY(-10%) scale(1.2);
      opacity: 1;
  }

/* Responsive adjustments for different screen sizes */
@media (max-width: 768px) {
    .title {
        font-size: 4vw;  /* Slightly larger font size for medium screens */
    }
}

  </style>
  