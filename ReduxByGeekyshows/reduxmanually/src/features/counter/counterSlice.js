import { createSlice } from '@reduxjs/toolkit'

const initialStateValue = { count: 0 }

const counterSlice = createSlice({
  name: 'counter',
  initialState:initialStateValue,
  reducers: {
    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--
    },
    incrementByAmount(state, action) {
      state.count += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer