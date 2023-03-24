import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type ArticleSchema } from '../types/articleSchema'
import { type ArticleType } from '../types/article'
import { fetchArticleByIdThunk } from '../services/fetchArticleById'

const initialState: ArticleSchema = {
    data: null,
    error: null,
    status: 'idle'
}
const articleDetailsSlice = createSlice({
    name: 'articleDetails',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleByIdThunk.pending, (state) => {
                state.error = null
                state.status = 'loading'
            })
            .addCase(fetchArticleByIdThunk.fulfilled, (
                state,
                action: PayloadAction<ArticleType>
            ) => {
                state.status = 'succeeded'
                state.data = action.payload
            })
            .addCase(fetchArticleByIdThunk.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload
            })
    }
})

export const { actions: articlesDetailsActions } = articleDetailsSlice
export const { reducer: articleDetailsReducer } = articleDetailsSlice
