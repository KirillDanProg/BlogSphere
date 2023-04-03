import { createEntityAdapter, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type ArticleType, ArticleView } from 'entities/Arcticle'
import { type ArticlesPageSchema } from '../../model/types'
import { type StateSchema } from 'app/providers/StoreProvider'
import { fetchArticles } from '../services/fetchArticles/fetchArticles'

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
            page: 1,
            hasMore: true,
            ids: [],
            entities: {}
        }),
        reducers: {
            setArticleViewMode: (state, action: PayloadAction<ArticleView>) => {
                state.view = action.payload
            },
            setArticlesPageNum: (state, action: PayloadAction<number>) => {
                state.page = action.payload
            },
            setArticlesLimit: (state, action: PayloadAction<number | undefined>) => {
                if (action.payload) {
                    state.limit = action.payload
                } else {
                    state.limit = state.view === ArticleView.LIST ? 3 : 5
                }
            }
        },
        extraReducers: builder =>
            builder
                .addCase(fetchArticles.fulfilled, (state, action) => {
                    articlesAdapter.addMany(state, action.payload)
                    state.hasMore = action.payload.length > 0
                    state.status = 'succeeded'
                })
                .addCase(fetchArticles.rejected, (state, action) => {
                    state.error = action.payload
                    state.status = 'failed'
                })
                .addCase(fetchArticles.pending, (state) => {
                    state.status = 'loading'
                })
    }
)

export const { reducer: articlesPageReducer } = articlesPageSlice
export const { actions: articlesPageActions } = articlesPageSlice
