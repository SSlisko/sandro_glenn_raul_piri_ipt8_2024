<script setup>

</script>

<template>
  <div class="container">
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    
    <!-- Card Container -->
    <div class="card-container">
      <div class="card" v-for="n in 8" :key="n">
        <div class="card-image">
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

/* Card Container Styling */
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px; /* Spacing between the cards */
  margin-top: 30px; /* Top margin */
}

/* Card Styling */
.card {
  width: 20%;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  color: black;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 10px;
  border: 1px solid #eaeaea;
}

.card-image {
  width: 100%;
  height: 150px;
  background-color: #a0a0a0;
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
  padding: 10px;
}

.card-title {
  color: black;
  font-size: 1.2rem;
  margin-bottom: 5%;
  font-weight: 600;
}

.card-price {
  color: #555;
  font-size: 150%;
  font-weight: bold;
  margin-bottom: 10%;
}

.card-ingredients {
  color: #777;
  font-size: 0.9rem;
  margin-bottom: 10%;
}
</style>