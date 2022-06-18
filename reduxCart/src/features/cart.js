

  import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import * as api from '../api';

export const FETCH_USER_CART = createAsyncThunk(
    'cart/fetchUserCart',
    async (params) => {
        try {
            const { data } = await api.fetchCartOfUser(params);
            return data ;
        } catch(error) {
            console.log(error.message);
        }
    }
  )

export const cartSlice = createSlice ({
    name : "cart",
    initialState: { cartItems: [] , ItemCount: 0 },
    reducers: {
      // standard reducer logic, with auto-generated action types per reducer
    },
    extraReducers: (builder) => {
      // Add reducers for additional action types here, and handle loading state as needed
      builder.addCase(FETCH_USER_CART.fulfilled, (state, action) => {
        // Add user to the state array
        const stateUpdated = {cartItems : action.payload.carts , ItemCount:  action.payload.total};
        return stateUpdated;
      })
    },
  })

  export default cartSlice.reducer;
