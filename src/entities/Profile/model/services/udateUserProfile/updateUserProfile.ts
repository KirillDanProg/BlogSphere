import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ProfileType } from 'entities/Profile'
import { type ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema'
import { type ProfileUpdateType } from 'entities/Profile/model/types/profile'

export const updateUserProfile = createAsyncThunk<ProfileType, ProfileUpdateType, ThunkConfig<string>>(
    'profile/updateProfile',
    async (model, thunkAPI) => {
        try {
            const profileData = thunkAPI.getState().profile?.data
            const userId = thunkAPI.getState().user.authData?._id

            if (profileData && userId) {
                const updatedProfileData = {
                    ...profileData,
                    ...model
                }
                const response = await thunkAPI.extra.api.put<ProfileType>(`/profile/${userId}`, updatedProfileData)
                return response.data
            }
            return thunkAPI.rejectWithValue('Что-то пошло не так')
        } catch (e) {
            return thunkAPI.rejectWithValue('Что-то пошло не так')
        }
    })
