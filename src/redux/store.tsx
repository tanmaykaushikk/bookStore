import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "./slice/wishlistSlice";
import cartReducer from "./slice/cartSlice"

export const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
