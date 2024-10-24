<!-- src/components/ProductModal.vue -->
<template>
  <div class="modal-overlay" @click="$emit('close')">
    <div class="modal-content" @click.stop>
      <h5>{{ product.name }}</h5>
      <p>{{ product.ingredients }}</p>
      <button @click="$emit('close')">Schließen</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    addToCart(product) {
      this.$emit('add-to-cart', product);
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 450px;
  text-align: center;
}

.modal-content h5 {
  margin-bottom: 10px;
  font-size: xx-large;
}

.modal-content p {
  margin-bottom: 20px;
  font-size: large;
}

.modal-content button {
  padding: 10px 20px;
  font-size: large;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}

.modal-content button:hover {
  background-color: #0056b3;
}
</style>
