import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../Features/apiSlice";
import { apiSlice2 } from "../Features/apiSlice2";
import cartSlice from "../Features/cartSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [apiSlice2.reducerPath]: apiSlice2.reducer,
    cart: cartSlice,
    userInfo: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware, apiSlice2.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
