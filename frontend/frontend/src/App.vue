<template>
  <div class="container">
    <!-- Filter Dropdown -->
    <CategoryFilter
      :categories="categories"
      :selectedCategory="selectedCategory"
      @update:selectedCategory="filterProducts"
    />

    <!-- Card Container and Checkout in Grid Layout -->
    <div class="content-grid">
      <!-- Card Container -->
      <div class="card-container">
        <ProductCard
          v-for="product in filteredProducts"
          :key="product.name"
          :product="product"
          :addToCart="addToCart" 
          :openModal="() => openModal(product)"
        />
      </div>

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
.container {
  display: flex;
  flex-direction: column;
  padding: 10px;
}

/* Grid Layout for Card and Checkout */
.content-grid {
  display: grid;
  grid-template-columns: 2fr 1fr; /* 2:1 ratio for product cards and checkout */
  gap: 20px;
  margin-top: 17vh; /* Space for the fixed filter container */
  margin-left: 3vh;
  justify-content: left;
  align-items: left;
}

/* Card Container styling */
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: flex-start;
  justify-content: flex-start;
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .content-grid {
    grid-template-columns: 1fr; /* Single column layout on smaller screens */
  }
}

@media (max-width: 768px) {
  .card-container {
    margin-top: 40px;
    max-width: 75vw;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .card-container {
    max-width: 75vw;
    justify-content: center;
  }
}
</style>