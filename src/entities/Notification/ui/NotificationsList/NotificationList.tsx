import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useFetchNotificationQuery } from '../../api/notificationApi'
import { NotificationItem } from '../NotificationItem/NotificationItem'
import { VStack } from 'shared/ui/Stack/VStack/VStack'

interface NotificationListProps {
    className?: string
}

export const NotificationList: FC<NotificationListProps> = (props) => {
    const {
        data = []
        // isLoading
    } = useFetchNotificationQuery(null)

    const { className } = props

    return (
        <VStack gap="16" className={ classNames('', {}, [className]) }>
            {
                data.map(notification => {
                    return (
                        <NotificationItem
                            key={ notification.id }
                            item={ notification }/>
                    )
                })
            }
        </VStack>
    )
}
