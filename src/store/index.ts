import { configureStore } from '@reduxjs/toolkit'
import cartSliceReducer from "./cartSlice"


const store = configureStore({
          reducer: {
                    cart: cartSliceReducer,
          },
          middleware: (getDefaultMiddleware) =>
                    getDefaultMiddleware({
                              serializableCheck: false,
                    }),

})
export default store