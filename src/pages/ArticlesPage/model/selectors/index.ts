import { type StateSchema } from 'app/providers/StoreProvider'
import { ArticleSortField } from 'entities/Arcticle'

export const getArticlesPageError = (state: StateSchema) => state.articlesPage?.error ?? null
export const getArticlesPageStatus = (state: StateSchema) => state.articlesPage?.status
export const getArticlesPageViewMode = (state: StateSchema) => state.articlesPage?.view
export const getArticlesPageLimit = (state: StateSchema) => state.articlesPage?.limit
export const getArticlesPageHasMore = (state: StateSchema) => state.articlesPage?.hasMore
export const getArticlesPageNum = (state: StateSchema) => state.articlesPage?.page ?? 1
export const getInitialized = (state: StateSchema) => state.articlesPage?.initialized
export const getSort = (state: StateSchema) => state.articlesPage?.sortBy ?? ArticleSortField.VIEWS
export const getOrder = (state: StateSchema) => state.articlesPage?.order ?? 'asc'
export const getSearch = (state: StateSchema) => state.articlesPage?.search ?? ''
