import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { productResTyp } from "./types";

const initialState: productResTyp[] = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart")!)
  : [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<productResTyp>) => {
      const product = action.payload;
      const existingItem = state.find((i) => i._id === product._id);
      if (existingItem) {
        return;
      } else {
        state.push({
          ...product,
        });
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
    removeFromCart: (state, action: PayloadAction<{ _id: string }>) => {
      const itemToRemove = action.payload;
      const updatedState = state.filter(
        (item) => item._id !== itemToRemove._id
      );
      localStorage.setItem("cart", JSON.stringify(updatedState));
      return updatedState;
    },

    clearCart: () => {
      localStorage.removeItem("cart");
      return [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
