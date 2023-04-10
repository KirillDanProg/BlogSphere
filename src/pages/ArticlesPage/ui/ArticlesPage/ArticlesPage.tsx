import { useSelector } from 'react-redux'
import { type FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect'
import { Page } from 'widgets/Page'
import {
    DynamicModuleLoader,
    type ReducersListType
} from 'shared/lib/components/DynamicModuleLoader'
import { ArticlesList } from 'entities/Arcticle'
import { articlesPageReducer, getArticles } from '../../model/slice/articlesPageSlice'
import {
    getArticlesPageError,
    getArticlesPageStatus,
    getArticlesPageViewMode
} from '../../model/selectors'
import s from './ArticlesPage.module.scss'
import {
    fetchNextArticlesPage
} from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage'
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage'
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters'
import { useSearchParams } from 'react-router-dom'

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
    const error = useSelector(getArticlesPageError)

    const [searchParams] = useSearchParams()

    const onFetchNextPage = () => {
        void dispatch(fetchNextArticlesPage())
    }

    useInitialEffect(() => {
        void dispatch(initArticlesPage({ searchParams }))
    })

    if (error) {
        // return <Text variant={ TextVariant.ERROR } text={ 'error' }/>
    }

    return (
        <DynamicModuleLoader reducers={ asyncReducers } removeAfterUnmount={ false }>
            <Page
                onScrollEnd={ onFetchNextPage }
                className={ classNames(s.ArticlesPage) }
            >
                <ArticlesPageFilters view={ currentArticlesViewMode }/>
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
