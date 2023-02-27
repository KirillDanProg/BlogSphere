import { createAsyncThunk } from '@reduxjs/toolkit'
import { type IUser } from 'entities/User'
import axios from 'axios'
import { type IServerResponseUser } from 'entities/User/model/types/user'

interface RegisterData {
    userName: string
    email: string
    password: string
}

export const authRegisterThunk = createAsyncThunk<IUser, RegisterData, { rejectValue: string }>(
    'auth/register',
    async ({
        email,
        password,
        userName
    }, thunkAPI) => {
        try {
            const response = await axios.post<IServerResponseUser>(
                'http://localhost:4444/auth/register', {
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
