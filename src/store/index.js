import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slice/couter.slice'
import commonSlice from './slice/common.slice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    common: commonSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
})