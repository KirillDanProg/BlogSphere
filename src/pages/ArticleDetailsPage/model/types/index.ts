import {
    type ArticleDetailsRecommendationsSchema
} from '../types/articleDetailsRecommendationsSchema'

import { type ArticleDetailsCommentSchema } from '../types/articleDetailsCommentSchema'

export interface ArticleDetailsPageSchema {
    comments: ArticleDetailsCommentSchema
    recommendations: ArticleDetailsRecommendationsSchema
}
