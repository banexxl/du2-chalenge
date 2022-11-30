import { configureStore } from '@reduxjs/toolkit'
import cartSliceReducer from "./cartSlice"
import storage from 'redux-persist/lib/storage';

import {
          persistStore,
          persistReducer,
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
} from 'redux-persist'

const persistConfig = {
          key: 'root',
          storage,
}

const persistedReducer = persistReducer(persistConfig, cartSliceReducer)


const store = configureStore({
          reducer: {
                    cart: cartSliceReducer,
                    persistedReducer
          },
          middleware: (getDefaultMiddleware) =>
                    getDefaultMiddleware({
                              serializableCheck: false,
                              ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                    }),

})

export const persistor = persistStore(store)

export default store