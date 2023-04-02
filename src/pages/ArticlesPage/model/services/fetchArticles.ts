import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ArticleType } from 'entities/Arcticle'
import { type ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema'
import { articlesPageActions } from 'pages/ArticlesPage/model/slice/articlesPageSlice'
import { getArticlesPageLimit } from 'pages/ArticlesPage/model/selectors'

interface ParamsType {
    page?: number
    limit?: number
}

export const fetchArticles = createAsyncThunk<ArticleType[], ParamsType, ThunkConfig<string>>(
    'articles/fetchArticles',
    async (params, thunkAPI) => {
        const {
            page = 1
        } = params
        try {
            const limit = getArticlesPageLimit(thunkAPI.getState())
            thunkAPI.dispatch(articlesPageActions.setArticlesLimit())
            const response = await thunkAPI.extra.api.get<ArticleType[]>('/posts', {
                params: {
                    page,
                    limit
                }
            })
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('Не удалось загрузить статьи')
        }
    }
)
