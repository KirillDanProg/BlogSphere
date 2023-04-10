import { type StatusType } from 'app/types/global'
import { type ArticleType, type ArticleView } from 'entities/Arcticle'
import { type EntityState } from '@reduxjs/toolkit'
import { type SortOrderType } from 'shared/types/articlesFilter'
import { type ArticleSortField } from 'entities/Arcticle/model/types/article'

export interface ArticlesPageSchema extends EntityState<ArticleType> {
    error?: string | null
    status?: StatusType
    view: ArticleView
    page: number
    hasMore: boolean
    limit: number
    initialized: boolean
    // filters
    order: SortOrderType
    sortBy: ArticleSortField
    search: string
}
