import { type FC, memo, useEffect } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import s from './ArticleDetailsPage.module.scss'
import { ArticleDetails } from 'entities/Arcticle'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Text } from 'shared/ui/Text/Text'
import { CommentsList } from 'entities/Comment'
import {
    DynamicModuleLoader,
    type ReducersListType
} from 'shared/lib/components/DynamicModuleLoader'
import {
    articleDetailsCommentsReducer,
    getArticleComments
} from '../model/slice/articleDetailsCommentsSlice'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { fetchArticleComments } from '../model/services/fetchArticleComments'

interface ArticleDetailsPageProps {
    className?: string
}

const asyncReducers: ReducersListType = {
    articleDetailsComments: articleDetailsCommentsReducer
}
const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
    const { t } = useTranslation('articleDetails')
    const { className } = props
    const { id } = useParams<{ id: string }>()
    const comments = useSelector(getArticleComments.selectAll)
    const dispatch = useAppDispatch()

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
            <div className={ classNames(s.ArticleDetailsPage, {}, [className]) }>
                <ArticleDetails
                    articleId={ id }
                />
                <Text title={ t('comments') }/>
                <CommentsList
                    comments={ comments }/>
            </div>
        </DynamicModuleLoader>
    )
}
export default memo(ArticleDetailsPage)
