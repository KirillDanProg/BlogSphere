import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema'
import { articlesPageActions } from '../../slice/articlesPageSlice'
import { getArticlesPageHasMore, getArticlesPageNum, getArticlesPageStatus } from '../../selectors'
import { fetchArticles } from '../fetchArticles/fetchArticles'

export const fetchNextArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articles/fetchNextArticlesPage',
    async (_, thunkAPI) => {
        try {
            const hasMore = getArticlesPageHasMore(thunkAPI.getState())
            const page = getArticlesPageNum(thunkAPI.getState())
            const status = getArticlesPageStatus(thunkAPI.getState())
            if (hasMore && status !== 'loading') {
                thunkAPI.dispatch(articlesPageActions.setArticlesPageNum(page + 1))
                void thunkAPI.dispatch(fetchArticles({}))
            }
        } catch (e) {
            return thunkAPI.rejectWithValue('Не удалось загрузить статьи')
        }
    }
)
