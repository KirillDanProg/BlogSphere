import { type ButtonHTMLAttributes, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import s from './Button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    variant?: Variants
    size?: Sizes
    square?: boolean
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className = '',
        variant = ButtonVariant.DEFAULT,
        children,
        square,
        size = ButtonSize.M,
        ...otherProps
    } = props

    const additional = [
        className,
        s[variant],
        s[size]
    ]

    const mods = {
        [s.square]: square
    }

    return (
        <button
            data-testid="button"
            className={ classNames(s.Button, mods, additional) }
            { ...otherProps }
        >
            {children}
        </button>
    )
}

export const ButtonVariant = {
    PRIMARY: 'primary',
    DEFAULT: 'default',
    INVERTED: 'inverted',
    OUTLINED: 'outlined',
    NO_HOVER: 'noHover'
} as const

export const ButtonSize = {
    M: 'size_m',
    L: 'size_l',
    XL: 'size_xl'
} as const

type Variants = 'primary' | 'default' | 'inverted' | 'outlined' | 'noHover'
type Sizes = 'size_m' | 'size_l' | 'size_xl'
