import { createEntityAdapter, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider'
import { type ArticleType } from 'entities/Arcticle'
import {
    fetchArticleDetailsRecommendations
} from 'pages/ArticleDetailsPage/model/services/fetchArticleDetailsRecommendations/fetchArticleDetailsRecommendations'
import {
    type ArticleDetailsRecommendationsSchema
} from 'pages/ArticleDetailsPage/model/types/articleDetailsRecommendationsSchema'

const recommendationsAdapter = createEntityAdapter<ArticleType>({
    selectId: (article) => article._id
})

export const getArticleRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsPage?.recommendations || recommendationsAdapter.getInitialState()
)

const recommendationsSlice = createSlice({
    name: 'comments',
    initialState: recommendationsAdapter.getInitialState<ArticleDetailsRecommendationsSchema>({
        ids: [],
        entities: {},
        status: 'idle',
        error: null
    }),
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchArticleDetailsRecommendations.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchArticleDetailsRecommendations.fulfilled, (state, action: PayloadAction<ArticleType[]>) => {
                state.status = 'succeeded'
                recommendationsAdapter.setAll(state, action.payload)
            })
            .addCase(fetchArticleDetailsRecommendations.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload
            })
    }
})

export const { reducer: articleDetailsRecommendationsReducer } = recommendationsSlice
export const { actions: articleDetailsRecommendationsActions } = recommendationsSlice
