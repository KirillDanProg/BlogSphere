import { useSelector } from 'react-redux'
import { type FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Page } from 'widgets/Page'
import {
    DynamicModuleLoader,
    type ReducersListType
} from 'shared/lib/components/DynamicModuleLoader'
import { articlesPageReducer } from '../../model/slice/articlesPageSlice'
import { getArticlesPageError, getArticlesPageViewMode } from '../../model/selectors'
import s from './ArticlesPage.module.scss'
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters'
import { ArticleInfinitScroll } from '../ArticleInfinitScroll/ArticleInfinitScroll'

interface ArticlesPageProps {
    className?: string
}

const asyncReducers: ReducersListType = {
    articlesPage: articlesPageReducer
}

const ArticlesPage: FC<ArticlesPageProps> = (props) => {
    const currentArticlesViewMode = useSelector(getArticlesPageViewMode)
    const error = useSelector(getArticlesPageError)

    if (error) {
        // return <Text variant={ TextVariant.ERROR } text={ 'error' }/>
    }

    return (
        <DynamicModuleLoader reducers={ asyncReducers } removeAfterUnmount={ false }>
            <Page
                className={ classNames(s.ArticlesPage) }
            >
                <ArticlesPageFilters view={ currentArticlesViewMode }/>
                <ArticleInfinitScroll/>
            </Page>
        </DynamicModuleLoader>
    )
}

export default memo(ArticlesPage)
