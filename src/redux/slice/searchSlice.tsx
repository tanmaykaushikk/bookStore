import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Book {
  id: number;
  title: string;
  author: string;
  discountedPrice: string;
  originPrice: string;
  image: any;
}

interface SearchState {
  booksData: Book[];
  query: string;
  filteredBooks: Book[];
}

const initialState: SearchState = {
  booksData: [], // This should be populated with actual data from an API or state
  query: "",
  filteredBooks: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setBooks: (state, action: PayloadAction<Book[]>) => {
      state.booksData = action.payload;
      state.filteredBooks = action.payload;
    },
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
      state.filteredBooks = state.booksData.filter(
        (book) =>
          book.title.toLowerCase().includes(action.payload.toLowerCase()) ||
          book.author.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
});

export const { setBooks, setQuery } = searchSlice.actions;
export default searchSlice.reducer;
