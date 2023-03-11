import React, { type FC, type InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react'
import s from './Input.module.scss'
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
        type = 'text',
        label = '',
        autoFocus,
        ...otherProps
    } = props

    const { t } = useTranslation()

    const [inputValue, setValue] = useState(value ?? '')

    const ref = useRef<HTMLInputElement>(null)

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        onChange?.(e.target.value)
    }
    useEffect(() => {
        if (value) {
            setValue(value)
        }
    }, [value])
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
                value={ inputValue }
                onChange={ onChangeHandler }
                type={ type }
                className={ s.input }
                { ...otherProps }
            />
            <label>{t(label)}</label>
        </div>

    )
}

export default memo(Input)
