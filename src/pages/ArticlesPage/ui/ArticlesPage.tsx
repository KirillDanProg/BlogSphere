import { type FC, memo, useEffect } from 'react'
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
import { getArticlesPageViewMode } from '../model/selectors'
import { fetchArticles } from '../model/services/fetchArticles'
import s from './ArticlesPage.module.scss'

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

    const onChangeViewMode = (mode: ArticleView) => {
        void dispatch(saveViewModeToLS(mode))
    }

    useEffect(() => {
        void dispatch(fetchArticles())
        void dispatch(getViewModeFromLS())
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={ asyncReducers }>
            <div className={ classNames(s.ArticlesPage) }>
                <ArticlesViewModeSwitcher
                    view={ currentArticlesViewMode }
                    onChangeViewMode={ onChangeViewMode }
                />
                <ArticlesList
                    view={ currentArticlesViewMode }
                    articles={ articles || [] }
                />
            </div>
        </DynamicModuleLoader>
    )
}

export default memo(ArticlesPage)
