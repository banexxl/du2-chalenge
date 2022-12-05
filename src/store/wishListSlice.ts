import { createSlice } from "@reduxjs/toolkit";

const initialState: any = [];

const wishListSlice = createSlice({
          name: "wishList",
          initialState,
          reducers: {
                    increment(state, { payload }) {
                              return state.map((item: any) =>
                                        item.id === payload
                                                  ? {
                                                            ...item,
                                                            quantity: item.quantity + 1
                                                  }
                                                  : item
                              );
                    },
                    decrement(state, { payload }) {
                              return state.map((item: any) =>
                                        item.id === payload
                                                  ? {
                                                            ...item,
                                                            quantity: item.quantity - 1
                                                  }
                                                  : item
                              );
                    },
                    clear(state) {
                              return [];
                    }
          }
});

export const { increment, decrement, clear } = wishListSlice.actions
const wishListSliceReducer = wishListSlice.reducer

export default wishListSliceReducer