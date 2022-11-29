import { createSlice } from "@reduxjs/toolkit";

const initialState: any = [];

const cartSlice = createSlice({
          name: "cart",
          initialState,
          reducers: {
                    addToCart(state, { payload }) {
                              const { id } = payload;

                              const find = state.find((item: any) => item.id === id);
                              //provera da li item postoji u korpi
                              if (find) {
                                        return state.map((item: any) =>
                                                  item.id === id
                                                            ? {
                                                                      ...item,
                                                                      quantity: item.quantity + 1
                                                            }
                                                            : item
                                        );
                              } else {
                                        state.push({
                                                  ...payload,
                                                  quantity: 1
                                        });
                              }
                    },
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
                    removeAllSingleItems(state, { payload }) {
                              return state.map((item: any) =>
                                        item.id === payload
                                                  ? {
                                                            ...item.clear,
                                                            quantity: item.quantity - item.quantity,
                                                  }
                                                  : item
                              );
                    },
                    clear(state) {
                              return [];
                    }
          }
});

export const { addToCart, increment, decrement, clear, removeAllSingleItems } = cartSlice.actions
const cartSliceReducer = cartSlice.reducer

export default cartSliceReducer
