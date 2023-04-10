import { createAsyncThunk } from '@reduxjs/toolkit'
import { init } from '../saveViewModeToLS/saveViewModeToLS'
import { fetchArticles } from '../fetchArticles/fetchArticles'
import { getInitialized } from 'pages/ArticlesPage/model/selectors'
import { type ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema'

interface InitArticlesPageParams {
    searchParams?: URLSearchParams
}

export const initArticlesPage = createAsyncThunk<void, InitArticlesPageParams, ThunkConfig<undefined>>(
    'articles/initArticlesPage',
    (args, thunkAPI) => {
        const {
            dispatch,
            getState
        } = thunkAPI

        const initialized = getInitialized(getState())
        if (!initialized) {
            void dispatch(init())
            void dispatch(fetchArticles({ params: args.searchParams }))
        }
    }
)
