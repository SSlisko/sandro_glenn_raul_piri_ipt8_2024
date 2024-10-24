<template>
    <div class="checkout-container">
        <h3>Your Cart</h3>
        <ul v-if="cartItems.length > 0">
            <li v-for="(item, index) in cartItems" :key="index" class="cart-item">
                <span class="item-details">
                    {{ item.quantity }}x {{ item.name }} - {{ roundToTwoDecimals(item.price * item.quantity) }} CHF
                </span>
                <div class="button-group">
                    <button @click="removeItem(item)" class="action-button">
                        <i class="fas fa-minus-circle"></i> Remove one
                    </button>
                    <button @click="removeAll(item)" class="action-button remove-all">
                        <i class="fas fa-trash-alt"></i> Remove all
                    </button>
                </div>
            </li>
        </ul>
        <p v-else>Your cart is empty.</p>
        <div class="button-container">
            <button v-if="cartItems.length > 0" @click="clearCart" class="clear-cart-button">
                <i class="fas fa-trash"></i> Clear Cart
            </button>
            <button v-if="cartItems.length > 0" @click="buyEverything" class="buy-everything-button">
                <i class="fas fa-shopping-cart"></i> Pay
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        cartItems: {
            type: Array,
            required: true,
        },
    },
    methods: {
        removeItem(item) {
            this.$emit('remove-item', item);  // Emit event to remove one item
        },
        removeAll(item) {
            this.$emit('remove-all', item);  // Emit event to remove all of the same product
        },
        clearCart() {
            this.$emit('clear-cart');  // Emit event to clear the whole cart
        },
        buyEverything() {
            this.$emit('buy-everything');  // Emit event to buy all items in the cart
        },
        roundToTwoDecimals(value) {
            return (Math.ceil(value * 100) / 100).toFixed(2); // Round up and format to 2 decimal places
        },
    },
};
</script>

<style scoped>
.checkout-container {
    position: fixed; /* Fixed positioning to keep it always on the right */
    right: 15vh; /* Align to the right edge of the viewport */
    top: 10vh; /* Adjust top position to create space from the top */
    width: 40vh; /* Fixed width for larger screens */
    max-width: 20%; /* Responsive width for smaller screens */
    background: #f9f9f9; /* Slightly lighter background */
    padding: 20px;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
    height: auto; /* Allow height to adjust based on content */
    max-height: 80vh; /* Prevent overflow on the viewport */
    overflow-y: auto; /* Allow scrolling if content exceeds height */
    border-radius: 15px; /* Rounded edges for the entire container */
    font-family: 'Arial', sans-serif; /* Change font */
    z-index: 1000; /* Ensure it appears above other elements */
    transition: width 0.3s ease; /* Smooth transition for width changes */
}

h3 {
    font-size: 1.5rem; /* Increase header size */
    margin-bottom: 15px;
}

.cart-item {
    display: flex;
    justify-content: space-between; /* Space out item details and buttons */
    align-items: center;
    margin-bottom: 10px; /* Space between cart items */
    padding: 10px;
    background-color: #fff; /* White background for items */
    border-radius: 8px; /* Rounded corners for items */
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.item-details {
    flex: 1; /* Allow details to take available space */
    font-size: 1.1rem; /* Larger font size for item details */
}

.button-group {
    display: flex;
    gap: 5px; /* Space between buttons */
}

.action-button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 8px 12px;
    border-radius: 5px; /* Rounded buttons */
    cursor: pointer;
    font-size: 0.9rem; /* Increase font size */
    display: flex;
    align-items: center; /* Align icon and text */
}

.action-button i {
    margin-right: 5px; /* Space between icon and text */
}

.action-button:hover {
    background-color: #0056b3;
}

.button-container {
    display: flex;
    justify-content: space-between; /* Space between buttons */
    margin-top: 10px; /* Space above the button container */
}

.clear-cart-button {
    background-color: #dc3545; /* Red background for clear cart */
    color: white;
    padding: 10px;
    border-radius: 5px;
    border: none;
    font-size: 1rem; /* Increase font size */
    cursor: pointer;
}

.clear-cart-button:hover {
    background-color: #c82333;
}

.buy-everything-button {
    background-color: #28a745; /* Green background for buy everything */
    color: white;
    padding: 10px;
    border-radius: 5px;
    border: none;
    font-size: 1rem; /* Increase font size */
    cursor: pointer;
}

.buy-everything-button:hover {
    background-color: #218838;
}

/* Responsive Design Styles */
@media (max-width: 768px) {
    .checkout-container {
        right: 2vh; /* Adjust position for smaller screens */
        top: 10vh; /* Keep a margin from the top */
        width: 80vh; /* Increase width for smaller devices */
    }

    h3 {
        font-size: 1.3rem; /* Adjust header size */
    }

    .cart-item {
        flex-direction: column; /* Stack item details and buttons vertically */
        align-items: flex-start; /* Align items to the start */
    }

    .item-details {
        margin-bottom: 5px; /* Space between item details and buttons */
        font-size: 1rem; /* Smaller font size for item details */
    }

    .button-group {
        width: 100%; /* Full width for button group */
        justify-content: space-between; /* Space out buttons */
    }
}

@media (max-width: 480px) {
    .checkout-container {
        padding: 15px; /* Reduce padding for smaller screens */
        top: 5vh; /* Increase space from the top */
    }

    .action-button, .clear-cart-button, .buy-everything-button {
        width: 100%; /* Make buttons full width */
        font-size: 0.9rem; /* Adjust font size */
    }
}
</style>
