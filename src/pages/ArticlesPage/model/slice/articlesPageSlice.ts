import { createEntityAdapter, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type ArticleType, ArticleView } from 'entities/Arcticle'
import { type ArticlesPageSchema } from '../../model/types'
import { type StateSchema } from 'app/providers/StoreProvider'
import { fetchArticles } from '../services/fetchArticles'

const articlesAdapter = createEntityAdapter<ArticleType>({
    selectId: (article) => article._id
})

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articlesPage || articlesAdapter.getInitialState()
)
export const articlesPageSlice = createSlice(
    {
        name: 'articlesPage',
        initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
            error: null,
            status: 'idle',
            view: ArticleView.GRID,
            ids: [],
            entities: {}
        }),
        reducers: {
            setArticleViewMode: (state, action: PayloadAction<ArticleView>) => {
                state.view = action.payload
            }
        },
        extraReducers: builder =>
            builder
                .addCase(fetchArticles.fulfilled, (state, action) => {
                    articlesAdapter.setAll(state, action.payload)
                    state.status = 'succeeded'
                })
                .addCase(fetchArticles.rejected, (state, action) => {
                    state.error = action.payload
                    state.status = 'loading'
                })
                .addCase(fetchArticles.pending, (state) => {
                    state.status = 'failed'
                })
    }
)

export const { reducer: articlesPageReducer } = articlesPageSlice
export const { actions: articlesPageActions } = articlesPageSlice
