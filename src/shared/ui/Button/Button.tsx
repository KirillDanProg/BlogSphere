import { type ButtonHTMLAttributes, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import s from './Button.module.scss'

export enum ButtonTheme {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
  OUTLINED = 'outlined'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    theme,
    children,
    ...otherProps
  } = props

  return (
        <button
              className={classNames(s.Button, {}, [className, s[theme]])}
              {...otherProps}
        >
            {children}
        </button>
  )
}
