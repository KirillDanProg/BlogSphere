import { type FC } from 'react'
import { ArticlesList, type ArticleView } from 'entities/Arcticle'
import { getArticles } from '../../model/slice/articlesPageSlice'
import { getArticlesPageStatus, getArticlesPageViewMode } from '../../model/selectors'
import {
    fetchNextArticlesPage
} from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect'
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useSearchParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

interface ArticleInfinitScrollProps {
    className?: string
    view?: ArticleView
}

export const ArticleInfinitScroll: FC<ArticleInfinitScrollProps> = (props) => {
    const dispatch = useAppDispatch()
    const [searchParams] = useSearchParams()
    const articles = useSelector(getArticles.selectAll)
    const status = useSelector(getArticlesPageStatus)
    const currentArticlesViewMode = useSelector(getArticlesPageViewMode)

    const onFetchNextPage = () => {
        void dispatch(fetchNextArticlesPage())
    }

    useInitialEffect(() => {
        void dispatch(initArticlesPage({ searchParams }))
    })
    return (
        <ArticlesList
            onScrollEnd={ onFetchNextPage }
            status={ status }
            view={ currentArticlesViewMode }
            articles={ articles || [] }
        />
    )
}
