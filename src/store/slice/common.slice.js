import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  router: {},
}

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setRouter: (state, action) => {
      state.router = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setRouter } = commonSlice.actions

export default commonSlice.reducer