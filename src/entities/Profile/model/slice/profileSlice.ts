import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type ProfileSchema, type ProfileType } from 'entities/Profile'
import { fetchUserProfile } from '../services/fetchUserProfile/fetchUserProfile'

const initialState: ProfileSchema = {
    data: null,
    error: null,
    status: 'idle',
    readonly: true
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserProfile.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchUserProfile.fulfilled, (state, action: PayloadAction<ProfileType>) => {
                state.status = 'succeeded'
                state.data = action.payload
            })
            .addCase(fetchUserProfile.rejected, (state, action) => {
                state.status = 'failed'
                if (action.payload) {
                    state.error = action.payload
                }
            })
    }
})

export const { reducer: profileReducer } = profileSlice
export const { actions: profileActions } = profileSlice
