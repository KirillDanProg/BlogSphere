import { createEntityAdapter, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type ArticleType, ArticleView } from 'entities/Arcticle'
import { type ArticlesPageSchema } from '../../model/types'
import { type StateSchema } from 'app/providers/StoreProvider'
import { fetchArticles } from '../services/fetchArticles/fetchArticles'
import { ArticleSortField } from 'entities/Arcticle/model/types/article'
import { type SortOrderType } from 'shared/types/articlesFilter'

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
            entities: {},
            initialized: false,
            order: 'asc',
            search: '',
            sortBy: ArticleSortField.VIEWS,
            limit: 9
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
            },
            setInitialized: (state) => {
                state.initialized = true
            },
            setOrder: (state, action: PayloadAction<SortOrderType>) => {
                state.order = action.payload
            },
            setSearch: (state, action: PayloadAction<string>) => {
                state.search = action.payload
            },
            setSortBy: (state, action: PayloadAction<ArticleSortField>) => {
                state.sortBy = action.payload
            }
        },
        extraReducers: builder =>
            builder
                .addCase(fetchArticles.fulfilled, (state, action) => {
                    if (action.meta.arg.replace) {
                        articlesAdapter.setAll(state, action.payload)
                    } else {
                        articlesAdapter.addMany(state, action.payload)
                    }
                    state.hasMore = action.payload.length >= state.limit
                    state.status = 'succeeded'
                })
                .addCase(fetchArticles.rejected, (state, action) => {
                    state.error = action.payload
                    state.status = 'failed'
                })
                .addCase(fetchArticles.pending, (state, action) => {
                    if (action.meta.arg.replace) {
                        articlesAdapter.removeAll(state)
                    }
                    state.status = 'loading'
                })
    }
)

export const { reducer: articlesPageReducer } = articlesPageSlice
export const { actions: articlesPageActions } = articlesPageSlice
