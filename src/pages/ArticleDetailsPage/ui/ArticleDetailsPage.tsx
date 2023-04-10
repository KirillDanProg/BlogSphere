import { type FC, memo, useCallback, useEffect } from 'react'
import s from './ArticleDetailsPage.module.scss'
import { ArticleDetails } from 'entities/Arcticle'
import { useNavigate, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { CommentsList } from 'entities/Comment'
import { useSelector } from 'react-redux'
import {
    articleDetailsCommentsReducer,
    getArticleComments
} from '../model/slice/articleDetailsCommentsSlice'
import { fetchArticleComments } from '../model/services/fetchArticleComments/fetchArticleComments'
import {
    addNewCommentForArticle
} from '../model/services/addNewCommentForArticle/addNewCommentForArticle'
import { AddNewCommentForm } from 'features/addNewComment'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { classNames } from 'shared/lib/classNames/classNames'
import { Text } from 'shared/ui/Text/Text'
import {
    DynamicModuleLoader,
    type ReducersListType
} from 'shared/lib/components/DynamicModuleLoader'
import { Button } from 'shared/ui'
import { RoutePath } from 'shared/config/routes/routes'
import BackToIcon from 'shared/assets/icons/arrow-left.svg'
import { Icon } from 'shared/ui/Icon/Icon'
import { Page } from 'widgets/Page/ui/Page'

interface ArticleDetailsPageProps {
    className?: string
}

const asyncReducers: ReducersListType = {
    articleDetailsComments: articleDetailsCommentsReducer
}
const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
    const { t } = useTranslation('articleDetails')
    const { className } = props
    const { id = '1' } = useParams<{ id: string }>()
    const comments = useSelector(getArticleComments.selectAll)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const onSendArticleComment = useCallback((text) => {
        void dispatch(addNewCommentForArticle(text))
    }, [dispatch])

    const backToArticleListHandler = () => {
        navigate(RoutePath.articles)
    }
    useEffect(() => {
        void dispatch(fetchArticleComments(id))
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
                <Button
                    className={ s.backToBtn }
                    onClick={ backToArticleListHandler }
                >
                    <Icon Svg={ BackToIcon }/>
                </Button>
                <ArticleDetails
                    articleId={ id }
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
