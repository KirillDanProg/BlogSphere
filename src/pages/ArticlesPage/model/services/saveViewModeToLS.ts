import { createAsyncThunk } from '@reduxjs/toolkit'
import { articlesPageActions } from 'pages/ArticlesPage/model/slice/articlesPageSlice'
import { type ArticleView } from 'entities/Arcticle'

export const LOCAL_STORAGE_ARTICLE_VIEW_MODE = 'article-view-mode'
export const saveViewModeToLS = createAsyncThunk(
    'articles/saveViewMode',
    (mode: ArticleView, thunkAPI) => {
        try {
            localStorage.setItem(LOCAL_STORAGE_ARTICLE_VIEW_MODE, JSON.stringify(mode))
            thunkAPI.dispatch(articlesPageActions.setArticleViewMode(mode))
        } catch (e) {
            return thunkAPI.rejectWithValue('Не удалось загрузить статьи')
        }
    }
)
export const getViewModeFromLS = createAsyncThunk(
    'articles/getViewMode',
    (_, thunkAPI) => {
        try {
            const mode = localStorage.getItem(LOCAL_STORAGE_ARTICLE_VIEW_MODE)
            if (mode) {
                const currentMode = JSON.parse(mode)
                thunkAPI.dispatch(articlesPageActions.setArticleViewMode(currentMode))
            }
        } catch (e) {
            return thunkAPI.rejectWithValue('Не удалось загрузить статьи')
        }
    }
)
