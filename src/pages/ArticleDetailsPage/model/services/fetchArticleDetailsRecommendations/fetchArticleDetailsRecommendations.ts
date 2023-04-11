import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ArticleType } from 'entities/Arcticle'
import { type ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema'

export const fetchArticleDetailsRecommendations = createAsyncThunk<ArticleType[], void, ThunkConfig<string>>(
    'articleDetails/fetchArticleRecommendations',
    async (_, thunkAPI) => {
        const {
            extra,
            rejectWithValue
        } = thunkAPI

        const sort = 'viewCount'
        const order = 'desc'
        const limit = 4
        const page = 1

        try {
            const response = await extra.api.get<ArticleType[]>('/posts', {
                params: {
                    page,
                    limit,
                    sort,
                    order
                }
            })
            return response.data
        } catch (e) {
            return rejectWithValue('Не удалось загрузить статьи')
        }
    }
)
