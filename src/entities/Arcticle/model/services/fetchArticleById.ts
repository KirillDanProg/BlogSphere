import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema'
import { type ArticleType } from '../types/article'

export const fetchArticleByIdThunk = createAsyncThunk<ArticleType, string, ThunkConfig<string>>(
    'articleDetails/fetchArticle',
    async (articleId, thunkAPI) => {
        const {
            extra,
            rejectWithValue
        } = thunkAPI
        try {
            const response = await extra.api.get<ArticleType>(`/posts/${articleId}`)
            if (!response.data) {
                return rejectWithValue('Не удалось загрузить статью')
            }
            return response.data
        } catch (e) {
            return rejectWithValue('Что-то пошло не так')
        }
    }
)
