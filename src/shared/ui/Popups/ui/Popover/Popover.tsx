import { Popover as HPopover } from '@headlessui/react'
import { classNames } from 'shared/lib/classNames/classNames'
import s from './Popover.module.scss'
import popupStyles from '../../styles/popup.module.scss'
import { type FC, type ReactNode } from 'react'
import { type DropdownDirectionType } from 'shared/types/ui'
import { mapDirectionClass } from '../../styles/consts'

interface PopoverProps {
    className?: string
    trigger: ReactNode
    direction?: DropdownDirectionType
    children: ReactNode
}

export const Popover: FC<PopoverProps> = (props) => {
    const {
        trigger,
        className,
        direction = 'top left',
        children
    } = props

    const classes = [
        mapDirectionClass[direction]
    ]

    return (
        <HPopover className={ classNames(s.Popover, {}, [className, popupStyles.popup]) }>
            <HPopover.Button className={ popupStyles.trigger }>
                {trigger}
            </HPopover.Button>

            <HPopover.Panel className={ classNames(s.panel, {}, classes) }>
                {children}
            </HPopover.Panel>
        </HPopover>
    )
}
