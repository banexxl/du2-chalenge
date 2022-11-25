import { createSlice, configureStore } from '@reduxjs/toolkit'

export interface CartRootState {
          cartCounter: number
}

export interface WishListRootState {
          whishList: number
}



const cartSlice = createSlice({
          name: "cartCounterSLice",
          initialState: {
                    cartCounter: 0,
          } as CartRootState,
          reducers: {
                    increment(state) {
                              state.cartCounter++
                    },
                    decrement(state) {
                              state.cartCounter--
                    }
          }
})

const wishListSlice = createSlice({
          name: "wishListSlice",
          initialState: {
                    whishList: 0
          } as WishListRootState,
          reducers: {
                    increment(state) {
                              state.whishList++
                    },
                    decrement(state) {
                              state.whishList--
                    },
          }
})


const store = configureStore({
          reducer: {
                    cartReducer: cartSlice.reducer,
                    wishListReducer: wishListSlice.reducer
          }
})

export const cartCounterActions = cartSlice.actions
export const wishListCounterActions = wishListSlice.actions

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const selectCount = (state: CartRootState) => state.cartCounter
