import { createAsyncThunk } from '@reduxjs/toolkit'
import { init } from '../saveViewModeToLS/saveViewModeToLS'
import { fetchArticles } from '../fetchArticles/fetchArticles'
import { getArticlesPageNum, getInitialized } from 'pages/ArticlesPage/model/selectors'
import { type ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema'

export const initArticlesPage = createAsyncThunk<void, void, ThunkConfig<undefined>>(
    'articles/initArticlesPage',
    (_, thunkAPI) => {
        const {
            dispatch,
            getState
        } = thunkAPI
        const page = getArticlesPageNum(getState())
        const initialized = getInitialized(getState())
        if (!initialized) {
            void dispatch(init())
            void dispatch(fetchArticles({
                page
            }))
        }
    }
)
