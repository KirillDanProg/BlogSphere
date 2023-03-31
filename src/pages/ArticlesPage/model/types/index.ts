import { type StatusType } from 'app/types/global'
import { type ArticleType, type ArticleView } from 'entities/Arcticle'
import { type EntityState } from '@reduxjs/toolkit'

export interface ArticlesPageSchema extends EntityState<ArticleType> {
    error?: string | null
    status?: StatusType
    view: ArticleView
}
