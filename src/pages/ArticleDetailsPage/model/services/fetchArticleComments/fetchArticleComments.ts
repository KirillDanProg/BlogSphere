import { createAsyncThunk } from '@reduxjs/toolkit'
import { type CommentType } from 'entities/Comment'
import { type ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema'

export const fetchArticleComments = createAsyncThunk<CommentType[], string | undefined, ThunkConfig<string>>(
    'articleDetails/fetchComments',
    async (articleId, thunkAPI) => {
        try {
            if (articleId) {
                const response = await thunkAPI.extra.api.get<CommentType[]>(`posts/${articleId}/comments`)
                return response.data
            } else {
                return thunkAPI.rejectWithValue('Не удалось загрузить комментарии')
            }
        } catch (e) {
            return thunkAPI.rejectWithValue('Не удалось загрузить комментарии')
        }
    }
)
