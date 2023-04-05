import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type AddNewCommentSchema } from '../types/addNewComment'

const initialState: AddNewCommentSchema = {
    text: '',
    error: null
}
export const addNewCommentSlice = createSlice({
    name: 'addNewComment',
    initialState,
    reducers: {
        setCommentText: (state, action: PayloadAction<string>) => {
            state.text = action.payload
        }
    }
})

export const { reducer: addNewCommentReducer } = addNewCommentSlice
export const { actions: addNewCommentActions } = addNewCommentSlice
