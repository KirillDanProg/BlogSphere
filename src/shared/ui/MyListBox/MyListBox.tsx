import { Fragment, type ReactNode } from 'react'
import { Listbox } from '@headlessui/react'
import s from './MyListBox.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonVariant } from '../Button/Button'
import { type DropdownDirectionType } from 'shared/types/ui'

interface ListBoxProps<T> {
    className?: string
    items?: ListBoxItemType[]
    defaultValue?: T
    value?: T
    onChange?: (value: T) => void
    direction?: DropdownDirectionType
}

interface ListBoxItemType {
    value: string
    content: ReactNode
    disabled?: boolean
}

export const MyListBox = <T extends string>(props: ListBoxProps<T>) => {
    const {
        items,
        className,
        defaultValue,
        value,
        onChange,
        direction = 'bottom left'
    } = props

    const getItemMods = (item: ListBoxItemType, active: boolean) => {
        return {
            [s.active]: active,
            [s.disabled]: item.disabled
        }
    }

    const mapDirectionClass: Record<DropdownDirectionType, string> = {
        'top left': s.topLeft,
        'top right': s.topRight,
        'bottom right': s.bottomRight,
        'bottom left': s.bottomLeft
    }
    const classes = [
        mapDirectionClass[direction]
    ]
    return (
        <Listbox
            as="div"
            className={ classNames(s.ListBox, {}, [className]) }
            value={ value }
            onChange={ onChange }
        >
            <Listbox.Button className={ s.trigger }>
                <Button
                    variant={ ButtonVariant.INVERTED_OUTLINED }
                >
                    {value ?? defaultValue}
                </Button>
            </Listbox.Button>
            <Listbox.Options className={ classNames(s.options, {}, classes) }>
                {items?.map((item) => (
                    <Listbox.Option
                        key={ item.value }
                        value={ item.value }
                        disabled={ item.disabled }
                        as={ Fragment }
                    >
                        {({
                            active,
                            selected
                        }) => (
                            <li
                                className={ classNames(s.item, getItemMods(item, active)) }
                            >
                                {selected && '*'}
                                {item.content}
                            </li>
                        )}
                    </Listbox.Option>
                ))}
            </Listbox.Options>
        </Listbox>
    )
}
