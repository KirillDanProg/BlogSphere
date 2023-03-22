import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import s from './CommentItem.module.scss'
import { type CommentType } from 'entities/Comment'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Text, TextSize } from 'shared/ui/Text/Text'
import { type StatusType } from 'app/types/global'
import { Skeleton } from 'shared/ui/Skeleton/ui/Skeleton'

interface CommentItemProps {
    className?: string
    comment: CommentType
    status?: StatusType
}

export const CommentItem: FC<CommentItemProps> = (props) => {
    const {
        comment,
        className,
        status
    } = props
    if (status === 'loading') {
        return (
            <div className={ classNames(s.CommentItem, {}, [className]) }>
                <div className={ s.header }>
                    <Skeleton width={ 35 } height={ 35 } borderRadius={ '50%' }/>
                    <Skeleton width={ 100 } height={ 16 }/>
                </div>
                <Skeleton width={ '100%' } height={ 40 }/>
            </div>
        )
    }
    return (
        <div className={ classNames(s.CommentItem, {}, [className]) }>
            <div className={ s.header }>
                <Avatar
                    src={ comment.avatar }
                    size={ 35 }
                />
                <Text
                    size={ TextSize.L }
                    text={ comment.userName }
                />
            </div>
            <Text
                text={ comment.text }
            />
        </div>
    )
}
