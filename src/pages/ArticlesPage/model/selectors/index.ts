import { type StateSchema } from 'app/providers/StoreProvider'

export const getArticlesPageError = (state: StateSchema) => state.articlesPage?.error ?? null
export const getArticlesPageStatus = (state: StateSchema) => state.articlesPage?.status
export const getArticlesPageViewMode = (state: StateSchema) => state.articlesPage?.view
export const getArticlesPageLimit = (state: StateSchema) => state.articlesPage?.limit
export const getArticlesPageHasMore = (state: StateSchema) => state.articlesPage?.hasMore
export const getArticlesPageNum = (state: StateSchema) => state.articlesPage?.page ?? 1
