import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import s from './CommentList.module.scss'
import { type StatusType } from 'app/types/global'
import { Text } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { CommentItem } from '../CommentItem/CommentItem'
import { type CommentType } from '../../model/types/comment'

interface CommentListProps {
    className?: string
    comments?: CommentType[]
    status?: StatusType
}

export const CommentsList: FC<CommentListProps> = (props) => {
    const {
        className,
        comments,
        status
    } = props

    const { t } = useTranslation('articleDetails')

    const mappedComments = comments?.map(comment => {
        return (
            <CommentItem
                key={ comment._id }
                comment={ comment }
                status={ status }
            />
        )
    })
    return (
        <div className={ classNames(s.CommentList, {}, [className]) }>
            {
                comments?.length
                    ? mappedComments
                    : <Text text={ t('no comments') }/>
            }
        </div>
    )
}
