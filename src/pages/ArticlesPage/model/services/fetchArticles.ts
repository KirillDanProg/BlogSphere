import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ArticleType } from 'entities/Arcticle'
import { type ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema'

export const fetchArticles = createAsyncThunk<ArticleType[], undefined, ThunkConfig<string>>(
    'articles/fetchArticles',
    async (_, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.get<ArticleType[]>('/posts')
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('Не удалось загрузить статьи')
        }
    }
)
