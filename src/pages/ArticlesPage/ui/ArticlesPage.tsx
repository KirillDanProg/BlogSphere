import { useSelector } from 'react-redux'
import { type FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect'
import { Page } from 'shared/ui/Page/Page'
import {
    DynamicModuleLoader,
    type ReducersListType
} from 'shared/lib/components/DynamicModuleLoader'
import { ArticlesList } from 'entities/Arcticle/ui/ArticleList/ArticlesList'
import { type ArticleView } from 'entities/Arcticle'
import {
    ArticlesViewModeSwitcher
} from 'features/switchArticlesViewMode/ui/ArticlesViewSwitcher/ArticlesViewModeSwitcher'
import { saveViewModeToLS } from '../model/services/saveViewModeToLS/saveViewModeToLS'
import { articlesPageReducer, getArticles } from '../model/slice/articlesPageSlice'
import { getArticlesPageStatus, getArticlesPageViewMode } from '../model/selectors'
import s from './ArticlesPage.module.scss'
import {
    fetchNextArticlesPage
} from '../model/services/fetchNextArticlesPage/fetchNextArticlesPage'
import { initArticlesPage } from '../model/services/initArticlesPage/initArticlesPage'

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
    const onChangeViewMode = (mode: ArticleView) => {
        void dispatch(saveViewModeToLS(mode))
    }
    const onFetchNextPage = () => {
        void dispatch(fetchNextArticlesPage())
    }

    useInitialEffect(() => {
        void dispatch(initArticlesPage())
    })

    return (
        <DynamicModuleLoader reducers={ asyncReducers } removeAfterUnmount={ false }>
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
