import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import s from './NotificationsListPopover.module.scss'
import { Button } from 'shared/ui'
import { ButtonVariant } from 'shared/ui/Button/Button'
import { Icon } from 'shared/ui/Icon/Icon'
import Notification from 'shared/assets/icons/navbar-icons/bell-solid.svg'
import { NotificationList } from 'entities/Notification'
import { Popover } from 'shared/ui/Popups'

interface NotificationsListPopoverProps {
    className?: string
}

export const NotificationsListPopover: FC<NotificationsListPopoverProps> = (props) => {
    return (
        <Popover
            direction="bottom right"
            trigger={
                <Button variant={ ButtonVariant.DEFAULT }>
                    <Icon
                        inverted
                        className={ s.notificationsIcon }
                        Svg={ Notification }/>
                </Button> }
        >
            <NotificationList className={ classNames(s.notifications) }/>
        </Popover>
    )
}
