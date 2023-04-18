import { Fragment, type ReactNode } from 'react'
import { Listbox } from '@headlessui/react'
import s from './MyListBox.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonVariant } from '../Button/Button'

interface ListBoxProps<T> {
    className?: string
    items?: ListBoxItemType[]
    defaultValue?: T
    value?: T
    onChange?: (value: T) => void
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
        onChange
    } = props

    const getItemMods = (item: ListBoxItemType, active: boolean) => {
        return {
            [s.active]: active,
            [s.disabled]: item.disabled
        }
    }

    return (
        <Listbox
            as="div"
            className={ classNames(s.ListBox, {}, [className]) }
            value={ value }
            onChange={ onChange }
        >
            <Listbox.Button
                className={ s.trigger }
            >
                <Button variant={ ButtonVariant.INVERTED_OUTLINED }>
                    {value ?? defaultValue}
                </Button>
            </Listbox.Button>
            <Listbox.Options className={ s.options }>
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
