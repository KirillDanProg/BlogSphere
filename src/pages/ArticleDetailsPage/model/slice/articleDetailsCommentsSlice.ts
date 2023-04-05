import { createEntityAdapter, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type CommentType } from 'entities/Comment'
import { type StateSchema } from 'app/providers/StoreProvider'
import { type ArticleDetailsCommentSchema } from '../types/ArticleDetailsCommentSchema'
import { fetchArticleComments } from '../services/fetchArticleComments/fetchArticleComments'

const commentsAdapter = createEntityAdapter<CommentType>({
    selectId: (comment) => comment._id
})

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsComments || commentsAdapter.getInitialState()
)

const commentsSlice = createSlice({
    name: 'comments',
    initialState: commentsAdapter.getInitialState<ArticleDetailsCommentSchema>({
        ids: [],
        entities: {},
        status: 'idle',
        error: null
    }),
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchArticleComments.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchArticleComments.fulfilled, (state, action: PayloadAction<CommentType[]>) => {
                state.status = 'succeeded'
                commentsAdapter.setAll(state, action.payload)
            })
            .addCase(fetchArticleComments.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload
            })
    }
})

export const { reducer: articleDetailsCommentsReducer } = commentsSlice
export const { actions: articleCommentsActions } = commentsSlice
