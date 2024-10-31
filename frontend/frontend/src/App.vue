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
import { ref, onMounted, watch } from 'vue';
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

    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/home');
        categories.value = response.data;
        filterProducts(selectedCategory.value);
      } catch (error) {
      }
    };

    const filterProducts = (newCategory) => {
      selectedCategory.value = newCategory;
      if (!categories.value.length) return;
      if (selectedCategory.value === 'Alle') {
        filteredProducts.value = categories.value.flatMap(category => category.products);
      } else {
        const selectedCat = categories.value.find(category => category.name === selectedCategory.value);
        filteredProducts.value = selectedCat ? selectedCat.products : [];
      }
    };

    watch(selectedCategory, filterProducts);

    const addToCart = (product) => {
      const existingItem = cart.value.find(item => item.name === product.name);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.value.push({ ...product, quantity: 1 });
      }
    };

    const removeItem = (product) => {
      const existingItem = cart.value.find(item => item.name === product.name);
      if (existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else {
        cart.value = cart.value.filter(item => item.name !== product.name);
      }
    };

    const removeAll = (product) => {
      cart.value = cart.value.filter(item => item.name !== product.name);
    };

    const clearCart = () => {
      cart.value = [];
    };

    const openModal = (product) => {
      selectedProduct.value = product;
      isModalVisible.value = true;
    };

    const closeModal = () => {
      isModalVisible.value = false;
    };

    onMounted(fetchProducts);

    return {
      categories,
      selectedCategory,
      filteredProducts,
      addToCart,
      isModalVisible,
      selectedProduct,
      openModal,
      closeModal,
      cart,
      removeItem,
      removeAll,
      clearCart,
      filterProducts,
    };
  },
};
</script>

<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20vh; /* Space for fixed filter container */
  padding-left: 10px; /* Small gap on the left */
  padding-right: 10px; /* Small gap on the right */
  align-items: flex-start;
  justify-content: flex-start;
}

.card {
  width: calc(33.33% - 20px); /* Three cards per row minus the gap */
  min-width: 250px; /* Ensures cards don’t get too narrow on smaller screens */
  max-width: 350px; /* Sets a maximum card width */
}


/* Responsive Design */
@media (min-width: 1024px) {
  .card-container {
    margin-right: calc((100vw - 75vw) / 2);
  }
}

@media (max-width: 768px) {
  .card-container {
    margin-top: 40px; /* Reduced from 60px to maintain proportional spacing */
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
