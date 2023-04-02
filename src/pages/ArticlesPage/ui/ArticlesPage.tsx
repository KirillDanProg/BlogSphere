import { type FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { ArticlesList } from 'entities/Arcticle/ui/ArticleList/ArticlesList'
import { type ArticleView } from 'entities/Arcticle'

import {
    DynamicModuleLoader,
    type ReducersListType
} from 'shared/lib/components/DynamicModuleLoader'
import {
    ArticlesViewModeSwitcher
} from 'features/switchArticlesViewMode/ui/ArticlesViewSwitcher/ArticlesViewModeSwitcher'
import { useSelector } from 'react-redux'
import { getViewModeFromLS, saveViewModeToLS } from '../model/services/saveViewModeToLS'
import { articlesPageReducer, getArticles } from '../model/slice/articlesPageSlice'
import {
    getArticlesPageNum,
    getArticlesPageStatus,
    getArticlesPageViewMode
} from '../model/selectors'
import { fetchArticles } from '../model/services/fetchArticles'
import s from './ArticlesPage.module.scss'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect'
import { Page } from 'shared/ui/Page/Page'
import { fetchNextArticlesPage } from 'pages/ArticlesPage/model/services/fetchNextArticlesPage'

interface ArticlesPageProps {
    className?: string
}

const asyncReducers: ReducersListType = {
    articlesPage: articlesPageReducer
}

const ArticlesPage: FC<ArticlesPageProps> = (props) => {
    const dispatch = useAppDispatch()
    const currentArticlesViewMode = useSelector(getArticlesPageViewMode)
    const articles = useSelector(getArticles.selectAll)
    const status = useSelector(getArticlesPageStatus)
    const page = useSelector(getArticlesPageNum)
    const onChangeViewMode = (mode: ArticleView) => {
        void dispatch(saveViewModeToLS(mode))
    }
    const onFetchNextPage = () => {
        void dispatch(fetchNextArticlesPage())
    }

    useInitialEffect(() => {
        void dispatch(getViewModeFromLS())
        void dispatch(fetchArticles({
            page
        }))
    })

    return (
        <DynamicModuleLoader reducers={ asyncReducers }>
            <Page
                onScrollEnd={ onFetchNextPage }
                className={ classNames(s.ArticlesPage) }
            >
                <ArticlesViewModeSwitcher
                    view={ currentArticlesViewMode }
                    onChangeViewMode={ onChangeViewMode }
                />
                <ArticlesList
                    status={ status }
                    view={ currentArticlesViewMode }
                    articles={ articles || [] }
                />
            </Page>
        </DynamicModuleLoader>
    )
}

export default memo(ArticlesPage)
