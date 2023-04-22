import { type ChangeEvent } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import s from './Select.module.scss'

export interface SelectOptionType<T extends string> {
    value: T
    content: string
}

export interface SelectProps<T extends string> {
    className?: string
    options: Array<SelectOptionType<T>>
    label?: string
    value?: T
    onChange?: (value: T) => void
}

export const Select = <T extends string>(props: SelectProps<T>) => {
    const {
        className,
        label,
        options,
        value,
        onChange
    } = props

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value as T)
    }

    const optionsList = options.map(({
        value,
        content
    }) => {
        return (
            <option
                key={ value }
                value={ value }
                className={ s.option }
            >
                {content}
            </option>
        )
    })

    return (
        <div className={ classNames(s.wrapper, {}, [className]) }>
            {
                label &&
                <span className={ s.label }>{label}</span>
            }
            <select
                className={ s.select }
                value={ value }
                onChange={ onChangeHandler }
            >
                {optionsList}
            </select>
        </div>
    )
}
