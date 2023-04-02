import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema'
import { articlesPageActions } from 'pages/ArticlesPage/model/slice/articlesPageSlice'
import { getArticlesPageHasMore, getArticlesPageNum, getArticlesPageStatus } from '../selectors'
import { fetchArticles } from '../services/fetchArticles'

export const fetchNextArticlesPage = createAsyncThunk<undefined, undefined, ThunkConfig<string>>(
    'articles/fetchNextArticlesPage',
    async (_, thunkAPI) => {
        try {
            const hasMore = getArticlesPageHasMore(thunkAPI.getState())
            const page = getArticlesPageNum(thunkAPI.getState())
            const status = getArticlesPageStatus(thunkAPI.getState())
            if (hasMore && status !== 'loading') {
                thunkAPI.dispatch(articlesPageActions.setArticlesPageNum(page + 1))
                void thunkAPI.dispatch(fetchArticles({
                    page: page + 1
                }))
            }
        } catch (e) {
            return thunkAPI.rejectWithValue('Не удалось загрузить статьи')
        }
    }
)
