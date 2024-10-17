<script setup>
import { ref } from 'vue';

// Datenarray mit Name, Preis, Beschreibung und Bild
const products = ref([
  {
    name: 'Wasser',
    price: '1.00 CHF',
    description: 'Ein frisches kaltes Wasser von natürlicher Quelle.',
    image: 'https://via.placeholder.com/150'
  },
  {
    name: 'Lasagne',
    price: '20.00 CHF',
    description: 'Leckere Lasagne von Mamas Rezept, hausgemacht.',
    image: 'https://via.placeholder.com/150'
  },
  {
    name: 'Pizza Margherita',
    price: '15.00 CHF',
    description: 'Eine klassische italienische Pizza mit Tomaten und Mozzarella.',
    image: 'https://via.placeholder.com/150'
  },
  {
    name: 'Caesar Salat',
    price: '12.00 CHF',
    description: 'Frischer Salat mit gegrilltem Hähnchen, Croutons und Caesar-Dressing.',
    image: 'https://via.placeholder.com/150'
  },
  {
    name: 'Apfelsaft',
    price: '2.50 CHF',
    description: 'Natürlich gepresster Apfelsaft ohne Zuckerzusatz.',
    image: 'https://via.placeholder.com/150'
  },
  {
    name: 'Rindersteak',
    price: '30.00 CHF',
    description: 'Ein saftiges Rindersteak, perfekt medium-rare gegrillt.',
    image: 'https://www.koch-mit.de/app/uploads/2023/06/Rindersteak.jpg'
  },
  {
    name: 'Schokoladenkuchen',
    price: '6.00 CHF',
    description: 'Ein reichhaltiger Schokoladenkuchen mit cremiger Füllung.',
    image: 'https://www.wildeisen.ch/sites/default/files/files/2014-12/bild_4797.jpg'
  },
  {
    name: 'Club Sandwich',
    price: '8.50 CHF',
    description: 'Ein Sandwich mit Hähnchen, Speck, Salat und Mayonnaise.',
    image: 'https://api.swissmilk.ch/wp-content/uploads/2019/10/SM2018_CHDO_32_Club_Sandwich_mit_BBQ-Sauce-2560x1707.jpg'
  },
  {
    name: 'Eiskaffee',
    price: '4.00 CHF',
    description: 'Kalter Kaffee mit Vanilleeis und Sahne.',
    image: 'https://www.nespresso.com/ncp/res/uploads/recipes/Veganer%20Wiener%20Eiskaffee%20Rezept%20Nespresso%20%C3%96sterreich.jpg-1.png'
  },
  {
    name: 'Sushi Platte',
    price: '25.00 CHF',
    description: 'Eine Auswahl an frischem Sushi mit Lachs, Thunfisch und Avocado.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5ABHEo2r-oS6oocxPk6vbAtbHlSjwEbfLUQ&s'
  },
  {
    name: 'Spaghetti Carbonara',
    price: '14.00 CHF',
    description: 'Traditionelle Spaghetti Carbonara mit Speck und Ei.',
    image: 'https://cdn.gutekueche.de/media/recipe/26142/spaghetti-carbonara.jpg'
  },
  {
    name: 'Erdbeer-Smoothie',
    price: '5.00 CHF',
    description: 'Ein fruchtiger Smoothie mit frischen Erdbeeren und Joghurt.',
    image: 'https://gesund-macht-schlank.de/wp-content/uploads/2021/08/strawberry-smoothie.jpg'
  }
]);

const selectedCategory = ref('Alle');

function addToCart(product) {
  console.log(`${product.name} wurde dem Warenkorb hinzugefügt.`);
}
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
      <div class="card" v-for="product in products" :key="product.name">
        <div class="card-image" @click="addToCart(product)">
          <img :src="product.image" alt="product image">
        </div>
        <div class="card-body">
          <h5 class="card-title">{{ product.name }}</h5>
          <p class="card-price">{{ product.price }}</p>
          <p class="card-ingredients">{{ product.description }}</p>
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

.container {
  margin-top: 110%; /* temporary fix */
}

body {
  display: flex;
  justify-content: center;
  height: 100vh;
  background-color: #f8f9fa;
  font-family: Arial, sans-serif;
  padding: 2%;
  overflow-y: auto;
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
  gap: 20px; 
  padding: 20px;
  max-width: 75vw;
  margin-top: 20px; 
  align-items: flex-start; 
}

@media (max-width: 768px) {
  /* For tablets and smaller devices */
  .card-container {
    margin-top: 20px;
    max-width: 75vw;
    margin-right: 0;
    justify-content: center;
  }
}


/* Card Styling */
.card {
  width: 275px;
  height: 325px;
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
  background-color: #5e5e5e;
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
    margin-top: 60px;
    max-width: 75vw;
    margin-right: 0;
    justify-content: center;
  }

  .card {
    width: 180px;
    height: 270px;
  }

  .card-image {
    height: 100px;
  }
}

@media (max-width: 480px) {
  /* For very small screens */
  .card-container {
    margin-top: 2750px;
    max-width: 75vw;
    margin-right: 0;
    justify-content: center;
  }

  .card {
    width: 275px;
    height: 325px;
  }

  .card-image {
    height: 80px;
  }
}
</style>
