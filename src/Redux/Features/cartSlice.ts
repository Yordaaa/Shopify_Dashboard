import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem, productResTyp } from './types';

const initialState: CartItem[] = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')!) : [];

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<productResTyp>) => {
            const product = action.payload;
            const existingItem = state.find((i) => i._id === product._id);
            if (existingItem) {
                existingItem.quantity!++;
            } else {
                state.push({
                    ...product,
                    quantity: 1,
                    price: undefined
                });
            }
            localStorage.setItem('cart', JSON.stringify(state));
        },
        
        removeFromCart: (state, action: PayloadAction<{ _id: string }>) => {
            const itemToRemove = action.payload;
            const updatedState = state.filter((item) => item._id !== itemToRemove._id);
            localStorage.setItem('cart', JSON.stringify(updatedState));
            return updatedState;
        },
        
        clearCart: () => {
            localStorage.removeItem('cart');
            return [];
        }
    }
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
