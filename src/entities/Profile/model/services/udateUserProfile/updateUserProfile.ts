import { createAsyncThunk } from '@reduxjs/toolkit'
import { profileActions, type ProfileType } from 'entities/Profile'
import { type ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema'

export const updateUserProfile = createAsyncThunk<ProfileType, undefined, ThunkConfig<string>>(
    'profile/updateProfile',
    async (_, thunkAPI) => {
        try {
            const userId = thunkAPI.getState().user.authData?._id

            if (userId) {
                const updatedProfileData = thunkAPI.getState().profile?.form
                const response = await thunkAPI.extra.api.put<ProfileType>(`/profile/${userId}`, updatedProfileData)
                thunkAPI.dispatch(profileActions.setReadonly(true))
                return response.data
            }

            return thunkAPI.rejectWithValue('Что-то пошло не так')
        } catch (e) {
            return thunkAPI.rejectWithValue('Что-то пошло не так')
        }
    })
