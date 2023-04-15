import { type FC, memo, useCallback, useEffect } from 'react'
import s from './ArticleDetailsPage.module.scss'
import { ArticleDetails, ArticlesList, ArticleView } from 'entities/Arcticle'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { CommentsList } from 'entities/Comment'
import { useSelector } from 'react-redux'
import { getArticleComments } from '../../model/slice/articleDetailsCommentsSlice'
import {
    fetchArticleComments
} from '../../model/services/fetchArticleComments/fetchArticleComments'
import {
    addNewCommentForArticle
} from '../../model/services/addNewCommentForArticle/addNewCommentForArticle'
import { AddNewCommentForm } from 'features/addNewComment'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { classNames } from 'shared/lib/classNames/classNames'
import { Text } from 'shared/ui/Text/Text'
import {
    DynamicModuleLoader,
    type ReducersListType
} from 'shared/lib/components/DynamicModuleLoader'
import { Page } from 'widgets/Page/ui/Page'
import { getArticleRecommendations } from '../../model/slice/articleDetailsRecommendationsSlice'
import { getArticlesRecommendationsStatus } from '../../model/selectors/recommendations'
import {
    fetchArticleDetailsRecommendations
} from '../../model/services/fetchArticleDetailsRecommendations/fetchArticleDetailsRecommendations'
import { articleDetailsPageReducer } from '../../model/slice'
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader'

interface ArticleDetailsPageProps {
    className?: string
}

const asyncReducers: ReducersListType = {
    articleDetailsPage: articleDetailsPageReducer
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
    const { t } = useTranslation('articleDetails')
    const { className } = props
    const { id = '1' } = useParams<{ id: string }>()
    const comments = useSelector(getArticleComments.selectAll)
    const recommendations = useSelector(getArticleRecommendations.selectAll)
    const recommendationsStatus = useSelector(getArticlesRecommendationsStatus)
    const dispatch = useAppDispatch()

    const onSendArticleComment = useCallback((text) => {
        void dispatch(addNewCommentForArticle(text))
    }, [dispatch])

    useEffect(() => {
        void dispatch(fetchArticleComments(id))
        void dispatch(fetchArticleDetailsRecommendations())
    }, [id, dispatch])

    if (!id) {
        return (
            <div className={ classNames(s.ArticleDetailsPage, {}, [className]) }>
                {t('not-found')}
            </div>
        )
    }

    return (
        <DynamicModuleLoader
            removeAfterUnmount={ true }
            reducers={ asyncReducers }>
            <Page className={ classNames(s.ArticleDetailsPage, {}, [className]) }>
                <ArticleDetailsPageHeader/>
                <ArticleDetails
                    articleId={ id }
                />
                <Text
                    className={ s.title }
                    title={ t('recommendations') }
                />
                <ArticlesList
                    className={ s.recommendations }
                    view={ ArticleView.GRID }
                    articles={ recommendations }
                    status={ recommendationsStatus }
                    target={ '_blank' }
                />
                <Text
                    className={ s.title }
                    title={ t('comments') }/>
                <AddNewCommentForm
                    onSendComment={ onSendArticleComment }
                />
                <CommentsList
                    comments={ comments }/>
            </Page>
        </DynamicModuleLoader>
    )
}
export default memo(ArticleDetailsPage)
