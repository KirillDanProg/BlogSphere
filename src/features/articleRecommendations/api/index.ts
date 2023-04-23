import { rtkApi } from 'shared/rtkApi'
import { type ArticleType } from 'entities/Arcticle'

// Define a service using a base URL and expected endpoints
const articleRecommendationsApi = rtkApi.injectEndpoints({
    endpoints: (builder) => ({
        fetchArticleRecommendations: builder.query<ArticleType[], number>({
            query: (limit) => ({
                url: '/posts',
                params: {
                    limit
                }
            })
        })
    })
})

export const { useFetchArticleRecommendationsQuery } = articleRecommendationsApi
