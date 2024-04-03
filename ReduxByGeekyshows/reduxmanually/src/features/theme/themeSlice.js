import { createSlice } from '@reduxjs/toolkit'

const initialStateValue = { color: "", }

const themeSlice = createSlice({
  name: 'Theme',
  initialState:initialStateValue,
  reducers: {
    
    changeTextColor(state, action) {
      state.color = action.payload
    },
  },
})

export const { changeTextColor } = themeSlice.actions
export default themeSlice.reducer