import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "./slice/wishlistSlice";
import cartReducer from "./slice/cartSlice"
import searchReducer from "./slice/searchSlice"

export const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
    cart: cartReducer,
    search: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
