import React, { type FC, type InputHTMLAttributes, memo, useEffect, useRef } from 'react'
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

const Input: FC<InputProps> = (props) => {
    const {
        value,
        onChange,
        className = '',
        type = 'text',
        label = '',
        autoFocus,
        ...otherProps
    } = props

    const { t } = useTranslation()

    const ref = useRef<HTMLInputElement>(null)

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }

    useEffect(() => {
        if (autoFocus) {
            ref.current?.focus()
        }
    }, [autoFocus])

    return (
        <div className={ s.inputBox }>
            <input
                ref={ ref }
                autoFocus
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

export default memo(Input)
