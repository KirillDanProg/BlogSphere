import { type StateSchema } from 'app/providers/StoreProvider'

export const getArticleDetailsData = (state: StateSchema) => state.articleDetails?.data ?? null
export const getArticleDetailsError = (state: StateSchema) => state.articleDetails?.error ?? null
export const getArticleDetailsStatus = (state: StateSchema) => state.articleDetails?.status
