<template>
  <div class="container">
    <CategoryFilter
      :categories="categories"
      :selectedCategory="selectedCategory"
      @update:selectedCategory="filterProducts"
    />

    <div class="card-container">
      <ProductCard
        v-for="product in filteredProducts"
        :key="product.name"
        :product="product"
        :addToCart="addToCart(product)"
        :openModal="() => openModal(product)"
      />
    </div>

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
import ProductCard from "./components/ProductCard.vue";

export default {
  components: {
    ProductModal,
    CategoryFilter,
    ProductCard,
  },
  setup() {
    const categories = ref([]);
    const selectedCategory = ref("Alle");
    const filteredProducts = ref([]);
    const isModalVisible = ref(false);
    const selectedProduct = ref({});

    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/home");
        categories.value = response.data;
        filterProducts(selectedCategory.value); // Use the initial selected category
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    const filterProducts = (newCategory) => {
      selectedCategory.value = newCategory; 
      if (selectedCategory.value === "Alle") {
        filteredProducts.value = categories.value.flatMap(category => category.products);
      } else {
        const selectedCat = categories.value.find(category => category.name === selectedCategory.value);
        filteredProducts.value = selectedCat ? selectedCat.products : [];
      }
    };

    const openModal = (product) => {
      selectedProduct.value = product;
      isModalVisible.value = true;
    };

    const closeModal = () => {
      isModalVisible.value = false;
    };

    const addToCart = (product) => {
      console.log("Adding to cart:", product);
    };

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
