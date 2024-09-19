<script setup>
function addToCart() {
  // Add your logic here
}

import { ref } from 'vue';

const selectedCategory = ref('Alle');

</script>

<template>
  <div class="container">

     <!-- Filter Dropdown -->
     <div class="filter-container">
      <label for="category-filter" class="filter-label">Filter nach Kategorie:</label>
      <select id="category-filter" v-model="selectedCategory">
        <option value="Alle">Alle</option>
        <option value="Getränke">Getränke</option>
        <option value="Softdrinks">Softdrinks</option>
        <option value="Vorspeisen">Vorspeisen</option>
        <option value="Hauptspeisen">Hauptspeisen</option>
        <option value="Desserts">Desserts</option>
      </select>
    </div>
    
    <!-- Card Container -->
    <div class="card-container">
      <div class="card" v-for="n in 9" :key="n">
        <div class="card-image" @click="addToCart">
          Image
        </div>
        <div class="card-body">
          <h5 class="card-title">{{ n }}</h5>
          <p class="card-price">0.00 CHF</p>
          <p class="card-ingredients">Lorem ipsum dolor sit amet consectetur, adipisicing elit...</p>
          <p class="card-mehr">Mehr...</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  display: flex;
  justify-content: center;
  height: 100vh;
  background-color: #f8f9fa;
  font-family: Arial, sans-serif;
  padding: 2%;
}

/* Filter Container Styling */
.filter-container {
  margin-bottom: 20px;
}

#category-filter {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 2.5rem;
  width: 350px;
  height: 90px;
}

.filter-label {
  color: #ffffff;
  font-size: 1rem;
  font-weight: bold;
  margin-right: 25px;
  font-size: 3rem;
}

/* Card Container Styling */
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px; /* Spacing between the cards */
  padding: 20px;
  max-width: 75vw; /* Occupy 3/4 of the viewport width */
  margin-top: 20px; /* Space on top for phones */
  align-items: flex-start; /* Align cards to the top */
}

/* Card Styling */
.card {
  width: 275px; /* Fixed width for consistency */
  height: 325px; /* Fixed height for consistency */
  background-color: white;
  border-radius: 15px;
  overflow: hidden;
  color: black;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.4s ease-in-out, box-shadow 0.4s ease-in-out;
  border: 1px solid #eaeaea;
  cursor: pointer;
  display: flex;
  flex-direction: column;
}

/* Slimmer Card Image Styling */
.card-image {
  height: 120px; /* Adjusted height for slimmer cards */
  background-color: #ee3737;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px 15px 0 0;
  color: white;
  font-size: 1rem; /* Adjust font size if needed */
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Card Body Styling */
.card-body {
  padding: 15px;
  flex: 1;
}

.card-title {
  margin-bottom: 5%;
  font-weight: 600;
  font-size: 1.2rem;
  color: rgb(0, 0, 0);
}

.card-price {
  margin-bottom: 10%;
  color: #28a745;
  font-size: 1.3rem;
  font-weight: bold;
}

.card-ingredients {
  color: rgb(0, 0, 0);
  font-size: 0.9rem;
  margin-bottom: 10%;
}

.card-mehr {
  color: #007bff;
  font-size: 0.9rem;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

/* Responsive Design */
@media (min-width: 1024px) {
  /* For large screens (PCs) */
  .card-container {
    margin-right: calc((100vw - 75vw) / 2); /* Center container on the screen */
  }
}

@media (max-width: 768px) {
  /* For tablets and smaller devices */
  .card-container {
    margin-top: 60px; /* Space on top for additional content */
    max-width: 75vw; /* Maintain 3/4 of the viewport width */
    margin-right: 0; /* Reset margin on smaller screens */
    justify-content: center; /* Center cards horizontally */
  }

  .card {
    width: 180px; /* Adjusted width for smaller screens */
    height: 270px; /* Adjusted height for smaller screens */
  }

  .card-image {
    height: 100px; /* Adjust height for smaller screens */
  }
}

@media (max-width: 480px) {
  /* For very small screens */
  .card-container {
    margin-top: 2750px; /* More space on top for additional content */
    max-width: 75vw; /* Maintain 3/4 of the viewport width */
    margin-right: 0; /* Reset margin on very small screens */
    justify-content: center; /* Center cards horizontally */
  }

  .card {
    width: 275px; /* Adjusted width for very small screens */
    height: 325px; /* Adjusted height for very small screens */
  }

  .card-image {
    height: 80px; /* Adjust height for very small screens */
  }
}
</style>
