import { createAsyncThunk } from '@reduxjs/toolkit'
import { articlesPageActions } from '../../slice/articlesPageSlice'
import { type ArticleView } from 'entities/Arcticle'

export const LOCAL_STORAGE_ARTICLE_VIEW_MODE = 'article-view-mode'
export const saveViewModeToLS = createAsyncThunk(
    'articles/saveViewMode',
    (mode: ArticleView, thunkAPI) => {
        try {
            localStorage.setItem(LOCAL_STORAGE_ARTICLE_VIEW_MODE, JSON.stringify(mode))
            thunkAPI.dispatch(articlesPageActions.setArticleViewMode(mode))
            thunkAPI.dispatch(articlesPageActions.setArticlesLimit())
        } catch (e) {
            return thunkAPI.rejectWithValue('Не удалось загрузить статьи')
        }
    }
)
export const init = createAsyncThunk(
    'articles/init',
    (_, thunkAPI) => {
        try {
            const mode = localStorage.getItem(LOCAL_STORAGE_ARTICLE_VIEW_MODE)
            if (mode) {
                const currentMode = JSON.parse(mode)
                thunkAPI.dispatch(articlesPageActions.setArticleViewMode(currentMode))
                thunkAPI.dispatch(articlesPageActions.setArticlesLimit())
                thunkAPI.dispatch(articlesPageActions.setInitialized())
            }
        } catch (e) {
            return thunkAPI.rejectWithValue('Не удалось загрузить статьи')
        }
    }
)
