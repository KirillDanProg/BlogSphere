import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { fetchUserProfile } from '../services/fetchUserProfile/fetchUserProfile'
import { updateUserProfile } from '../services/udateUserProfile/updateUserProfile'
import { type ProfileType } from 'entities/Profile'
import { type ProfileTypePartial } from 'entities/Profile/model/types/profile'
import { type ProfileSchema } from '../types/editableProfileCardSchema'
import { type ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema'

const initialState: ProfileSchema = {
    data: null,
    form: null,
    error: null,
    status: 'idle',
    readonly: true,
    validationErrors: null
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setReadonly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload
        },
        updateProfileForm: (state, action: PayloadAction<ProfileTypePartial>) => {
            state.form = {
                ...state.form,
                ...action.payload
            }
        },
        cancelEditForm: (state) => {
            state.form = state.data
            state.validationErrors = null
            state.readonly = true
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserProfile.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchUserProfile.fulfilled, (state, action: PayloadAction<ProfileType>) => {
                state.status = 'succeeded'
                state.data = action.payload
                state.form = action.payload
            })
            .addCase(fetchUserProfile.rejected, (state, action) => {
                state.status = 'failed'
                if (action.payload) {
                    state.error = action.payload
                }
            })
            .addCase(updateUserProfile.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(updateUserProfile.fulfilled, (state, action: PayloadAction<ProfileType>) => {
                state.status = 'succeeded'
                state.data = state.form
                state.validationErrors = null
                state.readonly = true
            })
            .addCase(updateUserProfile.rejected, (state, action) => {
                state.status = 'failed'
                if (action.payload) {
                    state.validationErrors = action.payload
                }
            })
            .addCase(uploadAvatarProfile.rejected, (state, action) => {
                state.status = 'failed'
                if (action.payload) {
                    state.error = action.payload
                }
            })
            .addCase(uploadAvatarProfile.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(uploadAvatarProfile.fulfilled, (state) => {
                state.status = 'succeeded'
            })
    }
})

export const { reducer: profileReducer } = profileSlice
export const { actions: profileActions } = profileSlice

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
