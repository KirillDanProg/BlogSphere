import { type StatusType } from 'app/types/global'
import { type CommentType } from 'entities/Comment'
import { type EntityState } from '@reduxjs/toolkit'

export interface ArticleDetailsCommentSchema extends EntityState<CommentType> {
    status: StatusType
    error?: string | null
}
