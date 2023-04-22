import { createAsyncThunk } from '@reduxjs/toolkit'
import { type CommentType } from 'entities/Comment'
import { type ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema'
import { getArticleDetailsData } from 'entities/Arcticle/model/selectors/articleDetails'
import { fetchArticleComments } from '../../services/fetchArticleComments/fetchArticleComments'

export const addNewCommentForArticle = createAsyncThunk<boolean, string, ThunkConfig<string>>(
    'articleDetails/addNewComment',
    async (text, thunkAPI) => {
        try {
            const articleData = getArticleDetailsData(thunkAPI.getState())
            if (articleData) {
                await thunkAPI.extra.api.post<CommentType[]>(`posts/${articleData._id}/comments`, {
                    value: text
                })
                await thunkAPI.dispatch(fetchArticleComments(articleData._id))
                return true
            } else {
                return thunkAPI.rejectWithValue('Не удалось добавить комментарий')
            }
        } catch (e) {
            return thunkAPI.rejectWithValue('Что-то пошло не так')
        }
    }
)
