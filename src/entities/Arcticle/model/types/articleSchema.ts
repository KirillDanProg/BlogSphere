import { type ArticleType } from './article'
import { type StatusType } from 'app/types/global'

export interface ArticleSchema {
    data: ArticleType | null
    status?: StatusType
    error?: string | null
}
