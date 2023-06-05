import { type FC, Fragment, type ReactNode } from 'react'
import { Menu } from '@headlessui/react'
import { classNames } from 'shared/lib/classNames/classNames'
import s from './Dropdown.module.scss'
import popupStyles from '../../styles/popup.module.scss'
import { Button, ButtonVariant } from '../../../Button/Button'
import { type DropdownDirectionType } from 'shared/types/ui'
import { AppLink } from '../../../AppLink/AppLink'
import { mapDirectionClass } from '../../styles/consts'

export interface DropdownItemType {
    onClick?: () => void
    disabled?: boolean
    content: ReactNode
    href?: string
}

interface DropdownProps {
    className?: string
    trigger: ReactNode
    direction?: DropdownDirectionType
    items: DropdownItemType[]
}

export const Dropdown: FC<DropdownProps> = (props) => {
    const {
        className,
        trigger,
        items,
        direction = 'bottom right'
    } = props

    const classes = [
        mapDirectionClass[direction]
    ]

    return (
        <Menu
            as="div"
            className={ classNames(s.Dropdown, {}, [className, popupStyles.popup]) }>
            <Menu.Button className={ classNames(s.trigger, {}, [popupStyles.trigger]) }>
                {trigger}
            </Menu.Button>
            <Menu.Items
                className={ classNames(s.menu, {}, classes) }
            >
                {
                    items.map((item, index) => {
                        const content = ({ active }: { active: boolean }) => (
                            <Button
                                variant={ ButtonVariant.NO_HOVER }
                                className={ classNames(s.item, { [s.active]: active }, []) }
                                type="button"
                                disabled={ item.disabled }
                                onClick={ item.onClick }
                            >
                                {item.content}
                            </Button>
                        )
                        if (item.href) {
                            return <Menu.Item
                                to={ item.href }
                                key={ index }
                                as={ AppLink }
                                disabled={ item.disabled }
                            >
                                {content}
                            </Menu.Item>
                        }
                        return <Menu.Item
                            key={ index }
                            as={ Fragment }
                            disabled={ item.disabled }
                        >
                            {content}
                        </Menu.Item>
                    })
                }
            </Menu.Items>
        </Menu>
    )
}
