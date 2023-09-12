import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPizzas = createAsyncThunk(
  "pizza/fetchPizzasStatus",
  async ({ currentPage, categoriesId, sortType, searchsValue }) => {
    const { data } = await axios.get(
      "https://64c4f551c853c26efada564f.mockapi.io/items?" +
        `${categoriesId === 0 ? "" : `category=${categoriesId}`}` +
        `&page=${currentPage}&limit=4` +
        `&sortBy=${sortType.propertyObjName}&order=${sortType.orderProperty}` +
        searchsValue,
    );
    return data;
  },
);

const initialState = {
  items: [],
  status:'loading', //loading | success | error
};
const pizzasSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchPizzas.pending]: (state) => {
      console.log("sending request");
      state.status = 'loading'
      state.items = [];
    },
    [fetchPizzas.fulfilled]: (state, action) => {
      console.log("ok", state);
      state.items = action.payload
      state.status = 'success'
    },
    [fetchPizzas.rejected]: (state) => {
      state.status = 'error'
      state.items = [];
    },
  },
});
export const { setItems } = pizzasSlice.actions;

export default pizzasSlice.reducer;
