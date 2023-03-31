import { type StateSchema } from 'app/providers/StoreProvider'
import { ArticleView } from 'entities/Arcticle'

export const getArticlesPageError = (state: StateSchema) => state.articlesPage?.error ?? null
export const getArticlesPageStatus = (state: StateSchema) => state.articlesPage?.status ?? 'idle'
export const getArticlesPageViewMode = (state: StateSchema) => state.articlesPage?.view ?? ArticleView.GRID
