import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import s from './NotificationItem.module.scss'
import { type INotification } from '../../model/types'
import { Card } from 'shared/ui/Card/Card'
import { Text } from 'shared/ui/Text/Text'
import { AppLink } from 'shared/ui'

interface NotificationItemProps {
    className?: string
    item: INotification
}

export const NotificationItem: FC<NotificationItemProps> = (props) => {
    const {
        className,
        item
    } = props

    const content = (
        <Card>
            <Text title={ item.title } text={ item.description }/>
        </Card>
    )

    if (item.href) {
        return (
            <AppLink target="_blank" to={ item.href }>
                <Card>
                    <Text title={ item.title } text={ item.description }/>
                </Card>
            </AppLink>
        )
    }

    return (
        <div className={ classNames(s.NotificationItem, {}, [className]) }>
            {content}
        </div>
    )
}
