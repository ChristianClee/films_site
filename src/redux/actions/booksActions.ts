import { createAsyncThunk } from "@reduxjs/toolkit";


const fetchActions = {
  BOOK_FETCHBOOKS: "book/fetchBooksStatus",
};

export const fetchBooks = createAsyncThunk(
  fetchActions.BOOK_FETCHBOOKS,
  async (isAdmin: string) => {
  // const response = await 
});


