import { configureStore } from '@reduxjs/toolkit'
import ecommerceReducer from './slices/ecommerceSlice'
import userReducer from './slices/userSlice'

const store = configureStore({
   reducer: {
      ecom: ecommerceReducer,
      user: userReducer
   }
})

export default store