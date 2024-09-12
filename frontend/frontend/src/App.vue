<script setup>
import HelloWorld from './components/HelloWorld.vue'
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
          <h5 class="card-title">Card {{ n }}</h5>
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
  align-items: center;
  height: 70vh;
  background-color: #2e2e2e;
  font-family: Arial, sans-serif;
  padding: 2%;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

/* Card Container Styling */
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  margin-top: 20px;
}

/* Card Styling */
.card {
  width: calc(25% - 20px); /* Four cards per row with space between */
  background-color: #1c1c1c;
  border-radius: 10px;
  overflow: hidden;
  color: white;
  padding: 20px;
}

.card-image {
  width: 100%;
  height: 20vh;
  background-color: #a0a0a0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 5vw;
}

.card-body {
  padding: 5%;
}

.card-title {
  color: white;
  font-size: 1.8rem;
  margin-bottom: 5%;
}

.card-price {
  color: #dcdcdc;
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 10%;
}

.card-ingredients {
  color: #dcdcdc;
  font-size: 1rem;
  margin-bottom: 10%;
}

.card-mehr {
  color: #007bff;
  cursor: pointer;
  text-decoration: underline;
}

.card-mehr:hover {
  background-color: #0056b3;
}
</style>