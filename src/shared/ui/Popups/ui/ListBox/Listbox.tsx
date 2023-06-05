import { Fragment, type ReactNode } from 'react'
import { Listbox as HListbox } from '@headlessui/react'
import s from './ListBox.module.scss'
import popupStyles from '../../styles/popup.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonVariant } from '../../../Button/Button'
import { type DropdownDirectionType } from 'shared/types/ui'
import { mapDirectionClass } from '../../styles/consts'

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

export const ListBox = <T extends string>(props: ListBoxProps<T>) => {
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
    const classes = [
        mapDirectionClass[direction]
    ]
    return (
        <HListbox
            as="div"
            className={ classNames(s.ListBox, {}, [className, popupStyles.popup]) }
            value={ value }
            onChange={ onChange }
        >
            <HListbox.Button className={ popupStyles.trigger }>
                <Button
                    variant={ ButtonVariant.INVERTED_OUTLINED }
                >
                    {value ?? defaultValue}
                </Button>
            </HListbox.Button>
            <HListbox.Options className={ classNames(s.options, {}, classes) }>
                {items?.map((item) => (
                    <HListbox.Option
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
                    </HListbox.Option>
                ))}
            </HListbox.Options>
        </HListbox>
    )
}
