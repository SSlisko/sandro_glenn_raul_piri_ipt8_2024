<script setup>

function addToCart() {
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
        <div class="card" v-for="n in 8" :key="n">
            <div class="card-image" @click="addToCart">
              Image
          </div>
            <div class="card-body">
              <h5 class="card-title">{{ n }}</h5>
              <p class="card-price">0.00 CHF</p>
              <p class="card-ingredients" id="card-ingredients">Lorem ipsum dolor sit amet consectetur, adipisicing elit...</p>
              <p class="card-mehr" id="card-mehr">Mehr...</p>
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
  justify-content: flex-start;
  align-items: flex-start;
  gap: 30px; /* Spacing between the cards */
  margin-top: 5%; 
}

/* Card Styling */
.card {
  width: 22%;

  
  background: linear-gradient(135deg, rgb(151, 151, 151) 0%, rgb(255, 255, 255) 100%);
  border-radius: 15px;
  overflow: hidden;
  color: black;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.4s ease-in-out, box-shadow 0.4s ease-in-out;
  border: 1px solid #eaeaea;
  cursor: pointer;
}

.card-image {
  width: 100%;
  height: 150px;
  background-color: #ee3737;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 10px 10px 0 0;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-body {
  padding: 15px;
}

.card-title {
  margin-bottom: 5%;
  font-weight: 600;
  font-size: 1.3rem;
  color: rgb(0, 0, 0);
}

.card-price {
  margin-bottom: 10%;
  color: #28a745;
  font-size: 1.5rem;
  font-weight: bold;
}

.card-ingredients {
  color: rgb(0, 0, 0);
  font-size: 0.9rem;
  margin-bottom: 10%;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.card-mehr:hover {
  text-decoration: underline;
}

.add-to-cart {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border-radius: 25px;
  transition: background-color 0.3s ease;
}

.add-to-cart:hover {
  background-color: #0056b3;
}
</style>