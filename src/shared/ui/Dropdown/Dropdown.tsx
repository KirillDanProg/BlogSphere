import { type FC, Fragment, type ReactNode } from 'react'
import { Menu } from '@headlessui/react'
import { classNames } from 'shared/lib/classNames/classNames'
import s from './Dropdown.module.scss'
import { Button, ButtonVariant } from '../Button/Button'
import { type DropdownDirectionType } from 'shared/types/ui'
import { AppLink } from '../AppLink/AppLink'

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

    const mapDirectionClass: Record<DropdownDirectionType, string> = {
        'top left': s.topLeft,
        'top right': s.topRight,
        'bottom right': s.bottomRight,
        'bottom left': s.bottomLeft
    }
    return (
        <Menu
            as="div"
            className={ classNames(s.Dropdown, {}, [className]) }>
            <Menu.Button className={ classNames(s.btn) }>
                {trigger}
            </Menu.Button>
            <Menu.Items
                className={ classNames(s.menu, {}, [mapDirectionClass[direction]]) }
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
