import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slice/couterSlice'
import commonSlice from './slice/commonSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    common: commonSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
})