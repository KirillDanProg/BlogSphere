import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ProfileType } from 'entities/Profile'
import { type ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema'

export const fetchUserProfile = createAsyncThunk<ProfileType, string, ThunkConfig<string>>(
    'profile/fetchProfile',
    async (_, thunkAPI) => {
        try {
            const userId = thunkAPI.getState().user.authData?._id
            if (userId) {
                const response = await thunkAPI.extra.api.get<ProfileType>(`/profile/${userId}`)
                return response.data
            }
            return thunkAPI.rejectWithValue('Что-то пошло не так')
        } catch (e) {
            return thunkAPI.rejectWithValue('Что-то пошло не так')
        }
    })