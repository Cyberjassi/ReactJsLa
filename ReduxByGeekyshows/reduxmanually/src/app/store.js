import {configureStore } from '@reduxjs/toolkit'

// import the counterslice
import counterReducer from '../features/counter/counterSlice'
import themeReducer from '../features/theme/themeSlice'
// for make our Store for storing our data
export const store = configureStore({
    reducer:{
        // state in store 
        counter:counterReducer,
        theme:themeReducer,
    },
})