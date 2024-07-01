import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
  const response = await fetch("https://dummyjson.com/products?limit=0");
  let data = response.json();
  return data;
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
    selectedProductID: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.isError = true;
    });
  },
  reducers: {
    setProductID(state, action) {
      state.selectedProductID = action.payload;
    },
  },
});

export const { setProductID } = productSlice.actions;
export default productSlice.reducer;
