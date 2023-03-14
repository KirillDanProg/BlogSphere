import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ProfileType, ValidateProfileErrors } from '../../types/profile'
import { profileActions } from '../../slice/profileSlice'
import { type ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema'
import { validateUserProfile } from '../../services/validateUserProfile/validateUserProfile'

export const updateUserProfile = createAsyncThunk<ProfileType, undefined, ThunkConfig<ValidateProfileErrors[]>>(
    'profile/updateProfile',
    async (_, thunkAPI) => {
        try {
            const userId = thunkAPI.getState().user.authData?._id
            const updatedProfileData = thunkAPI.getState().profile?.form

            if (userId && updatedProfileData) {
                const validationsErrors = validateUserProfile(updatedProfileData)
                if (validationsErrors.length) {
                    return thunkAPI.rejectWithValue(validationsErrors)
                }

                const response = await thunkAPI.extra.api.put<ProfileType>(`/profile/${userId}`, updatedProfileData)
                thunkAPI.dispatch(profileActions.setReadonly(true))
                return response.data
            }

            return thunkAPI.rejectWithValue([ValidateProfileErrors.NO_DATA])
        } catch (e) {
            return thunkAPI.rejectWithValue([ValidateProfileErrors.SERVER_ERROR])
        }
    })
