<template>
  <div class="filter-container">
    <p class="logo-name">WAITR</p>
    <label for="category-filter" class="filter-label">Filter nach Kategorie:</label>
    <select id="category-filter" :value="selectedCategory" @change="updateCategory">
      <option value="Alle">Alle</option>
      <option v-for="category in categories" :key="category.name" :value="category.name">
        {{ category.name }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      required: true,
    },
    selectedCategory: {
      type: String,
      required: true,
    },
  },
  methods: {
      updateCategory(event) {
      const newCategory = event.target.value;
      this.$emit("update:selectedCategory", newCategory);
    },
  },
};
</script>

<style scoped>
.filter-container {
  position: fixed;
  top: 2;
  left: 2;
  margin-right: 1vw;
  width: 99%; /* Make it full width */
  z-index: 1000; /* Keep it above other elements */
  padding: 20px;
  background-color: #007bff;
  border-radius: 10px 10px 10px 10px; /* Only round bottom corners */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.filter-label {
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: bold;
  margin-right: 15px;
}

.logo-name {
  color: white;
  font-family: 'candara', sans-serif;
  font-size: 4vh;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  padding-bottom: 25px;
}

#category-filter {
  padding: 10px;
  border: 1px solid #ffffff;
  border-radius: 8px;
  font-size: 1.5rem;
  width: 350px;
  height: 50px;
}
</style>
