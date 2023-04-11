import { type StatusType } from 'app/types/global'
import { type ArticleType } from 'entities/Arcticle'
import { type EntityState } from '@reduxjs/toolkit'

export interface ArticleDetailsRecommendationsSchema extends EntityState<ArticleType> {
    status: StatusType
    error?: string | null
}
