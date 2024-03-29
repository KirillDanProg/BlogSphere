import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ArticleType } from 'entities/Arcticle'
import { type ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema'
import {
    getArticlesPageLimit,
    getArticlesPageNum,
    getOrder,
    getSearch,
    getSort
} from '../../selectors'

interface FetchArticlesProps {
    replace?: boolean
    params?: URLSearchParams
    setParams?: (params: Record<string, string>) => void
}

export const fetchArticles = createAsyncThunk<ArticleType[], FetchArticlesProps, ThunkConfig<string>>(
    'articles/fetchArticles',
    async (args, thunkAPI) => {
        const {
            getState,
            extra,
            rejectWithValue
        } = thunkAPI

        const sort = getSort(getState()) || args.params?.get('sort')
        const order = getOrder(getState()) || args.params?.get('order')
        const search = args.params?.get('search') || getSearch(getState())
        const limit = getArticlesPageLimit(getState())
        const page = getArticlesPageNum(getState())

        args.setParams?.({
            order,
            sort,
            search
        })

        try {
            const response = await extra.api.get<ArticleType[]>('/posts', {
                params: {
                    page,
                    limit,
                    sort,
                    order,
                    search
                }
            })
            return response.data
        } catch (e) {
            return rejectWithValue('Не удалось загрузить статьи')
        }
    }
)
