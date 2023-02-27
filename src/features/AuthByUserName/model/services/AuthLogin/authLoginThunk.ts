import { createAsyncThunk } from '@reduxjs/toolkit'
import { type LoginSchema } from '../../types/loginSchema'
import axios from 'axios'
import { type IUser, userActions } from 'entities/User'
import { type IServerResponseUser } from 'entities/User/model/types/user'

type AuthLoginData = Pick<LoginSchema, 'email' | 'password'>

export const authLoginThunk = createAsyncThunk<IUser, AuthLoginData, { rejectValue: string }>(
    'auth/login',
    async ({
        email,
        password
    }, thunkAPI) => {
        try {
            const response = await axios.post<IServerResponseUser>('http://localhost:4444/auth/login', {
                email,
                password
            })
            if (!response.data) {
                throw new Error()
            }
            const {
                updatedAt,
                createdAt,
                __v,
                ...authUserData
            } = response.data

            thunkAPI.dispatch(userActions.setAuthUserData(authUserData))
            localStorage.setItem('userData', JSON.stringify(authUserData))
            return authUserData
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data.message)
        }
    }
)
