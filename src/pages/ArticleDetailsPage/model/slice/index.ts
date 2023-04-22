import { combineReducers } from '@reduxjs/toolkit'
import { type ArticleDetailsPageSchema } from '../types'
import { articleDetailsCommentsReducer } from '../slice/articleDetailsCommentsSlice'
import { articleDetailsRecommendationsReducer } from '../slice/articleDetailsRecommendationsSlice'

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
    comments: articleDetailsCommentsReducer,
    recommendations: articleDetailsRecommendationsReducer
})
