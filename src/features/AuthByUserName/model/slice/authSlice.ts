import { createSlice } from '@reduxjs/toolkit'
import { type LoginSchema } from '../types/loginSchema'
import { authRegisterThunk } from '../services/AuthRegister/authRegisterThunk'
import { authLoginThunk } from 'features/AuthByUserName/model/services/AuthLogin/authLoginThunk'

const initialState: LoginSchema = {
    email: '',
    password: '',
    status: 'idle',
    error: ''
}

export const authSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(authRegisterThunk.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(authRegisterThunk.fulfilled, (state) => {
                state.status = 'succeeded'
            })
            .addCase(authRegisterThunk.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload
            })
            .addCase(authLoginThunk.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(authLoginThunk.fulfilled, (state) => {
                state.status = 'succeeded'
            })
            .addCase(authLoginThunk.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload
            })
    }
})

export const { reducer: authReducer } = authSlice
export const { actions: authActions } = authSlice
