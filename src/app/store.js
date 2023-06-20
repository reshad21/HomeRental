import { configureStore } from '@reduxjs/toolkit'
import authSlice from '../features/auth/authSlice'
import serviceSlice from '../features/service/serviceSlice'

export const store = configureStore({
    reducer: {
        auth: authSlice,
        service: serviceSlice,
    },
})