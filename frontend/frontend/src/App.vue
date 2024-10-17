<template>
  <div class="container">
    <!-- Filter Dropdown -->
    <div class="filter-container">
      <label for="category-filter" class="filter-label"
        >Filter nach Kategorie:</label
      >
      <select
        id="category-filter"
        v-model="selectedCategory"
        @change="filterProducts"
      >
        <option value="Alle">Alle</option>
        <option
          v-for="category in categories"
          :key="category.name"
          :value="category.name"
        >
          {{ category.name }}
        </option>
      </select>
    </div>

    <!-- Card Container -->
    <div class="card-container">
      <div class="card" v-for="product in filteredProducts" :key="product.name">
        <div class="card-image" @click="addToCart(product)">
          <img :src="product.image" alt="product image" />
        </div>
        <div class="card-body">
          <h5 class="card-title">{{ product.name }}</h5>
          <p class="card-price">{{ product.price }} CHF</p>
          <p class="card-mehr" @click="openModal(product)">Mehr...</p>
        </div>
      </div>
    </div>

    <!-- Modal for Ingredients -->
    <ProductModal
      v-if="isModalVisible"
      :product="selectedProduct"
      @close="closeModal"
    />
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";
import ProductModal from "./components/ProductModal.vue"; // Adjust path based on your directory structure

export default {
  components: {
    ProductModal, // Register the modal component
  },
  setup() {
    const categories = ref([]); // Store categories
    const selectedCategory = ref("Alle"); // Selected category
    const filteredProducts = ref([]); // Filtered products based on category
    const isModalVisible = ref(false); // Track visibility of the modal
    const selectedProduct = ref({}); // Store currently selected product

    // Fetch categories and products from API
    const fetchProducts = async () => {
      console.log("Fetching products from API...");
      try {
        const response = await axios.get("http://localhost:8000/api/home"); // Adjusted to use the new endpoint
        console.log("API response:", response.data); // Log the entire response
        categories.value = response.data; // Assuming the data structure is directly usable
        console.log("Categories fetched:", categories.value); // Log the fetched categories
        filterProducts(); // Call filter function after fetching
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    // Filter products based on selected category
    const filterProducts = () => {
      console.log("Filtering products for category:", selectedCategory.value);
      if (selectedCategory.value === "Alle") {
        // If "All" is selected, gather all products from all categories
        filteredProducts.value = categories.value.flatMap(
          (category) => category.products,
        );
      } else {
        // Filter products based on selected category
        const selectedCat = categories.value.find(
          (category) => category.name === selectedCategory.value,
        );
        filteredProducts.value = selectedCat ? selectedCat.products : [];
      }
      console.log("Filtered products:", filteredProducts.value); // Log the filtered products
    };

    // Open modal for selected product
    const openModal = (product) => {
      selectedProduct.value = product;
      isModalVisible.value = true;
    };

    // Close modal
    const closeModal = () => {
      isModalVisible.value = false;
    };

    // Add the product to the cart (implement this function as needed)
    const addToCart = (product) => {
      console.log("Adding to cart:", product);
    };

    // Fetch products when the component is mounted
    onMounted(fetchProducts);

    return {
      categories,
      selectedCategory,
      filteredProducts,
      addToCart,
      filterProducts, // Return filterProducts to allow it to be called in the template
      isModalVisible,
      selectedProduct,
      openModal,
      closeModal,
    };
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  display: flex;
  justify-content: center;
  background-color: #f8f9fa;
  font-family: Arial, sans-serif;
  padding: 8px;
  overflow-y: auto;
}

/* Filter Container Styling */
.filter-container {
  margin-bottom: 20px;
  padding: 20px; /* Add padding for better spacing */
  background-color: #007bff; /* Blue background for visibility */
  border-radius: 10px; /* Rounded corners */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Soft shadow for depth */
}

/* Filter Label */
.filter-label {
  color: #ffffff; /* White text for contrast */
  font-size: 1.5rem; /* Larger font size for visibility */
  font-weight: bold;
  margin-right: 15px; /* Space between label and dropdown */
}

/* Category Filter */
#category-filter {
  padding: 10px; /* Increased padding for a better look */
  border: 1px solid #ffffff; /* White border for contrast */
  border-radius: 8px; /* Slightly rounded corners */
  font-size: 1.5rem; /* Adjusted font size */
  width: 350px; /* Fixed width */
  height: 50px; /* Height adjustment */
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

/* Card Styling */
.card {
  width: 275px;
  height: 325px;
  background-color: white;
  border-radius: 15px;
  overflow: hidden;
  color: black;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.4s ease-in-out,
    box-shadow 0.4s ease-in-out;
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
