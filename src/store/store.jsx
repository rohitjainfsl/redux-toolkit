import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../slices/CounterSlice'

const store = configureStore({
   reducer: {
      counter: counterReducer
   }
})

export default store