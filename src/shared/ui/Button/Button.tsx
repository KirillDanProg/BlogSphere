import { type ButtonHTMLAttributes, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import s from './Button.module.scss'

export enum ButtonVariant {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
    OUTLINED = 'outlined'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    variant?: ButtonVariant
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className = '',
        variant = ButtonVariant.PRIMARY,
        children,
        ...otherProps
    } = props

    return (
        <button
            data-testid="button"
            className={ classNames(s.Button, {}, [className, s[variant]]) }
            { ...otherProps }
        >
            {children}
        </button>
    )
}
