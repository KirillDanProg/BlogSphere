import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Link, type LinkProps } from 'react-router-dom'
import s from './AppLink.module.scss'

export enum AppLinkVariant {
    PRIMARY = 'primary',
    DEFAULT = 'default',
    INVERTED = 'inverted',
    OUTLINED = 'outlined'
}

interface AppLinkProps extends LinkProps {
    className?: string
    variant?: AppLinkVariant
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        className = '',
        to,
        variant = AppLinkVariant.DEFAULT,
        children,
        ...otherProps
    } = props

    return (
        <Link to={ to }
            className={ classNames(s.AppLink, {}, [className, s[variant]]) }
            { ...otherProps }
        >
            {children}
        </Link>
    )
}
