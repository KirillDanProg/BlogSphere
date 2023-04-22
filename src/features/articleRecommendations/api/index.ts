import { rtkApi } from 'shared/rtkApi'

// Define a service using a base URL and expected endpoints
const articleRecommendationsApi = rtkApi.injectEndpoints({
    endpoints: (builder) => ({
        fetchArticleRecommendations: builder.query({
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
