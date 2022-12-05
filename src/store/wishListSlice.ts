import { createSlice } from "@reduxjs/toolkit";

const initialState: any = [];

const wishListSlice = createSlice({
          name: "wishList",
          initialState,
          reducers: {
                    addToWishList(state, { payload }) {
                              state.push({
                                        ...payload,
                                        quantity: 1
                              });
                    },
                    removeFromWishList(state, { payload }) {
                              state.pop({
                                        ...payload,
                              });
                    },
                    clear(state) {
                              return [];
                    }
          }
});

export const { addToWishList, removeFromWishList, clear } = wishListSlice.actions
const wishListSliceReducer = wishListSlice.reducer

export default wishListSliceReducer