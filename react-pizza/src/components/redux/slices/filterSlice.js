import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  searchValue: "",
  categoryId: 0,
  currentPage: 1,
  sort: {
    name: "популярности",
    propertyObjName: "rating",
    orderProperty: "desc",
    index: 0,
  },
};
//
const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCaterId(state, action) {
      state.categoryId = action.payload;
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    setSortType(state, action) {
      state.sort = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setFilters(state, action) {
      state.currentPage = Number(action.payload.currentPage);
      state.sort = action.payload.sort;
      state.categoryId = Number(action.payload.categoryId);
    },
  },
});
export const {
  setFilters,
  setCurrentPage,
  setCaterId,
  setSortType,
  setSearchValue,
} = filterSlice.actions;
export const selectroSort = (state) => state.filter.sort;
export const selectCategoryId = (state) => state.filter.categoryId;
export const selectorSortType = (state) => state.filter.sort;
export const selectorPizzas = (state) => state.pizzas;
export const selectorCurrentPage = (state) => state.filter.currentPage;
export const selectorSearchValue = (state) => state.filter.searchValue;
export default filterSlice.reducer;
