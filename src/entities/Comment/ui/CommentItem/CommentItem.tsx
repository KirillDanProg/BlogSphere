import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import s from './CommentItem.module.scss'
import { type CommentType } from '../../model/types/comment'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Text, TextSize } from 'shared/ui/Text/Text'
import { type StatusType } from 'app/types/global'
import { Skeleton } from 'shared/ui/Skeleton/ui/Skeleton'
import { AppLink } from 'shared/ui'
import { RoutePath } from 'shared/config/routes/routes'
import { AppLinkVariant } from 'shared/ui/AppLink/AppLink'
import { Card } from 'shared/ui/Card/Card'
import { convertDate } from 'shared/lib/helpers/convertDate'

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

    const convertedDate = convertDate(comment?.createdAt)

    const mods = {
        [s.loading]: status === 'loading'
    }

    if (status === 'loading') {
        return (
            <div className={ classNames(s.CommentItem, mods, [className]) }>
                <div className={ s.header }>
                    <div className={ s.link }>
                        <Skeleton width={ 35 } height={ 35 } borderRadius={ '50%' }/>
                        <Skeleton width={ 100 } height={ 16 }/>
                    </div>
                </div>
                <Skeleton width={ '100%' } height={ 40 }/>
            </div>
        )
    }

    return (
        <Card
            className={ classNames(s.CommentItem, mods, [className]) }>
            <div className={ s.header }>
                <AppLink
                    className={ s.link }
                    variant={ AppLinkVariant.WITHOUT_STYLE }
                    to={ RoutePath.profile + comment.userId }
                >
                    <Avatar
                        src={ comment.avatar }
                        size={ 30 }
                    />
                    <Text
                        size={ TextSize.M }
                        text={ comment.userName }
                    />
                </AppLink>
                <div className={ s.addedDate }>
                    {convertedDate}
                </div>
            </div>
            <Text
                text={ comment.text }
            />
        </Card>
    )
}
