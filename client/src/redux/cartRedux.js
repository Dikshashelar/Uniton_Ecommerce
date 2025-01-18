import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const existingProduct = state.products.find(
        (product) => product._id === action.payload._id
      );

      if (existingProduct) {
        // If the product is already in the cart, update quantity
        existingProduct.quantity += action.payload.quantity;
        state.total += action.payload.price * action.payload.quantity;
      } else {
        // If the product is not in the cart, add it
        state.products.push(action.payload);
        state.quantity += 1;
        state.total += action.payload.price * action.payload.quantity;
      }

      // Save to localStorage (this will automatically be persisted)
      localStorage.setItem("cart", JSON.stringify(state));
    },

    removeProduct: (state, action) => {
      const productId = action.payload;
      const productIndex = state.products.findIndex(
        (product) => product._id === productId
      );

      if (productIndex !== -1) {
        const product = state.products[productIndex];
        state.products.splice(productIndex, 1);
        state.quantity -= 1;
        state.total -= product.price * product.quantity;

        // Save to localStorage
        localStorage.setItem("cart", JSON.stringify(state));
      }
    },

    clearCart: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;

      // Clear cart from localStorage
      localStorage.removeItem("cart");
    },
  },
});

export const { addProduct, removeProduct, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
