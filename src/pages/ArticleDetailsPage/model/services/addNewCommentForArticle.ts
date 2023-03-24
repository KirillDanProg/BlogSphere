import { createAsyncThunk } from '@reduxjs/toolkit'
import { type CommentType } from 'entities/Comment'
import { type ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema'
import { getArticleDetailsData } from 'entities/Arcticle/model/selectors/articleDetails'

export const addNewCommentForArticle = createAsyncThunk<CommentType[], string, ThunkConfig<string>>(
    'articleDetails/fetchComments',
    async (text, thunkAPI) => {
        try {
            const articleData = getArticleDetailsData(thunkAPI.getState())
            if (articleData) {
                const response = await thunkAPI.extra.api.post<CommentType[]>(`posts/${articleData._id}/comments`, {
                    value: text
                })
                return response.data
            } else {
                return thunkAPI.rejectWithValue('Не удалось добавить комментарий')
            }
        } catch (e) {
            return thunkAPI.rejectWithValue('Не удалось добавить комментарий')
        }
    }
)
