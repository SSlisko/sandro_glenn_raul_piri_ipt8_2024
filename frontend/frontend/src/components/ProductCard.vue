<template>
  <button class="card" @click="addToCart(product)"> <!-- Pass the product -->
    <div class="card-image">
      <img :src="product.image" alt="product image" />
    </div>
    <div class="card-body">
      <h5 class="card-title">{{ product.name }}</h5>
      <p class="card-price">{{ product.price }} CHF</p>
      <p class="card-mehr" @click.stop="openModal">Mehr...</p>
    </div>
  </button>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
    addToCart: {
      type: Function,
      required: true,
    },
    openModal: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style scoped>
.card {
  width: 300px;
  height: 220px;
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

.card-image {
  height: 120px;
  background-color: #5e5e5e;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px 15px 0 0;
  color: white;
  font-size: 1rem;
}

.card-image img {
  width: 100vw;
  height: 100%;
  object-fit: cover;
}

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

.card-mehr {
  color: #007bff;
  font-size: 0.9rem;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}
</style>
