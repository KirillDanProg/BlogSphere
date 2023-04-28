import { type FC, useCallback, useEffect } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Text } from 'shared/ui/Text/Text'
import { AddNewCommentForm } from 'features/addNewComment'
import { CommentsList } from 'entities/Comment'
import {
    addNewCommentForArticle
} from '../../model/services/addNewCommentForArticle/addNewCommentForArticle'
import { getArticleComments } from '../../model/slice/articleDetailsCommentsSlice'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useSelector } from 'react-redux'
import {
    fetchArticleComments
} from '../../model/services/fetchArticleComments/fetchArticleComments'

interface ArticleDetailsCommentsProps {
    className?: string
    id: string
}

export const ArticleDetailsComments: FC<ArticleDetailsCommentsProps> = (props) => {
    const { t } = useTranslation('articleDetails')
    const {
        className,
        id
    } = props

    const comments = useSelector(getArticleComments.selectAll)
    const dispatch = useAppDispatch()

    const onSendArticleComment = useCallback((text: string) => {
        void dispatch(addNewCommentForArticle(text))
    }, [dispatch])

    useEffect(() => {
        void dispatch(fetchArticleComments(id))
    }, [id, dispatch])
    return (
        <div className={ classNames('', {}, [className]) }>
            <Text
                title={ t('comments') }/>
            <AddNewCommentForm
                onSendComment={ onSendArticleComment }
            />
            <CommentsList
                comments={ comments }/>
        </div>
    )
}
