import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import * as api from '../api';

// First, create the thunk
export const FETCH_ALL_PRODUCTS = createAsyncThunk(
  'products/fetchAllProducts',
  async () => {
      try {
          const { data } = await api.fetchProducts();
          return data ;
      } catch(error) {
          console.log(error.message);
      }
  }
)

export const FETCH_ON_CATEGORY = createAsyncThunk(
    'products/fetchOnCategory',
    async (params) => {
        try {
            const { data } = await api.fetchProductsOfCategory(params);
            return data ;
        } catch(error) {
            console.log(error.message);
        }
    }
  )


export const FETCH_ON_NAME = createAsyncThunk(
  'products/fetchOnName',
  async (params) => {
      try {
          const { data } = await api.fetchProductsOnName(params);
          return data ;
      } catch(error) {
          console.log(error.message);
      }
  }
)


export const FETCH_ALL_CATEGORY = createAsyncThunk(
    'products/fetchAllCategory',
    async () => {
        try {
            const { data } = await api.fetchCategory();
            return data ;
        } catch(error) {
            console.log(error.message);
        }
    }
  )

export const productSlice = createSlice ({
    name : "products",
    initialState: {products: [], category:[]},
    reducers: {
      // standard reducer logic, with auto-generated action types per reducer
    },
    extraReducers: (builder) => {
      // Add reducers for additional action types here, and handle loading state as needed
      builder.addCase(FETCH_ALL_PRODUCTS.fulfilled, (state, action) => {
        const stateUpdate = {products: action.payload.products ,category : state.category};
        return stateUpdate;
      })

      builder.addCase(FETCH_ON_CATEGORY.fulfilled, (state, action) => {        
        const stateUpdate = {products: action.payload.products , category : state.category};
        return stateUpdate;
      })
            
      builder.addCase(FETCH_ON_NAME.fulfilled, (state, action) => {        
        const stateUpdate = {products: action.payload.products , category : state.category};
        return stateUpdate;
      })
      
      builder.addCase(FETCH_ALL_CATEGORY.fulfilled, (state, action) => {        
        const stateUpdate = {products: state.products , category : action.payload};
        return stateUpdate;
      })
    },
  })

  export default productSlice.reducer;
