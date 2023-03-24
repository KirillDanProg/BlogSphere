import { createAsyncThunk } from '@reduxjs/toolkit'
import { type IUser } from 'entities/User'
import { type IServerResponseUser } from 'entities/User/model/types/user'
import { type ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema'

interface RegisterData {
    userName: string
    email: string
    password: string
}

export const authRegisterThunk = createAsyncThunk<IUser, RegisterData, ThunkConfig<string>>(
    'auth/register',
    async ({
        email,
        password,
        userName
    }, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.post<IServerResponseUser>(
                'auth/register', {
                    userName,
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

            return authUserData
        } catch (e) {
            return thunkAPI.rejectWithValue('error')
        }
    }
)
