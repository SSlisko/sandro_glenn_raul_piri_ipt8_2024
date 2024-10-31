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
      <!-- Product Cards -->
      <ProductCard
        v-for="product in filteredProducts"
        :key="product.name"
        :product="product"
        :addToCart="addToCart" 
        :openModal="() => openModal(product)"
      />
       <!-- Checkout Component -->
    <CheckOut
      :cartItems="cart"
      @remove-item="removeItem"
      @remove-all="removeAll"
      @clear-cart="clearCart"
    />
    </div>
    

    <!-- Modal For Ingredients -->
    <ProductModal
      v-if="isModalVisible"
      :product="selectedProduct"
      @close="closeModal"
    />
    
    

    
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'; // Consolidated import
import axios from 'axios';
import CheckOut from './components/CheckOut.vue';
import ProductModal from './components/ProductModal.vue';
import CategoryFilter from './components/CategoryFilter.vue';
import ProductCard from './components/ProductCard.vue';

export default {
  components: {
    ProductModal,
    CategoryFilter,
    ProductCard,
    CheckOut,
  },
  setup() {
    const categories = ref([]);
    const selectedCategory = ref('Alle');
    const filteredProducts = ref([]);
    const isModalVisible = ref(false);
    const selectedProduct = ref({});
    const cart = ref([]);

    // Add product to cart
    const addToCart = (product) => {
  const existingItem = cart.value.find(item => item.name === product.name);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.value.push({ ...product, quantity: 1 });
  }
};


    // Remove one quantity of product from cart
    const removeItem = (product) => {
      const existingItem = cart.value.find(item => item.name === product.name);
      if (existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else {
        cart.value = cart.value.filter(item => item.name !== product.name);
      }
    };

    // Remove all of a specific product from cart
    const removeAll = (product) => {
      cart.value = cart.value.filter(item => item.name !== product.name);
    };

    // Clear the entire cart
    const clearCart = () => {
      cart.value = [];
    };

    // Fetch categories and products from API
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/home');
        categories.value = response.data;
        filterProducts();
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    // Filter products based on selected category
    const filterProducts = () => {
      if (selectedCategory.value === 'Alle') {
        filteredProducts.value = categories.value.flatMap(category => category.products);
      } else {
        const selectedCat = categories.value.find(category => category.name === selectedCategory.value);
        filteredProducts.value = selectedCat ? selectedCat.products : [];
      }
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
      cart,
      removeItem,
      removeAll,
      clearCart,
    };
  },
};
</script>

<style scoped>
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
