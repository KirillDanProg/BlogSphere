import React, { type FC, type InputHTMLAttributes, memo, useEffect, useRef } from 'react'
import s from './Input.module.scss'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'

type HTMLInputProps =
    Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>
    & { label?: string }

interface InputProps extends HTMLInputProps {
    className?: string
    value?: string | number
    onChange?: (value: string) => void
    readonly?: boolean
    onFileInputChange?: (value: File) => void
}

const Input: FC<InputProps> = (props) => {
    const {
        value,
        onChange,
        onFileInputChange,
        type = 'text',
        label = '',
        autoFocus,
        readonly,
        className,
        ...otherProps
    } = props

    const { t } = useTranslation()

    const ref = useRef<HTMLInputElement>(null)

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === 'avatar' && e.target.files) {
            onFileInputChange?.(e.target.files[0])
        }
        onChange?.(e.target.value)
    }

    useEffect(() => {
        if (autoFocus) {
            ref.current?.focus()
        }
    }, [autoFocus])

    const mods = {
        [s.readonly]: readonly
    }

    return (
        <div className={ classNames(s.inputBox, mods, [className]) }>
            <input
                ref={ ref }
                autoFocus={ autoFocus }
                required
                value={ value }
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
