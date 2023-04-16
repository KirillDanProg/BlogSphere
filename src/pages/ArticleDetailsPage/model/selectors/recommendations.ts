import { type StateSchema } from 'app/providers/StoreProvider'

export const getArticlesRecommendationsStatus = (state: StateSchema) => state.articleDetailsPage?.recommendations?.status
export const getArticlesRecommendationsError = (state: StateSchema) => state.articleDetailsPage?.recommendations?.error
