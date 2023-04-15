import { createAsyncThunk } from '@reduxjs/toolkit'
import { profileActions } from '../../slice/profileSlice'
import { type ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema'

export const uploadAvatarProfile = createAsyncThunk<undefined, string | Blob, ThunkConfig<string>>(
    'profile/uploadAvatar',
    async (image, thunkAPI) => {
        try {
            const formData = new FormData()
            formData.append('image', image)
            const response = await thunkAPI.extra.api.post('/upload', formData)
            thunkAPI.dispatch(profileActions.updateProfileForm({ avatar: response.data.url }))
        } catch (e) {
            return thunkAPI.rejectWithValue('Что-то пошло не так')
        }
    })
