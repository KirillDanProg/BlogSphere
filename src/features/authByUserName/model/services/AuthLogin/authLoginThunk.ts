import { createAsyncThunk } from '@reduxjs/toolkit'
import { type LoginSchema } from '../../types/loginSchema'
import { type IUser, userActions } from 'entities/User'
import { type IServerResponseUser } from 'entities/User/model/types/user'
import { type ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema'
import axios from 'axios'

type AuthLoginData = Pick<LoginSchema, 'email' | 'password'>

export const authLoginThunk = createAsyncThunk<IUser, AuthLoginData, ThunkConfig<string>>(
    'auth/login',
    async ({
        email,
        password
    }, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.post<IServerResponseUser>('auth/login', {
                email,
                password
            })
            if (!response.data) {
                return thunkAPI.rejectWithValue('something went wrong')
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
            if (axios.isAxiosError(e)) {
                return thunkAPI.rejectWithValue(e.response?.data.message)
            } else {
                return thunkAPI.rejectWithValue('something went wrong')
            }
        }
    }
)
