import { createSlice } from "@reduxjs/toolkit";

interface Book {
  id: string;
  title: string;
  author: string;
  image: any;
  discountedPrice: number;
  originPrice: number;
  quantity: number;
}

interface CartState {
  cart: Book[];
}

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const bookIndex = state.cart.findIndex((item) => item.id === action.payload.id);
      if (bookIndex !== -1) {
        state.cart[bookIndex].quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    increaseQuantity: (state, action) => {
      const book = state.cart.find((item) => item.id === action.payload);
      if (book) book.quantity += 1;
    },
    decreaseQuantity: (state, action) => {
      const book = state.cart.find((item) => item.id === action.payload);
      if (book && book.quantity > 1) {
        book.quantity -= 1;
      } else {
        state.cart = state.cart.filter((item) => item.id !== action.payload);
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;





