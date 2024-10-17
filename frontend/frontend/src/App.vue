<template>
  <div class="container">
    <!-- Filter Dropdown -->
    <CategoryFilter
      :categories="categories"
      :selectedCategory="selectedCategory"
      @update:selectedCategory="filterProducts"
    />

    <!-- Card Container -->
    <div class="card-container">
      <ProductCard
        v-for="product in filteredProducts"
        :key="product.name"
        :product="product"
        :addToCart="addToCart(product)"
        :openModal="() => openModal(product)"
      />
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
import ProductModal from "./components/ProductModal.vue";
import CategoryFilter from "./components/CategoryFilter.vue";
import ProductCard from "./components/ProductCard.vue"; // Import the new card component

export default {
  components: {
    ProductModal,
    CategoryFilter,
    ProductCard, // Register the card component
  },
  setup() {
    const categories = ref([]);
    const selectedCategory = ref("Alle");
    const filteredProducts = ref([]);
    const isModalVisible = ref(false);
    const selectedProduct = ref({});

    // Fetch categories and products from API
    const fetchProducts = async () => {
      console.log("Fetching products from API...");
      try {
        const response = await axios.get("http://localhost:8000/api/home");
        console.log("API response:", response.data);
        categories.value = response.data;
        console.log("Categories fetched:", categories.value);
        filterProducts();
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    // Filter products based on selected category
    const filterProducts = () => {
      console.log("Filtering products for category:", selectedCategory.value);
      if (selectedCategory.value === "Alle") {
        filteredProducts.value = categories.value.flatMap(
          (category) => category.products,
        );
      } else {
        const selectedCat = categories.value.find(
          (category) => category.name === selectedCategory.value,
        );
        filteredProducts.value = selectedCat ? selectedCat.products : [];
      }
      console.log("Filtered products:", filteredProducts.value);
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
      filterProducts,
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

/* Responsive Design */
@media (min-width: 1024px) {
  .card-container {
    margin-right: calc((100vw - 75vw) / 2);
  }
}

@media (max-width: 768px) {
  .card-container {
    margin-top: 60px;
    max-width: 75vw;
    margin-right: 0;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .card-container {
    max-width: 75vw;
    margin-right: 0;
    justify-content: center;
  }
}
</style>
