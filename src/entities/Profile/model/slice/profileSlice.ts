import { createSlice } from '@reduxjs/toolkit'
import { type ProfileSchema } from 'entities/Profile'

const initialState: ProfileSchema = {
    data: null,
    error: null,
    status: 'idle',
    readonly: true
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {}
})

export const { reducer: profileReducer } = profileSlice
export const { actions: profileActions } = profileSlice
