import { type ArticleDetailsRecommendationsSchema } from './articleDetailsRecommendationsSchema'

import { type ArticleDetailsCommentSchema } from './articleDetailsCommentSchema'

export interface ArticleDetailsPageSchema {
    comments: ArticleDetailsCommentSchema
    recommendations: ArticleDetailsRecommendationsSchema
}
