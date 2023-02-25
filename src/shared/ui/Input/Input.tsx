import React, { type FC, type InputHTMLAttributes } from 'react'
import s from './Input.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'

type HTMLInputProps =
    Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>
    & { label?: string }

interface InputProps extends HTMLInputProps {
    className?: string
    value?: string
    onChange?: (value: string) => void
}

export const Input: FC<InputProps> = (props) => {
    const {
        value,
        onChange,
        className = '',
        type = 'text',
        label = '',
        ...otherProps
    } = props

    const { t } = useTranslation()
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }

    return (
        <div className={ s.inputBox }>
            <input
                required
                value={ value }
                onChange={ onChangeHandler }
                type={ type }
                className={ classNames(s.input, {}, [className]) }
                { ...otherProps }
            />
            <label>{t(`${label}`)}</label>
        </div>

    )
}
